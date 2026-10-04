import { Code } from "lucide-react";

import { type TimelineEventType } from "./TimelineEvent.types";
import styles from './TimelineEvent.module.css';
import stylesAppCard from '../AppCard/AppCard.module.css'
import { releaseLabel, releaseColor } from "../../constants/release";
import { getApp } from "../../utils/getAppCard";

type TimelineProps = {
  timeline: TimelineEventType;
}

export default function Timeline({timeline}: TimelineProps) {
  const app = getApp(timeline?.appId ?? '');

  return(
    <li className={styles.container}>
      {/* 左：日付 */}
      <span className={styles.dateContainer}>{timeline.date}</span>

      {/* 中央：タイムラインバー */}
      <span className={styles.dateBarContainer}>
        <span className={styles.dateBar} />
        <span className={styles.dateCircle} />
      </span>

      {/* 右：メイン */}
      <div className={styles.mainContainer}>
        <p className={styles.title}>{timeline.title}</p>
        <div className={styles.labelContainer}>
          {timeline.coderLabel && (
            <div className={styles.coderContainer}>
              <Code size={15} />
                <span className={styles.coderLabel}>{timeline.coderLabel} </span>
              {timeline.coderDisc && (
                <span className={styles.coderDisc}>{timeline.coderDisc}</span>
              )}
            </div>
          )}
          {app?.release && (
            <span className={styles.releaseContainer}>
              <span className={stylesAppCard.releaseMark} style={{background: releaseColor[app?.release]}} />
              {releaseLabel[app?.release]}
            </span>
          )}
          {timeline.connection && (
            <span className={styles.connection}>{timeline.connection}</span>
          )}
        </div>
        {app?.title && (
          <a href={`#${app?.title}`} className={styles.link} 
            style={{color: `${app?.color}`}}>
            {app?.title} のカードを見る
            <span className={styles.arrowDown}> ↓</span>
          </a>
        )}
      </div>
    </li>
  )
}