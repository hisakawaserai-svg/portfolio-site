import { useState, useEffect } from 'react';

import styles from './StatusBar.module.css';
import { Battery } from 'lucide-react';

export default function StatusBar() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return(() => clearInterval(timerId));
  }, [])

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');

  return(
    <div className={styles.container}>
      <p>{h}:{m}</p>
      <Battery />
    </div>
  )
}