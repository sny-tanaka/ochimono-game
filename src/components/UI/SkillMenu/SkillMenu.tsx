import { memo } from 'react';

import styles from './style.module.scss';

import { SKILL_COST_SEGMENTS, type SkillKind } from '@/constants/skill';

type Props = {
  open: boolean;
  onSelect: (kind: SkillKind) => void;
  onClose: () => void;
  // 各スキルのコスト充足状況。disabled 表示に使う。
  canUse: Record<SkillKind, boolean>;
  // マグネット必殺技の 1 ゲーム内残り使用回数 / 最大値。メニュー上に表示する。
  magnetUsesLeft: number;
  magnetMaxUses: number;
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
    description: 'タップしたアイテムと同レベルを 1 体ランダムに引き寄せ',
  },
];

export const SkillMenu = memo(
  ({ open, onSelect, onClose, canUse, magnetUsesLeft, magnetMaxUses }: Props) => {
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
            {CHOICES.map((c) => {
              const cost = SKILL_COST_SEGMENTS[c.kind];
              const enabled = canUse[c.kind];
              const isMagnet = c.kind === 'magnet';
              return (
                <button
                  key={c.kind}
                  type="button"
                  className={`${styles.choice} ${enabled ? '' : styles.choice_disabled}`}
                  onClick={() => enabled && onSelect(c.kind)}
                  disabled={!enabled}
                >
                  <span
                    className={styles.choice_icon}
                    aria-hidden="true"
                  >
                    {c.icon}
                  </span>
                  <span className={styles.choice_label}>
                    {c.label}
                    {isMagnet ? (
                      <span
                        className={styles.choice_uses}
                        aria-label={`残り ${magnetUsesLeft} 回 / 最大 ${magnetMaxUses} 回`}
                      >
                        残り {magnetUsesLeft}/{magnetMaxUses} 回
                      </span>
                    ) : null}
                  </span>
                  <span className={styles.choice_desc}>{c.description}</span>
                  <span
                    className={styles.choice_cost}
                    aria-label={`コスト ${cost} ゲージ`}
                  >
                    {Array.from({ length: cost }, (_, i) => (
                      <span
                        key={i}
                        className={styles.cost_pip}
                      />
                    ))}
                  </span>
                </button>
              );
            })}
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
  }
);
SkillMenu.displayName = 'SkillMenu';
