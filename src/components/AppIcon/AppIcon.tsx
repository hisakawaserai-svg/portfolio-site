import styles from './AppIcon.module.css';
import { type AppIconType } from './AppIcon.types';

type AppIconProps = AppIconType & {
  children: React.ReactNode;
}

export default function AppIcon({label, href, color, children}: Omit<AppIconProps, 'icon'>) {
  return(      
    <a href={href} className={styles.container}>
      <div className={styles.icon} style={{background: color}}>
        {children}
      </div>
      <p className={styles.label}>{label}</p>
    </a>
  )
}