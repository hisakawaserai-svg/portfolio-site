import type { SetStateAction } from 'react';
import BirdMascot, { getVariant } from '../BirdMascot/BirdMascot';
import Touchable from '../Touchable/Touchable';
import styles from './TalkingBird.module.css';
import { shuffle } from '../../utils/shuffle';

type TalkingBirdProps = {
  talks: string[];
  index: number;
  isShow: boolean;
  setTalks: React.Dispatch<SetStateAction<string[]>>;
  setIndex: React.Dispatch<SetStateAction<number>>;
  setIsShow: React.Dispatch<SetStateAction<boolean>>;
}

export default function TalkingBird({talks, index, isShow, setTalks, setIndex, setIsShow}: TalkingBirdProps) {
  const handleClick = () => {
    setIsShow(true)
    if (talks.length - 1 <= index) {
      setTalks(shuffle(talks));
      setIndex(0);
    } else if (isShow) {
      setIndex(prev => prev + 1);
    }
  }

  return(
    <div className={styles.container}>
      <Touchable onClick={handleClick} >
        <BirdMascot variant={getVariant(new Date().getHours())} size={120} />
      </Touchable>
    </div>
  )
}