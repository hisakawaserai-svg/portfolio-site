import { type DevProcessStepType } from "./DevProcessStep.types";

import styles from "./DevProcessStep.module.css";
import CoderCard from "./CoderCard/CoderCard";
import { getStepRoleStyle } from "../../constants/stepRole";

type DevProcessStepProps = {
  step: DevProcessStepType;
}

export default function DevProcessStep({step}: DevProcessStepProps) {
  return(
    <li className={styles.container} style={getStepRoleStyle(step.stepRole)}>
      {/* 左側 */}
      <div className={styles.leftContainer} >
        <span className={styles.stepNum}>{step.stepNum}</span>
        <span className={styles.stepBar} />
      </div>

      {/* 右側 メイン */}
      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{step.title}</span>
          <CoderCard stepRole={step.stepRole} />
        </div>
        <p className={styles.text}>
          {step.text}
        </p>
        {step.desc && (
          <p className={styles.desc}>
            {step.desc}
          </p>
        )}
      </div>
    </li>
  )
}