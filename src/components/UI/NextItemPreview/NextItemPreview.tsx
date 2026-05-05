import { memo } from 'react';

import styles from './style.module.scss';

import type { ItemDefinition } from '@/types/item';

type Props = {
  item: ItemDefinition | null;
};

const resolveTexturePath = (svgPath: string): string =>
  `${import.meta.env.BASE_URL}${svgPath}`.replace(/\/{2,}/g, '/');

// item の参照は itemForFieldWidth のキャッシュにより (level, fieldWidth, themeId) が
// 同じなら同じ参照になる。score 変動だけが起きる場合は props が安定するので
// memo 化することで NextItemPreview の再レンダーを抑制できる。
export const NextItemPreview = memo(({ item }: Props) => {
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
});
NextItemPreview.displayName = 'NextItemPreview';
