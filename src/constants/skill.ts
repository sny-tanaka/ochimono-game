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
    // 強めの初速（liftKickVelocity）で勢いよく持ち上げ、終端速度を抑える frictionAir で
    // 上半分にゆっくり留まらせる組み合わせ。
    multiplier: -1.5,
    frictionAir: 0.05,
    // 反転発動時に全 body に与える「上方向の初速」。
    // 床や壁との静止摩擦で地面に張り付いている body を確実に剥がし、
    // 重い高レベル body も含めて全部いっせいに浮き上がらせる。
    liftKickVelocity: -8,
    // 反転終了直後の「叩きつけ」フェーズの設定。
    // 通常重力の slamGravityMultiplier 倍を slamDurationMs だけ適用する。
    // この間 frictionAir はほぼゼロにして空気抵抗を切るので、アイテムが
    // 急激に床に落下して大きくバウンドする。
    slamGravityMultiplier: 3.5,
    slamFrictionAir: 0,
    slamDurationMs: 800,
    // 叩きつけ中だけアイテムの反発係数を上書きしてバウンドを誇張する。
    // 通常 0.25〜0.5 だと thud で終わるが 0.85 にするとしっかり跳ね返る。
    slamRestitution: 0.85,
    // 叩きつけ開始時に全 body へ「下方向の初速」を強制注入する。
    // 天井 / 壁との摩擦で張り付いていた body も確実に剥がして加速させる。
    // Matter の y 軸は下向きが正。body 質量に関係なく一律の速度を入れる。
    slamKickVelocity: 16,
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
// - shake: 1 ゲージ。手軽に使える救済。
// - gravityFlip: 2 ゲージ。盤面を大きく動かせる強い技なので shake より重く。
// - magnet: 3 ゲージ全部。最強の救済 + 加えて 1 ゲーム内の使用回数も MAGNET_MAX_USES_PER_GAME に制限。
export const SKILL_COST_SEGMENTS: Record<SkillKind, number> = {
  shake: 1,
  gravityFlip: 2,
  magnet: SKILL_SEGMENT_COUNT,
};

// マグネット必殺技の 1 ゲーム内での最大使用回数。
// マグネットはゲージさえ溜まれば Lv10 同士も合体・消滅できてしまい、
// エンドレスゲーム化する原因になっていたため上限を設ける。
// 上限に達したらゲージ満タンでもメニュー上で disabled になる。
export const MAGNET_MAX_USES_PER_GAME = 3;

// 各必殺技の発動コスト（ポイント単位）
export const skillCostPoints = (kind: SkillKind): number =>
  SKILL_COST_SEGMENTS[kind] * SKILL_SEGMENT_MAX;
