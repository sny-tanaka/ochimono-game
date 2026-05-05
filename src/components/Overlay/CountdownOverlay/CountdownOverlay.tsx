import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  // 表示する残り秒数。null なら何も描画しない。
  seconds: number | null;
};

// ゲームオーバーラインを超え続けている間、画面中央に表示するカウントダウン。
// 数字が変わるたびに `key` を切り替えて CSS アニメーションを再生する
// （フェードイン → 大きく表示 → フェードアウト）。
export const CountdownOverlay = memo(({ seconds }: Props) => {
  if (seconds === null) return null;
  return (
    <div
      className={styles.overlay}
      aria-live="assertive"
      aria-label={`ゲームオーバーまで${seconds}秒`}
    >
      <span
        key={seconds}
        className={styles.number}
      >
        {seconds}
      </span>
    </div>
  );
});
CountdownOverlay.displayName = 'CountdownOverlay';
