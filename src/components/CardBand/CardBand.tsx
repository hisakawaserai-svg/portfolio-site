import { type BandType } from '../AppCard/AppCard.types';
import styles from './CardBand.module.css';

type CardBandProps = {
  band: BandType;
}

const steps: number[] = [5, 10, 15, 20, 25, 30];

const eqHeights = [8,16,12,22,14,18,8,24,16,12,20,14,6,18,22,14,16,26,18,12,20,14,8,22,16,24,14,18,12,20,8,16,22,14,12,18,8,16,20,12,14,8];

const bandMap = {
  check: <div className={styles.check} />,
  steps: (
    <div className={styles.steps} >
      {steps.map((step) => {
        return(
          <div className={styles.step} key={step} style={{height: step}} />
        )
      })}
      <div className={`${styles.step} ${styles.grow}`} style={{height: 30}}/>
    </div>
  ),
  eq: (
    <div className={styles.eqBand}>
      <svg className={styles.eqSvg} viewBox="0 0 640 30" >
        <g fill="currentColor">
          {eqHeights.map((h, i) => (
            <rect key={i} x={24 + i * 14} y={15 - h / 2} width={3} height={h} rx={1} />
          ))}
        </g>
      </svg>
    </div>
  ),
  progress: (
    <div className={styles.eqBand}>
      <svg width="100%" height="30" aria-hidden="true">
        <defs>
          <pattern id="quizFilled" width="22" height="30" patternUnits="userSpaceOnUse">
            <rect x="3" y="11" width="17" height="8" rx="2" fill="#5A6A1F" />
          </pattern>
          <pattern id="quizOutline" width="22" height="30" patternUnits="userSpaceOnUse">
            <rect x="3.75" y="11.75" width="15.5" height="6.5" rx="2" fill="none" stroke="#5A6A1F" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="30" fill="url(#quizOutline)" />
        <rect width="286px" height="30" fill="var(--page-bg)" />
        <rect width="286px" height="30" fill="url(#quizFilled)" />
      </svg>
    </div>
  ),
  bookmark: (
    <div className={styles.eqBand}>
      <svg width="100%" height="30" aria-hidden="true">
        <defs>
          <pattern id="cookBookmark" width="96" height="30" patternUnits="userSpaceOnUse">
            <path d="M10 0 V22 L17 17 L24 22 V0" fill="none" stroke="#CA6443" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M42 0 V26 L49 21 L56 26 V0 Z" fill="#CA6443" />
            <path d="M74 0 V22 L81 17 L88 22 V0" fill="none" stroke="#CA6443" strokeWidth="1.5" strokeLinejoin="round" />
          </pattern>
        </defs>
        <rect width="100%" height="30" fill="url(#cookBookmark)" />
      </svg>
    </div>
  ),
}

export default function CardBand({ band }: CardBandProps) {
  return(
    <div>
      {bandMap[band]}
    </div>
  )
}