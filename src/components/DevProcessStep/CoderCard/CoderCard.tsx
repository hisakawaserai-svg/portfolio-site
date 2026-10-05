import { DynamicIcon } from "lucide-react/dynamic";
import type { IconName } from "lucide-react/dynamic";

import type { StepRole } from "../DevProcessStep.types"
import styles from "./CoderCard.module.css";
import { stepRoleIcon, stepRoleStr } from "../../../constants/stepRole";

type CoderCardProps = {
  stepRole: StepRole;

}
export default function CoderCard({stepRole}: CoderCardProps) {
  return(
    <span className={styles.coderContainer}>
      {stepRoleIcon[stepRole].map((icon, index) => {
        return(
          <DynamicIcon name={icon as IconName} size={13} color="var(--step-role-text-color)" key={index} />
        )
      })}
      <span className={styles.coder}>{stepRoleStr[stepRole]}</span>
    </span>
  )
}