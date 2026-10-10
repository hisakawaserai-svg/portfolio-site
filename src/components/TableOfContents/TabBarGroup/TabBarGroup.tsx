import styles from './TabBarGroup.module.css';
import { tabIcons } from '../../../data/tabIcons';
import TabBarItem from './TabBarItem/TabBarItem';

export default function TabBarGroup() {
  return(
    <div className={styles.container}>
      {tabIcons.map(item => 
        <TabBarItem key={item.label} label={item.label} icon={item.icon} />
      )}
    </div>
  )
}