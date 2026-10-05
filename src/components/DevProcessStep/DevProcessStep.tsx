import { type DevProcessStepType } from "./DevProcessStep.types";
import { type CSSProperties } from "react";

import styles from "./DevProcessStep.module.css";
import { stepRoleColor, stepRoleTextColor, stepRoleBorderColor, stepRoleBorderType } from "../../constants/stepRole";
import CoderCard from "./CoderCard/CoderCard";

type DevProcessStepProps = {
  step: DevProcessStepType;
}

export default function DevProcessStep({step}: DevProcessStepProps) {
  return(
    <li className={styles.container} 
      style={{"--step-role-color": stepRoleColor[step.stepRole], 
        "--step-role-text-color": stepRoleTextColor[step.stepRole],
        "--step-role-border-color": stepRoleBorderColor[step.stepRole],
        "--step-role-border-type": stepRoleBorderType[step.stepRole]} as CSSProperties
      }
    >
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