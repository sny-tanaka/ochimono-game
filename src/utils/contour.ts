// PNG 等のラスタ画像から「不透明領域の輪郭」を多角形として抽出するユーティリティ。
// 用途: アイテムの当たり判定（Matter.Bodies.fromVertices）を見た目通りの輪郭に合わせる。
//
// 流れ:
// 1. ImageData の alpha チャンネルを閾値で 2 値化
// 2. 「不透明セル」と「透明セル」の境界エッジ（ピクセル間の 1 直線）を全列挙
// 3. エッジを start → end で連結して閉ループ（複数の連結成分は別々のループになる）
// 4. 最大ループを採用（メイン輪郭）。穴は無視する想定
// 5. Douglas-Peucker で頂点を間引く
//
// 出力する頂点は Matter（および poly-decomp）が期待する CCW を想定。
// y 軸が下向きの screen coords でエッジを左 → 右 → 下 → … と CW に並べると、
// 数学慣習の CCW に一致する。

export type Vec2 = { x: number; y: number };

const ALPHA_THRESHOLD = 32; // alpha がこれ以上なら不透明扱い。アンチエイリアス端を拾うため低めに。

// 2 つの座標を一意な数値キーに（Map のキー用）。
// width <= 4096 想定なので 14bit シフト ((1<<14) = 16384) で OK。
const KEY_SHIFT = 14;
const keyOf = (x: number, y: number): number => x * (1 << KEY_SHIFT) + y;

type Edge = { fromKey: number; toKey: number; from: Vec2; to: Vec2 };

const isSolid = (data: Uint8ClampedArray, idx: number): boolean => data[idx + 3] >= ALPHA_THRESHOLD;

// 1 辺ぶんの境界エッジを書き出す。
// 隣（dx, dy）が透明 / 範囲外なら、自分の側の辺を CCW に向けてリストへ追加する。
const collectEdges = (data: Uint8ClampedArray, w: number, h: number): Edge[] => {
  const edges: Edge[] = [];
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const idx = (y * w + x) * 4;
      if (!isSolid(data, idx)) continue;
      // 上が透明 / 端 → 上辺を左から右へ
      const upTransparent = y === 0 || !isSolid(data, ((y - 1) * w + x) * 4);
      if (upTransparent) {
        edges.push({
          fromKey: keyOf(x, y),
          toKey: keyOf(x + 1, y),
          from: { x, y },
          to: { x: x + 1, y },
        });
      }
      // 右が透明 / 端 → 右辺を上から下へ
      const rightTransparent = x === w - 1 || !isSolid(data, (y * w + (x + 1)) * 4);
      if (rightTransparent) {
        edges.push({
          fromKey: keyOf(x + 1, y),
          toKey: keyOf(x + 1, y + 1),
          from: { x: x + 1, y },
          to: { x: x + 1, y: y + 1 },
        });
      }
      // 下が透明 / 端 → 下辺を右から左へ
      const downTransparent = y === h - 1 || !isSolid(data, ((y + 1) * w + x) * 4);
      if (downTransparent) {
        edges.push({
          fromKey: keyOf(x + 1, y + 1),
          toKey: keyOf(x, y + 1),
          from: { x: x + 1, y: y + 1 },
          to: { x, y: y + 1 },
        });
      }
      // 左が透明 / 端 → 左辺を下から上へ
      const leftTransparent = x === 0 || !isSolid(data, (y * w + (x - 1)) * 4);
      if (leftTransparent) {
        edges.push({
          fromKey: keyOf(x, y + 1),
          toKey: keyOf(x, y),
          from: { x, y: y + 1 },
          to: { x, y },
        });
      }
    }
  }
  return edges;
};

// edges を from → to で繋いで閉ループの集合に変換する。
// 1 つの from キーに複数のエッジが対応しうる（隣接する透明セルが斜めに刺さっている場合）が、
// その場合は最初に見つかった方を採用する（多少不正確でも実用には問題ない想定）。
const chainLoops = (edges: Edge[]): Vec2[][] => {
  const fromMap = new Map<number, Edge[]>();
  for (const e of edges) {
    const list = fromMap.get(e.fromKey);
    if (list) list.push(e);
    else fromMap.set(e.fromKey, [e]);
  }
  const used = new Set<Edge>();
  const loops: Vec2[][] = [];
  for (const startEdge of edges) {
    if (used.has(startEdge)) continue;
    const loop: Vec2[] = [];
    let current: Edge | undefined = startEdge;
    while (current && !used.has(current)) {
      used.add(current);
      loop.push(current.from);
      const candidates = fromMap.get(current.toKey);
      current = candidates?.find((e) => !used.has(e));
    }
    if (loop.length >= 3) loops.push(loop);
  }
  return loops;
};

// Douglas-Peucker：許容誤差 epsilon (px) を超えない範囲で頂点を間引く。
// 閉ループ向けに配列の最後に最初の点を追加 → 通常 DP → 最初の重複を取り除く。
const perpDistance = (p: Vec2, a: Vec2, b: Vec2): number => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const norm = Math.hypot(dx, dy);
  if (norm === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  return Math.abs(dy * p.x - dx * p.y + b.x * a.y - b.y * a.x) / norm;
};

const douglasPeucker = (points: Vec2[], epsilon: number): Vec2[] => {
  if (points.length <= 2) return points.slice();
  let maxDist = 0;
  let index = 0;
  const last = points.length - 1;
  for (let i = 1; i < last; i += 1) {
    const d = perpDistance(points[i], points[0], points[last]);
    if (d > maxDist) {
      maxDist = d;
      index = i;
    }
  }
  if (maxDist > epsilon) {
    const left = douglasPeucker(points.slice(0, index + 1), epsilon);
    const right = douglasPeucker(points.slice(index), epsilon);
    return [...left, ...right.slice(1)];
  }
  return [points[0], points[last]];
};

const simplifyClosedLoop = (loop: Vec2[], epsilon: number): Vec2[] => {
  if (loop.length <= 3) return loop;
  // 最後に最初の点を足して open list として処理 → 末尾を捨てて閉ループに戻す
  const open = [...loop, loop[0]];
  const simplified = douglasPeucker(open, epsilon);
  simplified.pop();
  return simplified;
};

export type ExtractContourOptions = {
  // 頂点間引きの許容誤差。大きいほど頂点数が少なく荒い形に。
  // 256x256 PNG なら 1.5〜2.5 px くらいが「形をほぼ保ったまま 20〜40 頂点に減る」レンジ。
  simplifyEpsilon?: number;
};

// 抽出本体。最大ループ（外形）を返す。空（完全透明 / 完全不透明エッジ無し）なら null。
export const extractContour = (
  imageData: ImageData,
  options: ExtractContourOptions = {}
): Vec2[] | null => {
  const epsilon = options.simplifyEpsilon ?? 2;
  const edges = collectEdges(imageData.data, imageData.width, imageData.height);
  if (edges.length === 0) return null;
  const loops = chainLoops(edges);
  if (loops.length === 0) return null;
  // 最大ループを外形として採用（穴は無視）
  let best = loops[0];
  for (let i = 1; i < loops.length; i += 1) {
    if (loops[i].length > best.length) best = loops[i];
  }
  return simplifyClosedLoop(best, epsilon);
};
