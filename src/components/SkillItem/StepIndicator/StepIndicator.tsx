import { type CSSProperties } from "react";

import { type SkillLevel } from "../../../constants/indicator";
import styles from "./StepIndicator.module.css";
import StepCircle from "../../StepCircle/StepCircle";

const numbers: SkillLevel[] = [1, 2, 3, 4]

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
            const reache = num === level;
            return(
              <div className={styles.stepContainer} key={num} style={{
                "--color": isReach ? "white" : "var(--navy)",
                "--background": isReach ? "var(--navy)" : "var(--panel)",
                "--border": isReach ? "1px solid var(--navy)" : "1px solid oklch(0.88 0.004 240)",
                flex: num === numbers.length ? "0 0 auto" : "1 1 0",
              } as CSSProperties}>
                <span className={styles.stepWrapper}>
                  <StepCircle num={num} reached={reache} />
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