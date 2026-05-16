import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { Page } from '@/pages/home';

// useGame は内部で Matter.js のキャンバス描画を行う。jsdom 上では canvas 周辺の API が
// 限定的なので、レイアウトが描画されてスタート画面が見えることだけを確認する。
vi.mock('@/hooks/useGame', () => ({
  useGame: () => ({
    status: 'idle',
    score: 0,
    bestScore: 0,
    isNewRecord: false,
    currentItem: null,
    nextItem: null,
    isSoundOn: true,
    isGyroOn: false,
    toggleGyro: () => {},
    themeId: 'gumi',
    mergeEffectRef: { current: null },
    canvasContainerRef: { current: null },
    drop: () => {},
    start: () => {},
    restart: () => {},
    toggleSound: () => {},
    setThemeId: () => {},
    fieldWidth: 360,
    fieldHeight: 560,
    gameOverLineY: 80,
    skillGauge: 0,
    skillGaugeMax: 300,
    skillSegmentMax: 100,
    skillSegmentCount: 3,
    canOpenSkillMenu: false,
    canUseSkill: { shake: false, gravityFlip: false, magnet: false },
    magnetUsesLeft: 3,
    magnetMaxUses: 3,
    isSkillMenuOpen: false,
    openSkillMenu: () => {},
    closeSkillMenu: () => {},
    selectSkill: () => {},
    isMagnetSelecting: false,
    cancelMagnetSelecting: () => {},
    selectMagnetTarget: () => {},
    isGravityFlipped: false,
    gameOverCountdown: null,
    suspend: () => {},
    resume: () => {},
    loadSuspended: () => null,
    clearSuspended: () => {},
  }),
}));

describe('HomePage', () => {
  test('タイトル画面のスタートボタンが表示される', () => {
    render(<Page />);
    expect(screen.getByRole('button', { name: 'スタート' })).toBeInTheDocument();
  });

  test('タイトル画面に更新確認ボタンが表示される', () => {
    render(<Page />);
    expect(screen.getByRole('button', { name: '更新確認' })).toBeInTheDocument();
  });
});
