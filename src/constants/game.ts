// ゲーム全般の定数

export const GAME = {
  // 連続落下を防ぐクールダウン（ms）
  dropCooldownMs: 500,
  // スコア履歴保存の最大件数
  maxScoreHistory: 10,
  // 合体エフェクトの表示時間（ms）
  mergeEffectDurationMs: 700,
  // localStorage キー
  storageKeys: {
    bestScore: 'ochimono.bestScore',
    scoreHistory: 'ochimono.scoreHistory',
    isSoundOn: 'ochimono.isSoundOn',
    themeId: 'ochimono.themeId',
  },
} as const;
