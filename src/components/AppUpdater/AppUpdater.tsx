import { useRegisterSW } from 'virtual:pwa-register/react';

import styles from './style.module.scss';

// 新しいビルドが見つかったときに表示する更新バナー。
// 定期チェックはせず、ページを開いた時点で SW が拾ってきた更新だけを通知する。
export const AppUpdater = () => {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div
      className={styles.banner}
      role="status"
      aria-live="polite"
    >
      <span className={styles.message}>新しいバージョンがあります</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => updateServiceWorker(true)}
      >
        更新
      </button>
    </div>
  );
};
