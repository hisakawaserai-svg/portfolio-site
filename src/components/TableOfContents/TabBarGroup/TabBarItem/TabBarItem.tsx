import styles from './TabBarItem.module.css';
import { ICON_COMPONENTS } from '../../../../constants/appIcons';
import { type TabBarItemTypes } from './TabBarItem.types';
import type { CSSProperties } from 'react';

type TabBarItemProps = TabBarItemTypes & {
  flag?: boolean;
}

export default function TabBarItem({id, label, icon, flag}: TabBarItemProps) {
  const IconComponent = ICON_COMPONENTS[icon ?? ""];
  return(
    <a href={`#${id}`} className={styles.container}
      style={{
        "--text-color": flag ? "rgb(43, 47, 51)" : "rgba(0, 0, 0, 0.55)",
        "--icon-bg-color": flag ? "rgb(43, 47, 51)" : "transparent",
        "--icon-color": flag ? "white" : "black",
      } as CSSProperties}
    >
      <div className={styles.imgContainer}>
        <IconComponent size={22} color="var(--icon-color)"/>
      </div>
      <span className={styles.label}>
        {label}
      </span>
    </a>
  )
}