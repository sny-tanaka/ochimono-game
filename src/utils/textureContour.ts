// テクスチャ URL から輪郭ベクトル（不透明領域の外形多角形）を計算してキャッシュする。
// 1 度計算すれば同じ URL は使い回せるので Map で memoize する。
// 計算結果は「PNG ピクセル座標 (0..256) を中心 (0,0) に再マップしたもの」。
// 各レベルの当たり判定 body 生成時に、半径に応じてスケールするだけで使える。

import { extractContour, type Vec2 } from '@/utils/contour';

// テクスチャごとの「中心 (0,0) を原点とした正規化前頂点」を格納。
// 単位はピクセル（後段で physics radius にスケール）。
type CachedContour = {
  // 輪郭頂点（CCW 想定、screen coords y-down）
  vertices: Vec2[];
  // 元 PNG の中心からのオフセット（centroid - (w/2, h/2)）。
  // これを補正することで、見た目（PNG 中央に絵を描いた前提）と body.position を一致させる。
  centroidOffset: Vec2;
  // 元 PNG の幅・高さ（スケール換算用）
  pngWidth: number;
  pngHeight: number;
};

const cache = new Map<string, CachedContour | null>(); // null = 抽出失敗（フォールバック用）
const inflight = new Map<string, Promise<CachedContour | null>>();

// 不透明領域の重心（単純平均）。
const computeCentroid = (vertices: Vec2[]): Vec2 => {
  if (vertices.length === 0) return { x: 0, y: 0 };
  let sx = 0;
  let sy = 0;
  for (const v of vertices) {
    sx += v.x;
    sy += v.y;
  }
  return { x: sx / vertices.length, y: sy / vertices.length };
};

// ImageBitmap / HTMLImageElement を offscreen canvas に描画して ImageData を取り出す。
const readImageData = async (source: ImageBitmap | HTMLImageElement): Promise<ImageData> => {
  // OffscreenCanvas が使えるなら main thread から外す（モバイルで decode と並走させやすい）。
  const w = source.width;
  const h = source.height;
  if (typeof OffscreenCanvas !== 'undefined') {
    const canvas = new OffscreenCanvas(w, h);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('OffscreenCanvas 2D context unavailable');
    ctx.drawImage(source, 0, 0);
    return ctx.getImageData(0, 0, w, h);
  }
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  ctx.drawImage(source, 0, 0);
  return ctx.getImageData(0, 0, w, h);
};

// 抽出した輪郭は alpha 閾値での「シャープなエッジ」に沿うため、目に見える sprite の
// アンチエイリアス端 / グロー / シャドウより数ピクセル内側に来る。
// その結果 collision が sprite 見た目より一回り小さく、隣接アイテムが視覚的に
// めり込んで見える ("ギリギリすぎ") 問題が出るので、centroid 中心に一律で
// 数 % だけ inflate する。
// 倍率での scale なら centroid 位置は変わらない（centroidOffset を再計算する必要なし）。
const CONTOUR_INFLATE_FACTOR = 1.08;

const inflateAroundCentroid = (vertices: Vec2[], centroid: Vec2, factor: number): Vec2[] =>
  vertices.map((v) => ({
    x: centroid.x + (v.x - centroid.x) * factor,
    y: centroid.y + (v.y - centroid.y) * factor,
  }));

// テクスチャから輪郭を抽出してキャッシュに入れる。失敗時は null を入れる（次回以降スキップ）。
export const extractContourForTexture = async (
  url: string,
  source: ImageBitmap | HTMLImageElement
): Promise<CachedContour | null> => {
  const cached = cache.get(url);
  if (cached !== undefined) return cached;
  const existing = inflight.get(url);
  if (existing) return existing;

  const promise = (async () => {
    try {
      const imageData = await readImageData(source);
      const raw = extractContour(imageData);
      if (!raw || raw.length < 3) {
        cache.set(url, null);
        return null;
      }
      // 重心を計算してから centroid 中心に inflate（centroid は不変）。
      const centroid = computeCentroid(raw);
      const inflated = inflateAroundCentroid(raw, centroid, CONTOUR_INFLATE_FACTOR);
      const result: CachedContour = {
        vertices: inflated,
        centroidOffset: {
          x: centroid.x - imageData.width / 2,
          y: centroid.y - imageData.height / 2,
        },
        pngWidth: imageData.width,
        pngHeight: imageData.height,
      };
      cache.set(url, result);
      return result;
    } catch {
      cache.set(url, null);
      return null;
    } finally {
      inflight.delete(url);
    }
  })();

  inflight.set(url, promise);
  return promise;
};

// 同期取得。キャッシュに無ければ null（→ フォールバック円で body 生成）。
export const getCachedContour = (url: string): CachedContour | null => {
  const v = cache.get(url);
  return v ?? null;
};

// テクスチャの輪郭を物理ボディの頂点リストに変換する。
// `radius` は body の見た目の半径（PNG の幅 / 2 を radius にスケール）。
export const contourToBodyVertices = (contour: CachedContour, radius: number): Vec2[] => {
  // PNG 幅の半分が radius になるようにスケール。
  // PNG は概ね正方形（ITEM_SPRITE_NATURAL_SIZE 256x256）想定。
  const scale = (radius * 2) / contour.pngWidth;
  // 重心を原点にずらして、scale をかける。
  // body の position が「重心」になるので、見た目の中心とずれる場合は applySprite 側で補正する。
  return contour.vertices.map((v) => ({
    x: (v.x - contour.pngWidth / 2 - contour.centroidOffset.x) * scale,
    y: (v.y - contour.pngHeight / 2 - contour.centroidOffset.y) * scale,
  }));
};
