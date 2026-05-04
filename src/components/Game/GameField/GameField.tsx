import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

import { MergeEffect } from '@/components/Effects/MergeEffect/MergeEffect';
import { DropIndicator } from '@/components/Game/DropIndicator/DropIndicator';
import type { MergeEffect as MergeEffectType } from '@/types/game';
import type { ItemDefinition } from '@/types/item';

type Props = {
  canvasContainerRef: React.RefObject<HTMLDivElement | null>;
  fieldWidth: number;
  fieldHeight: number;
  gameOverLineY: number;
  currentItem: ItemDefinition | null;
  mergeEffects: MergeEffectType[];
  canInteract: boolean;
  onDrop: (xRatio: number) => void;
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

export const GameField = ({
  canvasContainerRef,
  fieldWidth,
  fieldHeight,
  gameOverLineY,
  currentItem,
  mergeEffects,
  canInteract,
  onDrop,
}: Props) => {
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const [pointerXRatio, setPointerXRatio] = useState(0.5);

  const updatePointerFromEvent = useCallback((clientX: number) => {
    const surface = surfaceRef.current;
    if (!surface) return;
    const rect = surface.getBoundingClientRect();
    const ratio = clamp01((clientX - rect.left) / rect.width);
    setPointerXRatio(ratio);
  }, []);

  // currentItem が変わったら一度中央に戻す
  useEffect(() => {
    setPointerXRatio(0.5);
  }, [currentItem?.level]);

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
    onDrop(pointerXRatio);
    surfaceRef.current?.releasePointerCapture(e.pointerId);
  };

  const indicatorX = currentItem
    ? Math.max(
        currentItem.radius,
        Math.min(fieldWidth - currentItem.radius, pointerXRatio * fieldWidth)
      )
    : pointerXRatio * fieldWidth;

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
          x={indicatorX}
          fieldHeight={fieldHeight}
          item={currentItem}
        />
      ) : null}
      <MergeEffect effects={mergeEffects} />
    </div>
  );
};
