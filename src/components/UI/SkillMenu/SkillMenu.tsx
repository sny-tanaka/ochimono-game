import { memo } from 'react';

import styles from './style.module.scss';

import type { SkillKind } from '@/constants/skill';

type Props = {
  open: boolean;
  onSelect: (kind: SkillKind) => void;
  onClose: () => void;
};

type Choice = {
  kind: SkillKind;
  icon: string;
  label: string;
  description: string;
};

const CHOICES: readonly Choice[] = [
  {
    kind: 'shake',
    icon: '🌪',
    label: 'シェイク',
    description: '盤面を揺らして詰まりを解す',
  },
  {
    kind: 'gravityFlip',
    icon: '⬆️',
    label: '重力反転',
    description: '3秒だけ重力を逆さに',
  },
  {
    kind: 'magnet',
    icon: '🧲',
    label: '同レベル吸引',
    description: 'タップしたアイテムと同レベルを引き寄せ',
  },
];

export const SkillMenu = memo(({ open, onSelect, onClose }: Props) => {
  if (!open) return null;
  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="必殺技を選択"
    >
      <div
        className={styles.menu}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.title}>必殺技を選択</h2>
        <div className={styles.choices}>
          {CHOICES.map((c) => (
            <button
              key={c.kind}
              type="button"
              className={styles.choice}
              onClick={() => onSelect(c.kind)}
            >
              <span
                className={styles.choice_icon}
                aria-hidden="true"
              >
                {c.icon}
              </span>
              <span className={styles.choice_label}>{c.label}</span>
              <span className={styles.choice_desc}>{c.description}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className={styles.cancel}
          onClick={onClose}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
});
SkillMenu.displayName = 'SkillMenu';
