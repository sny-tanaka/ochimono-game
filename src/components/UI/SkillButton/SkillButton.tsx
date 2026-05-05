import { memo } from 'react';

import styles from './style.module.scss';

type Props = {
  // 0..gaugeMax の絶対値ゲージ
  gauge: number;
  segmentMax: number;
  segmentCount: number;
  // 1 セグメント以上溜まっていればクリック可能（メニューを開ける）。
  canOpen: boolean;
  onClick: () => void;
};

// 円形のゲージで囲まれた必殺技発動ボタン。
// セグメントを 3 等分（120°ずつ）し、間に少しギャップを入れて分割が見えるようにしている。
// 各セグメントは個別に充填率（0..1）を持ち、ゲージが segmentMax を超えるごとに次のセグメントが満ちる。
const RADIUS = 32;
const CENTER = 40;
const SEGMENT_ARC_DEG = 110; // 120° のうち 110° が弧、10° がギャップ
const TOTAL_DEG = 360;

const polarToCartesian = (deg: number): { x: number; y: number } => {
  // SVG は 3 時方向が 0°、時計回り。リング上端を起点にしたいので -90° 回す。
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: CENTER + RADIUS * Math.cos(rad), y: CENTER + RADIUS * Math.sin(rad) };
};

const arcPath = (startDeg: number, endDeg: number): string => {
  const start = polarToCartesian(startDeg);
  const end = polarToCartesian(endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${end.x} ${end.y}`;
};

// 弧の長さ（pathLength="1" を指定するので strokeDasharray は 0..1 で扱える）
const SEGMENT_PATH_LENGTH = 1;

export const SkillButton = memo(({ gauge, segmentMax, segmentCount, canOpen, onClick }: Props) => {
  const percent = Math.round((gauge / (segmentMax * segmentCount)) * 100);
  const sliceDeg = TOTAL_DEG / segmentCount;
  const gapDeg = sliceDeg - SEGMENT_ARC_DEG;

  // 各セグメントの充填率
  const segmentRatios = Array.from({ length: segmentCount }, (_, i) => {
    const lo = i * segmentMax;
    const v = Math.max(0, Math.min(segmentMax, gauge - lo));
    return v / segmentMax;
  });
  const filledCount = segmentRatios.filter((r) => r >= 1).length;
  const isFullyReady = filledCount === segmentCount;

  return (
    <button
      type="button"
      className={[
        styles.button,
        canOpen ? styles.ready : '',
        isFullyReady ? styles.fully_ready : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      disabled={!canOpen}
      aria-label={canOpen ? '必殺技を選択' : `必殺技ゲージ ${percent}%`}
    >
      <svg
        className={styles.gauge}
        viewBox="0 0 80 80"
        aria-hidden="true"
      >
        {segmentRatios.map((ratio, i) => {
          const startDeg = i * sliceDeg + gapDeg / 2;
          const endDeg = startDeg + SEGMENT_ARC_DEG;
          const d = arcPath(startDeg, endDeg);
          const filled = ratio >= 1;
          return (
            <g key={i}>
              <path
                className={styles.gauge_track}
                d={d}
                pathLength={SEGMENT_PATH_LENGTH}
              />
              <path
                className={`${styles.gauge_fill} ${filled ? styles.gauge_fill_full : ''}`}
                d={d}
                pathLength={SEGMENT_PATH_LENGTH}
                strokeDasharray={`${ratio} ${SEGMENT_PATH_LENGTH - ratio}`}
              />
            </g>
          );
        })}
      </svg>
      <span
        className={styles.icon}
        aria-hidden="true"
      >
        ⚡
      </span>
    </button>
  );
});
SkillButton.displayName = 'SkillButton';
