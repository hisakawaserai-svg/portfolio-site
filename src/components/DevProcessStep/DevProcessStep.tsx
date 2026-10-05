import { type DevProcessStepType, type StepRole } from "./DevProcessStep.types";
import { type CSSProperties } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";
import styles from "./DevProcessStep.module.css";

const stepRoleColor: Record<StepRole, string> = {
  "me": "var(--navy)",
  "both": "var(--panel)",
  "ai": "var(--panel)",
}

const stepRoleTextColor: Record<StepRole, string> = {
  "me": "var(--panel)",
  "both": "var(--navy)",
  "ai": "oklch(0.5 0.09 195)",
}

const stepRoleBorderColor: Record<StepRole, string> = {
  "me": "var(--navy)",
  "both": "var(--navy)",
  "ai": "oklch(0.5 0.09 195)",
}

const stepRoleStr: Record<StepRole, string> = {
  "me": "自分",
  "both": "共同",
  "ai": "AI",
}

const stepRoleBorderType: Record<StepRole, string> = {
  "me": "solid",
  "both": "solid",
  "ai": "dashed",
}

const stepRoleIcon: Record<StepRole, string[]> = {
  "me": ["user"],
  "both": ["user", "bot"],
  "ai": ["bot"],
}

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
          <span className={styles.coderContainer}>
            {stepRoleIcon[step.stepRole].map((icon, index) => {
              return(
                <DynamicIcon name={icon as IconName} size={13} color={stepRoleTextColor[step.stepRole]} key={index} />
              )
            })}
            <span className={styles.coder}>{stepRoleStr[step.stepRole]}</span>
          </span>
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