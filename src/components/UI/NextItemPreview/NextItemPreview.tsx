import styles from './style.module.scss';

import type { ItemDefinition } from '@/types/item';

type Props = {
  item: ItemDefinition | null;
};

const resolveTexturePath = (svgPath: string): string =>
  `${import.meta.env.BASE_URL}${svgPath}`.replace(/\/{2,}/g, '/');

export const NextItemPreview = ({ item }: Props) => {
  return (
    <div className={styles.next}>
      <span className={styles.label}>NEXT</span>
      <div
        className={styles.thumb}
        data-testid="next-item"
      >
        {item ? (
          <img
            src={resolveTexturePath(item.svgPath)}
            alt={item.name}
            className={styles.image}
          />
        ) : null}
      </div>
    </div>
  );
};
