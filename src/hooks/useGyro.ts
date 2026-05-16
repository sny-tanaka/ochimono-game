import { useEffect, useRef } from 'react';

import { GYRO } from '@/constants/game';

// iOS 13+ では DeviceOrientationEvent.requestPermission() をユーザー
// ジェスチャ内で呼ばないとセンサーイベントが来ない。それ以外（Android /
// 旧iOS / 非対応）は許可不要なので true を返す。
type PermissionCapableCtor = {
  requestPermission?: () => Promise<'granted' | 'denied' | 'default'>;
};

export const requestGyroPermission = async (): Promise<boolean> => {
  if (typeof window === 'undefined') return false;
  const ctor = (window as unknown as { DeviceOrientationEvent?: PermissionCapableCtor })
    .DeviceOrientationEvent;
  if (ctor && typeof ctor.requestPermission === 'function') {
    try {
      const res = await ctor.requestPermission();
      return res === 'granted';
    } catch {
      return false;
    }
  }
  // 非iOS / 旧iOS / DeviceOrientationEvent 非対応でも、リスナー自体は付けられる。
  return true;
};

const IS_DEBUG = import.meta.env.VITE_DEBUG === '1';

declare global {
  interface Window {
    // デバッグ用: 実機センサーの代わりに角度(度)を強制注入する。
    // `yarn debug` 起動時のみ有効。E2E でフィールド回転を検証するため。
    __ochimonoSetGyroDeg?: (deg: number | null) => void;
  }
}

type UseGyroResult = {
  // フィールドへ適用したい回転角（ラジアン）。再レンダーを避けるため ref。
  // GameField が rAF で読み取り、平滑化しながら transform に反映する。
  angleRadRef: React.MutableRefObject<number>;
};

// 端末の傾きを取得して「フィールドをワールド水平に保つための回転角」を ref に流す。
// enabled=false のときは常に 0（= 無回転）。DOM には触らない。
export const useGyro = (enabled: boolean): UseGyroResult => {
  const angleRadRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      angleRadRef.current = 0;
      return;
    }

    const maxRad = (GYRO.maxTiltDeg * Math.PI) / 180;
    const clamp = (r: number) => Math.max(-maxRad, Math.min(maxRad, r));

    // デバッグ override が入っていればセンサーより優先する。
    let debugDeg: number | null = null;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (debugDeg !== null) return;
      // gamma: 端末の左右ロール [-90,90]（degrees）。
      // フィールドをワールド水平に保つには端末ロールと逆向きに回す。
      const gamma = e.gamma ?? 0;
      const target = clamp((gamma * GYRO.gammaToFieldSign * Math.PI) / 180);
      angleRadRef.current = target;
    };

    window.addEventListener('deviceorientation', handleOrientation);

    let cleanupDebug: (() => void) | undefined;
    if (IS_DEBUG) {
      window.__ochimonoSetGyroDeg = (deg) => {
        debugDeg = deg;
        if (deg === null) {
          angleRadRef.current = 0;
        } else {
          angleRadRef.current = clamp((deg * Math.PI) / 180);
        }
      };
      cleanupDebug = () => {
        delete window.__ochimonoSetGyroDeg;
      };
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      cleanupDebug?.();
      angleRadRef.current = 0;
    };
  }, [enabled]);

  return { angleRadRef };
};
