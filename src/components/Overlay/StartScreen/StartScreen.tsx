import styles from './style.module.scss';

type Props = {
  onStart: () => void;
};

export const StartScreen = ({ onStart }: Props) => {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="スタート画面"
    >
      <div className={styles.panel}>
        <h2 className={styles.title}>
          💖🍓🐱
          <br />
          にゃんハートいちごパズル
        </h2>
        <p className={styles.lead}>
          同じアイテム同士をくっつけて
          <br />
          にゃんハートいちごをめざそう！
        </p>
        <button
          type="button"
          className={styles.start}
          onClick={onStart}
        >
          スタート
        </button>
      </div>
    </div>
  );
};
