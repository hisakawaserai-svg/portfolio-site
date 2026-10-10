import styles from './TabBarItem.module.css';
import { ICON_COMPONENTS } from '../../../../constants/appIcons';
import { type TabBarItemTypes } from './TabBarItem.types';

export default function TabBarItem({label, icon}: TabBarItemTypes) {
  const IconComponent = ICON_COMPONENTS[icon ?? ""];
  return(
    <a className={styles.container}>
      <div className={styles.imgContainer}>
        <IconComponent size={22} color="white" />
      </div>
      <span className={styles.label}>
        {label}
      </span>
    </a>
  )
}