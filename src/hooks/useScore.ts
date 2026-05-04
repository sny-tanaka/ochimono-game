import { useCallback, useEffect, useRef, useState } from 'react';

import { appendScoreHistory, loadBestScore, saveBestScore } from '@/utils/storage';

export type UseScoreResult = {
  score: number;
  bestScore: number;
  isNewRecord: boolean;
  add: (delta: number) => void;
  reset: () => void;
  finalize: () => { isNewRecord: boolean; finalScore: number };
};

export const useScore = (): UseScoreResult => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const scoreRef = useRef(0);
  const bestScoreRef = useRef(0);

  useEffect(() => {
    const stored = loadBestScore();
    bestScoreRef.current = stored;
    setBestScore(stored);
  }, []);

  const add = useCallback((delta: number) => {
    scoreRef.current += delta;
    setScore(scoreRef.current);
  }, []);

  const reset = useCallback(() => {
    scoreRef.current = 0;
    setScore(0);
    setIsNewRecord(false);
  }, []);

  const finalize = useCallback(() => {
    const finalScore = scoreRef.current;
    const newRecord = finalScore > bestScoreRef.current;
    if (newRecord) {
      bestScoreRef.current = finalScore;
      saveBestScore(finalScore);
      setBestScore(finalScore);
    }
    appendScoreHistory(finalScore);
    setIsNewRecord(newRecord);
    return { isNewRecord: newRecord, finalScore };
  }, []);

  return { score, bestScore, isNewRecord, add, reset, finalize };
};
