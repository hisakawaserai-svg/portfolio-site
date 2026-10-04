import { useState } from 'react';

import TalkingBird from '../TalkingBird/TalkingBird';
import styles from './TableOfContents.module.css';
import { shuffle } from '../../utils/shuffle';
import StatusBar from './StatusBar/StatusBar';
import LineCard from './LineCard/LineCard';
import AppIcons from './AppIcons/AppIcons';

const initialTalks: string[] = [
  // 何者か
  "seraiは通信制の大学でITを学んでるよ",
  "目指してるのは、スマホアプリのエンジニア！",
  // 作ったもの
  "seraiはアプリを3本出してるんだ",
  "スタンプ抜きは、iPhoneとAndroidの両方に出したよ",
  "ストアの審査も、広告の設定も、全部ひとりでやったんだ",
  // エピソード
  "アプリ開発の始まりは、お母さんの『面倒だ』だったんだ",
  "うりつみはSwiftからReact Nativeに引っ越したよ",
  // 開発の仕方
  "seraiはAIと役割分担して作ってるよ",
  // 人柄・続ける力
  "seraiのDuolingo、450日続いてるんだって",
  "Reactは、始めたばかり。いま勉強中！",
  "このページも、Reactで作ったんだよ",
  // 遊び
  "クリックしてくれてありがとう！",
  "もう1回押すと、別の話をするよ",
  "時間帯によって、ぼくの姿が変わるよ！",
];

export default function TableOfContents() {
  const [talks, setTalks] = useState<string[]>(() => shuffle(initialTalks));
  const [index, setIndex] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(false);

  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <StatusBar />
        {/* 自己紹介 */}
        <header className={styles.nameContainer}>
          <div className={styles.nameSection}>
            <h1>Serai Hisakawa</h1>
          </div>
          <div className={styles.catchContainer}>
            <p className={styles.wish}>モバイルアプリ・フロントエンドエンジニア志望 {`\n`}/ 2028年卒</p>
            <p className={styles.catch}>身近な "<span className={styles.highlight}>面倒</span>" を、動くアプリに。</p>
          </div>
        </header>
        {/* ウィジェット */}
        <div className={styles.talkingBirdCard}>
          <TalkingBird talks={talks} index={index} isShow={isShow} setTalks={setTalks} setIndex={setIndex} setIsShow={setIsShow} />
          <LineCard isShow={isShow} talks={talks} index={index} />
        </div>
        {/* アプリ */}
        <AppIcons />
      </div>
    </div>
  )
}