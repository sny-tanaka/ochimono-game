import { GAME } from '@/constants/game';
import { DEFAULT_THEME_ID, isThemeId } from '@/constants/themes';
import type { SuspendedBody, SuspendedGame } from '@/types/game';

const KEY = GAME.storageKeys.suspended;
const CURRENT_VERSION = 1;

const isFiniteNumber = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

// 単一 body の防御的パース。number 型でなければデフォルトに落とす。
const parseBody = (raw: unknown): SuspendedBody | null => {
  if (typeof raw !== 'object' || raw === null) return null;
  const o = raw as Record<string, unknown>;
  if (!isFiniteNumber(o.level)) return null;
  if (!isFiniteNumber(o.x) || !isFiniteNumber(o.y)) return null;
  return {
    level: o.level,
    x: o.x,
    y: o.y,
    vx: isFiniteNumber(o.vx) ? o.vx : 0,
    vy: isFiniteNumber(o.vy) ? o.vy : 0,
    angle: isFiniteNumber(o.angle) ? o.angle : 0,
    angularVelocity: isFiniteNumber(o.angularVelocity) ? o.angularVelocity : 0,
  };
};

// localStorage から中断データを読む。データが無い・壊れている場合は null。
// 後方互換のため、未知バージョンでも必須フィールドが揃っていればベストエフォートで復元する。
export const loadSuspendedGame = (): SuspendedGame | null => {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
  if (raw === null) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return null;
    const o = parsed as Record<string, unknown>;
    if (!isFiniteNumber(o.score)) return null;
    if (!Array.isArray(o.bodies)) return null;

    const bodies: SuspendedBody[] = [];
    for (const b of o.bodies) {
      const parsedBody = parseBody(b);
      if (parsedBody) bodies.push(parsedBody);
    }
    return {
      version: isFiniteNumber(o.version) ? o.version : 0,
      savedAt: isFiniteNumber(o.savedAt) ? o.savedAt : 0,
      score: o.score,
      themeId: isThemeId(o.themeId) ? o.themeId : DEFAULT_THEME_ID,
      currentItemLevel: isFiniteNumber(o.currentItemLevel) ? o.currentItemLevel : 1,
      nextItemLevel: isFiniteNumber(o.nextItemLevel) ? o.nextItemLevel : 1,
      skillGauge: isFiniteNumber(o.skillGauge) ? o.skillGauge : 0,
      // 古い保存データには magnetUsesLeft が無い。undefined のまま返して、
      // 復元側でデフォルト値（満タン）を当てる。
      magnetUsesLeft: isFiniteNumber(o.magnetUsesLeft) ? o.magnetUsesLeft : undefined,
      bodies,
    };
  } catch {
    return null;
  }
};

// 中断データの存在確認だけ（読み込みコストを最小化したい場面用）。
// 内部的には読んでパースしているので結局同じだが、用途名としてラップを残す。
export const hasSuspendedGame = (): boolean => loadSuspendedGame() !== null;

// 中断データを保存する。version は CURRENT_VERSION で上書き。
export const saveSuspendedGame = (data: Omit<SuspendedGame, 'version' | 'savedAt'>): void => {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return;
  try {
    const payload: SuspendedGame = {
      ...data,
      version: CURRENT_VERSION,
      savedAt: Date.now(),
    };
    window.localStorage.setItem(KEY, JSON.stringify(payload));
  } catch {
    // QuotaExceeded 等は黙殺。中断保存に失敗してもゲームは継続できる。
  }
};

// 中断データを削除する。再開時 / 拒否時 / 正常な start / restart 時などに呼ぶ。
export const clearSuspendedGame = (): void => {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // 削除失敗は無視（次回保存で上書きされる想定）
  }
};
