import type { ItemDefinition } from '@/types/item';

export type GameStatus = 'idle' | 'playing' | 'gameover';

// ゲーム全体の状態スナップショット（現状は未使用だが、デバッグ・計測時の型として残す）。
// 合体エフェクトは React state で管理しなくなったため、このスナップショットには含めない。
export type GameState = {
  status: GameStatus;
  score: number;
  bestScore: number;
  currentItem: ItemDefinition | null;
  nextItem: ItemDefinition | null;
  canDrop: boolean;
  isSoundOn: boolean;
};
