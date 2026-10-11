import React, { useState, useEffect, type SetStateAction } from 'react';

import styles from './Profile.module.css';
import AppGroup from '../AppGroup/AppGroup';
import TimelineGroup from '../TimelineGroup/TimelineGroup';
import IntroductionGroup from '../IntroductionGroup/IntroductionGroup';
import DevProcess from '../DevProcess/DevProcess';
import SkillGroup from '../SkillGroup/SkillGroup';
import Section from './Section/Section';
import { sortActions } from '../../utils/sortActions';

type ProfileProps = {
  setActionId: React.Dispatch<SetStateAction<string>>;
}
export default function Profile({setActionId}: ProfileProps) {
  const [actions, setActions] = useState<string[]>([]);
  const getActionId = (id: string, inView: boolean) => {
    if(inView) {
      setActions(prev => [...prev, id]);
    } else {
      setActions(prev => prev.filter(p => p !== id)) 
    }
  }

  useEffect(() => {
    if(actions.length > 0) {
      setActionId(sortActions(actions)[0]);
    }
  }, [actions, setActionId])

  return (
    <div className={styles.container}>
      <main>
        <Section id='history' className={styles.timelineContainer} onInView={getActionId}>
          <TimelineGroup />
        </Section>
        <Section id='apps' className={styles.appsContainer} onInView={getActionId}>
          <AppGroup />
        </Section>
        <Section id='about' onInView={getActionId}>
          <IntroductionGroup />
        </Section>
        <Section id='process' onInView={getActionId}>
          <DevProcess />
        </Section>
        <Section id='skills' onInView={getActionId}>
          <SkillGroup />
        </Section>
      </main>
    </div>
  )
}