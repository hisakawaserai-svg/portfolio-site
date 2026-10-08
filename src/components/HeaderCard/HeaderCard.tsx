import styles from './HaederCard.module.css';

type HeaderCardProps = {
  index: string,
  title: string,
  detail?: string,
}

export default function HeaderCard({index, title, detail}: HeaderCardProps) {
  return(
    <h2 className={styles.headingContainer}> 
      <span className={styles.mainContainer}>
        <span className={styles.index}>{index}</span> 
        <span className={styles.heading}>{title}</span> 
      </span>
      <span className={styles.headingRight}>{detail}</span>
    </h2>
  )
}