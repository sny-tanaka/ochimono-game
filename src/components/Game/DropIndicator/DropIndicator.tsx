import { forwardRef, memo, useImperativeHandle, useRef } from 'react';

import styles from './style.module.scss';

import type { ItemDefinition } from '@/types/item';

type Props = {
  // 初期 x（中央）。以降は setX(px) で命令的に更新する。
  initialX: number;
  fieldHeight: number;
  item: ItemDefinition | null;
};

// 親が pointermove を `requestAnimationFrame` でバッチして呼ぶ命令的 API。
export type DropIndicatorHandle = {
  setX: (x: number) => void;
};

const resolveTexturePath = (svgPath: string): string =>
  `${import.meta.env.BASE_URL}${svgPath}`.replace(/\/{2,}/g, '/');

// pointermove ごとに React state を更新するとフルツリー再レンダーが走るため、
// このコンポーネントは `forwardRef` で `setX` を公開し、DOM スタイル
// (`transform: translate3d`) を直接書き換える方針。
// transform はコンポジタレイヤで処理されるため、`left` よりレイアウト/ペイントが軽い。
//
// preview には `bob` アニメーションが乗っているため、外側のラッパーで `translate3d`、
// 内側の <img> で `bob` を回す二段構成にして transform の競合を避ける。
export const DropIndicator = memo(
  forwardRef<DropIndicatorHandle, Props>(({ initialX, fieldHeight, item }, ref) => {
    const lineRef = useRef<HTMLDivElement | null>(null);
    const previewWrapRef = useRef<HTMLDivElement | null>(null);
    // item.radius は描画タイミングで参照するため ref に保持する（setX 内で props を読まないため）。
    const radiusRef = useRef(item?.radius ?? 0);
    radiusRef.current = item?.radius ?? 0;

    useImperativeHandle(
      ref,
      () => ({
        setX: (x: number) => {
          const line = lineRef.current;
          const previewWrap = previewWrapRef.current;
          if (line) line.style.transform = `translate3d(${x}px, 0, 0)`;
          if (previewWrap) {
            // preview wrap は中心を x に合わせるため、x から radius 分引いた位置で組み立てる。
            previewWrap.style.transform = `translate3d(${x - radiusRef.current}px, 0, 0)`;
          }
        },
      }),
      []
    );

    if (!item) return null;
    const diameter = item.radius * 2;
    return (
      <>
        <div
          ref={lineRef}
          className={styles.line}
          style={{
            height: `${fieldHeight}px`,
            transform: `translate3d(${initialX}px, 0, 0)`,
          }}
          aria-hidden="true"
        />
        <div
          ref={previewWrapRef}
          className={styles.preview_wrap}
          style={{
            width: `${diameter}px`,
            height: `${diameter}px`,
            transform: `translate3d(${initialX - item.radius}px, 0, 0)`,
          }}
          aria-hidden="true"
        >
          <img
            src={resolveTexturePath(item.svgPath)}
            alt=""
            aria-hidden="true"
            className={styles.preview}
          />
        </div>
      </>
    );
  })
);
DropIndicator.displayName = 'DropIndicator';
