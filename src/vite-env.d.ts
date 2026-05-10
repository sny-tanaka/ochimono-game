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
