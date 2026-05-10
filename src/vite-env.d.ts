/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/react" />

// vite.config.ts の `define` で注入される package.json の version
declare const __APP_VERSION__: string;

// `yarn debug` で起動した時のみ '1'。NEXT を Lv1〜Lv10 で順に出すデバッグモードのフラグ。
interface ImportMetaEnv {
  readonly VITE_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// poly-decomp の最小限の型。Matter.Common.setDecomp() に渡すだけなので
// 必要メソッドだけ宣言する。
declare module 'poly-decomp' {
  type Vertex = [number, number];
  export function quickDecomp(vertices: Vertex[]): Vertex[][];
  export function decomp(vertices: Vertex[]): Vertex[][];
  export function isSimple(vertices: Vertex[]): boolean;
  export function makeCCW(vertices: Vertex[]): void;
  export function removeCollinearPoints(vertices: Vertex[], thresholdAngle?: number): number;
  export function removeDuplicatePoints(vertices: Vertex[], precision?: number): number;
}
