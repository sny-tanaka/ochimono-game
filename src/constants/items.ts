import { DEFAULT_THEME_ID, type ThemeId } from '@/constants/themes';
import type { ItemDefinition, ItemTheme } from '@/types/item';

// アイテム定義の単一ソース
// 半径・バウンド係数はテストプレイで調整しやすいよう Record で抜き出している

// 増分は +6 〜 +10 で緩やかに（最大レベルで直径 ≒ 172px に収める）。
// 大きくしすぎるとレベル 9 同士を画面内で接触させるのが現実的でなくなる。
export const ITEM_RADIUS: Record<number, number> = {
  1: 20,
  2: 26,
  3: 32,
  4: 38,
  5: 45,
  6: 52,
  7: 60,
  8: 68,
  9: 76,
  10: 86,
};

export const ITEM_RESTITUTION: Record<number, number> = {
  1: 0.5,
  2: 0.5,
  3: 0.45,
  4: 0.45,
  5: 0.4,
  6: 0.4,
  7: 0.35,
  8: 0.35,
  9: 0.3,
  10: 0.25,
};

const ITEM_NAMES: Record<number, string> = {
  1: '小ハート',
  2: '小イチゴ',
  3: '小ネコ',
  4: '中ハート',
  5: '中イチゴ',
  6: '中ネコ',
  7: '大ハート',
  8: '大イチゴ',
  9: '大ネコ',
  10: 'にゃんハートいちご',
};

const ITEM_THEMES: Record<number, ItemTheme> = {
  1: 'heart',
  2: 'strawberry',
  3: 'cat',
  4: 'heart',
  5: 'strawberry',
  6: 'cat',
  7: 'heart',
  8: 'strawberry',
  9: 'cat',
  10: 'special',
};

// アイテム画像のパス（public 配下基準）。各画像は 256×256 透過 PNG。
// ファイル名は level{NN}.png に固定し、テーマ差し替えはディレクトリ単位で行う。
export const imagePathForTheme = (themeId: ThemeId, level: number): string => {
  const padded = String(level).padStart(2, '0');
  return `images/${themeId}/level${padded}.png`;
};

// アイテム画像のナチュラルサイズ（PNG の縦横ピクセル数）。
// applySprite のスケール計算で divisor として使う。
export const ITEM_SPRITE_NATURAL_SIZE = 256;

const ITEM_COLORS: Record<number, { color: string; glow: string }> = {
  1: { color: '#FF8FAB', glow: '#FFD6E0' },
  2: { color: '#FF3B4E', glow: '#FFC1C8' },
  3: { color: '#FAFAFA', glow: '#FFE4E1' },
  4: { color: '#64D8FF', glow: '#C8F0FF' },
  5: { color: '#FF3B4E', glow: '#FFC1C8' },
  6: { color: '#C8A882', glow: '#F0E0C8' },
  7: { color: '#FFD740', glow: '#FFF1B0' },
  8: { color: '#FF3B4E', glow: '#FFC1C8' },
  9: { color: '#424242', glow: '#FFB6D9' },
  10: { color: '#FF6FB5', glow: '#FFFFFF' },
};

// 三角数方式：レベル n → n×(n+1)÷2
const triangularScore = (level: number) => (level * (level + 1)) / 2;

const buildItem = (level: number): ItemDefinition => ({
  id: level,
  level,
  name: ITEM_NAMES[level],
  theme: ITEM_THEMES[level],
  radius: ITEM_RADIUS[level],
  restitution: ITEM_RESTITUTION[level],
  friction: 0.3,
  density: 0.001,
  score: triangularScore(level),
  svgPath: imagePathForTheme(DEFAULT_THEME_ID, level),
  color: ITEM_COLORS[level].color,
  glowColor: ITEM_COLORS[level].glow,
});

export const MAX_ITEM_LEVEL = 10;

export const ITEMS: Record<number, ItemDefinition> = Object.fromEntries(
  Array.from({ length: MAX_ITEM_LEVEL }, (_, i) => i + 1).map((level) => [level, buildItem(level)])
);

export const ITEM_LIST: readonly ItemDefinition[] = Array.from(
  { length: MAX_ITEM_LEVEL },
  (_, i) => ITEMS[i + 1]
);

// NEXT として落下させて良い最大レベル（レベル4以上は合体でしか出現しない）
export const MAX_DROPPABLE_LEVEL = 3;

// ITEM_RADIUS をチューニングしたときの基準フィールド幅。
// 実フィールド幅がこの値を下回る場合は半径を比例縮小する（横画面でも難易度を一定に保つ）。
// 上回っても拡大はせず、ITEM_RADIUS をそのまま最大値として使う。
export const REFERENCE_FIELD_WIDTH = 360;

// 実フィールド幅から半径スケール係数を返す（1.0 がキャップ）
export const computeRadiusScale = (fieldWidth: number): number =>
  Math.min(1, fieldWidth / REFERENCE_FIELD_WIDTH);

// レベル / 実フィールド幅 / テーマから ItemDefinition を生成する。
// radius は基準フィールド幅に応じて縮小、svgPath はテーマに応じて差し替え。
//
// 連打ドロップ時に毎フレーム呼ばれてもオブジェクトが新規生成されないよう、
// (level, fieldWidth, themeId) をキーにした Map で結果を memoize する。
// 同じ参照を返すことで、`<NextItemPreview>` 等の React.memo / useMemo の再評価を抑える。
const itemForFieldWidthCache = new Map<string, ItemDefinition>();

export const itemForFieldWidth = (
  level: number,
  fieldWidth: number,
  themeId: ThemeId = DEFAULT_THEME_ID
): ItemDefinition => {
  const cacheKey = `${level}|${fieldWidth}|${themeId}`;
  const cached = itemForFieldWidthCache.get(cacheKey);
  if (cached) return cached;

  const base = ITEMS[level];
  const item: ItemDefinition = {
    ...base,
    radius: base.radius * computeRadiusScale(fieldWidth),
    svgPath: imagePathForTheme(themeId, level),
  };
  itemForFieldWidthCache.set(cacheKey, item);
  return item;
};

// テスト用：キャッシュをクリアする。プロダクションコードからは呼ばない想定。
export const __clearItemForFieldWidthCache = () => {
  itemForFieldWidthCache.clear();
};
