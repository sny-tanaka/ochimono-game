import styles from './style.module.scss';

import type { MergeEffect as MergeEffectType } from '@/types/game';

type Props = {
  effects: MergeEffectType[];
};

// 合体地点に出る "+スコア" ポップアップとリングエフェクト
export const MergeEffect = ({ effects }: Props) => {
  return (
    <div
      className={styles.layer}
      aria-hidden="true"
    >
      {effects.map((e) => (
        <div
          key={e.id}
          className={`${styles.effect} ${e.isSpecial ? styles.special : ''}`}
          style={{ left: `${e.x}px`, top: `${e.y}px` }}
        >
          <span className={styles.ring} />
          {e.score > 0 ? <span className={styles.score}>+{e.score}</span> : null}
        </div>
      ))}
    </div>
  );
};
