// アセットテーマ（public/images/{id}/level{NN}.png）の定義。
// 新しいテーマを追加する手順:
//   1. public/images/{新id}/ に level01〜level10.png を配置
//   2. THEMES に { id, label } を追加（id は英小文字＋ハイフン推奨）

export const THEMES = [
  { id: 'gumi', label: 'グミ' },
  { id: 'other', label: 'その他' },
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];

export const DEFAULT_THEME_ID: ThemeId = 'gumi';

export const isThemeId = (value: unknown): value is ThemeId =>
  typeof value === 'string' && THEMES.some((t) => t.id === value);
