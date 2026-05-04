import styles from './style.module.scss';

type Props = {
  score: number;
  bestScore: number;
  isNewRecord: boolean;
  onRestart: () => void;
};

export const GameOverScreen = ({ score, bestScore, isNewRecord, onRestart }: Props) => {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="ゲームオーバー"
    >
      <div className={styles.panel}>
        {isNewRecord ? <p className={styles.new_record}>🎉 新記録！</p> : null}
        <h2 className={styles.title}>GAME OVER</h2>
        <dl className={styles.scores}>
          <div className={styles.row}>
            <dt>スコア</dt>
            <dd className={isNewRecord ? styles.gold : ''}>{score}</dd>
          </div>
          <div className={styles.row}>
            <dt>ベスト</dt>
            <dd>{bestScore}</dd>
          </div>
        </dl>
        <button
          type="button"
          className={styles.restart}
          onClick={onRestart}
        >
          もう一度あそぶ
        </button>
      </div>
    </div>
  );
};
