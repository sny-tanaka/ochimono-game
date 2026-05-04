import type { ItemDefinition } from '@/types/item';

export type GameStatus = 'idle' | 'playing' | 'gameover';

// 合体時に画面上に表示するエフェクトの 1 件分
export type MergeEffect = {
  id: string;
  x: number;
  y: number;
  level: number;
  score: number;
  isSpecial: boolean;
  createdAt: number;
};

export type GameState = {
  status: GameStatus;
  score: number;
  bestScore: number;
  currentItem: ItemDefinition | null;
  nextItem: ItemDefinition | null;
  canDrop: boolean;
  mergeEffects: MergeEffect[];
  isSoundOn: boolean;
};
