import { describe, expect, test } from 'vitest';

import {
  computeRadiusScale,
  itemForFieldWidth,
  ITEMS,
  ITEM_LIST,
  MAX_DROPPABLE_LEVEL,
  MAX_ITEM_LEVEL,
  REFERENCE_FIELD_WIDTH,
} from '@/constants/items';

describe('ITEMS', () => {
  test('レベル 1〜10 のアイテムが定義されている', () => {
    expect(MAX_ITEM_LEVEL).toBe(10);
    expect(ITEM_LIST).toHaveLength(10);
    for (let level = 1; level <= MAX_ITEM_LEVEL; level += 1) {
      expect(ITEMS[level]).toBeDefined();
      expect(ITEMS[level].level).toBe(level);
    }
  });

  test('レベルが上がるほど半径が大きい', () => {
    for (let level = 2; level <= MAX_ITEM_LEVEL; level += 1) {
      expect(ITEMS[level].radius).toBeGreaterThan(ITEMS[level - 1].radius);
    }
  });

  test('スペシャルだけテーマが special', () => {
    expect(ITEMS[10].theme).toBe('special');
    for (let level = 1; level <= 9; level += 1) {
      expect(ITEMS[level].theme).not.toBe('special');
    }
  });

  test('落下可能レベルの上限はレベル 3（レベル4以上は合体専用）', () => {
    expect(MAX_DROPPABLE_LEVEL).toBe(3);
  });
});

describe('computeRadiusScale', () => {
  test('基準幅以上では 1.0 に張り付く（必要以上に大きくしない）', () => {
    expect(computeRadiusScale(REFERENCE_FIELD_WIDTH)).toBe(1);
    expect(computeRadiusScale(REFERENCE_FIELD_WIDTH * 2)).toBe(1);
    expect(computeRadiusScale(10000)).toBe(1);
  });

  test('基準幅を下回ると比例縮小する', () => {
    expect(computeRadiusScale(REFERENCE_FIELD_WIDTH / 2)).toBe(0.5);
    expect(computeRadiusScale(REFERENCE_FIELD_WIDTH * 0.75)).toBeCloseTo(0.75);
  });
});

describe('itemForFieldWidth', () => {
  test('基準幅以上では radius は ITEMS のままで、それ以外のフィールドも保持される', () => {
    const level = 5;
    const item = itemForFieldWidth(level, REFERENCE_FIELD_WIDTH * 2);
    expect(item.radius).toBe(ITEMS[level].radius);
    expect(item.level).toBe(level);
    expect(item.svgPath).toBe(ITEMS[level].svgPath);
  });

  test('基準幅の半分では radius が半分になる', () => {
    const level = 9;
    const item = itemForFieldWidth(level, REFERENCE_FIELD_WIDTH / 2);
    expect(item.radius).toBeCloseTo(ITEMS[level].radius / 2);
  });

  test('themeId を渡すと svgPath がそのテーマのディレクトリ配下になる', () => {
    const item = itemForFieldWidth(7, REFERENCE_FIELD_WIDTH, 'other');
    expect(item.svgPath).toBe('images/other/level07.png');
  });
});
