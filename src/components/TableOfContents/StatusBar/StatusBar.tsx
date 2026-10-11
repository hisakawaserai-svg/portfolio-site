import { useState, useEffect, type SetStateAction } from 'react';

import { Battery, ChevronUp, ChevronDown } from 'lucide-react';

import styles from './StatusBar.module.css';
import Touchable from '../../Touchable/Touchable';

type StatusBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOut: boolean;
}
export default function StatusBar({isOpen, setIsOpen, isOut}: StatusBarProps) {
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
      {isOut && (
        <Touchable onClick={() => setIsOpen(!isOpen)} className={styles.openContainer}>
          {isOpen ? (
            <>
              <ChevronDown />
              <span>閉じる</span>
            </>
          ):(
            <>
              <ChevronUp />
              <span>目次</span>
            </>
          )}
        </Touchable>
      )}
      <div className={styles.battery}>
        <Battery />
      </div>
    </div>
  )
}