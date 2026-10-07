import styles from "./IndicatorDesc.module.css";
import StepCircle from "../../StepCircle/StepCircle";
import type { SkillLevel } from "../../../constants/indicator";
import type { CSSProperties } from "react";

export default function IndicatorDesc() {
  return(
    <div className={styles.container}
      style={{
        "color": "white",
        "--background": "var(--navy)",
        "--border": "1px solid var(--navy)",
      } as CSSProperties
    }>
      <span className={styles.title}>レベルの見方</span>
      <ol className={styles.indicatorContainer}>
        <span className={styles.bar} aria-hidden="true" />
        {Array.from({length: 4}).map((_, index) => {
          return(
            <li key={index} className={styles.li}>
              <StepCircle num={index+1 as SkillLevel} reached={true} descMode={true} />
            </li>
          )
        })}
      </ol>
    </div>
  )
}