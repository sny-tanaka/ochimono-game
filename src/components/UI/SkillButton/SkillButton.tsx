import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  // 0..1 の比率。1 で満タン、満タンで disabled 解除。
  ratio: number;
  isReady: boolean;
  onClick: () => void;
};

// 円形のゲージで囲まれた必殺技発動ボタン。
// 周囲の SVG circle を strokeDashoffset で animate して充填率を表す。
// CSS conic-gradient ではなく SVG にしたのは、グラデーション + 太さ + 端を丸くする制御がしやすいため。
const RADIUS = 32;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const SkillButton = memo(({ ratio, isReady, onClick }: Props) => {
  const clampedRatio = Math.max(0, Math.min(1, ratio));
  const offset = CIRCUMFERENCE * (1 - clampedRatio);

  return (
    <button
      type="button"
      className={`${styles.button} ${isReady ? styles.ready : ''}`}
      onClick={onClick}
      disabled={!isReady}
      aria-label={isReady ? '必殺技を選択' : `必殺技ゲージ ${Math.round(clampedRatio * 100)}%`}
    >
      <svg
        className={styles.gauge}
        viewBox="0 0 80 80"
        aria-hidden="true"
      >
        <circle
          className={styles.gauge_track}
          cx="40"
          cy="40"
          r={RADIUS}
        />
        <circle
          className={styles.gauge_fill}
          cx="40"
          cy="40"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          // 真上を起点にして時計回りに進ませる（SVG は 3 時方向起点なので -90° 回転）
          transform="rotate(-90 40 40)"
        />
      </svg>
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        ⚡
      </span>
    </button>
  );
});
SkillButton.displayName = 'SkillButton';
