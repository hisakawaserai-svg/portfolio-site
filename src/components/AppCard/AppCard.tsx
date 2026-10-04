import { useState, useRef, useEffect } from 'react';

import CardBand from '../CardBand/CardBand';
import Touchable from '../Touchable/Touchable';
import styles from './AppCard.module.css';
import { type AppType } from './AppCard.types';
import { Code, MoveRight } from 'lucide-react';
import { releaseLabel, releaseColor } from '../../constants/release';

type AppCardProps = {
  app: AppType,
  index: number,
}

export default function AppCard({app, index}: AppCardProps) {
  const i = String(index + 1).padStart(2, '0');
  const p = app.platforms?.map(item => item.platform).join(' / ');
  const [showTechNumber, setShowTechNumber] = useState<number | null>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    techRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }, [showTechNumber]);

  const createDate = app.dateInfo?.find(d => d.dateType === 'create');
  const releaseDate = app.dateInfo?.find(d => d.dateType === 'release');
  const dateFormat = (date: string): string => {
    const d = date.split('-');
    return `${Number(d[0])}年${Number(d[1])}月`
  }

  return(
    <div className={styles.container} id={app.title} style={{'--accent': app.color} as React.CSSProperties}>
      <CardBand band={app.band} />
      <div className={styles.mainContainer}>
        {/* ヘッダー */}
        <div className={styles.headContainer}>
          {app.image ? (
            <img className={styles.icon} src={app.image} alt={`${app.title}のアイコン`} />
          ) : (
            <p className={styles.icon} style={{background: app.gradient ?? app.color}}>アイコンなし</p>
          )}
          <div className={styles.headerTitle}>
            <div className={styles.appTitleBar}>
              <span className={styles.index} style={{color: app.textColor}}>{i}</span>
              <h3 className={styles.appTitle} style={{color: app.textColor}}><span>{app.title}</span></h3>
              {(app.platforms?.length ?? 0) > 0 && (
                <span className={styles.platforms}>{p}</span>
              )}
              <span className={styles.releaseContainer}>
                <span className={styles.releaseMark} 
                  style={{background: releaseColor[app.release]}}>
                </span>
                {releaseLabel[app.release]}
              </span>
            </div>
            <p className={styles.desc}>{app.description}</p>
            <div className={styles.metaContainer}>
              <div className={styles.coderContainer}>
                <Code size={16} />
                <p className={styles.coderP}>{app.coder === 'me' ? '自分' : 'AI'}がコードを書いた</p>
              </div>

              <div className={styles.dateContainer}>
                {createDate?.date && (
                  <>
                    <p>{dateFormat(createDate.date)} 開始</p>
                    {releaseDate?.date && (
                      <MoveRight size={13}/>
                    )}
                  </>
                )}
                {releaseDate?.date && (
                  <p>{dateFormat(releaseDate.date)} 公開</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* メイン */}
        <dl className={styles.dl}>
          <div className={styles.dtDiv}>
            <dt className={styles.dt}>作ったきっかけ</dt>
            <dd className={styles.dd}>{app.reason}</dd>
          </div>
          <div className={styles.dtDiv}>
            <dt className={styles.dt}>工夫したこと</dt>
            <dd className={styles.dd}>
              {app.points.map((point, index) => {
                const indexString = String(index + 1).padStart(2, '0');
                return(
                  <div className={styles.ddDiv} key={index}>
                    <span className={styles.ddIndex} style={{color: app.textColor}}>{indexString}</span>
                    <p className={styles.ddP}>{point}</p>
                  </div>
                )
              })}
            </dd>
          </div>
          <div className={styles.dtDiv}>
            <dt className={styles.dt}>使った技術</dt>
            <dd className={styles.ddTechs}>
              {app.techs.map((tech, index) => {
                const index2 = index + 1
                return(
                  <Touchable className={styles.touchable} key={index} onClick={() => 
                    showTechNumber === index2
                    ? setShowTechNumber(null) 
                    : setShowTechNumber(index2)
                  }>
                    <span className={styles.ddTech}>{tech.name}</span>
                  </Touchable>
                )
              })}
            </dd>
            {showTechNumber && (
              <div className={styles.ddDivTech} ref={techRef}>
                <dt className={`${styles.dt} ${styles.margin}`}>{app.techs[showTechNumber - 1].name} / 具体例</dt>
                <dd className={styles.dd}>
                  {app.techs[showTechNumber - 1].usage.map((use, index) => {
                    const indexString = String(index + 1).padStart(2, '0');
                    return(
                      <div className={styles.ddDiv} key={index}>
                        <span className={styles.ddIndex} style={{color: app.textColor}}>{indexString}</span>
                        <p className={styles.ddP}>{use}</p>
                      </div>
                    )
                  })}
                </dd>
              </div>
            )}
          </div>
          <div className={styles.dtDiv}>
            <dt className={styles.dt}>自分とAIの役割</dt>
            <dd className={styles.dd}>
              <div className={styles.ddGrid}>
                {app.roles.map((role, index) => {
                  const me = role.role === 'me';
                  return(
                    <div className={styles.roleCard} key={index} style={{border: `1px ${me ? 'solid' : 'dashed'} ${app.textColor}`}}>
                      <span className={styles.role} style={{color: app.textColor}}>{me ? '自分' : 'AI'}</span>
                      {role.text.map((t, j) => {
                        return(
                          <p className={styles.roleText} key={j}>{t}</p>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </dd>
          </div>
        </dl>
        <div className={styles.urlContainer}>
        {(app.platforms) ? (
          <> 
            {app.platforms.map((p, index) => {
              const isIOS = p.platform === 'iOS';
              return(
                p.platformURL && (
                  <a href={p.platformURL} className={styles.urlA} key={index}>
                    <img src={isIOS ? '/app-store-badge.svg' : '/google-play-badge.svg'} 
                      alt={isIOS ? 'AppStoreBadge' : 'GooglePlayBadge'} 
                      className={styles.urlImg}
                    />
                  </a>
                )
              )
            })}
          </>
        ) : (
          <div className={styles.urlA}>
            <span className={styles.urlImage}></span>
          </div>
        )}
          {app.githubUrl && (
            <a href={app.githubUrl} className={styles.ghUrl} style={{color: `${app.textColor}`}}>
              <Code />
              <span>コードを見る</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}