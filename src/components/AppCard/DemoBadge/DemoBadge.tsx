import { AppWindow, Globe } from 'lucide-react';
import styles from './DemoBadge.module.css';
import type { ReleaseType } from '../AppCard.types';
import { webBadgeLabel } from '../../../constants/release';

type DemoBadgeProps = {
  release: ReleaseType;
}

export default function DemoBadge({release}: DemoBadgeProps) {
  return(
    <div className={styles.container}>
      {release === 'release' ? (
        <AppWindow size={22} />
      ):(
        <Globe size={22} />
      )}
      <span className={styles.labelContainer}>
        <span className={styles.browser}>ブラウザで</span>
        <span className={styles.demo}>{webBadgeLabel[release]}</span>
      </span>
    </div>
  )
}