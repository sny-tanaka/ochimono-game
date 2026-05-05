import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  // 'gravityFlip' 中だけ画面に薄い色オーバーレイ + 矢印を流す。
  // 'shake' は GameField の transform で揺らすので、ここでは演出オーバーレイなし。
  // null は非表示。
  effect: 'gravityFlip' | null;
};

export const SkillEffectOverlay = memo(({ effect }: Props) => {
  if (effect === 'gravityFlip') {
    return (
      <div
        className={styles.gravity_flip}
        aria-hidden="true"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={styles.arrow}
            style={{ left: `${(i + 1) * 14}%`, animationDelay: `${i * 0.12}s` }}
          >
            ⬆
          </span>
        ))}
      </div>
    );
  }
  return null;
});
SkillEffectOverlay.displayName = 'SkillEffectOverlay';
