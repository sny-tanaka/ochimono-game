// Matter.js セットアップに使う物理パラメータ

export const PHYSICS = {
  gravityY: 1.5,
  // フィールドサイズ（実際の描画では viewport に合わせてスケールする）
  fieldWidth: 360,
  fieldHeight: 560,
  wallThickness: 20,
  // ゲームオーバーラインはフィールド上端から下方向のオフセット
  gameOverLineOffset: 80,
  // 静止判定のしきい値（|vy| がこれ未満で「ほぼ止まっている」とみなす）
  restingVelocityThreshold: 0.5,
  // 落下直後の判定無効時間（誤検知防止）
  gameOverGracePeriodMs: 1000,
  // ゲームオーバーラインを超え続けた状態が何 ms 続いたらゲームオーバー判定にするか。
  // シェイクや重力反転で一時的にラインを越えるのを許容するための猶予。
  gameOverDangerLimitMs: 5000,
} as const;
