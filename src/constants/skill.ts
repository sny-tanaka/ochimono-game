// 必殺技関連の定数

export const SKILL = {
  // ゲージ満タン値。 合体時にレベルに応じて加算される（後述 gaugeGainForMerge）。
  // 体感: 中盤に 1 回、終盤に追加 1〜2 回ほど発動できる量を目安にチューニング。
  gaugeMax: 100,
  // レベル10生成時のボーナス（通常合体に加えて）
  bonusOnLevel10Created: 8,
  // レベル10同士の特殊消滅時のボーナス
  bonusOnSpecialElimination: 25,

  shake: {
    // 各 body に加える瞬間衝撃の上限・下限。Matter.Body.applyForce の単位そのまま。
    impulseMin: 0.04,
    impulseMax: 0.12,
    // 上方向に少し強く力を加えてフィールド全体を持ち上げる。
    upwardBias: 0.05,
  },
  gravityFlip: {
    // 反転持続時間
    durationMs: 3000,
    // 反転中の重力（通常 PHYSICS.gravityY の符号反転 × 倍率）
    multiplier: -0.8,
  },
  magnet: {
    // 同レベルアイテムを引き寄せ続ける時間。離れた相手にも届くよう少し長め。
    durationMs: 2500,
    // 引力強度（Body.applyForce に渡す係数。質量が大きい body も動かせるよう mass を掛けて使う）。
    // 衝突カテゴリで非対象アイテムをすり抜けるので、力は「壁にぶつかっても破綻しない範囲で速やかに集合する」値。
    forceMagnitude: 0.005,
  },
} as const;

// 合体 1 回あたりに溜まるゲージ量。レベルが高いほど多く溜まる。
export const gaugeGainForMerge = (mergedLevel: number): number => mergedLevel;

export type SkillKind = 'shake' | 'gravityFlip' | 'magnet';
