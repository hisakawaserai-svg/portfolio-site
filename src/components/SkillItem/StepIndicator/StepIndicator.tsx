import { type CSSProperties } from "react";

import { indicatorLabel, type Level } from "../../../constants/indicator";
import styles from "./StepIndicator.module.css";

const numbers: Level[] = [1, 2, 3, 4]

type StepIndicatorProps = {
  level: number;
}
export default function StepIndicator({level}: StepIndicatorProps) {
  return(
    <div className={styles.stepIndicatorContainer}>
      <div className={styles.stepIndicator} aria-hidden="true">
        <span className={styles.stepContainer}>
          {numbers.map(num => {
            const isReach = num <= level;
            return(
              <div className={styles.stepContainer} key={num} style={{
                "--color": isReach ? "white" : "var(--navy)",
                "--background": isReach ? "var(--navy)" : "var(--panel)",
                "--border": isReach ? "1px solid var(--navy)" : "1px solid oklch(0.88 0.004 240)",
                flex: num === numbers.length ? "0 0 auto" : "1 1 0",
              } as CSSProperties}>
                <span className={styles.stepWrapper}>
                  <span className={styles.step}>{num}</span>
                  {num === level && (
                    <p className={`
                      ${styles.indicatorLabel} 
                      ${num === 1 ? styles.labelStart : ""}
                      ${num === numbers.length ? styles.labelEnd : ""}
                    `}>{indicatorLabel[level]}</p>
                  )}
                </span>
                {(num !== 4) && <span className={styles.bar} style={{
                  background: !isReach || num === level ? "oklch(0.88 0.004 240)" : "var(--navy)",
                }}/>}
              </div>
            )
          })}
        </span>
      </div>
    </div>
  )
}