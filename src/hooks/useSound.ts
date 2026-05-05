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

const PLAYBACK_VOLUME = 0.7;

type AudioContextCtor = typeof AudioContext;

const getAudioContextCtor = (): AudioContextCtor | null => {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    AudioContext?: AudioContextCtor;
    webkitAudioContext?: AudioContextCtor;
  };
  return w.AudioContext ?? w.webkitAudioContext ?? null;
};

export const useSound = (): UseSoundResult => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buffersRef = useRef<Partial<Record<SoundKind, AudioBuffer>>>({});

  useEffect(() => {
    setIsSoundOn(loadIsSoundOn());
  }, []);

  // Web Audio で AudioBuffer をデコードして保持する。
  // HTMLAudioElement の使い回しは PWA / iOS で再生開始までのレイテンシが
  // 数十〜数百 ms あり、連鎖合体のたびに pause→currentTime=0→play() の
  // Promise が前回の再生を打ち切る形で干渉して遅延が累積していた。
  // BufferSource は呼び出しごとに使い捨てで作成するので、合体の瞬間に
  // 即時発音できて重なっても遅延しない。
  useEffect(() => {
    const Ctor = getAudioContextCtor();
    if (!Ctor) return;
    const ctx = new Ctor();
    audioCtxRef.current = ctx;

    let cancelled = false;
    const buffers: Partial<Record<SoundKind, AudioBuffer>> = {};

    void (async () => {
      for (const [kind, path] of Object.entries(SOUND_PATHS) as [SoundKind, string][]) {
        try {
          const res = await fetch(resolveSoundPath(path));
          const arrayBuffer = await res.arrayBuffer();
          if (cancelled) return;
          const decoded = await ctx.decodeAudioData(arrayBuffer);
          if (cancelled) return;
          buffers[kind] = decoded;
        } catch {
          // ファイル未配置・decode エラーは握りつぶす（無音にフォールバック）。
        }
      }
      buffersRef.current = buffers;
    })();

    return () => {
      cancelled = true;
      void ctx.close().catch(() => {});
      audioCtxRef.current = null;
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
      const ctx = audioCtxRef.current;
      const buffer = buffersRef.current[kind];
      if (!ctx || !buffer) return;
      // iOS の autoplay policy で suspended のまま起動する場合と、
      // タブ非表示から復帰した直後に suspended になっている場合があるため
      // 毎回チェックして resume を投げる（既に running なら no-op）。
      if (ctx.state === 'suspended') {
        void ctx.resume().catch(() => {});
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gain = ctx.createGain();
      gain.gain.value = PLAYBACK_VOLUME;
      source.connect(gain).connect(ctx.destination);
      source.start(0);
    },
    [isSoundOn]
  );

  return { isSoundOn, toggle, play };
};
