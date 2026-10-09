import { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import styles from './TableOfContentsWrapper.module.css';
import { shuffle } from '../../utils/shuffle';
import { initialTalks } from '../../data/initialTalks';
import TableOfContents from '../TableOfContents/TableOfContents';

export default function TableOfContentsWrapper() {
  const [talks, setTalks] = useState<string[]>(() => shuffle(initialTalks));
  const [index, setIndex] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const isOut = !inView && (entry?.boundingClientRect.bottom ?? 0) < 0;
  if (!isOut && isOpen) setIsOpen(false);
  const state = isOut ? (isOpen ? 'open' : 'peek') : 'inline';

  return(
    <div className={styles.placeholder} ref={ref}>
      <div className={styles.container} data-state={state} >
        <TableOfContents 
          talks={talks} 
          index={index} 
          isShow={isShow} 
          setTalks={setTalks} 
          setIndex={setIndex} 
          setIsShow={setIsShow} 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isOut={isOut}
        />
      </div>
        <div 
          className={`${styles.overlay} ${isOpen ? styles.overlayShow : ""}`} 
          onClick={() => setIsOpen(false)} 
        />
    </div>
  )
}