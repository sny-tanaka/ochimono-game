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
import {
  COLLISION_CATEGORY,
  ITEM_COLLISION_MASK,
  MAGNET_TARGET_COLLISION_MASK,
  PHYSICS,
} from '@/constants/physics';
import { gaugeGainForMerge, SKILL, skillCostPoints, type SkillKind } from '@/constants/skill';
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

// 全テーマ × 全レベルの PNG を先読みする。
// `createImageBitmap` で「メインスレッドを止めずに」 decode し、結果の `ImageBitmap` を
// Matter.Render のテクスチャキャッシュ (`render.textures[url]`) に直接登録する。
// これにより Matter._getTexture が初使用時に `new Image()` を作って decode するパスが
// スキップされ、合体時のフレーム詰まり（特に大きい PNG: level08 / level10）が緩和される。
const preloadedTextures = new Set<string>();
const preloadTexturesForTheme = async (
  themeId: ThemeId,
  render: Matter.Render | null
): Promise<void> => {
  for (let level = 1; level <= MAX_ITEM_LEVEL; level += 1) {
    // svgPath は items の imagePathForTheme と同形式。Item を生成して URL だけ拾う。
    const item = itemForFieldWidth(level, 1, themeId);
    const url = resolveTextureUrlCached(item.svgPath);
    if (preloadedTextures.has(url)) continue;
    preloadedTextures.add(url);

    try {
      const res = await fetch(url);
      const blob = await res.blob();
      // ブラウザ実装によっては Worker / 別スレッドで decode されるため、
      // メインスレッドが大きい PNG のデコードでブロックされない。
      const bitmap = await createImageBitmap(blob);
      // Matter.Render の textures キャッシュに直接登録。
      // `_getTexture` は登録済みオブジェクトをそのまま返し、`drawImage` は
      // `ImageBitmap` も `HTMLImageElement` も同様に受け付ける。
      // 型定義 (@types/matter-js) に textures は含まれていないため as でキャスト。
      if (render) {
        (render as unknown as { textures: Record<string, ImageBitmap> }).textures[url] = bitmap;
      }
    } catch {
      // createImageBitmap 不可 / fetch 失敗時のフォールバック: 従来の Image 方式。
      // ブラウザに勝手にロード・decode させて Matter._getTexture 任せにする。
      const img = new Image();
      img.src = url;
    }
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
  // 必殺技ゲージ（0..SKILL.gaugeMax）
  skillGauge: number;
  skillGaugeMax: number;
  skillSegmentMax: number;
  skillSegmentCount: number;
  // メニューを開ける状態（最低 1 セグメント以上）
  canOpenSkillMenu: boolean;
  // 各必殺技ごとの発動可否（コスト充足）
  canUseSkill: Record<SkillKind, boolean>;
  // 必殺技選択メニューの表示状態
  isSkillMenuOpen: boolean;
  openSkillMenu: () => void;
  closeSkillMenu: () => void;
  selectSkill: (kind: SkillKind) => void;
  // マグネット必殺技：対象選択モード（フィールド上のアイテムタップ待機）
  isMagnetSelecting: boolean;
  cancelMagnetSelecting: () => void;
  selectMagnetTarget: (clientX: number, clientY: number) => void;
  // 重力反転中フラグ。エフェクトオーバーレイ表示用。
  isGravityFlipped: boolean;
  // ゲームオーバーまでの残り秒数（ライン超過状態で 5..1 を返す）。null なら非危機状態。
  gameOverCountdown: number | null;
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

  // ─── 必殺技関連 state / ref ───────────────────────────────────────────
  const [skillGauge, setSkillGauge] = useState(0);
  // collision listener から最新値を読みつつ、setSkillGauge も走らせる必要があるので両持ち。
  const skillGaugeRef = useRef(0);
  const setSkillGaugeBoth = useCallback((next: number) => {
    skillGaugeRef.current = next;
    setSkillGauge(next);
  }, []);
  const addSkillGauge = useCallback(
    (amount: number) => {
      const next = Math.min(SKILL.gaugeMax, skillGaugeRef.current + amount);
      if (next === skillGaugeRef.current) return;
      setSkillGaugeBoth(next);
    },
    [setSkillGaugeBoth]
  );
  // handleMerge / collision listener から呼べるよう ref 経由でアクセスする。
  const addSkillGaugeRef = useRef(addSkillGauge);
  addSkillGaugeRef.current = addSkillGauge;

  const [isSkillMenuOpen, setIsSkillMenuOpen] = useState(false);
  const [isMagnetSelecting, setIsMagnetSelecting] = useState(false);
  const isMagnetSelectingRef = useRef(false);
  const [isGravityFlipped, setIsGravityFlipped] = useState(false);
  // 反転中 + 叩きつけ中は天井に張り付いたアイテムでゲームオーバーラインが発火しないよう、
  // afterUpdate からも参照できる ref を別管理する。発動中は isDanger 判定を skip する。
  const gravitySkillActiveRef = useRef(false);

  // 発動中の必殺技を一意に識別する（多重発動防止）
  const activeSkillRef = useRef<SkillKind | null>(null);
  // 重力反転 / マグネット のタイマー
  const gravityFlipTimerRef = useRef<number | null>(null);
  const magnetEndAtRef = useRef<number | null>(null);
  const magnetLevelRef = useRef<number | null>(null);
  // マグネット中に collisionFilter を書き換えた body 一覧。
  // 発動終了 / 中断 / restart で確実に通常カテゴリに戻すために保持する。
  const magnetTaggedBodiesRef = useRef<Set<Matter.Body>>(new Set());

  // マグネットで対象に指定した body を MAGNET_TARGET カテゴリに切り替える。
  // 結果: 壁と他の対象には衝突するが、非対象 item とは衝突せず擦り抜ける。
  const tagAsMagnetTarget = useCallback((body: Matter.Body) => {
    body.collisionFilter.category = COLLISION_CATEGORY.magnetTarget;
    body.collisionFilter.mask = MAGNET_TARGET_COLLISION_MASK;
    magnetTaggedBodiesRef.current.add(body);
  }, []);

  // 対象タグを通常 item に戻す。発動終了 / 中断 / restart で必ず呼ぶ。
  const untagAllMagnetTargets = useCallback(() => {
    for (const body of magnetTaggedBodiesRef.current) {
      body.collisionFilter.category = COLLISION_CATEGORY.item;
      body.collisionFilter.mask = ITEM_COLLISION_MASK;
    }
    magnetTaggedBodiesRef.current.clear();
  }, []);

  // マグネット必殺技の終了処理（時間切れ / 対象消滅 / 中断）。
  const endMagnet = useCallback(() => {
    untagAllMagnetTargets();
    magnetEndAtRef.current = null;
    magnetLevelRef.current = null;
    if (activeSkillRef.current === 'magnet') activeSkillRef.current = null;
  }, [untagAllMagnetTargets]);

  // afterUpdate 内（deps を [] に固定したいので ref で参照）
  const endMagnetRef = useRef(endMagnet);
  endMagnetRef.current = endMagnet;

  // ─── ゲームオーバー判定（5秒猶予 + カウントダウン） ─────────────────
  // ライン超過を最初に検出した時刻。null は危機状態でない。
  const gameOverDangerSinceRef = useRef<number | null>(null);
  const [gameOverCountdown, setGameOverCountdown] = useState<number | null>(null);
  // 直近に setState した残り秒数。afterUpdate のたびに setState すると再レンダーが多すぎるので
  // 値が変わった時だけ commit する。
  const lastCountdownRef = useRef<number | null>(null);

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

    const { ground, leftWall, rightWall, ceiling } = createWalls(fw, fh);
    [ground, leftWall, rightWall, ceiling].forEach((w) => {
      w.render.visible = false;
    });
    Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    engineRef.current = engine;
    renderRef.current = render;
    runnerRef.current = runner;

    // 全テーマのテクスチャを先読みして初回 decode コストを排除。
    // start 前から先読みしておけばテーマ切替直後の表示も滑らか。
    // 非同期でバックグラウンド処理にするので await はしない。
    for (const t of THEMES) void preloadTexturesForTheme(t.id, render);

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
    let gaugeGain = gaugeGainForMerge(mergedLevel);
    if (mergedLevel > MAX_ITEM_LEVEL) {
      // レベル10同士 → 消滅 + ボーナス
      addedScore = calcSpecialEliminationBonus();
      isSpecial = true;
      gaugeGain += SKILL.bonusOnSpecialElimination;
      playSoundRef.current('special');
    } else {
      const mergedItem = itemForFieldWidth(mergedLevel, fieldWidthRef.current, themeIdRef.current);
      const newBody = createItemBody(mergedItem, center.x, center.y, performance.now());
      applySprite(newBody, mergedItem);
      Matter.World.add(engine.world, newBody);
      itemBodiesRef.current.add(newBody);
      addedScore = calcMergeScore(mergedLevel);
      isSpecial = mergedLevel === MAX_ITEM_LEVEL;
      if (isSpecial) gaugeGain += SKILL.bonusOnLevel10Created;
      playSoundRef.current(isSpecial ? 'special' : 'merge');
    }

    scoreAddRef.current(addedScore);
    addSkillGaugeRef.current(gaugeGain);

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

  // ゲームオーバー監視 + マグネット引力適用（afterUpdate）
  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;

    const gameOverLineY = PHYSICS.gameOverLineOffset;
    let tick = 0;

    // 危機状態をリセットして UI のカウントダウンも消す
    const clearDanger = () => {
      gameOverDangerSinceRef.current = null;
      if (lastCountdownRef.current !== null) {
        lastCountdownRef.current = null;
        setGameOverCountdown(null);
      }
    };

    const onAfterUpdate = () => {
      // ── マグネット必殺技：active なら毎フレーム同レベル body を中心に引き寄せる ──
      if (magnetEndAtRef.current !== null) {
        const now = performance.now();
        if (now >= magnetEndAtRef.current) {
          endMagnetRef.current();
        } else {
          // 対象 body は magnetTaggedBodiesRef で管理している（発動時にタグ付け済み）。
          // 合体で消費された body は consumed フラグがつくので毎フレーム除外する。
          const targets: Matter.Body[] = [];
          for (const b of magnetTaggedBodiesRef.current) {
            const data = getItemDataFromBody(b);
            if (data && !data.consumed) targets.push(b);
          }
          if (targets.length >= 2) {
            let cx = 0;
            let cy = 0;
            for (const b of targets) {
              cx += b.position.x;
              cy += b.position.y;
            }
            cx /= targets.length;
            cy /= targets.length;
            for (const b of targets) {
              const dx = cx - b.position.x;
              const dy = cy - b.position.y;
              const dist = Math.hypot(dx, dy);
              if (dist < 1) continue;
              const f = SKILL.magnet.forceMagnitude * b.mass;
              Matter.Body.applyForce(b, b.position, {
                x: (dx / dist) * f,
                y: (dy / dist) * f,
              });
            }
          } else {
            // 1 個以下なら引き寄せ意味なし、即終了
            endMagnetRef.current();
          }
        }
      }

      if (statusRef.current !== 'playing') return;
      // 重力反転 / 叩きつけ中は天井張り付き等で誤判定が出るのでゲームオーバー検査を skip。
      if (gravitySkillActiveRef.current) {
        // 発動前から進んでいた危機状態カウントダウンも一旦解除する
        if (gameOverDangerSinceRef.current !== null) {
          gameOverDangerSinceRef.current = null;
          if (lastCountdownRef.current !== null) {
            lastCountdownRef.current = null;
            setGameOverCountdown(null);
          }
        }
        return;
      }
      // afterUpdate は ~60Hz で呼ばれる。ゲームオーバー判定は 6 ティックに 1 度（≒ 10Hz）。
      tick = (tick + 1) % 6;
      if (tick !== 0) return;

      const now = performance.now();
      let isDanger = false;
      // Composite.allBodies(...) は毎回新しい配列を確保するので、自前 Set を反復して回避。
      for (const body of itemBodiesRef.current) {
        const data = getItemDataFromBody(body);
        if (!data || data.consumed) continue;
        if (now - data.droppedAt < PHYSICS.gameOverGracePeriodMs) continue;
        if (Math.abs(body.velocity.y) > PHYSICS.restingVelocityThreshold) continue;
        if (body.position.y - body.circleRadius! < gameOverLineY) {
          isDanger = true;
          break;
        }
      }

      if (!isDanger) {
        clearDanger();
        return;
      }

      // ライン超過状態。最初の検出時刻を記録して 5 秒経過で gameover 確定。
      if (gameOverDangerSinceRef.current === null) {
        gameOverDangerSinceRef.current = now;
      }
      const elapsed = now - gameOverDangerSinceRef.current;
      const limit = PHYSICS.gameOverDangerLimitMs;
      if (elapsed >= limit) {
        clearDanger();
        statusRef.current = 'gameover';
        setStatus('gameover');
        const result = finalizeRef.current();
        playSoundRef.current(result.isNewRecord ? 'highscore' : 'gameover');
        return;
      }
      // 残り秒数（5..1）。値が変わった時だけ setState して再レンダーを抑える。
      const remaining = Math.max(1, Math.ceil((limit - elapsed) / 1000));
      if (remaining !== lastCountdownRef.current) {
        lastCountdownRef.current = remaining;
        setGameOverCountdown(remaining);
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
      // テーマ切替時のテクスチャ先読み（バックグラウンド）
      void preloadTexturesForTheme(themeId, renderRef.current);
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

  // ─── 必殺技：発動 ─────────────────────────────────────────────────────
  const setIsMagnetSelectingBoth = useCallback((next: boolean) => {
    isMagnetSelectingRef.current = next;
    setIsMagnetSelecting(next);
  }, []);

  const consumeGaugeBy = useCallback(
    (amount: number) => {
      setSkillGaugeBoth(Math.max(0, skillGaugeRef.current - amount));
    },
    [setSkillGaugeBoth]
  );

  // シェイク：全アイテムにランダムな衝撃を与える
  const activateShake = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    activeSkillRef.current = 'shake';
    const { impulseMin, impulseMax, upwardBias } = SKILL.shake;
    for (const body of itemBodiesRef.current) {
      const data = getItemDataFromBody(body);
      if (!data || data.consumed) continue;
      const angle = Math.random() * Math.PI * 2;
      const mag = impulseMin + Math.random() * (impulseMax - impulseMin);
      const fx = Math.cos(angle) * mag * body.mass;
      // 上方向に少し強くする（負の y が上）
      const fy = (Math.sin(angle) * mag - upwardBias) * body.mass;
      Matter.Body.applyForce(body, body.position, { x: fx, y: fy });
    }
    playSoundRef.current('special');
    activeSkillRef.current = null;
  }, []);

  // 重力反転：3 秒だけ engine.gravity.y を反転、タイマーで戻す。
  // 反転中は body の frictionAir を一時的に上げて「ふわふわ漂う」感じにする。
  // 反転終了直後は slamDurationMs の間、重力を増幅 + 空気抵抗ゼロにして
  // アイテムを床に叩きつけて大きくバウンドさせる。
  const activateGravityFlip = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    if (gravityFlipTimerRef.current !== null) return; // 多重発動禁止
    activeSkillRef.current = 'gravityFlip';
    gravitySkillActiveRef.current = true;
    const originalGravity = PHYSICS.gravityY;
    engine.gravity.y = originalGravity * SKILL.gravityFlip.multiplier;
    // 各 body の元 frictionAir / restitution を覚えておいて、発動終了時に戻す。
    const originalAir = new Map<Matter.Body, number>();
    const originalRestitution = new Map<Matter.Body, number>();
    for (const body of itemBodiesRef.current) {
      originalAir.set(body, body.frictionAir);
      originalRestitution.set(body, body.restitution);
      body.frictionAir = SKILL.gravityFlip.frictionAir;
      // 床 / 壁の静止摩擦で動かない body を剥がすため、上向きの初速を一律で注入。
      Matter.Body.setVelocity(body, {
        x: body.velocity.x,
        y: SKILL.gravityFlip.liftKickVelocity,
      });
    }
    setIsGravityFlipped(true);
    playSoundRef.current('special');
    gravityFlipTimerRef.current = window.setTimeout(() => {
      // ─── 叩きつけフェーズ：重力を強めて空気抵抗を切る + 反発係数を上書き ───
      const e = engineRef.current;
      if (e) e.gravity.y = originalGravity * SKILL.gravityFlip.slamGravityMultiplier;
      for (const body of itemBodiesRef.current) {
        body.frictionAir = SKILL.gravityFlip.slamFrictionAir;
        // restitution は body 生成時に Map に入れた個別値を覚えてあるので、
        // 発動中に追加された body も含めて改めて記録 → 上書き
        if (!originalRestitution.has(body)) {
          originalRestitution.set(body, body.restitution);
        }
        body.restitution = SKILL.gravityFlip.slamRestitution;
        // 天井 / 壁の摩擦で張り付いた body も剥がして落ちるよう、下方向の初速を注入。
        Matter.Body.setVelocity(body, {
          x: body.velocity.x,
          y: SKILL.gravityFlip.slamKickVelocity,
        });
      }
      setIsGravityFlipped(false); // オーバーレイ演出は終了
      playSoundRef.current('special');

      gravityFlipTimerRef.current = window.setTimeout(() => {
        // ─── 通常重力に復元 ───
        const e2 = engineRef.current;
        if (e2) e2.gravity.y = originalGravity;
        for (const body of itemBodiesRef.current) {
          // 発動中に追加で生まれた body は Map に無いので Matter デフォルトにフォールバック
          body.frictionAir = originalAir.get(body) ?? 0.01;
          body.restitution = originalRestitution.get(body) ?? 0.4;
        }
        gravityFlipTimerRef.current = null;
        gravitySkillActiveRef.current = false;
        if (activeSkillRef.current === 'gravityFlip') activeSkillRef.current = null;
      }, SKILL.gravityFlip.slamDurationMs);
    }, SKILL.gravityFlip.durationMs);
  }, []);

  // マグネット：選択中モードに入る。実際の引力は selectMagnetTarget で開始する。
  const activateMagnet = useCallback(() => {
    activeSkillRef.current = 'magnet';
    setIsMagnetSelectingBoth(true);
  }, [setIsMagnetSelectingBoth]);

  const cancelMagnetSelecting = useCallback(() => {
    if (!isMagnetSelectingRef.current) return;
    setIsMagnetSelectingBoth(false);
    activeSkillRef.current = null;
    // ゲージは消費していないのでそのまま戻す
  }, [setIsMagnetSelectingBoth]);

  const selectMagnetTarget = useCallback(
    (clientX: number, clientY: number) => {
      if (!isMagnetSelectingRef.current) return;
      const bodies = Array.from(itemBodiesRef.current);
      const hits = Matter.Query.point(bodies, { x: clientX, y: clientY });
      if (hits.length === 0) return; // ハズレ：選択モード継続
      const tapped = hits[0];
      const data = getItemDataFromBody(tapped);
      if (!data) return;
      // 同レベルの「タップ対象を除いた」候補から 1 個だけランダムに選ぶ。
      // 全員引き寄せだと強すぎたので、1 対 1 のお見合いに制限する。
      const others = bodies.filter((b) => {
        if (b === tapped) return false;
        const d = getItemDataFromBody(b);
        return !!d && !d.consumed && d.level === data.level;
      });
      if (others.length === 0) return; // 同レベルが他にいない → 選択モード継続
      const partner = others[Math.floor(Math.random() * others.length)];
      // タップ対象 + パートナーの 2 体だけ MAGNET_TARGET カテゴリに切り替える。
      // 非対象アイテムを擦り抜けて飛べるようになる。発動終了時に必ず元に戻す。
      tagAsMagnetTarget(tapped);
      tagAsMagnetTarget(partner);
      magnetLevelRef.current = data.level;
      magnetEndAtRef.current = performance.now() + SKILL.magnet.durationMs;
      setIsMagnetSelectingBoth(false);
      playSoundRef.current('special');
      consumeGaugeBy(skillCostPoints('magnet'));
    },
    [consumeGaugeBy, setIsMagnetSelectingBoth, tagAsMagnetTarget]
  );

  const openSkillMenu = useCallback(() => {
    // 1 セグメント以上溜まっていればメニューを開ける（中身でコストが足りない技は disabled に）。
    if (skillGaugeRef.current < SKILL.segmentMax) return;
    if (statusRef.current !== 'playing') return;
    setIsSkillMenuOpen(true);
  }, []);

  const closeSkillMenu = useCallback(() => {
    setIsSkillMenuOpen(false);
  }, []);

  const selectSkill = useCallback(
    (kind: SkillKind) => {
      const cost = skillCostPoints(kind);
      if (skillGaugeRef.current < cost) return;
      setIsSkillMenuOpen(false);
      if (kind === 'shake') {
        activateShake();
        consumeGaugeBy(cost);
      } else if (kind === 'gravityFlip') {
        activateGravityFlip();
        consumeGaugeBy(cost);
      } else if (kind === 'magnet') {
        // マグネットだけは対象選択完了時にゲージ消費する（キャンセル可能なため）
        activateMagnet();
      }
    },
    [activateShake, activateGravityFlip, activateMagnet, consumeGaugeBy]
  );

  // 必殺技関連の全 timer / state を強制クリア（restart / 引退時に使う）
  const resetSkillState = useCallback(() => {
    if (gravityFlipTimerRef.current !== null) {
      window.clearTimeout(gravityFlipTimerRef.current);
      gravityFlipTimerRef.current = null;
    }
    const engine = engineRef.current;
    if (engine) engine.gravity.y = PHYSICS.gravityY;
    setIsGravityFlipped(false);
    gravitySkillActiveRef.current = false;
    // マグネット中だった body のカテゴリを通常に戻す
    untagAllMagnetTargets();
    magnetEndAtRef.current = null;
    magnetLevelRef.current = null;
    activeSkillRef.current = null;
    setIsSkillMenuOpen(false);
    setIsMagnetSelectingBoth(false);
    setSkillGaugeBoth(0);
  }, [setIsMagnetSelectingBoth, setSkillGaugeBoth, untagAllMagnetTargets]);

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
    resetSkillState();
    gameOverDangerSinceRef.current = null;
    lastCountdownRef.current = null;
    setGameOverCountdown(null);
    setCurrentItemSynced(pickRandomDroppable());
    setNextItemSynced(pickRandomDroppable());
    canDropRef.current = true;
    lastDropAtRef.current = 0;
    statusRef.current = 'playing';
    setStatus('playing');
  }, [score, pickRandomDroppable, resetSkillState, setCurrentItemSynced, setNextItemSynced]);

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
    skillGauge,
    skillGaugeMax: SKILL.gaugeMax,
    skillSegmentMax: SKILL.segmentMax,
    skillSegmentCount: SKILL.segmentCount,
    canOpenSkillMenu: skillGauge >= SKILL.segmentMax,
    canUseSkill: {
      shake: skillGauge >= skillCostPoints('shake'),
      gravityFlip: skillGauge >= skillCostPoints('gravityFlip'),
      magnet: skillGauge >= skillCostPoints('magnet'),
    },
    isSkillMenuOpen,
    openSkillMenu,
    closeSkillMenu,
    selectSkill,
    isMagnetSelecting,
    cancelMagnetSelecting,
    selectMagnetTarget,
    isGravityFlipped,
    gameOverCountdown,
  };
};
