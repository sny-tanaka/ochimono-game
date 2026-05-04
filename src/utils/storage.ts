import { GAME } from '@/constants/game';

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
