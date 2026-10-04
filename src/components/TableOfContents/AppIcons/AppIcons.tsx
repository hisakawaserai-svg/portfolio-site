import { IdCard, User, type LucideIcon} from 'lucide-react';

import styles from './AppIcons.module.css'
import { type AppIconType } from '../../AppIcon/AppIcon.types';
import AppIcon from '../../AppIcon/AppIcon';
import reporokuImg from '/reporoku.png';

type AppIconImgType = AppIconType & {
  icon?: string;
  imgSrc?: string;
}

const navIcons: AppIconImgType[] = [
  {label: "名前", icon: "idCard", href: "#name", color: "white"},
  {label: "自己紹介", icon: "user", href: "#about", color: "white"},
  {label: "レポろく", imgSrc: reporokuImg, href: "#レポろく", color: "#4B56C0"},
]

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