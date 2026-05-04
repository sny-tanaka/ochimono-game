import { describe, expect, test } from 'vitest';

import { ITEMS, ITEM_LIST, MAX_DROPPABLE_LEVEL, MAX_ITEM_LEVEL } from '@/constants/items';

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
