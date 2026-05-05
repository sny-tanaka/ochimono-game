import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  active: boolean;
  onCancel: () => void;
};

// マグネット必殺技：吸引対象レベルを決めるためにアイテムをタップする待機モード。
// フィールド上に薄いオーバーレイを置いて指示文を出す。タップ自体は GameField 側が拾う。
export const MagnetSelectingOverlay = memo(({ active, onCancel }: Props) => {
  if (!active) return null;
  return (
    <div className={styles.root}>
      <div className={styles.message}>
        <span className={styles.icon}>🧲</span>
        <span className={styles.text}>引き寄せたいアイテムをタップ</span>
      </div>
      <button
        type="button"
        className={styles.cancel}
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
});
MagnetSelectingOverlay.displayName = 'MagnetSelectingOverlay';
