import { type DescriptionItem } from "./IntroductionItem.types"
import styles from "./IntroductionItem.module.css";
import { Award } from "lucide-react";

function IntroductionCard({desc}: IntroductionItemProps) {
  if ("text" in desc) {
      return(
        <>
          <dt>{desc.dt}</dt>
          <dd>{desc.text}</dd>
        </>
      )
  } else if ("items" in desc) {
    return(
      <>
        <dt>{desc.dt}</dt>
        <ul>
          {desc.items.map((items, index) => {
            return(
              <li key={index}>{items}</li>
            )
          })}
        </ul>
      </>
    )
  }
  return (
    <>
      <dt>{desc.dt}</dt>
      <ul>
        {desc.qual.map((q, i) => {
          return(
            <li className={styles.qual} key={i}>
              <Award className={styles.award} width={15} height={15} />
              {q.name}
              <span className={styles.qualDesc}>{q.desc}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

type IntroductionItemProps= {
  desc: DescriptionItem,
}

export default function IntroductionItem({desc}: IntroductionItemProps) {
  return (
    <div className={styles.container}>
      <IntroductionCard desc={desc} />
    </div>
  )
}