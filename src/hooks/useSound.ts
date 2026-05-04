import { useCallback, useEffect, useRef, useState } from 'react';

import { loadIsSoundOn, saveIsSoundOn } from '@/utils/storage';

export type SoundKind = 'drop' | 'merge' | 'special' | 'gameover' | 'highscore';

export type UseSoundResult = {
  isSoundOn: boolean;
  toggle: () => void;
  play: (kind: SoundKind) => void;
};

const resolveSoundPath = (path: string): string =>
  `${import.meta.env.BASE_URL}${path}`.replace(/\/{2,}/g, '/');

// kind → mp3 パスのマップ。未定義の kind は無音。
const SOUND_PATHS: Partial<Record<SoundKind, string>> = {
  merge: 'sounds/punyu.mp3',
  special: 'sounds/punyu.mp3',
};

export const useSound = (): UseSoundResult => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const buffersRef = useRef<Partial<Record<SoundKind, HTMLAudioElement>>>({});

  useEffect(() => {
    setIsSoundOn(loadIsSoundOn());
  }, []);

  // 効果音バッファを kind ごとに 1 度だけロードしておく（インスタンス使い回し）
  useEffect(() => {
    const buffers: Partial<Record<SoundKind, HTMLAudioElement>> = {};
    for (const [kind, path] of Object.entries(SOUND_PATHS) as [SoundKind, string][]) {
      const audio = new Audio(resolveSoundPath(path));
      audio.preload = 'auto';
      audio.volume = 0.7;
      buffers[kind] = audio;
    }
    buffersRef.current = buffers;
    return () => {
      for (const audio of Object.values(buffers)) {
        audio?.pause();
      }
      buffersRef.current = {};
    };
  }, []);

  const toggle = useCallback(() => {
    setIsSoundOn((prev) => {
      const next = !prev;
      saveIsSoundOn(next);
      return next;
    });
  }, []);

  const play = useCallback(
    (kind: SoundKind) => {
      if (!isSoundOn) return;
      const audio = buffersRef.current[kind];
      if (!audio) return;
      // 単一インスタンスを使い回す：再生中なら巻き戻して即座に鳴らし直す。
      // 連鎖合体で大量の Audio を生成しないので GC 負荷もメモリも抑えられる。
      audio.pause();
      audio.currentTime = 0;
      // 自動再生制限・ファイル未配置・decode エラーなどは握りつぶす
      audio.play().catch(() => {});
    },
    [isSoundOn]
  );

  return { isSoundOn, toggle, play };
};
