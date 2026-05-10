import { useCallback, useState } from 'react';

import { InGameLayout } from './InGameLayout';
import { PreStartLayout } from './PreStartLayout';

import type { SuspendedGame } from '@/types/game';

// アプリの 2 フェーズを切り替える薄いラッパ。
// - 'pre-start': タイトル / 設定 / 中断再開ダイアログのみ。useGame は使わず Matter も生成しない。
//   AppUpdater バナーがフロー内で表示されるためレイアウトが安全に縮む。
// - 'in-game': 実際にプレイ中のレイアウト。マウント時に <main> を実測し、
//   その値を fieldWidth / fieldHeight として useGame に渡し Matter を起動する。
// ゲームオーバー → リスタートは InGameLayout 内で完結し、pre-start には戻らない。
type Phase = { kind: 'pre-start' } | { kind: 'in-game'; resume: SuspendedGame | null };

export const GameLayout = () => {
  const [phase, setPhase] = useState<Phase>({ kind: 'pre-start' });

  const handleStart = useCallback(() => {
    setPhase({ kind: 'in-game', resume: null });
  }, []);
  const handleResume = useCallback((data: SuspendedGame) => {
    setPhase({ kind: 'in-game', resume: data });
  }, []);

  if (phase.kind === 'pre-start') {
    return (
      <PreStartLayout
        onStart={handleStart}
        onResume={handleResume}
      />
    );
  }
  return <InGameLayout initialResume={phase.resume} />;
};
