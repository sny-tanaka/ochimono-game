import Matter from 'matter-js';

import { COLLISION_CATEGORY, ITEM_COLLISION_MASK, PHYSICS } from '@/constants/physics';
import type { ItemDefinition } from '@/types/item';
import type { Vec2 } from '@/utils/contour';

// Matter.js の Body に紐付けるカスタムデータ
export type ItemBodyData = {
  level: number;
  // 合体ロジックで二重消費を防ぐためのフラグ
  consumed: boolean;
  // 落下開始時刻（ms）。ゲームオーバー判定の grace period 用。
  droppedAt: number;
};

// Matter.Body の plugin プロパティ経由で itemData を読み書きするためのヘルパ。
// 型定義側は any なので、ここで型付きアクセサに閉じ込める。
type BodyWithItemPlugin = Matter.Body & {
  plugin: { itemData?: ItemBodyData };
};

// 共通のボディオプションを生成する。
const itemBodyOptions = (item: ItemDefinition): Matter.IBodyDefinition => ({
  restitution: item.restitution,
  friction: item.friction,
  density: item.density,
  label: `item-${item.level}`,
  collisionFilter: {
    category: COLLISION_CATEGORY.item,
    mask: ITEM_COLLISION_MASK,
  },
});

// 自前で sprite を描画するため、Matter.Render が body / parts を自動描画しないよう全 part を不可視化。
const hideAllParts = (body: Matter.Body): void => {
  for (const part of body.parts) {
    part.render.visible = false;
  }
};

const attachItemData = (body: Matter.Body, level: number, droppedAt: number): void => {
  (body as BodyWithItemPlugin).plugin.itemData = {
    level,
    consumed: false,
    droppedAt,
  };
};

// 真円当たり判定の body を作る（フォールバック / 輪郭抽出未完了時用）。
export const createCircleItemBody = (
  item: ItemDefinition,
  x: number,
  y: number,
  droppedAt: number
): Matter.Body => {
  const body = Matter.Bodies.circle(x, y, item.radius, itemBodyOptions(item));
  attachItemData(body, item.level, droppedAt);
  hideAllParts(body);
  return body;
};

// 多角形（PNG 輪郭由来の頂点）から body を作る。凹形状は poly-decomp で分解される前提。
// 失敗時は null を返す（呼び出し側で circle にフォールバック）。
export const createPolygonItemBody = (
  item: ItemDefinition,
  x: number,
  y: number,
  droppedAt: number,
  vertices: Vec2[]
): Matter.Body | null => {
  if (vertices.length < 3) return null;
  // Matter.Bodies.fromVertices は 3 番目の引数に「複数の vertex set 配列」を取る。
  // 1 つしか無い時は単一要素配列にして渡す。
  const body = Matter.Bodies.fromVertices(x, y, [vertices], itemBodyOptions(item));
  // poly-decomp が無い / decomp 失敗で convex hull に落ちる場合もあるが、生成自体は成功する。
  // body が undefined を返してくる可能性は低いが念のため。
  if (!body) return null;
  attachItemData(body, item.level, droppedAt);
  hideAllParts(body);
  return body;
};

/** @deprecated Use createCircleItemBody / createPolygonItemBody. Kept for backward compat. */
export const createItemBody = createCircleItemBody;

export const getItemDataFromBody = (body: Matter.Body): ItemBodyData | undefined =>
  (body as BodyWithItemPlugin).plugin.itemData;

// 上下左右の壁を生成
export const createWalls = (
  width: number,
  height: number
): {
  ground: Matter.Body;
  leftWall: Matter.Body;
  rightWall: Matter.Body;
  ceiling: Matter.Body;
} => {
  const t = PHYSICS.wallThickness;
  const wallOptions: Matter.IChamferableBodyDefinition = {
    isStatic: true,
    restitution: 0.2,
    friction: 0.5,
    label: 'wall',
    collisionFilter: {
      // 壁は全カテゴリのアイテムと衝突する。マスクは default の 0xFFFFFFFF で OK だが
      // 明示的にカテゴリだけ wall にしておくと、対象アイテム側のマスクで壁を取り出せる。
      category: COLLISION_CATEGORY.wall,
    },
  };

  const ground = Matter.Bodies.rectangle(width / 2, height + t / 2, width + t * 2, t, wallOptions);
  const leftWall = Matter.Bodies.rectangle(-t / 2, height / 2, t, height * 2, wallOptions);
  const rightWall = Matter.Bodies.rectangle(width + t / 2, height / 2, t, height * 2, wallOptions);
  // 天井壁。重力反転中にアイテムが画面外へ吹き飛んでロストするのを防ぐ。
  // 反発係数 0 にして、ぶつかっても弾まずに滑らかに沿うようにする
  // （弾むとアイテムが上半分から下に押し戻されてしまう）。
  const ceiling = Matter.Bodies.rectangle(width / 2, -t / 2, width + t * 2, t, {
    ...wallOptions,
    restitution: 0,
  });

  return { ground, leftWall, rightWall, ceiling };
};

// アイテムの中点座標
export const midpoint = (a: Matter.Body, b: Matter.Body): { x: number; y: number } => ({
  x: (a.position.x + b.position.x) / 2,
  y: (a.position.y + b.position.y) / 2,
});
