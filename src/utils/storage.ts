import { GAME } from '@/constants/game';
import { DEFAULT_THEME_ID, isThemeId, type ThemeId } from '@/constants/themes';

const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const safeGet = (key: string): string | null => {
  if (!isBrowser) return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (key: string, value: string): void => {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // QuotaExceeded 等は黙殺
  }
};

export const loadBestScore = (): number => {
  const raw = safeGet(GAME.storageKeys.bestScore);
  if (raw === null) return 0;
  const n = Number(raw);
  return Number.isFinite(n) ? n : 0;
};

export const saveBestScore = (score: number): void => {
  safeSet(GAME.storageKeys.bestScore, String(score));
};

export const loadScoreHistory = (): number[] => {
  const raw = safeGet(GAME.storageKeys.scoreHistory);
  if (raw === null) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
  } catch {
    return [];
  }
};

export const appendScoreHistory = (score: number): number[] => {
  const next = [score, ...loadScoreHistory()].slice(0, GAME.maxScoreHistory);
  safeSet(GAME.storageKeys.scoreHistory, JSON.stringify(next));
  return next;
};

export const loadIsSoundOn = (): boolean => {
  const raw = safeGet(GAME.storageKeys.isSoundOn);
  if (raw === null) return true;
  return raw === 'true';
};

export const saveIsSoundOn = (value: boolean): void => {
  safeSet(GAME.storageKeys.isSoundOn, String(value));
};

export const loadIsGyroOn = (): boolean => {
  const raw = safeGet(GAME.storageKeys.isGyroOn);
  // 既定は OFF（端末センサー / 権限が絡むので明示的にONにしてもらう）。
  return raw === 'true';
};

export const saveIsGyroOn = (value: boolean): void => {
  safeSet(GAME.storageKeys.isGyroOn, String(value));
};

export const loadThemeId = (): ThemeId => {
  const raw = safeGet(GAME.storageKeys.themeId);
  return isThemeId(raw) ? raw : DEFAULT_THEME_ID;
};

export const saveThemeId = (value: ThemeId): void => {
  safeSet(GAME.storageKeys.themeId, value);
};
