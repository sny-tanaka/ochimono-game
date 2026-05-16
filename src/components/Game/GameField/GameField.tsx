import { useCallback, useEffect, useRef } from 'react';

import styles from './style.module.scss';

import { type MergeEffectHandle, MergeEffect } from '@/components/Effects/MergeEffect/MergeEffect';
import {
  type DropIndicatorHandle,
  DropIndicator,
} from '@/components/Game/DropIndicator/DropIndicator';
import { GYRO } from '@/constants/game';
import type { ItemDefinition } from '@/types/item';

type Props = {
  canvasContainerRef: React.RefObject<HTMLDivElement | null>;
  fieldWidth: number;
  fieldHeight: number;
  gameOverLineY: number;
  currentItem: ItemDefinition | null;
  canInteract: boolean;
  onDrop: (xRatio: number) => void;
  // useGame が合体時に effect を流し込むためのハンドル。
  mergeEffectRef: React.RefObject<MergeEffectHandle | null>;
  // マグネット必殺技の対象選択モード。タップ位置を field 内ローカル座標で通知する。
  isMagnetSelecting: boolean;
  onMagnetSelect: (localX: number, localY: number) => void;
  // ジャイロ: フィールドごと回転させて重力（ワールド下）に追従させる。
  gyroEnabled: boolean;
  // 適用したい回転角（rad）。useGyro が毎フレーム更新する ref。
  gyroAngleRadRef: React.MutableRefObject<number>;
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

export const GameField = ({
  canvasContainerRef,
  fieldWidth,
  fieldHeight,
  gameOverLineY,
  currentItem,
  canInteract,
  onDrop,
  mergeEffectRef,
  isMagnetSelecting,
  onMagnetSelect,
  gyroEnabled,
  gyroAngleRadRef,
}: Props) => {
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<DropIndicatorHandle | null>(null);

  // 実際に surface へ適用済みの回転角（rad）。平滑化後の値。
  // ポインタ逆変換でも同じ値を使い、見た目と落下位置を一致させる。
  const appliedAngleRef = useRef(0);
  // 回転で矩形がはみ出すぶんを縮めて常に画面内に収めるスケール（0..1）。
  // appliedAngle と必ずセットで使う（ポインタ逆変換でも割り戻す）。
  const appliedScaleRef = useRef(1);

  // 角度 a（rad）でフィールド(W×H)を回したとき、回転後の外接矩形が元の W×H
  // 領域に収まるための縮小率。これで盤面が画面外に切れて見えなくなるのを防ぐ。
  const fitScaleFor = useCallback((a: number): number => {
    const w = fieldWidthRef.current;
    const h = fieldHeightRef.current;
    const c = Math.abs(Math.cos(a));
    const s = Math.abs(Math.sin(a));
    const bboxW = w * c + h * s;
    const bboxH = w * s + h * c;
    return Math.min(1, w / bboxW, h / bboxH);
  }, []);

  // pointermove ごとに React の state を更新すると GameField 配下が毎回 re-render される。
  // 連打 + 高頻度 pointermove で commit が積み上がるので、x 比率は ref に保持し、
  // requestAnimationFrame でバッチして DOM を直接書き換える。
  const pointerXRatioRef = useRef(0.5);
  const pendingFrameRef = useRef<number | null>(null);

  // currentItem が変わるたびに最新 radius を読みたいので ref に持つ。
  // pointermove の中では ref を読むだけで再レンダーは起こさない。
  const currentItemRef = useRef<ItemDefinition | null>(currentItem);
  currentItemRef.current = currentItem;

  const fieldWidthRef = useRef(fieldWidth);
  fieldWidthRef.current = fieldWidth;
  const fieldHeightRef = useRef(fieldHeight);
  fieldHeightRef.current = fieldHeight;

  // 画面座標 (clientX,clientY) → フィールドローカル座標 (0..w, 0..h)。
  // surface に rotate(θ) がかかっているので、回転中心まわりに -θ 逆回転して戻す。
  // transform-origin は既定の中心なので、回転中心 = getBoundingClientRect の中心
  // （AABB の中心は回転しても不変）。
  const toLocal = useCallback((clientX: number, clientY: number): { x: number; y: number } => {
    const surface = surfaceRef.current;
    if (!surface) return { x: 0, y: 0 };
    const rect = surface.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // スケール → 回転の順で逆変換（適用は rotate→scale だが原点共通なので可換）。
    const s = appliedScaleRef.current || 1;
    const dx = (clientX - cx) / s;
    const dy = (clientY - cy) / s;
    const a = -appliedAngleRef.current;
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    const lx = dx * cos - dy * sin;
    const ly = dx * sin + dy * cos;
    return {
      x: fieldWidthRef.current / 2 + lx,
      y: fieldHeightRef.current / 2 + ly,
    };
  }, []);

  // ratio から実際の indicator 表示 x（壁にめり込まないようクランプ済み）を計算。
  const computeIndicatorX = useCallback((ratio: number): number => {
    const item = currentItemRef.current;
    const fw = fieldWidthRef.current;
    if (!item) return ratio * fw;
    return Math.max(item.radius, Math.min(fw - item.radius, ratio * fw));
  }, []);

  // 次フレームで indicator の位置を反映する。多重スケジュール禁止。
  const scheduleIndicatorUpdate = useCallback(() => {
    if (pendingFrameRef.current !== null) return;
    pendingFrameRef.current = window.requestAnimationFrame(() => {
      pendingFrameRef.current = null;
      indicatorRef.current?.setX(computeIndicatorX(pointerXRatioRef.current));
    });
  }, [computeIndicatorX]);

  const updatePointerFromEvent = useCallback(
    (clientX: number, clientY: number) => {
      const ratio = clamp01(toLocal(clientX, clientY).x / fieldWidthRef.current);
      pointerXRatioRef.current = ratio;
      scheduleIndicatorUpdate();
    },
    [scheduleIndicatorUpdate, toLocal]
  );

  // currentItem が変わったら一度中央に戻し、indicator も即座に再配置する。
  useEffect(() => {
    pointerXRatioRef.current = 0.5;
    // DOM が描画された直後に setX を呼びたいので rAF にスケジュール。
    scheduleIndicatorUpdate();
  }, [currentItem?.level, scheduleIndicatorUpdate]);

  // unmount 時に rAF を解放
  useEffect(() => {
    return () => {
      if (pendingFrameRef.current !== null) {
        window.cancelAnimationFrame(pendingFrameRef.current);
        pendingFrameRef.current = null;
      }
    };
  }, []);

  // ジャイロ回転ループ。gyroEnabled の間だけ rAF を回し、目標角へ平滑追従させて
  // surface に transform を直接書き込む（再レンダーを発生させない）。
  // OFF のときは即座に 0 へ戻して transform を解除する。
  useEffect(() => {
    const surface = surfaceRef.current;
    if (!surface) return;
    if (!gyroEnabled) {
      appliedAngleRef.current = 0;
      appliedScaleRef.current = 1;
      surface.style.transform = '';
      return;
    }
    let raf = 0;
    const tick = () => {
      const target = gyroAngleRadRef.current;
      const cur = appliedAngleRef.current;
      const next = cur + (target - cur) * GYRO.smoothing;
      appliedAngleRef.current = Math.abs(next - target) < 1e-4 ? target : next;
      const scale = fitScaleFor(appliedAngleRef.current);
      appliedScaleRef.current = scale;
      surface.style.transform = `rotate(${appliedAngleRef.current}rad) scale(${scale})`;
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(raf);
      appliedAngleRef.current = 0;
      appliedScaleRef.current = 1;
      surface.style.transform = '';
    };
  }, [gyroEnabled, gyroAngleRadRef, fitScaleFor]);

  // マグネット選択中はドロップを抑制する。Indicator も非表示にする。
  const canDrop = canInteract && !isMagnetSelecting;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMagnetSelecting) return; // 選択モードは pointerUp 側で処理
    if (!canDrop) return;
    updatePointerFromEvent(e.clientX, e.clientY);
    surfaceRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMagnetSelecting) return;
    if (e.buttons === 0 && e.pointerType === 'mouse') {
      // マウスホバーでも追従
      updatePointerFromEvent(e.clientX, e.clientY);
      return;
    }
    updatePointerFromEvent(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMagnetSelecting) {
      // タップ位置を field ローカル座標に変換して通知（回転も考慮）
      const local = toLocal(e.clientX, e.clientY);
      onMagnetSelect(local.x, local.y);
      return;
    }
    if (!canDrop) return;
    updatePointerFromEvent(e.clientX, e.clientY);
    onDrop(pointerXRatioRef.current);
    surfaceRef.current?.releasePointerCapture(e.pointerId);
  };

  // DropIndicator の初期位置（中央）。以降は ref 経由で更新する。
  const initialIndicatorX = computeIndicatorX(0.5);

  return (
    <div
      ref={surfaceRef}
      className={styles.surface}
      style={{ width: `${fieldWidth}px`, height: `${fieldHeight}px` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="application"
      aria-label="ゲームフィールド"
    >
      <div
        ref={canvasContainerRef}
        className={styles.canvas_layer}
      />
      <div
        className={styles.game_over_line}
        style={{ top: `${gameOverLineY}px` }}
        aria-hidden="true"
      />
      {canDrop ? (
        <DropIndicator
          ref={indicatorRef}
          initialX={initialIndicatorX}
          fieldHeight={fieldHeight}
          item={currentItem}
        />
      ) : null}
      <MergeEffect ref={mergeEffectRef} />
    </div>
  );
};
