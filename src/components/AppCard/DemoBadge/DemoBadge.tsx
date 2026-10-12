import { Globe } from 'lucide-react';
import styles from './DemoBadge.module.css';

type DemoBadgeProps = {
  label: string;
}

export default function DemoBadge({label}: DemoBadgeProps) {
  return(
    <div className={styles.container}>
      <Globe size={22} />
      <span className={styles.labelContainer}>
        <span className={styles.browser}>ブラウザで</span>
        <span className={styles.demo}>{label}</span>
      </span>
    </div>
  )
}