import { Fragment } from 'react';

import { timeline } from '../../data/timeline';
import { timelinePhase } from '../../data/timelinePhase';
import HeaderCard from '../HeaderCard/HeaderCard';
import TimelineEvent from '../TimelineEvent/TimelineEvent';
import styles from './TimelineGroup.module.css';
import { type TimelinePhaseType } from './TimelineGroup.types';

function TimelinePhase({phase, title}: TimelinePhaseType) {
  return(
    <li className={styles.phaseContainer}>
      {/* 左：空 */}
      <span className={styles.emptyArea} />

      {/* 中央：バー */}
      <span className={styles.centerBarContainer}>
        <span className={styles.centerBar} />
        <span className={styles.rhombus} />
      </span>

      {/* 右：ラベル */}
      <div className={styles.labelContainer}>
        <span className={styles.phase}>Phase {phase}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </li>
  )
}

export default function TimelineGroup() {
  return(
    <div style={{backgroundColor: "var(--page-bg)"}}>
      <HeaderCard index='01' title='これまでの歩み' detail='2025年9月〜' />
      <ol className={styles.container}>
        {timelinePhase.map((phase) => {
          return(
            <Fragment key={phase.phase}>
              <TimelinePhase phase={phase.phase} title={phase.title} />
              {timeline.filter((timelineEvent) => timelineEvent.phase === phase.phase).map((timelineEv, index) => {
                return(
                  <Fragment key={index}>
                    <TimelineEvent timeline={timelineEv} />
                  </Fragment>
                )
              })}
            </Fragment>
          )
        })}
      </ol>
    </div>
  )
}