import styles from "./StepIndicator.module.css";
import { type CSSProperties } from "react";

const numbers: number[] = [1, 2, 3, 4]

type StepIndicatorProps = {
  level: number;
}
export default function StepIndicator({level}: StepIndicatorProps) {
  return(
    <div className={styles.stepIndicator} aria-hidden="true">
      <span className={styles.stepContainer}>
        {numbers.map(num => {
          const isReach = num <= level;
          return(
            <div className={styles.stepContainer} key={num} style={{
              "--color": isReach ? "white" : "var(--navy)",
              "--background": isReach ? "var(--navy)" : "var(--panel)",
              "--border": isReach ? "1px solid var(--navy)" : "1px solid oklch(0.88 0.004 240)",
            } as CSSProperties}>
              <span className={styles.step}>{num}</span>
              {(num !== 4) && <span className={styles.bar} style={{
                background: !isReach || num === level ? "oklch(0.88 0.004 240)" : "var(--navy)"
              }}/>}
            </div>
          )
        })}
      </span>
    </div>
  )
}