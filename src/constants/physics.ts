// Matter.js セットアップに使う物理パラメータ

export const PHYSICS = {
  gravityY: 1.5,
  // フィールドサイズ（実際の描画では viewport に合わせてスケールする）
  fieldWidth: 360,
  fieldHeight: 560,
  // 壁の厚さ。すべての壁は内向きの面がフィールド端 (x=0/x=width/y=0/y=height) に
  // なる位置に配置されるので、厚さを増やしても視覚・衝突面の位置は変わらない（外側に広がるだけ）。
  // 値が大きいほど Matter の離散衝突判定でアイテムが高速に貫通する事故 (tunneling) を防げる。
  // 重力反転の叩きつけフェーズで velocity が 100/tick 程度まで上がるため、150 確保している。
  wallThickness: 150,
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

// Matter.js の衝突カテゴリ。デフォルトは category=0x0001/mask=0xFFFFFFFF だが
// マグネット必殺技で「対象アイテムだけ非対象アイテムを擦り抜ける」を実現したいので
// 役割ごとにビットを分けて管理する。
export const COLLISION_CATEGORY = {
  wall: 0x0001,
  item: 0x0002,
  // マグネット発動中の対象アイテム。壁と他の対象には衝突するが、非対象アイテムには衝突しない。
  magnetTarget: 0x0004,
} as const;

// 通常アイテムが衝突する対象（= 全部）
export const ITEM_COLLISION_MASK =
  COLLISION_CATEGORY.wall | COLLISION_CATEGORY.item | COLLISION_CATEGORY.magnetTarget;

// マグネット対象アイテムが衝突する対象（= 壁と他の対象アイテム。非対象 item は無視）
export const MAGNET_TARGET_COLLISION_MASK =
  COLLISION_CATEGORY.wall | COLLISION_CATEGORY.magnetTarget;
