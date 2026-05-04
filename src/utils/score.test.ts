import { describe, expect, test } from 'vitest';

import { calcMergeScore, calcSpecialEliminationBonus } from '@/utils/score';

describe('calcMergeScore', () => {
  test('三角数方式で各レベルのスコアを返す', () => {
    expect(calcMergeScore(2)).toBe(3);
    expect(calcMergeScore(3)).toBe(6);
    expect(calcMergeScore(4)).toBe(10);
    expect(calcMergeScore(5)).toBe(15);
    expect(calcMergeScore(10)).toBe(55);
  });

  test('範囲外（1 以下 / 10 超）は 0 を返す', () => {
    expect(calcMergeScore(1)).toBe(0);
    expect(calcMergeScore(0)).toBe(0);
    expect(calcMergeScore(11)).toBe(0);
  });
});

describe('calcSpecialEliminationBonus', () => {
  test('レベル10同士の合体ボーナスは 55 点', () => {
    expect(calcSpecialEliminationBonus()).toBe(55);
  });
});
