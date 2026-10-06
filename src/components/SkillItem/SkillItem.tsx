import styles from "./SkillItem.module.css";

export default function SkillItem() {
  return(
    <li>
      <span className={styles.skillLabel}>{/* スキル名 */}</span>
      <div className={styles.stepIndicatorContainer}>
        <div className={styles.stepIndicator} aria-hidden="true"></div>
      </div>

    </li>
  )
}