import { forwardRef, memo, useCallback, useImperativeHandle, useRef } from 'react';

import styles from './style.module.scss';

// 合体エフェクト 1 件分のスポーン引数。React state を介さず DOM に直接 append する。
export type MergeEffectSpawn = {
  x: number;
  y: number;
  score: number;
  isSpecial: boolean;
};

// 親（useGame）から命令的に呼び出すためのハンドル。
export type MergeEffectHandle = {
  add: (effect: MergeEffectSpawn) => void;
  // restart 時などに残骸エフェクトを一掃する用途。
  clear: () => void;
};

// 合体地点に出る "+スコア" ポップアップとリングエフェクト。
// React の commit を毎回挟むと連打時に大量の再レンダーが走るため、
// レイヤー要素の ref を親に公開して `appendChild` で直接挿し、`animationend` で自動削除する。
export const MergeEffect = memo(
  forwardRef<MergeEffectHandle>((_props, ref) => {
    const layerRef = useRef<HTMLDivElement | null>(null);

    const add = useCallback((effect: MergeEffectSpawn) => {
      const layer = layerRef.current;
      if (!layer) return;

      const root = document.createElement('div');
      root.className = `${styles.effect} ${effect.isSpecial ? styles.special : ''}`;
      root.style.left = `${effect.x}px`;
      root.style.top = `${effect.y}px`;
      root.setAttribute('aria-hidden', 'true');

      const ring = document.createElement('span');
      ring.className = styles.ring;
      root.appendChild(ring);

      // ring と score は同じ duration の CSS animation を持つ。
      // どちらが先にイベントを発火しても問題ないよう、ring の animationend を起点に親要素ごと removeChild。
      const onAnimationEnd = () => {
        ring.removeEventListener('animationend', onAnimationEnd);
        if (root.parentNode === layer) layer.removeChild(root);
      };
      ring.addEventListener('animationend', onAnimationEnd);

      if (effect.score > 0) {
        const score = document.createElement('span');
        score.className = styles.score;
        score.textContent = `+${effect.score}`;
        root.appendChild(score);
      }

      layer.appendChild(root);
    }, []);

    const clear = useCallback(() => {
      const layer = layerRef.current;
      if (!layer) return;
      while (layer.firstChild) layer.removeChild(layer.firstChild);
    }, []);

    useImperativeHandle(ref, () => ({ add, clear }), [add, clear]);

    return (
      <div
        ref={layerRef}
        className={styles.layer}
        aria-hidden="true"
      />
    );
  })
);
MergeEffect.displayName = 'MergeEffect';
