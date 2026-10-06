import DevProcessStep from '../DevProcessStep/DevProcessStep';
import { devProcessSteps } from "../../data/devProcessSteps";
import HeaderCard from '../HeaderCard/HeaderCard';
import styles from "./DevProcess.module.css";
import { type StepRole } from '../DevProcessStep/DevProcessStep.types';
import CoderCard from '../DevProcessStep/CoderCard/CoderCard';
import { type DevProcessStepType } from "../DevProcessStep/DevProcessStep.types";
import { RefreshCw, Undo2 } from 'lucide-react';

const CoderRoles: StepRole[] = ["me", "both", "ai"];

const [turns, loops] = devProcessSteps.reduce((acc, step) => {
  if(step.inLoop) {
    acc[1].push(step);
  } else {
    acc[0].push(step);
  }
  return acc;
}, [[], []] as DevProcessStepType[][])

export default function DevProcess() {
  return(
    <>
      {/* 1: ヘッダー */}
      <div className={styles.HeaderContainer}>
        <HeaderCard index="04" title="開発の進め方" />
      </div>

      {/* 2: タイトル */}
      <h3 className={styles.phaseLabel}>Phase 3〜 私のアプリ開発の進め方</h3>
      <div className={styles.coderLabel}>
        <span className={styles.label}>担当</span>
        {CoderRoles.map(coder => <CoderCard stepRole={coder} key={coder} />)}
      </div>

      {turns.map((step) => 
        <DevProcessStep step={step} key={step.stepNum} />
      )}

      <ol className={styles.loopContainer}>
        <div className={styles.loopLabel}>
          <RefreshCw size="15" />
          <span>くり返し 3 → 4 → 5 → 3...</span>
        </div>
        {loops.map((step) => 
          <DevProcessStep step={step} key={step.stepNum} />
        )}
        <div className={`${styles.loopLabel} ${styles.loopBorderDashed}`}>
          <Undo2 size="15" />
          <span>欲しい機能が出たら 2 設計へ</span>
        </div>
      </ol>
      <p className={styles.detailLabel}>
        ※ Phase 3以降のアプリのコードは、Claude Codeが書きました。自分は、企画・機能の発案・動作の確認・リリースを担当しています。
      </p>
    </>
  )
}