import Matter from 'matter-js';

import { ITEMS } from '@/constants/items';
import { PHYSICS } from '@/constants/physics';
import type { ItemDefinition } from '@/types/item';

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

export const createItemBody = (
  item: ItemDefinition,
  x: number,
  y: number,
  droppedAt: number
): Matter.Body => {
  const body = Matter.Bodies.circle(x, y, item.radius, {
    restitution: item.restitution,
    friction: item.friction,
    density: item.density,
    label: `item-${item.level}`,
  });
  (body as BodyWithItemPlugin).plugin.itemData = {
    level: item.level,
    consumed: false,
    droppedAt,
  };
  return body;
};

export const getItemDataFromBody = (body: Matter.Body): ItemBodyData | undefined =>
  (body as BodyWithItemPlugin).plugin.itemData;

// 上下左右の壁を生成
export const createWalls = (
  width: number,
  height: number
): { ground: Matter.Body; leftWall: Matter.Body; rightWall: Matter.Body } => {
  const t = PHYSICS.wallThickness;
  const wallOptions: Matter.IChamferableBodyDefinition = {
    isStatic: true,
    restitution: 0.2,
    friction: 0.5,
    label: 'wall',
  };

  const ground = Matter.Bodies.rectangle(width / 2, height + t / 2, width + t * 2, t, wallOptions);
  const leftWall = Matter.Bodies.rectangle(-t / 2, height / 2, t, height * 2, wallOptions);
  const rightWall = Matter.Bodies.rectangle(width + t / 2, height / 2, t, height * 2, wallOptions);

  return { ground, leftWall, rightWall };
};

// アイテムの中点座標
export const midpoint = (a: Matter.Body, b: Matter.Body): { x: number; y: number } => ({
  x: (a.position.x + b.position.x) / 2,
  y: (a.position.y + b.position.y) / 2,
});

// レベルに対応する ItemDefinition 取得（範囲外なら null）
export const getItemByLevel = (level: number): ItemDefinition | null => ITEMS[level] ?? null;
