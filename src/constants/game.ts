// ゲーム全般の定数

export const GAME = {
  // 連続落下を防ぐクールダウン（ms）
  dropCooldownMs: 500,
  // スコア履歴保存の最大件数
  maxScoreHistory: 10,
  // 合体エフェクトの表示時間（ms）
  mergeEffectDurationMs: 700,
  // プレイ中の中断データ自動保存の間隔（ms）。
  // 中断ボタンを押さなくても定期的にスナップショットを取り、
  // アプリ強制終了やクラッシュでも進行を失わないようにする。
  autoSaveIntervalMs: 3000,
  // localStorage キー
  storageKeys: {
    bestScore: 'ochimono.bestScore',
    scoreHistory: 'ochimono.scoreHistory',
    isSoundOn: 'ochimono.isSoundOn',
    themeId: 'ochimono.themeId',
    suspended: 'ochimono.suspended',
  },
} as const;
