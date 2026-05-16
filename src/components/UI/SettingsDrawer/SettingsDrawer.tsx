import { memo } from 'react';

import styles from './style.module.scss';

import { GyroToggle } from '@/components/UI/GyroToggle/GyroToggle';
import { SoundToggle } from '@/components/UI/SoundToggle/SoundToggle';
import { ThemeToggle } from '@/components/UI/ThemeToggle/ThemeToggle';
import type { ThemeId } from '@/constants/themes';

type Props = {
  open: boolean;
  onClose: () => void;
  themeId: ThemeId;
  onChangeTheme: (id: ThemeId) => void;
  isSoundOn: boolean;
  onToggleSound: () => void;
  isGyroOn: boolean;
  onToggleGyro: () => void;
  // 中断機能：プレイ中だけ有効。タイトル / ゲームオーバー時はボタンを描画しない。
  canSuspend: boolean;
  onSuspend: () => void;
};

// 右からスライドインする設定ドロワー。テーマ / サウンド / バージョンを集約する。
// TopBar の混雑を緩和するための、設定群を非常駐にする受け皿。
export const SettingsDrawer = memo(
  ({
    open,
    onClose,
    themeId,
    onChangeTheme,
    isSoundOn,
    onToggleSound,
    isGyroOn,
    onToggleGyro,
    canSuspend,
    onSuspend,
  }: Props) => {
    if (!open) return null;
    return (
      <div
        className={styles.backdrop}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="設定"
      >
        <aside
          className={styles.drawer}
          onClick={(e) => e.stopPropagation()}
        >
          <header className={styles.header}>
            <h2 className={styles.title}>設定</h2>
            <button
              type="button"
              className={styles.close}
              onClick={onClose}
              aria-label="設定を閉じる"
            >
              ✕
            </button>
          </header>
          <div className={styles.row}>
            <span className={styles.row_label}>テーマ</span>
            <ThemeToggle
              value={themeId}
              onChange={onChangeTheme}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.row_label}>サウンド</span>
            <SoundToggle
              isOn={isSoundOn}
              onToggle={onToggleSound}
            />
          </div>
          <div className={styles.row}>
            <span className={styles.row_label}>ジャイロ（傾き操作）</span>
            <GyroToggle
              isOn={isGyroOn}
              onToggle={onToggleGyro}
            />
          </div>
          {canSuspend ? (
            <button
              type="button"
              className={styles.suspend}
              onClick={() => {
                onSuspend();
                onClose();
              }}
            >
              中断
            </button>
          ) : null}
          <footer className={styles.footer}>
            <span className={styles.version}>v{__APP_VERSION__}</span>
          </footer>
        </aside>
      </div>
    );
  }
);
SettingsDrawer.displayName = 'SettingsDrawer';
