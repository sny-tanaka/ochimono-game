import styles from './style.module.scss';

import { NextItemPreview } from '@/components/UI/NextItemPreview/NextItemPreview';
import { ScoreDisplay } from '@/components/UI/ScoreDisplay/ScoreDisplay';
import { SoundToggle } from '@/components/UI/SoundToggle/SoundToggle';
import type { ItemDefinition } from '@/types/item';

type Props = {
  score: number;
  bestScore: number;
  nextItem: ItemDefinition | null;
  isSoundOn: boolean;
  onToggleSound: () => void;
};

export const TopBar = ({ score, bestScore, nextItem, isSoundOn, onToggleSound }: Props) => {
  return (
    <header className={styles.top_bar}>
      <ScoreDisplay
        score={score}
        bestScore={bestScore}
      />
      <div className={styles.right}>
        <NextItemPreview item={nextItem} />
        <SoundToggle
          isOn={isSoundOn}
          onToggle={onToggleSound}
        />
      </div>
    </header>
  );
};
