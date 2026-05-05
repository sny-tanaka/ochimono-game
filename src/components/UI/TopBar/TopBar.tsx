import styles from './style.module.scss';

import { NextItemPreview } from '@/components/UI/NextItemPreview/NextItemPreview';
import { ScoreDisplay } from '@/components/UI/ScoreDisplay/ScoreDisplay';
import { SoundToggle } from '@/components/UI/SoundToggle/SoundToggle';
import { ThemeToggle } from '@/components/UI/ThemeToggle/ThemeToggle';
import type { ThemeId } from '@/constants/themes';
import type { ItemDefinition } from '@/types/item';

type Props = {
  score: number;
  bestScore: number;
  nextItem: ItemDefinition | null;
  isSoundOn: boolean;
  onToggleSound: () => void;
  themeId: ThemeId;
  onChangeTheme: (id: ThemeId) => void;
};

export const TopBar = ({
  score,
  bestScore,
  nextItem,
  isSoundOn,
  onToggleSound,
  themeId,
  onChangeTheme,
}: Props) => {
  return (
    <header className={styles.top_bar}>
      <ScoreDisplay
        score={score}
        bestScore={bestScore}
      />
      <div className={styles.right}>
        <NextItemPreview item={nextItem} />
        <ThemeToggle
          value={themeId}
          onChange={onChangeTheme}
        />
        <SoundToggle
          isOn={isSoundOn}
          onToggle={onToggleSound}
        />
        <span
          className={styles.version}
          aria-label="ビルドバージョン"
        >
          v{__APP_VERSION__}
        </span>
      </div>
    </header>
  );
};
