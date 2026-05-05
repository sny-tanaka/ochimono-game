import Matter from 'matter-js';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { MergeEffectHandle } from '@/components/Effects/MergeEffect/MergeEffect';
import { GAME } from '@/constants/game';
import {
  ITEM_SPRITE_NATURAL_SIZE,
  itemForFieldWidth,
  MAX_DROPPABLE_LEVEL,
  MAX_ITEM_LEVEL,
} from '@/constants/items';
import { PHYSICS } from '@/constants/physics';
import { THEMES, type ThemeId } from '@/constants/themes';
import { useScore } from '@/hooks/useScore';
import { useSound } from '@/hooks/useSound';
import type { GameStatus } from '@/types/game';
import type { ItemDefinition } from '@/types/item';
import { createItemBody, createWalls, getItemDataFromBody, midpoint } from '@/utils/physics';
import { calcMergeScore, calcSpecialEliminationBonus } from '@/utils/score';
import { loadThemeId, saveThemeId } from '@/utils/storage';

// (level, themeId) → 解決済みテクスチャ URL のキャッシュ。
// itemForFieldWidth とは別に、文字列レベルでも同一参照を返せるようにして
// Matter.Render が内部で使う `render.textures[url]` のキャッシュヒット率を高める。
const textureUrlCache = new Map<string, string>();

const resolveTextureUrlCached = (svgPath: string): string => {
  const cached = textureUrlCache.get(svgPath);
  if (cached) return cached;
  const resolved = `${import.meta.env.BASE_URL}${svgPath}`.replace(/\/{2,}/g, '/');
  textureUrlCache.set(svgPath, resolved);
  return resolved;
};

const applySprite = (body: Matter.Body, item: ItemDefinition) => {
  // PNG のナチュラルサイズに対して直径 (radius * 2) になるよう拡大率を決める
  const scale = (item.radius * 2) / ITEM_SPRITE_NATURAL_SIZE;
  // xOffset/yOffset を 0.5 にしないと Matter.Render の drawImage が NaN になる
  // （body.render.sprite を後から代入する形式だと既定値が引き継がれない）。
  // @types/matter-js には xOffset/yOffset が無いためキャストで回避。
  body.render.sprite = {
    texture: resolveTextureUrlCached(item.svgPath),
    xScale: scale,
    yScale: scale,
    xOffset: 0.5,
    yOffset: 0.5,
  } as Matter.IBodyRenderOptionsSprite;
};

// 全テーマ × 全レベルの PNG をブラウザに先読みさせる。
// 初回合体時にブラウザの decode コストで Matter のフレームが詰まるのを防ぐ。
const preloadedTextures = new Set<string>();
const preloadTexturesForTheme = (themeId: ThemeId) => {
  for (let level = 1; level <= MAX_ITEM_LEVEL; level += 1) {
    // svgPath は items の imagePathForTheme と同形式。Item を生成して URL だけ拾う。
    const item = itemForFieldWidth(level, 1, themeId);
    const url = resolveTextureUrlCached(item.svgPath);
    if (preloadedTextures.has(url)) continue;
    preloadedTextures.add(url);
    const img = new Image();
    img.src = url;
  }
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
  // 命令的に effect を流し込むためのハンドル ref。GameField に渡す。
  mergeEffectRef: React.RefObject<MergeEffectHandle | null>;
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
  // GameField に渡して命令的に effect 追加してもらうためのハンドル。
  const mergeEffectRef = useRef<MergeEffectHandle | null>(null);

  const [status, setStatus] = useState<GameStatus>('idle');
  const [currentItem, setCurrentItem] = useState<ItemDefinition | null>(null);
  const [nextItem, setNextItem] = useState<ItemDefinition | null>(null);

  // drop / handleMerge / restart の中で同期的に最新値を読みたいため ref も保持。
  const currentItemRef = useRef<ItemDefinition | null>(null);
  const nextItemRef = useRef<ItemDefinition | null>(null);

  const setCurrentItemSynced = useCallback((next: ItemDefinition | null) => {
    currentItemRef.current = next;
    setCurrentItem(next);
  }, []);
  const setNextItemSynced = useCallback((next: ItemDefinition | null) => {
    nextItemRef.current = next;
    setNextItem(next);
  }, []);

  const canDropRef = useRef(true);
  const lastDropAtRef = useRef(0);
  const statusRef = useRef<GameStatus>('idle');
  // drop の昇格 setTimeout を restart で確実にキャンセルできるよう保持。
  const promotionTimerRef = useRef<number | null>(null);

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

  // collision / afterUpdate / drop の useCallback deps を空にできるように、
  // 副作用の起点となる最新関数は ref に逃がす（張り替え抑制）。
  const scoreAddRef = useRef(score.add);
  scoreAddRef.current = score.add;
  const playSoundRef = useRef(sound.play);
  playSoundRef.current = sound.play;
  const finalizeRef = useRef(score.finalize);
  finalizeRef.current = score.finalize;

  // ゲームオーバー判定で `Composite.allBodies` を毎ティック走査すると
  // 連打中に高コスト + 配列確保が走るため、アイテム body は自前 Set でも保持する。
  const itemBodiesRef = useRef<Set<Matter.Body>>(new Set());

  const pickRandomDroppable = useCallback((): ItemDefinition => {
    const level = Math.floor(Math.random() * MAX_DROPPABLE_LEVEL) + 1;
    return itemForFieldWidth(level, fieldWidthRef.current, themeIdRef.current);
  }, []);

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

    // 全テーマのテクスチャを先読みして初回 decode コストを排除。
    // start 前から先読みしておけばテーマ切替直後の表示も滑らか。
    for (const t of THEMES) preloadTexturesForTheme(t.id);

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

    // cleanup 内で ref.current を直接参照すると react-hooks/exhaustive-deps の警告が出る。
    // この Set は engine と同じライフサイクルで管理する純内部状態なので、
    // ローカル変数経由で参照することで警告を回避する。
    const itemBodies = itemBodiesRef.current;

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
      itemBodies.clear();
    };
  }, []);

  // handleMerge は collision listener から呼ばれる。
  // listener 自体を張り替えないよう、内部で参照する関数はすべて ref 経由にして deps を [] に固定する。
  const handleMerge = useCallback((bodyA: Matter.Body, bodyB: Matter.Body) => {
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
    itemBodiesRef.current.delete(bodyA);
    itemBodiesRef.current.delete(bodyB);

    let addedScore = 0;
    let isSpecial = false;
    if (mergedLevel > MAX_ITEM_LEVEL) {
      // レベル10同士 → 消滅 + ボーナス
      addedScore = calcSpecialEliminationBonus();
      isSpecial = true;
      playSoundRef.current('special');
    } else {
      const mergedItem = itemForFieldWidth(mergedLevel, fieldWidthRef.current, themeIdRef.current);
      const newBody = createItemBody(mergedItem, center.x, center.y, performance.now());
      applySprite(newBody, mergedItem);
      Matter.World.add(engine.world, newBody);
      itemBodiesRef.current.add(newBody);
      addedScore = calcMergeScore(mergedLevel);
      isSpecial = mergedLevel === MAX_ITEM_LEVEL;
      playSoundRef.current(isSpecial ? 'special' : 'merge');
    }

    scoreAddRef.current(addedScore);

    // React state を介さず、命令的レイヤーに直接 effect を流し込む。
    // 連打時に React commit が増えないので画面が固まりにくい。
    mergeEffectRef.current?.add({ x: center.x, y: center.y, score: addedScore, isSpecial });
  }, []);

  // collisionStart リスナーは初回のみアタッチ（deps を [] に）。
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

  // ゲームオーバー監視（afterUpdate）
  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    const gameOverLineY = PHYSICS.gameOverLineOffset;
    let tick = 0;

    const onAfterUpdate = () => {
      if (statusRef.current !== 'playing') return;
      // afterUpdate は ~60Hz で呼ばれる。毎ティック全 body を走査するのは重いので
      // 6 ティックに 1 度（≒ 10Hz）だけ判定する。落下後 grace period を考慮しても十分。
      tick = (tick + 1) % 6;
      if (tick !== 0) return;

      const now = performance.now();
      // Composite.allBodies(...) は毎回新しい配列を確保するので、自前 Set を反復して回避。
      for (const body of itemBodiesRef.current) {
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
      // テーマ切替時のテクスチャ先読み
      preloadTexturesForTheme(themeId);
      for (const body of itemBodiesRef.current) {
        const data = getItemDataFromBody(body);
        if (!data || data.consumed) continue;
        const item = itemForFieldWidth(data.level, fieldWidthRef.current, themeId);
        applySprite(body, item);
      }
    }
    const nextCurrent = currentItemRef.current
      ? itemForFieldWidth(currentItemRef.current.level, fieldWidthRef.current, themeId)
      : null;
    const nextNext = nextItemRef.current
      ? itemForFieldWidth(nextItemRef.current.level, fieldWidthRef.current, themeId)
      : null;
    setCurrentItemSynced(nextCurrent);
    setNextItemSynced(nextNext);
  }, [themeId, setCurrentItemSynced, setNextItemSynced]);

  const setThemeId = useCallback((next: ThemeId) => {
    setThemeIdState(next);
    saveThemeId(next);
  }, []);

  // drop / start / restart はいずれも ref を介して最新の current/next を読むので
  // useCallback の deps を空にできる（参照が安定 → GameField の handler も安定）。
  const drop = useCallback(
    (xRatio: number) => {
      const engine = engineRef.current;
      if (!engine) return;
      if (statusRef.current !== 'playing') return;
      if (!canDropRef.current) return;
      const current = currentItemRef.current;
      if (!current) return;

      const now = performance.now();
      if (now - lastDropAtRef.current < GAME.dropCooldownMs) return;

      const clamped = Math.max(0, Math.min(1, xRatio));
      const margin = current.radius + PHYSICS.wallThickness / 2;
      const xMin = margin;
      const xMax = fieldWidthRef.current - margin;
      const x = xMin + clamped * (xMax - xMin);
      const y = current.radius + 4;

      const body = createItemBody(current, x, y, now);
      applySprite(body, current);
      Matter.World.add(engine.world, body);
      itemBodiesRef.current.add(body);

      playSoundRef.current('drop');
      canDropRef.current = false;
      lastDropAtRef.current = now;

      // クールダウン後に NEXT を current に昇格
      if (promotionTimerRef.current !== null) {
        window.clearTimeout(promotionTimerRef.current);
      }
      promotionTimerRef.current = window.setTimeout(() => {
        promotionTimerRef.current = null;
        if (statusRef.current !== 'playing') return;
        // ref → state の順で同期更新する（次回 drop が即座に反映できるように）。
        setCurrentItemSynced(nextItemRef.current);
        setNextItemSynced(pickRandomDroppable());
        canDropRef.current = true;
      }, GAME.dropCooldownMs);
    },
    [pickRandomDroppable, setCurrentItemSynced, setNextItemSynced]
  );

  const start = useCallback(() => {
    score.reset();
    mergeEffectRef.current?.clear();
    setCurrentItemSynced(pickRandomDroppable());
    setNextItemSynced(pickRandomDroppable());
    canDropRef.current = true;
    lastDropAtRef.current = 0;
    statusRef.current = 'playing';
    setStatus('playing');
  }, [score, pickRandomDroppable, setCurrentItemSynced, setNextItemSynced]);

  const restart = useCallback(() => {
    const engine = engineRef.current;
    if (engine) {
      // すべてのアイテムボディを削除（壁は残す）。自前 Set からも消す。
      for (const b of itemBodiesRef.current) {
        Matter.World.remove(engine.world, b);
      }
      itemBodiesRef.current.clear();
    }
    if (promotionTimerRef.current !== null) {
      window.clearTimeout(promotionTimerRef.current);
      promotionTimerRef.current = null;
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
    mergeEffectRef,
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
