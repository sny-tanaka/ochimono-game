// 必殺技関連の定数

// 1 ゲージ（セグメント）あたりの満タン値
export const SKILL_SEGMENT_MAX = 100;
// セグメント数（リング上の分割数）
export const SKILL_SEGMENT_COUNT = 3;

export const SKILL = {
  // 全セグメント満タン値。 segmentMax × segmentCount。
  gaugeMax: SKILL_SEGMENT_MAX * SKILL_SEGMENT_COUNT,
  // 1 セグメント分（強い必殺技は複数セグメントを消費する）。
  segmentMax: SKILL_SEGMENT_MAX,
  segmentCount: SKILL_SEGMENT_COUNT,
  // レベル10生成時のボーナス（通常合体に加えて）
  bonusOnLevel10Created: 8,
  // レベル10同士の特殊消滅時のボーナス
  bonusOnSpecialElimination: 25,

  shake: {
    impulseMin: 0.04,
    impulseMax: 0.12,
    upwardBias: 0.05,
  },
  gravityFlip: {
    durationMs: 3000,
    // 反転中の重力倍率。負値で上向き。
    // -0.8 だとアイテムが急上昇して画面外に飛ぶ、-0.12 だと弱すぎて動かない。
    // -0.35 で「ゆっくり浮き上がって上半分に滞留」する加減。
    multiplier: -0.35,
    // 反転中だけ全 body に適用する空気抵抗（frictionAir）。
    // 通常 0.01。少し強めて加速を抑え「無重力的にふわふわ漂う」挙動にする。
    frictionAir: 0.04,
  },
  magnet: {
    durationMs: 2500,
    forceMagnitude: 0.005,
  },
} as const;

// 合体 1 回あたりに溜まるゲージ量。レベルが高いほど多く溜まる。
export const gaugeGainForMerge = (mergedLevel: number): number => mergedLevel;

export type SkillKind = 'shake' | 'gravityFlip' | 'magnet';

// 各必殺技の発動コスト（セグメント単位）。
// マグネットは 3 セグメント全てが必要（強力なので頻度を絞る）。
export const SKILL_COST_SEGMENTS: Record<SkillKind, number> = {
  shake: 1,
  gravityFlip: 1,
  magnet: SKILL_SEGMENT_COUNT,
};

// 各必殺技の発動コスト（ポイント単位）
export const skillCostPoints = (kind: SkillKind): number =>
  SKILL_COST_SEGMENTS[kind] * SKILL_SEGMENT_MAX;
