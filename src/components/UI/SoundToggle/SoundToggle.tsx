import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  isOn: boolean;
  onToggle: () => void;
};

// score 変動などで TopBar が再レンダーされても、isOn / onToggle が同じなら何もしない。
export const SoundToggle = memo(({ isOn, onToggle }: Props) => {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={isOn ? 'サウンドをOFFにする' : 'サウンドをONにする'}
      aria-pressed={isOn}
    >
      <span aria-hidden="true">{isOn ? '🔊' : '🔇'}</span>
    </button>
  );
});
SoundToggle.displayName = 'SoundToggle';
