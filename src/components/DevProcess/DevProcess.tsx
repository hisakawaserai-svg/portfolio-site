import DevProcessStep from '../DevProcessStep/DevProcessStep';
import { devProcessSteps } from "../../data/devProcessSteps";
import HeaderCard from '../HeaderCard/HeaderCard';
import styles from "./DevProcess.module.css";
import { type StepRole } from '../DevProcessStep/DevProcessStep.types';
import CoderCard from '../DevProcessStep/CoderCard/CoderCard';

const CoderRoles: StepRole[] = ["me", "both", "ai"];

export default function DevProcess() {
  return(
    <>
      {/* 1: ヘッダー */}
      <div className={styles.HeaderContainer}>
        <HeaderCard index="04" title="開発の進め方" />
      </div>

      {/* 2: タイトル */}
      <h3 className={styles.phaseLabel}>Phase 3~ 私のアプリ開発の進め方</h3>
      <div className={styles.coderLabel}>
        <span className={styles.label}>担当</span>
        {CoderRoles.map(coder => <CoderCard stepRole={coder} key={coder} />)}
      </div>

      {devProcessSteps.map((step) => 
        <DevProcessStep step={step} key={step.stepNum} />
      )}
    </>
  )
}