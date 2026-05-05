import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, type Mock, test, vi } from 'vitest';

import { GAME } from '@/constants/game';
import { useSound } from '@/hooks/useSound';

// モック対象：
// - AudioContext: jsdom には未実装なので window に注入する。
// - fetch + decodeAudioData: useSound は mp3 を fetch して decodeAudioData で
//   AudioBuffer を作る。実体は不要なのでダミーオブジェクトでよい。
// 個別 test で挙動を切り替えたいので、各モックは beforeEach で生成 → 必要なら test 内で差し替える。

type MockBufferSource = {
  buffer: AudioBuffer | null;
  connect: ReturnType<typeof vi.fn>;
  start: ReturnType<typeof vi.fn>;
};

type MockGain = {
  gain: { value: number };
  connect: ReturnType<typeof vi.fn>;
};

type MockAudioContext = {
  state: AudioContextState;
  destination: object;
  decodeAudioData: ReturnType<typeof vi.fn>;
  createBufferSource: Mock<() => MockBufferSource>;
  createGain: Mock<() => MockGain>;
  resume: ReturnType<typeof vi.fn>;
  close: ReturnType<typeof vi.fn>;
};

const createMockBufferSource = (): MockBufferSource => {
  const source: MockBufferSource = {
    buffer: null,
    connect: vi.fn(),
    start: vi.fn(),
  };
  // GainNode 同様、connect は受け取った node をそのまま返してチェーンできるようにする。
  source.connect.mockImplementation((node: unknown) => node);
  return source;
};

const createMockGain = (): MockGain => {
  const gain: MockGain = {
    gain: { value: 0 },
    connect: vi.fn(),
  };
  gain.connect.mockImplementation((node: unknown) => node);
  return gain;
};

const createMockAudioContext = (overrides: Partial<MockAudioContext> = {}): MockAudioContext => {
  const ctx: MockAudioContext = {
    state: 'running',
    destination: { __destination: true },
    decodeAudioData: vi.fn().mockResolvedValue({ __decoded: true } as unknown as AudioBuffer),
    createBufferSource: vi.fn(() => createMockBufferSource()),
    createGain: vi.fn(() => createMockGain()),
    resume: vi.fn().mockResolvedValue(undefined),
    close: vi.fn().mockResolvedValue(undefined),
    ...overrides,
  };
  return ctx;
};

let mockCtx: MockAudioContext;
let audioContextCtor: ReturnType<typeof vi.fn>;
let originalAudioContext: unknown;
let originalFetch: typeof globalThis.fetch;

beforeEach(() => {
  window.localStorage.clear();
  mockCtx = createMockAudioContext();
  audioContextCtor = vi.fn(() => mockCtx);
  originalAudioContext = (window as unknown as { AudioContext?: unknown }).AudioContext;
  (window as unknown as { AudioContext: unknown }).AudioContext = audioContextCtor;

  originalFetch = globalThis.fetch;
  globalThis.fetch = vi.fn().mockResolvedValue({
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(8)),
  } as unknown as Response);
});

afterEach(() => {
  // ⚠ vi.restoreAllMocks() を呼んではいけない。
  // beforeEach で作る mockCtx の close/resume は vi.fn().mockResolvedValue(...) で
  // 構築しているが、restoreAllMocks は実装を空関数に戻すため、その後に走る
  // @testing-library/react の auto cleanup（renderHook の unmount）から呼ばれる
  // ctx.close() が undefined を返し `undefined.catch` で落ちる。
  (window as unknown as { AudioContext: unknown }).AudioContext = originalAudioContext;
  globalThis.fetch = originalFetch;
});

// 「mp3 のロード（fetch + decodeAudioData）が完了して buffersRef が埋まるまで」待つヘルパ。
// useSound の useEffect は async IIFE で進むので、play() を即時に呼んでも buffer がまだ
// 用意されていない。decodeAudioData 1 回ぶん await すれば 'merge'/'special' 両方の
// ロードが完了する（fetch / decodeAudioData は同期的にチェーンしているため）。
const waitForBuffersLoaded = async () => {
  await waitFor(() => {
    expect(mockCtx.decodeAudioData).toHaveBeenCalledTimes(2);
  });
  // decodeAudioData の Promise 解決後にメインの代入が走るのでもう 1 microtask 進める
  await act(async () => {
    await Promise.resolve();
  });
};

describe('useSound', () => {
  describe('初期化', () => {
    test('localStorage の値で isSoundOn を初期化する', async () => {
      window.localStorage.setItem(GAME.storageKeys.isSoundOn, 'false');
      const { result } = renderHook(() => useSound());
      // useEffect 経由で同期されるので待つ
      await waitFor(() => expect(result.current.isSoundOn).toBe(false));
    });

    test('localStorage 未設定なら isSoundOn=true', async () => {
      const { result } = renderHook(() => useSound());
      await waitFor(() => expect(result.current.isSoundOn).toBe(true));
    });

    test('AudioContext は 1 度だけ生成される', () => {
      renderHook(() => useSound());
      expect(audioContextCtor).toHaveBeenCalledTimes(1);
    });

    test('merge と special の 2 種類の音源を decodeAudioData する', async () => {
      renderHook(() => useSound());
      await waitFor(() => {
        expect(mockCtx.decodeAudioData).toHaveBeenCalledTimes(2);
      });
    });

    test('AudioContext が利用できない環境では何もしない（クラッシュしない）', () => {
      (window as unknown as { AudioContext: unknown }).AudioContext = undefined;
      // webkitAudioContext も無い前提
      expect(() => {
        const { result } = renderHook(() => useSound());
        result.current.play('merge');
      }).not.toThrow();
    });
  });

  describe('toggle', () => {
    test('isSoundOn を反転して localStorage に保存する', async () => {
      const { result } = renderHook(() => useSound());
      await waitFor(() => expect(result.current.isSoundOn).toBe(true));

      act(() => result.current.toggle());
      expect(result.current.isSoundOn).toBe(false);
      expect(window.localStorage.getItem(GAME.storageKeys.isSoundOn)).toBe('false');

      act(() => result.current.toggle());
      expect(result.current.isSoundOn).toBe(true);
      expect(window.localStorage.getItem(GAME.storageKeys.isSoundOn)).toBe('true');
    });
  });

  describe('play', () => {
    test('isSoundOn=false の間は再生しない', async () => {
      window.localStorage.setItem(GAME.storageKeys.isSoundOn, 'false');
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();
      await waitFor(() => expect(result.current.isSoundOn).toBe(false));

      act(() => result.current.play('merge'));
      expect(mockCtx.createBufferSource).not.toHaveBeenCalled();
    });

    test('音源パスが定義されていない kind は no-op（drop / gameover / highscore）', async () => {
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();

      act(() => {
        result.current.play('drop');
        result.current.play('gameover');
        result.current.play('highscore');
      });
      expect(mockCtx.createBufferSource).not.toHaveBeenCalled();
    });

    test('合体ごとに新しい BufferSource を起こして即時 start(0) する', async () => {
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();

      act(() => result.current.play('merge'));
      expect(mockCtx.createBufferSource).toHaveBeenCalledTimes(1);
      const firstSource = mockCtx.createBufferSource.mock.results[0]?.value as MockBufferSource;
      expect(firstSource.buffer).toEqual({ __decoded: true });
      expect(firstSource.start).toHaveBeenCalledWith(0);

      // ← 連鎖合体相当：使い捨てなので前回のソースは触らず、新しいインスタンスを作る。
      // これが HTMLAudioElement 使い回し時代の遅延累積を防ぐ核心。
      act(() => result.current.play('merge'));
      expect(mockCtx.createBufferSource).toHaveBeenCalledTimes(2);
      const secondSource = mockCtx.createBufferSource.mock.results[1]?.value as MockBufferSource;
      expect(secondSource).not.toBe(firstSource);
      expect(secondSource.start).toHaveBeenCalledWith(0);
    });

    test('GainNode で音量 0.7 をかけて destination に繋ぐ', async () => {
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();

      act(() => result.current.play('merge'));

      const source = mockCtx.createBufferSource.mock.results[0]?.value as MockBufferSource;
      const gain = mockCtx.createGain.mock.results[0]?.value as MockGain;
      expect(gain.gain.value).toBeCloseTo(0.7);
      expect(source.connect).toHaveBeenCalledWith(gain);
      expect(gain.connect).toHaveBeenCalledWith(mockCtx.destination);
    });

    test('AudioContext が suspended なら resume() を投げてから再生する', async () => {
      mockCtx.state = 'suspended';
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();

      act(() => result.current.play('merge'));
      expect(mockCtx.resume).toHaveBeenCalled();
      // resume の解決を待たずに start は同期的に呼ぶ（合体の瞬間に鳴らすため）
      const source = mockCtx.createBufferSource.mock.results[0]?.value as MockBufferSource;
      expect(source.start).toHaveBeenCalledWith(0);
    });

    test('AudioContext が running なら resume() は呼ばない', async () => {
      mockCtx.state = 'running';
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();

      act(() => result.current.play('merge'));
      expect(mockCtx.resume).not.toHaveBeenCalled();
    });

    test('special も merge と同じバッファソースで再生される', async () => {
      const { result } = renderHook(() => useSound());
      await waitForBuffersLoaded();

      act(() => result.current.play('special'));
      expect(mockCtx.createBufferSource).toHaveBeenCalledTimes(1);
      const source = mockCtx.createBufferSource.mock.results[0]?.value as MockBufferSource;
      expect(source.start).toHaveBeenCalledWith(0);
    });
  });

  describe('cleanup', () => {
    test('アンマウント時に AudioContext を close する', () => {
      const { unmount } = renderHook(() => useSound());
      unmount();
      expect(mockCtx.close).toHaveBeenCalled();
    });
  });
});
