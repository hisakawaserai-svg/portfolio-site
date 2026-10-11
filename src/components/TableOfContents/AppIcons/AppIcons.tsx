import styles from './AppIcons.module.css'
import AppIcon from '../../AppIcon/AppIcon';
import { navIcons } from '../../../data/navIcons';

export default function AppIcons() {
  return(
    <div className={styles.appIcons}>
      {navIcons.map((item, index) => {
        return(
          <AppIcon key={index} label={item.label} href={item.href} color={item.color} >
            {item.imgSrc ? (
              <img src={item.imgSrc} alt={item.label} className={styles.appImg} />
            ) : (
              <p className={styles.labelIcon}>{item.label[0]}</p>
            )}
          </AppIcon>
        )
      })}
    </div>
  )
}