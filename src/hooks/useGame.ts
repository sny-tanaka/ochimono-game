import Matter from 'matter-js';
import { useCallback, useEffect, useRef, useState } from 'react';

import { GAME } from '@/constants/game';
import {
  ITEM_SPRITE_NATURAL_SIZE,
  itemForFieldWidth,
  MAX_DROPPABLE_LEVEL,
  MAX_ITEM_LEVEL,
} from '@/constants/items';
import { PHYSICS } from '@/constants/physics';
import { type ThemeId } from '@/constants/themes';
import { useScore } from '@/hooks/useScore';
import { useSound } from '@/hooks/useSound';
import type { GameStatus, MergeEffect } from '@/types/game';
import type { ItemDefinition } from '@/types/item';
import { createItemBody, createWalls, getItemDataFromBody, midpoint } from '@/utils/physics';
import { calcMergeScore, calcSpecialEliminationBonus } from '@/utils/score';
import { loadThemeId, saveThemeId } from '@/utils/storage';

// SVG パス（public 配下）に base URL を付与
const resolveTexturePath = (svgPath: string): string =>
  `${import.meta.env.BASE_URL}${svgPath}`.replace(/\/{2,}/g, '/');

const applySprite = (body: Matter.Body, item: ItemDefinition) => {
  // PNG のナチュラルサイズに対して直径 (radius * 2) になるよう拡大率を決める
  const scale = (item.radius * 2) / ITEM_SPRITE_NATURAL_SIZE;
  // xOffset/yOffset を 0.5 にしないと Matter.Render の drawImage が NaN になる
  // （body.render.sprite を後から代入する形式だと既定値が引き継がれない）。
  // @types/matter-js には xOffset/yOffset が無いためキャストで回避。
  body.render.sprite = {
    texture: resolveTexturePath(item.svgPath),
    xScale: scale,
    yScale: scale,
    xOffset: 0.5,
    yOffset: 0.5,
  } as Matter.IBodyRenderOptionsSprite;
};

export type UseGameResult = {
  status: GameStatus;
  score: number;
  bestScore: number;
  isNewRecord: boolean;
  currentItem: ItemDefinition | null;
  nextItem: ItemDefinition | null;
  isSoundOn: boolean;
  themeId: ThemeId;
  mergeEffects: MergeEffect[];
  canvasContainerRef: React.RefObject<HTMLDivElement | null>;
  drop: (xRatio: number) => void;
  start: () => void;
  restart: () => void;
  toggleSound: () => void;
  setThemeId: (id: ThemeId) => void;
  fieldWidth: number;
  fieldHeight: number;
  gameOverLineY: number;
};

export type UseGameOptions = {
  fieldWidth: number;
  fieldHeight: number;
};

export const useGame = ({ fieldWidth, fieldHeight }: UseGameOptions): UseGameResult => {
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const [status, setStatus] = useState<GameStatus>('idle');
  const [currentItem, setCurrentItem] = useState<ItemDefinition | null>(null);
  const [nextItem, setNextItem] = useState<ItemDefinition | null>(null);
  const [mergeEffects, setMergeEffects] = useState<MergeEffect[]>([]);

  const canDropRef = useRef(true);
  const lastDropAtRef = useRef(0);
  const statusRef = useRef<GameStatus>('idle');

  // 初期サイズで Matter を 1 度だけ構築する。リサイズ対応はしない。
  // アイテム半径のスケールも fieldWidth に依存するため同じ ref を共有する。
  const fieldWidthRef = useRef(fieldWidth);
  const fieldHeightRef = useRef(fieldHeight);

  // テーマ ID。初期値は localStorage 由来。lazy init で初回フラッシュを避ける。
  const [themeId, setThemeIdState] = useState<ThemeId>(() => loadThemeId());
  const themeIdRef = useRef<ThemeId>(themeId);
  themeIdRef.current = themeId;

  const score = useScore();
  const sound = useSound();

  const pickRandomDroppable = (): ItemDefinition => {
    const level = Math.floor(Math.random() * MAX_DROPPABLE_LEVEL) + 1;
    return itemForFieldWidth(level, fieldWidthRef.current, themeIdRef.current);
  };

  // セットアップ：Engine / Render / Runner / 壁
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const fw = fieldWidthRef.current;
    const fh = fieldHeightRef.current;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: PHYSICS.gravityY },
    });

    const render = Matter.Render.create({
      element: container,
      engine,
      options: {
        width: fw,
        height: fh,
        wireframes: false,
        background: 'transparent',
        // Retina (devicePixelRatio=3) のまま使うと毎フレーム描画ピクセルが
        // CSS の 9 倍になり、スマホで端末が顕著に発熱する。
        // 1.5 にクランプしても見た目はほぼ変わらず、GPU/CPU 負荷を大幅に下げられる。
        pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
      },
    });

    const { ground, leftWall, rightWall } = createWalls(fw, fh);
    [ground, leftWall, rightWall].forEach((w) => {
      w.render.visible = false;
    });
    Matter.World.add(engine.world, [ground, leftWall, rightWall]);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    engineRef.current = engine;
    renderRef.current = render;
    runnerRef.current = runner;

    // タブ・アプリ非アクティブ時は物理計算もレンダリングも止めて発熱・電池消費を抑える。
    // 復帰時はそのまま再開（経過時間で大幅にズレないよう Runner の dt に頼る）。
    const onVisibility = () => {
      if (document.hidden) {
        Matter.Runner.stop(runner);
        Matter.Render.stop(render);
      } else {
        Matter.Render.run(render);
        Matter.Runner.run(runner, engine);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      if (render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
      render.textures = {};
      engineRef.current = null;
      renderRef.current = null;
      runnerRef.current = null;
    };
  }, []);

  const handleMerge = useCallback(
    (bodyA: Matter.Body, bodyB: Matter.Body) => {
      const engine = engineRef.current;
      if (!engine) return;

      const dataA = getItemDataFromBody(bodyA);
      const dataB = getItemDataFromBody(bodyB);
      if (!dataA || !dataB) return;
      if (dataA.consumed || dataB.consumed) return;
      if (dataA.level !== dataB.level) return;

      dataA.consumed = true;
      dataB.consumed = true;

      const mergedLevel = dataA.level + 1;
      const center = midpoint(bodyA, bodyB);

      Matter.World.remove(engine.world, [bodyA, bodyB]);

      let addedScore = 0;
      let isSpecial = false;
      if (mergedLevel > MAX_ITEM_LEVEL) {
        // レベル10同士 → 消滅 + ボーナス
        addedScore = calcSpecialEliminationBonus();
        isSpecial = true;
        sound.play('special');
      } else {
        const mergedItem = itemForFieldWidth(
          mergedLevel,
          fieldWidthRef.current,
          themeIdRef.current
        );
        const newBody = createItemBody(mergedItem, center.x, center.y, performance.now());
        applySprite(newBody, mergedItem);
        Matter.World.add(engine.world, newBody);
        addedScore = calcMergeScore(mergedLevel);
        isSpecial = mergedLevel === MAX_ITEM_LEVEL;
        sound.play(isSpecial ? 'special' : 'merge');
      }

      score.add(addedScore);

      const effect: MergeEffect = {
        id: `${performance.now()}-${Math.random().toString(36).slice(2)}`,
        x: center.x,
        y: center.y,
        level: mergedLevel,
        score: addedScore,
        isSpecial,
        createdAt: performance.now(),
      };
      setMergeEffects((prev) => [...prev, effect]);
      window.setTimeout(() => {
        setMergeEffects((prev) => prev.filter((e) => e.id !== effect.id));
      }, GAME.mergeEffectDurationMs);
    },
    [score, sound]
  );

  // collisionStart リスナーで合体処理
  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    const onCollision = (event: Matter.IEventCollision<Matter.Engine>) => {
      for (const pair of event.pairs) {
        handleMerge(pair.bodyA, pair.bodyB);
      }
    };

    Matter.Events.on(engine, 'collisionStart', onCollision);
    return () => {
      Matter.Events.off(engine, 'collisionStart', onCollision);
    };
  }, [handleMerge]);

  const finalizeRef = useRef(score.finalize);
  finalizeRef.current = score.finalize;
  const playSoundRef = useRef(sound.play);
  playSoundRef.current = sound.play;

  // ゲームオーバー監視（afterUpdate）
  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    const gameOverLineY = PHYSICS.gameOverLineOffset;

    const onAfterUpdate = () => {
      if (statusRef.current !== 'playing') return;

      const now = performance.now();
      const bodies = Matter.Composite.allBodies(engine.world);
      for (const body of bodies) {
        const data = getItemDataFromBody(body);
        if (!data || data.consumed) continue;
        if (now - data.droppedAt < PHYSICS.gameOverGracePeriodMs) continue;
        if (Math.abs(body.velocity.y) > PHYSICS.restingVelocityThreshold) continue;
        if (body.position.y - body.circleRadius! < gameOverLineY) {
          statusRef.current = 'gameover';
          setStatus('gameover');
          const result = finalizeRef.current();
          playSoundRef.current(result.isNewRecord ? 'highscore' : 'gameover');
          return;
        }
      }
    };

    Matter.Events.on(engine, 'afterUpdate', onAfterUpdate);
    return () => {
      Matter.Events.off(engine, 'afterUpdate', onAfterUpdate);
    };
  }, []);

  // テーマ切り替え時：物理世界の既存ボディの sprite と、UI が参照する currentItem/nextItem を
  // 新テーマのパスに張り替える。半径や物理パラメータは触らない。
  useEffect(() => {
    const engine = engineRef.current;
    if (engine) {
      for (const body of Matter.Composite.allBodies(engine.world)) {
        const data = getItemDataFromBody(body);
        if (!data || data.consumed) continue;
        const item = itemForFieldWidth(data.level, fieldWidthRef.current, themeId);
        applySprite(body, item);
      }
    }
    setCurrentItem((prev) =>
      prev ? itemForFieldWidth(prev.level, fieldWidthRef.current, themeId) : null
    );
    setNextItem((prev) =>
      prev ? itemForFieldWidth(prev.level, fieldWidthRef.current, themeId) : null
    );
  }, [themeId]);

  const setThemeId = useCallback((next: ThemeId) => {
    setThemeIdState(next);
    saveThemeId(next);
  }, []);

  const drop = useCallback(
    (xRatio: number) => {
      const engine = engineRef.current;
      if (!engine) return;
      if (statusRef.current !== 'playing') return;
      if (!canDropRef.current) return;
      if (!currentItem) return;

      const now = performance.now();
      if (now - lastDropAtRef.current < GAME.dropCooldownMs) return;

      const clamped = Math.max(0, Math.min(1, xRatio));
      const margin = currentItem.radius + PHYSICS.wallThickness / 2;
      const xMin = margin;
      const xMax = fieldWidthRef.current - margin;
      const x = xMin + clamped * (xMax - xMin);
      const y = currentItem.radius + 4;

      const body = createItemBody(currentItem, x, y, now);
      applySprite(body, currentItem);
      Matter.World.add(engine.world, body);

      sound.play('drop');
      canDropRef.current = false;
      lastDropAtRef.current = now;

      // クールダウン後に NEXT を current に昇格
      window.setTimeout(() => {
        if (statusRef.current !== 'playing') return;
        setCurrentItem(nextItem);
        setNextItem(pickRandomDroppable());
        canDropRef.current = true;
      }, GAME.dropCooldownMs);
    },
    [currentItem, nextItem, sound]
  );

  const start = useCallback(() => {
    score.reset();
    setMergeEffects([]);
    setCurrentItem(pickRandomDroppable());
    setNextItem(pickRandomDroppable());
    canDropRef.current = true;
    lastDropAtRef.current = 0;
    statusRef.current = 'playing';
    setStatus('playing');
  }, [score]);

  const restart = useCallback(() => {
    const engine = engineRef.current;
    if (engine) {
      // すべてのアイテムボディを削除（壁は残す）
      const bodies = Matter.Composite.allBodies(engine.world);
      for (const b of bodies) {
        if (getItemDataFromBody(b)) {
          Matter.World.remove(engine.world, b);
        }
      }
    }
    start();
  }, [start]);

  const gameOverLineY = PHYSICS.gameOverLineOffset;

  return {
    status,
    score: score.score,
    bestScore: score.bestScore,
    isNewRecord: score.isNewRecord,
    currentItem,
    nextItem,
    isSoundOn: sound.isSoundOn,
    themeId,
    mergeEffects,
    canvasContainerRef,
    drop,
    start,
    restart,
    toggleSound: sound.toggle,
    setThemeId,
    fieldWidth,
    fieldHeight,
    gameOverLineY,
  };
};
