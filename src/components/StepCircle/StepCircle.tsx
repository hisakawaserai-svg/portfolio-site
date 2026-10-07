import styles from "./StepCircle.module.css";
import { indicatorLabel, type SkillLevel } from "../../constants/indicator";

type StepCircleProps = {
  num: SkillLevel;
  reached: boolean;
  descMode?: boolean;
}
export default function StepCircle({num, reached, descMode = false}: StepCircleProps) {
  return(
    <>
      <span className={styles.step}>{num}</span>
      {reached && (
        <p className={`
          ${styles.indicatorLabel} 
          ${!descMode && num === 1 ? styles.labelStart : ""}
          ${!descMode && num === 4 ? styles.labelEnd : ""}
          ${descMode ? styles.descMode : ""}
        `}>{indicatorLabel[num]}</p>
      )}
    </>
  )
}