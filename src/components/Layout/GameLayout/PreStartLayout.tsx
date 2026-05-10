import { useCallback, useState } from 'react';

import styles from './style.module.scss';

import { AppUpdater } from '@/components/AppUpdater/AppUpdater';
import { ResumeDialog } from '@/components/Overlay/ResumeDialog/ResumeDialog';
import { StartScreen } from '@/components/Overlay/StartScreen/StartScreen';
import { SettingsDrawer } from '@/components/UI/SettingsDrawer/SettingsDrawer';
import { TopBar } from '@/components/UI/TopBar/TopBar';
import type { ThemeId } from '@/constants/themes';
import type { SuspendedGame } from '@/types/game';
import {
  loadBestScore,
  loadIsSoundOn,
  loadThemeId,
  saveIsSoundOn,
  saveThemeId,
} from '@/utils/storage';
import { clearSuspendedGame, loadSuspendedGame } from '@/utils/suspendStorage';

type Props = {
  // 通常スタート（中断データ無し or ユーザーが「いいえ」）。
  onStart: () => void;
  // 中断データを使って再開する。
  onResume: (data: SuspendedGame) => void;
};

// スタート前 (タイトル) 画面用レイアウト。
// useGame は呼ばず Matter.js も生成しないので、AppUpdater バナー表示などで
// レイアウトが変わってもゲーム状態に影響しない。スタート押下後に
// InGameLayout がマウントされて初めて Matter.js とフィールドサイズが確定する。
export const PreStartLayout = ({ onStart, onResume }: Props) => {
  // bestScore は localStorage から 1 回だけ読む。プレイ中は InGameLayout 側で
  // 自前管理されるため、ここで再読み込みする必要はない。
  const [bestScore] = useState(() => loadBestScore());

  // 設定 (テーマ / サウンド) は pre-start でも変更可能にしたいので
  // localStorage に直接 read/write する軽量 state を持つ。
  // InGameLayout 側の useGame も同じ localStorage を参照するため、
  // pre-start で変えた値はそのまま in-game に引き継がれる。
  const [themeId, setThemeIdState] = useState<ThemeId>(() => loadThemeId());
  const [isSoundOn, setIsSoundOnState] = useState<boolean>(() => loadIsSoundOn());
  const setThemeId = useCallback((id: ThemeId) => {
    saveThemeId(id);
    setThemeIdState(id);
  }, []);
  const toggleSound = useCallback(() => {
    setIsSoundOnState((prev) => {
      const next = !prev;
      saveIsSoundOn(next);
      return next;
    });
  }, []);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  // 中断データがあれば「再開しますか？」ダイアログを表示。
  const [pendingResume, setPendingResume] = useState<SuspendedGame | null>(null);
  const handleStart = useCallback(() => {
    const suspended = loadSuspendedGame();
    if (suspended) {
      setPendingResume(suspended);
    } else {
      onStart();
    }
  }, [onStart]);
  const handleResumeYes = useCallback(() => {
    if (!pendingResume) return;
    const data = pendingResume;
    setPendingResume(null);
    clearSuspendedGame();
    onResume(data);
  }, [pendingResume, onResume]);
  const handleResumeNo = useCallback(() => {
    clearSuspendedGame();
    setPendingResume(null);
    onStart();
  }, [onStart]);

  return (
    <div className={styles.layout}>
      <TopBar
        score={0}
        bestScore={bestScore}
        nextItem={null}
        onOpenSettings={openSettings}
      />
      <main className={styles.main}>
        <div className={styles.field_placeholder}>
          <StartScreen onStart={handleStart} />
        </div>
      </main>
      <AppUpdater />
      <SettingsDrawer
        open={isSettingsOpen}
        onClose={closeSettings}
        themeId={themeId}
        onChangeTheme={setThemeId}
        isSoundOn={isSoundOn}
        onToggleSound={toggleSound}
        canSuspend={false}
        onSuspend={() => {}}
      />
      <ResumeDialog
        open={pendingResume !== null}
        onYes={handleResumeYes}
        onNo={handleResumeNo}
      />
    </div>
  );
};
