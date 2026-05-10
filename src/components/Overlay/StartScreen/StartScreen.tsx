import styles from './style.module.scss';

type Props = {
  onStart: () => void;
  // 更新確認ボタン押下時のハンドラ。
  onCheckUpdate: () => void;
  // 更新確認中（連打防止 / disabled 表示用）。
  isCheckingUpdate: boolean;
  // ベストスコア (タイトル画面で常時表示)。
  bestScore: number;
  // 中断データのスコア。null なら中断データ無し（バッジ非表示）。
  suspendedScore: number | null;
  // 設定ドロワーを開くハンドラ (右上の歯車ボタン)。
  onOpenSettings: () => void;
};

// タイトル画面。ダイアログ風のカードはやめて、フィールド全体を使った
// タイトル画面らしいレイアウトにする。
// - 上部 hero: 大きな絵文字 + ゲーム名 + 1 行説明
// - 中央: 中断データバッジ (任意)
// - 下部: 主アクション (スタート) と 副アクション (更新確認)
// - フッター: バージョン表示
export const StartScreen = ({
  onStart,
  onCheckUpdate,
  isCheckingUpdate,
  bestScore,
  suspendedScore,
  onOpenSettings,
}: Props) => {
  const hasSuspended = suspendedScore !== null;
  return (
    <div
      className={styles.screen}
      role="dialog"
      aria-modal="true"
      aria-label="タイトル画面"
    >
      <button
        type="button"
        className={styles.settings}
        onClick={onOpenSettings}
        aria-label="設定を開く"
      >
        <span aria-hidden="true">⚙</span>
      </button>

      <div className={styles.hero}>
        <div
          className={styles.emojis}
          aria-hidden="true"
        >
          💖🍓🐱
        </div>
        <h1 className={styles.title}>にゃんハートいちごパズル</h1>
        <p className={styles.lead}>
          同じアイテム同士をくっつけて
          <br />
          にゃんハートいちごをめざそう！
        </p>
      </div>

      <div className={styles.info}>
        <div
          className={styles.best}
          aria-label={`ベストスコア ${bestScore}`}
        >
          <span className={styles.info_label}>BEST</span>
          <span className={styles.info_value}>{bestScore}</span>
        </div>
        {hasSuspended ? (
          <div
            className={styles.suspended}
            aria-label={`中断データあり (スコア ${suspendedScore})`}
          >
            <span className={styles.suspended_badge}>中断データあり</span>
            <span className={styles.suspended_score}>
              <span className={styles.info_label}>SCORE</span>
              <span className={styles.info_value}>{suspendedScore}</span>
            </span>
          </div>
        ) : null}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.start}
          onClick={onStart}
        >
          {hasSuspended ? '続きから始める' : 'スタート'}
        </button>
        <button
          type="button"
          className={styles.check_update}
          onClick={onCheckUpdate}
          disabled={isCheckingUpdate}
        >
          {isCheckingUpdate ? '確認中…' : '更新確認'}
        </button>
      </div>

      <p className={styles.version}>v{__APP_VERSION__}</p>
    </div>
  );
};
