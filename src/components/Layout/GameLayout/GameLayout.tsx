import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import styles from './style.module.scss';

import { GameField } from '@/components/Game/GameField/GameField';
import { CountdownOverlay } from '@/components/Overlay/CountdownOverlay/CountdownOverlay';
import { GameOverScreen } from '@/components/Overlay/GameOverScreen/GameOverScreen';
import { MagnetSelectingOverlay } from '@/components/Overlay/MagnetSelectingOverlay/MagnetSelectingOverlay';
import { SkillEffectOverlay } from '@/components/Overlay/SkillEffectOverlay/SkillEffectOverlay';
import { StartScreen } from '@/components/Overlay/StartScreen/StartScreen';
import { SettingsDrawer } from '@/components/UI/SettingsDrawer/SettingsDrawer';
import { SkillButton } from '@/components/UI/SkillButton/SkillButton';
import { SkillMenu } from '@/components/UI/SkillMenu/SkillMenu';
import { TopBar } from '@/components/UI/TopBar/TopBar';
import { useGame } from '@/hooks/useGame';

type Size = { width: number; height: number };

const GameContent = ({ size }: { size: Size }) => {
  const game = useGame({ fieldWidth: size.width, fieldHeight: size.height });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  return (
    <>
      <TopBar
        score={game.score}
        bestScore={game.bestScore}
        nextItem={game.nextItem}
        onOpenSettings={openSettings}
      />
      <main className={styles.main}>
        <div
          className={styles.field_wrapper}
          style={{ width: `${size.width}px`, height: `${size.height}px` }}
        >
          <GameField
            canvasContainerRef={game.canvasContainerRef}
            fieldWidth={size.width}
            fieldHeight={size.height}
            gameOverLineY={game.gameOverLineY}
            currentItem={game.currentItem}
            mergeEffectRef={game.mergeEffectRef}
            canInteract={game.status === 'playing'}
            onDrop={game.drop}
            isMagnetSelecting={game.isMagnetSelecting}
            onMagnetSelect={game.selectMagnetTarget}
          />
          <SkillEffectOverlay effect={game.isGravityFlipped ? 'gravityFlip' : null} />
          <MagnetSelectingOverlay
            active={game.isMagnetSelecting}
            onCancel={game.cancelMagnetSelecting}
          />
          <CountdownOverlay seconds={game.status === 'playing' ? game.gameOverCountdown : null} />
          {game.status === 'playing' ? (
            <div className={styles.skill_button_wrapper}>
              <SkillButton
                gauge={game.skillGauge}
                segmentMax={game.skillSegmentMax}
                segmentCount={game.skillSegmentCount}
                canOpen={game.canOpenSkillMenu}
                onClick={game.openSkillMenu}
              />
            </div>
          ) : null}
          {game.status === 'idle' ? <StartScreen onStart={game.start} /> : null}
          {game.status === 'gameover' ? (
            <GameOverScreen
              score={game.score}
              bestScore={game.bestScore}
              isNewRecord={game.isNewRecord}
              onRestart={game.restart}
            />
          ) : null}
        </div>
      </main>
      <SkillMenu
        open={game.isSkillMenuOpen}
        onSelect={game.selectSkill}
        onClose={game.closeSkillMenu}
        canUse={game.canUseSkill}
      />
      <SettingsDrawer
        open={isSettingsOpen}
        onClose={closeSettings}
        themeId={game.themeId}
        onChangeTheme={game.setThemeId}
        isSoundOn={game.isSoundOn}
        onToggleSound={game.toggleSound}
      />
    </>
  );
};

export const GameLayout = () => {
  // <main> 領域サイズを実測してフィールドサイズに使う。
  // 計測前は null。useLayoutEffect で初回 1 度だけ計測する（リサイズ非対応）。
  const measureRef = useRef<HTMLElement | null>(null);
  const [size, setSize] = useState<Size | null>(null);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSize({ width: Math.floor(rect.width), height: Math.floor(rect.height) });
  }, []);

  if (size === null) {
    return (
      <div className={styles.layout}>
        <div
          className={styles.top_bar_placeholder}
          aria-hidden="true"
        />
        <main
          ref={measureRef}
          className={styles.main}
        />
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <GameContent size={size} />
    </div>
  );
};
