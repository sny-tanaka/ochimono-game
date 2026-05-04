import type { ItemDefinition, ItemTheme } from '@/types/item';

// アイテム定義の単一ソース
// 半径・バウンド係数はテストプレイで調整しやすいよう Record で抜き出している

export const ITEM_RADIUS: Record<number, number> = {
  1: 20,
  2: 32,
  3: 46,
  4: 58,
  5: 72,
  6: 86,
  7: 98,
  8: 112,
  9: 128,
  10: 150,
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

// アイテムの SVG パス（public 配下基準）
const ITEM_SVG_PATHS: Record<number, string> = {
  1: 'images/gumi/item_01_heart_s.svg',
  2: 'images/gumi/item_02_strawberry_s.svg',
  3: 'images/gumi/item_03_cat_s.svg',
  4: 'images/gumi/item_04_heart_m.svg',
  5: 'images/gumi/item_05_strawberry_m.svg',
  6: 'images/gumi/item_06_cat_m.svg',
  7: 'images/gumi/item_07_heart_l.svg',
  8: 'images/gumi/item_08_strawberry_l.svg',
  9: 'images/gumi/item_09_cat_l.svg',
  10: 'images/gumi/item_10_special.svg',
};

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
  svgPath: ITEM_SVG_PATHS[level],
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
