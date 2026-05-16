import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  isOn: boolean;
  onToggle: () => void;
};

// ジャイロ（端末の傾きでフィールドを傾ける）の ON/OFF トグル。
// SoundToggle と同じ見た目・挙動。score 変動で親が再レンダーされても
// props が同じなら何もしない。
export const GyroToggle = memo(({ isOn, onToggle }: Props) => {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={isOn ? 'ジャイロをOFFにする' : 'ジャイロをONにする'}
      aria-pressed={isOn}
    >
      <span aria-hidden="true">{isOn ? '🧭' : '🚫'}</span>
    </button>
  );
});
GyroToggle.displayName = 'GyroToggle';
