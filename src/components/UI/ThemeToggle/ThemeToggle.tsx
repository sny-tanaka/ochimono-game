import { memo, type ChangeEvent } from 'react';

import styles from './style.module.scss';

import { isThemeId, THEMES, type ThemeId } from '@/constants/themes';

type Props = {
  value: ThemeId;
  onChange: (id: ThemeId) => void;
};

// score 変動などで親が再レンダーされても、value/onChange が同じなら何もしない。
export const ThemeToggle = memo(({ value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value;
    if (isThemeId(next)) onChange(next);
  };

  return (
    <select
      className={styles.toggle}
      value={value}
      onChange={handleChange}
      aria-label="アセットテーマ"
    >
      {THEMES.map((t) => (
        <option
          key={t.id}
          value={t.id}
        >
          {t.label}
        </option>
      ))}
    </select>
  );
});
ThemeToggle.displayName = 'ThemeToggle';
