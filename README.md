# ochimono-game

ハート・イチゴ・ネコをくっつけて遊ぶ落ちものパズルゲーム（スイカゲーム風）。
GitHub Pages で公開する SPA / PWA。

- 公開 URL: https://&lt;user&gt;.github.io/ochimono-game/
- 物理エンジン: [Matter.js](https://brm.io/matter-js/)
- フレームワーク: Vite 6 + React 19 + TypeScript 5
- スタイル: Sass (SCSS module)
- テスト: Vitest + Testing Library

## 特徴

- 同じレベルのアイテム同士をぶつけて 1 段階上のアイテムに合体する、スイカゲーム形式の落ちものパズル
- 10 レベル × 複数テーマのアセット（PNG 透過画像）
- スコアは三角数方式（合体後レベル `n` → `n × (n+1) ÷ 2` 点）。最高スコア / 履歴は localStorage 保存
- 画面右上のセレクトから **テーマ（アセット一式）を即時切り替え** 可能
- フィールドサイズに合わせてアイテム半径が比例縮小（最大は端末によらず一定）
- BGM 連続合体音（`punyu.mp3`）は単一インスタンスで巻き戻し再生
- ビルドごとに `package.json` の patch バージョンが自動インクリメント、画面右上に `vX.Y.Z` 表示
- PWA 対応（`vite-plugin-pwa` + Workbox）
- ビルド出力は `docs/` に出るので、GitHub Pages の `Deploy from a branch / docs` でそのまま配信できる

## セットアップ

Node 22 系（`.node-version` で固定）。Yarn 1（classic）。

```bash
yarn install
```

`preinstall` で Node バージョンチェックが走ります。

## 開発

```bash
yarn dev          # http://localhost:5173/ochimono-game/ で起動
yarn test         # Vitest（一回実行）
yarn test:watch   # Vitest watch モード
yarn lint         # ESLint
yarn fix          # ESLint 自動修正
yarn format       # Prettier 適用
yarn format:check # Prettier チェックのみ
```

> Service Worker は **本番ビルドのみ有効**です（`vite.config.ts` の `devOptions.enabled: false`）。古い SW がキャッシュを返して "変更が反映されない" 事故を避けるため。

`pre-commit` フックで `yarn fix` と `yarn lint-staged` が走ります（Husky v9）。

## ビルド & GitHub Pages デプロイ

```bash
yarn build
```

実行内容:

1. `scripts/bump-patch-version.mjs` で `package.json` の patch を 1 つ上げる（git tag/コミットはしない）
2. `tsc -b` で型チェック
3. `vite build` で `docs/` に成果物を出力（`sw.js`、`manifest.webmanifest`、PNG/MP3 などのプリキャッシュ）

その後 `package.json` と `docs/` をまとめてコミット → push。GitHub の Settings → Pages で `Deploy from a branch / main / /docs` を選んでおけば自動公開されます。

> `vite.config.ts` の `BASE`（`/ochimono-game/`）と `src/main.tsx` の `basename`、`package.json` の `name` はリポジトリ名と一致している必要があります。

### PWA の更新通知

`registerType: 'prompt'` 設定なので、新しいビルドが見つかっても自動では適用されません。
画面を開いた時点で SW が更新を検出すると、画面下に「新しいバージョンがあります／更新」のバナーが出ます（[`AppUpdater`](src/components/AppUpdater/AppUpdater.tsx)）。
ユーザーが更新ボタンを押すと `skipWaiting` → `clientsClaim` → ページ再読み込みが走り、最新ビルドに切り替わります。

定期的なバックグラウンドチェックは行いません（必要なら `useRegisterSW({ onRegisteredSW })` の callback で `setInterval(() => registration.update(), N)` を追加するだけ）。

## アセット（テーマ）の追加・差し替え

アイテム画像はテーマディレクトリ単位でまとめて差し替える設計です。

```
public/
└── images/
    ├── gumi/             # 既定テーマ（グミ）
    │   ├── level01.png   # 256×256 透過 PNG
    │   ├── level02.png
    │   ├── ...
    │   └── level10.png
    └── other/            # 追加テーマ（その他）
        ├── level01.png
        └── ...
```

### ファイル仕様

| 項目 | 値 |
|------|-----|
| ファイル名 | `level01.png` 〜 `level10.png`（10 枚必須） |
| サイズ | 256×256 px（正方形） |
| フォーマット | PNG（RGBA、背景は透過） |
| 想定マッピング | レベル 1..10 が小ハート / 小イチゴ / 小ネコ / 中ハート / ... / にゃんハートいちご |

> サイズを変える場合は [`src/constants/items.ts`](src/constants/items.ts) の `ITEM_SPRITE_NATURAL_SIZE` も合わせて更新してください（スプライト拡大率の divisor）。

### 既存アセットの画像だけ差し替える

該当ディレクトリ内の `level{NN}.png` を同じファイル名・同じサイズで上書きするだけ。コード変更不要です。

### 新しいテーマを追加する

1. `public/images/{新id}/level01.png` 〜 `level10.png` を配置（id は英小文字＋ハイフン推奨）
2. [`src/constants/themes.ts`](src/constants/themes.ts) の `THEMES` 配列に `{ id, label }` を追加

これだけで画面右上の `<select>` に項目が現れ、選ぶと既存ボディの画像も即時差し替わります。

```ts
// 例
export const THEMES = [
  { id: 'gumi', label: 'グミ' },
  { id: 'other', label: 'その他' },
  { id: 'pixel', label: 'ピクセル' }, // 追加
] as const;
```

選択中のテーマは `localStorage` (`ochimono.themeId`) に保存され、次回起動時にも復元されます。

### SVG → PNG への一括変換が必要なときの参考

`librsvg` が便利です（macOS / brew）:

```bash
brew install librsvg
cd public/images/gumi
for f in input/*.svg; do
  rsvg-convert -w 256 -h 256 -o "${f%.svg}.png" "$f"
done
```

## サウンドアセット

合体時の効果音は `public/sounds/punyu.mp3` を 1 ファイル使います。差し替えるときは同じパスに上書きすれば OK。

別の効果音を追加したい場合は [`src/hooks/useSound.ts`](src/hooks/useSound.ts) の `SOUND_PATHS` に kind を追加し、必要箇所で `play(kind)` を呼ぶ形になります。

サウンド ON/OFF の状態は localStorage (`ochimono.isSoundOn`) に保存されます。

## ゲーム設計の主な定数（チューニングポイント）

| ファイル | 定数 | 用途 |
|----------|------|------|
| [`src/constants/items.ts`](src/constants/items.ts) | `ITEM_RADIUS` | レベル別の最大半径（px） |
| 〃 | `ITEM_RESTITUTION` | レベル別のバウンド係数 |
| 〃 | `MAX_DROPPABLE_LEVEL` | NEXT として落ちてくる最大レベル（既定 3＝レベル 4 以上は合体専用） |
| 〃 | `REFERENCE_FIELD_WIDTH` | 半径の基準フィールド幅（既定 360px、これ以下では半径も比例縮小） |
| 〃 | `ITEM_SPRITE_NATURAL_SIZE` | スプライト画像のナチュラルサイズ（既定 256） |
| [`src/constants/physics.ts`](src/constants/physics.ts) | `gravityY` | 重力 |
| 〃 | `gameOverLineOffset` | フィールド上端からゲームオーバーラインまでの距離（px） |
| 〃 | `gameOverGracePeriodMs` | 落下直後のゲームオーバー判定無効時間 |
| [`src/constants/game.ts`](src/constants/game.ts) | `dropCooldownMs` | 連続落下のクールダウン |
| 〃 | `mergeEffectDurationMs` | 合体エフェクトの表示時間 |

## ディレクトリ構成

```
.
├── public/
│   ├── icon-192.png / icon-512.png   # PWA アイコン
│   ├── images/<themeId>/level01〜10.png  # アイテム画像（テーマ単位）
│   ├── sounds/punyu.mp3              # 合体音
│   └── robots.txt
├── scripts/
│   └── bump-patch-version.mjs        # build 前に package.json の patch を +1
├── src/
│   ├── main.tsx                      # エントリ（BrowserRouter basename="/ochimono-game"）
│   ├── App.tsx
│   ├── index.scss                    # グローバル reset
│   ├── _variables.scss               # SCSS 変数 / レスポンシブ mixin
│   ├── pages/
│   │   ├── home/                     # ゲーム画面
│   │   └── not-found/
│   ├── components/
│   │   ├── Layout/GameLayout/        # レイアウト・サイズ計測
│   │   ├── Game/GameField/           # Matter.js キャンバス + ポインタ操作
│   │   ├── Game/DropIndicator/       # 落下位置インジケーター
│   │   ├── UI/TopBar/                # スコア / NEXT / テーマ切替 / サウンド
│   │   ├── UI/ScoreDisplay/
│   │   ├── UI/NextItemPreview/
│   │   ├── UI/ThemeToggle/           # アセットテーマ切替
│   │   ├── UI/SoundToggle/
│   │   ├── Effects/MergeEffect/      # 合体時のリング / +スコア
│   │   └── Overlay/                  # StartScreen / GameOverScreen
│   ├── hooks/
│   │   ├── useGame.ts                # Matter.js セットアップ + 合体 / GameOver
│   │   ├── useScore.ts
│   │   └── useSound.ts
│   ├── constants/
│   │   ├── items.ts                  # アイテム定義
│   │   ├── themes.ts                 # アセットテーマ
│   │   ├── physics.ts
│   │   └── game.ts
│   ├── types/                        # ItemDefinition 等
│   ├── utils/                        # storage / score / physics ヘルパ
│   └── setupTests.ts
├── docs/                             # ビルド出力（GitHub Pages 公開元）
├── vite.config.ts                    # Vite + PWA + Vitest
├── eslint.config.js                  # ESLint v9 flat config
└── package.json
```

## コード雛形ジェネレータ（plop）

```bash
yarn plop component   # src/components/<dir>/<Name>/{Name.tsx, style.module.scss}
yarn plop page        # src/pages/<dir>/{index.tsx, style.module.scss}
yarn plop logic       # src/logics/<name>/{<name>.ts, <name>.test.ts}
yarn plop api         # src/api/<name>.ts + src/types/<typeName>.ts
yarn plop type        # src/types/<name>.ts
```

雛形本体は `templates/*.hbs`。

## SCSS の import

`src/` を SCSS の load path に入れているので、変数モジュールは prefix なしで `@use` できます：

```scss
@use 'variables' as var;

.foo {
  color: var.$primary;
}
```
