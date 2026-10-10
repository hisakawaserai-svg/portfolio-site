import { IdCard, User, type LucideIcon} from 'lucide-react';

import styles from './AppIcons.module.css'
import AppIcon from '../../AppIcon/AppIcon';
import { navIcons } from '../../../data/navIcons';

const ICON_COMPONENTS: Record<string, LucideIcon> = {
  idCard: IdCard,
  user: User,
}

export default function AppIcons() {
  return(
    <div className={styles.appIcons}>
      {navIcons.map((item, index) => {
        const IconComponent = ICON_COMPONENTS[item.icon ?? ""];
        return(
          <AppIcon key={index} label={item.label} href={item.href} color={item.color} >
            {item.icon ? (
              <IconComponent />
            ) : (
              <img src={item.imgSrc} alt={item.label} className={styles.appImg} />
            )}
          </AppIcon>
        )
      })}
    </div>
  )
}