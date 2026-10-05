import styles from './Profile.module.css';
import AppGroup from '../AppGroup/AppGroup';
import TimelineGroup from '../TimelineGroup/TimelineGroup';

type qualification = {
  name: string;
  desc: string;
}

type DescriptionItem =
  | { dt: string; text: string }
  | { dt: string; items: string[] }
  | { dt: string; qual: qualification[] };

const descriptionItems: DescriptionItem[] = [
  {dt: "大学", text: "通信制大学 / 2028年3月卒業予定"},
  {dt: "志望職", text: "モバイルアプリエンジニア（React Native）\nReact・TypeScriptのフロントエンドも志望"},
  {dt: "主な技術", items: ["React Native", "TypeScript", "React"]},
  {dt: "アプリを作り始めたきっかけ", text: "母からの相談。まずSwiftで作り、その後React Native（TypeScript）へ移った"},
  {dt: "強み", text: "続ける力（Duolingoを450日以上毎日続けている。「毎日1レッスンだけ」とハードルを下げたのが続いた理由）、使う人の目線で機能を選ぶこと"},
  {dt: "好きな言葉", text: "百聞は一見に如かず（アプリの分かりにくい説明には図を入れている）"},
  {dt: "資格", qual: [ 
    {name: "ITパスポート試験", desc: "2025年10月"},
    {name: "paiza スキルチェック Bランク", desc: "2026年4月"},
    {name: "普通自動車免許（AT限定）", desc: "2024年1月"},
  ]},
  {dt: "このサイトについて", text: "React＋TypeScript（Vite）で作成。Reactは2026年9月26日に始めた。"}
]

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
        <section id='about' className={styles.about}>
          <h2 className={styles.headingContainer}>
            <span className={styles.index}>02</span>
            <span className={styles.heading}>自己紹介</span>
          </h2>
          <dl className={styles.aboutList}>
            {descriptionItems.map((desc, index) => {
              if ('text' in desc){
                return(
                  <div key={index}>
                    <dt>{desc.dt}</dt>
                    <dd>{desc?.text}</dd>
                  </div>
                )}
              else if ("items" in desc) {
                return(
                  <div key={index}>
                    <dt>{desc.dt}</dt>
                    <ul>
                      {desc.items.map((items, index) => {
                        return(
                          <li key={index}>{items}</li>
                        )
                      })}
                    </ul>
                </div>
                )
              }
              else {
                return(
                  <>
                  </>
                )
              }
            })}
          </dl>
        </section>
        <section id='process'>
          <h2 className={styles.headingContainer}>
            <span className={styles.index}>03</span>
            <span className={styles.heading}>開発の進め方</span>
            
          </h2>
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