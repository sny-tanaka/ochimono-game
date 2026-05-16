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
    suspended: 'ochimono.suspended',
    isGyroOn: 'ochimono.isGyroOn',
  },
} as const;

// ジャイロ（端末の傾き）でフィールドごと傾ける機能の調整値。
// 実機センサーの符号 / 感度はデバイス差があるため、ここ 1 箇所で調整できるようにする。
export const GYRO = {
  // フィールドの最大傾斜角（度）。
  // 縦長フィールドを回すと fit スケールで縮むため、大きすぎると盤面が小さくなる。
  // 20° 前後が「ちゃんと傾く」かつ「盤面が小さくなりすぎない」バランス。
  maxTiltDeg: 20,
  // deviceorientation.gamma（端末ロール）→ フィールド回転角への係数（符号込み）。
  // フィールドを「ワールド水平」に保つには端末ロールと逆向きに回す。
  gammaToFieldSign: -1,
  // センサーノイズ平滑化の係数（0..1）。小さいほど滑らかだが追従が遅い。
  smoothing: 0.18,
} as const;
