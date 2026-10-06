import styles from './Profile.module.css';
import AppGroup from '../AppGroup/AppGroup';
import TimelineGroup from '../TimelineGroup/TimelineGroup';
import IntroductionGroup from '../IntroductionGroup/IntroductionGroup';
import DevProcess from '../DevProcess/DevProcess';
import SkillGroup from '../SkillGroup/SkillGroup';

import SkillItem from '../SkillItem/SkillItem';
import { skills } from '../../data/skills';

export default function Profile() { 
  return (
    <div className={styles.container}>
      <main>
        <section id='history' className={styles.timelineContainer}>
          <TimelineGroup />
        </section>
        <section id='apps' className={styles.appsContainer}>
          <AppGroup />
        </section>
        <section id='about'>
          <IntroductionGroup />
        </section>
        <section id='process'>
          <DevProcess />
        </section>
        <section id='skills'>
          <SkillGroup />
        </section>
        <SkillItem skill={skills[0]} />
      </main>
    </div>
  )
}