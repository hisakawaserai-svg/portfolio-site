import styles from './LineCard.module.css';

type LineCard = {
  isShow: boolean;
  talks: string[];
  index: number;
}

export default function LineCard({isShow, talks, index}: LineCard) {
  return(
    <>
      {isShow ? (
        <div className={styles.line}>
          <p>{talks[index]}</p> 
          <p className={styles.pageNumber} >{index + 1} / {talks.length}</p>
        </div>
      ):(
        <p className={styles.line}>タップすると、ぼくが話すよ</p>
      )}
    </>
  )
}