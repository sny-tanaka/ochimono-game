import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  score: number;
  bestScore: number;
};

// score / bestScore が同値なら再レンダー不要。memo 化しても自身は score 変動で再レンダーされるが、
// 兄弟要素（NextItemPreview など）への影響はない。
export const ScoreDisplay = memo(({ score, bestScore }: Props) => {
  return (
    <div className={styles.score_display}>
      <div className={styles.row}>
        <span className={styles.label}>SCORE</span>
        <span
          className={styles.value}
          data-testid="score-value"
        >
          {score}
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.label_small}>BEST</span>
        <span className={styles.value_small}>{bestScore}</span>
      </div>
    </div>
  );
});
ScoreDisplay.displayName = 'ScoreDisplay';
