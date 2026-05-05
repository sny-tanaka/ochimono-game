import styles from './style.module.scss';

import { NextItemPreview } from '@/components/UI/NextItemPreview/NextItemPreview';
import { ScoreDisplay } from '@/components/UI/ScoreDisplay/ScoreDisplay';
import type { ItemDefinition } from '@/types/item';

type Props = {
  score: number;
  bestScore: number;
  nextItem: ItemDefinition | null;
  onOpenSettings: () => void;
};

export const TopBar = ({ score, bestScore, nextItem, onOpenSettings }: Props) => {
  return (
    <header className={styles.top_bar}>
      <ScoreDisplay
        score={score}
        bestScore={bestScore}
      />
      <div className={styles.right}>
        <NextItemPreview item={nextItem} />
        <button
          type="button"
          className={styles.settings}
          onClick={onOpenSettings}
          aria-label="設定を開く"
        >
          <span aria-hidden="true">⚙</span>
        </button>
      </div>
    </header>
  );
};
