import { Globe } from 'lucide-react';
import styles from './DemoBadge.module.css';

export default function DemoBadge() {
  return(
    <div className={styles.container}>
      <Globe size={22} />
      <span className={styles.labelContainer}>
        <span className={styles.browser}>ブラウザで</span>
        <span className={styles.demo}>デモを開く</span>
      </span>
    </div>
  )
}