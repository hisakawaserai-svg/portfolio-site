import styles from "./SkillItem.module.css";
import StepIndicator from "./StepIndicator/StepIndicator";
import { type SkillItemType } from "./SkillItem.types";

type SkillItemProps = {
  skill: SkillItemType;
}
export default function SkillItem({skill}: SkillItemProps) {
  return(
    <li className={styles.container}>
      <span className={styles.skillLabel}>{skill.name}</span>
        <StepIndicator level={skill.level} />
      <p className={styles.text}>{skill.text}</p>
    </li>
  )
}