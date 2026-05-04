import styles from './style.module.scss';

import type { ItemDefinition } from '@/types/item';

type Props = {
  x: number;
  fieldHeight: number;
  item: ItemDefinition | null;
};

const resolveTexturePath = (svgPath: string): string =>
  `${import.meta.env.BASE_URL}${svgPath}`.replace(/\/{2,}/g, '/');

export const DropIndicator = ({ x, fieldHeight, item }: Props) => {
  if (!item) return null;
  const diameter = item.radius * 2;
  return (
    <>
      <div
        className={styles.line}
        style={{ left: `${x}px`, height: `${fieldHeight}px` }}
        aria-hidden="true"
      />
      <img
        src={resolveTexturePath(item.svgPath)}
        alt=""
        aria-hidden="true"
        className={styles.preview}
        style={{
          left: `${x - item.radius}px`,
          width: `${diameter}px`,
          height: `${diameter}px`,
        }}
      />
    </>
  );
};
