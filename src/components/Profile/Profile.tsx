import React, { type SetStateAction } from 'react';

import styles from './Profile.module.css';
import AppGroup from '../AppGroup/AppGroup';
import TimelineGroup from '../TimelineGroup/TimelineGroup';
import IntroductionGroup from '../IntroductionGroup/IntroductionGroup';
import DevProcess from '../DevProcess/DevProcess';
import SkillGroup from '../SkillGroup/SkillGroup';
import Section from './Section/Section';

type ProfileProps = {
  setActionId: React.Dispatch<SetStateAction<string>>;
}

export default function Profile({setActionId}: ProfileProps) { 
  return (
    <div className={styles.container}>
      <main>
        <Section id='history' className={styles.timelineContainer} onInView={setActionId}>
          <TimelineGroup />
        </Section>
        <Section id='apps' className={styles.appsContainer} onInView={setActionId}>
          <AppGroup />
        </Section>
        <Section id='about' onInView={setActionId}>
          <IntroductionGroup />
        </Section>
        <Section id='process' onInView={setActionId}>
          <DevProcess />
        </Section>
        <Section id='skills' onInView={setActionId}>
          <SkillGroup />
        </Section>
      </main>
    </div>
  )
}