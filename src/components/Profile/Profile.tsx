import styles from './Profile.module.css';
import AppGroup from '../AppGroup/AppGroup';
import TimelineGroup from '../TimelineGroup/TimelineGroup';
import IntroductionGroup from '../IntroductionGroup/IntroductionGroup';
import DevProcess from '../DevProcess/DevProcess';

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
          <h2 className={styles.headingContainer}>
            <span className={styles.index}>04</span>
            <span className={styles.heading}>技術</span>
            <span className={styles.headingRight}>今の正直なレベル</span>
          </h2>
        </section>
      </main>
    </div>
  )
}