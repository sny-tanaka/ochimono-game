import { ITEMS, MAX_ITEM_LEVEL } from '@/constants/items';

// 合体後アイテム（レベル mergedLevel）が生成された際に加算するスコア
export const calcMergeScore = (mergedLevel: number): number => {
  if (mergedLevel < 2 || mergedLevel > MAX_ITEM_LEVEL) return 0;
  return ITEMS[mergedLevel].score;
};

// 最高レベル同士が合体して消滅した場合のボーナス
export const calcSpecialEliminationBonus = (): number => ITEMS[MAX_ITEM_LEVEL].score;
