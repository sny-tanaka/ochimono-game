import styles from './style.module.scss';

type Props = {
  isOn: boolean;
  onToggle: () => void;
};

export const SoundToggle = ({ isOn, onToggle }: Props) => {
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
};
