import styles from './style.module.scss';

import { GameLayout } from '@/components/Layout/GameLayout/GameLayout';

export const Page = () => {
  return (
    <div className={styles.index}>
      <GameLayout />
    </div>
  );
};
