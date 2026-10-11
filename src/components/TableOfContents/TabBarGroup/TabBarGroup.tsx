import styles from './TabBarGroup.module.css';
import { tabIcons } from '../../../data/tabIcons';
import TabBarItem from './TabBarItem/TabBarItem';

type TabBarGroupProps = {
  actionId: string;
}

export default function TabBarGroup({actionId}: TabBarGroupProps) {
  return(
    <div className={styles.container}>
      {tabIcons.map(item => 
        <TabBarItem key={item.id} 
          id={item.id} 
          label={item.label} 
          icon={item.icon} 
          flag={item.id === actionId}  
        />
      )}
    </div>
  )
}