import type { ThemeId } from '@/constants/themes';
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

// 中断時に localStorage に保存する 1 個のアイテム body のスナップショット。
// アイテム種別は level だけで決定する（半径などは復元時にその時点の定数から再計算）。
export type SuspendedBody = {
  level: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularVelocity: number;
};

// 中断データの全体構造。後方互換のため、フィールドが追加された時に欠けていても
// 復元側でデフォルトを使えるように個別にバリデーションする。
export type SuspendedGame = {
  // 構造のバージョン。互換性破壊した時にだけ上げる。読み込み側は不明バージョンでも
  // 必須フィールドが揃っていればベストエフォートで復元する。
  version: number;
  // 保存時刻（ms）。診断用。
  savedAt: number;
  score: number;
  themeId: ThemeId;
  currentItemLevel: number;
  nextItemLevel: number;
  skillGauge: number;
  // マグネットの 1 ゲーム内残り使用回数。古い保存データには無いので optional。
  // 復元側で undefined のときは MAGNET_MAX_USES_PER_GAME（満タン）にフォールバック。
  magnetUsesLeft?: number;
  bodies: SuspendedBody[];
};
