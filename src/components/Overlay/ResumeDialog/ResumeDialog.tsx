import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  open: boolean;
  onYes: () => void;
  onNo: () => void;
};

// タイトル画面で「スタート」を押した時、中断データがあれば再開するか尋ねるモーダル。
// 「はい」で中断データを使って再開、「いいえ」で中断データを破棄して通常開始。
// 背景タップでは何もしない（誤操作防止）。
export const ResumeDialog = memo(({ open, onYes, onNo }: Props) => {
  if (!open) return null;
  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="中断データの再開確認"
    >
      <div className={styles.dialog}>
        <h2 className={styles.title}>中断データが見つかりました</h2>
        <p className={styles.body}>中断したところから再開しますか？</p>
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles.yes}`}
            onClick={onYes}
          >
            はい
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.no}`}
            onClick={onNo}
          >
            いいえ
          </button>
        </div>
      </div>
    </div>
  );
});
ResumeDialog.displayName = 'ResumeDialog';
