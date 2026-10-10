import { type SetStateAction } from 'react';

import TalkingBird from '../TalkingBird/TalkingBird';
import styles from './TableOfContents.module.css';
import StatusBar from './StatusBar/StatusBar';
import LineCard from './LineCard/LineCard';
import AppIcons from './AppIcons/AppIcons';
import TabBarGroup from './TabBarGroup/TabBarGroup';

type TableOfContentsProps = {
  talks: string[];
  index: number;
  isShow: boolean;
  setTalks: React.Dispatch<SetStateAction<string[]>>;
  setIndex: React.Dispatch<SetStateAction<number>>;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;

  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOut: boolean;
}

export default function TableOfContents({
  talks, index, isShow, setTalks, setIndex, setIsShow, isOpen, setIsOpen, isOut
}: TableOfContentsProps) {
  return(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <StatusBar isOpen={isOpen} setIsOpen={setIsOpen} isOut={isOut} />
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
        <TabBarGroup />
      </div>
    </div>
  )
}