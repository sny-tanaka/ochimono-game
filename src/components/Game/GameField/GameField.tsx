import { useCallback, useEffect, useRef } from 'react';

import styles from './style.module.scss';

import { type MergeEffectHandle, MergeEffect } from '@/components/Effects/MergeEffect/MergeEffect';
import {
  type DropIndicatorHandle,
  DropIndicator,
} from '@/components/Game/DropIndicator/DropIndicator';
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
}: Props) => {
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<DropIndicatorHandle | null>(null);

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
    (clientX: number) => {
      const surface = surfaceRef.current;
      if (!surface) return;
      const rect = surface.getBoundingClientRect();
      const ratio = clamp01((clientX - rect.left) / rect.width);
      pointerXRatioRef.current = ratio;
      scheduleIndicatorUpdate();
    },
    [scheduleIndicatorUpdate]
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canInteract) return;
    updatePointerFromEvent(e.clientX);
    surfaceRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 0 && e.pointerType === 'mouse') {
      // マウスホバーでも追従
      updatePointerFromEvent(e.clientX);
      return;
    }
    updatePointerFromEvent(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canInteract) return;
    updatePointerFromEvent(e.clientX);
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
      {canInteract ? (
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
