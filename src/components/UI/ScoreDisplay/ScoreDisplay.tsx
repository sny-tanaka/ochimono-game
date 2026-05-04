import styles from './style.module.scss';

type Props = {
  score: number;
  bestScore: number;
};

export const ScoreDisplay = ({ score, bestScore }: Props) => {
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
};
