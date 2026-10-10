import { type AppIconType } from "../components/AppIcon/AppIcon.types"

import reporokuImg from '/reporoku.png';

type AppIconImgType = AppIconType & {
  icon?: string;
  imgSrc?: string;
}

export const navIcons: AppIconImgType[] = [
  {label: "名前", icon: "idCard", href: "#name", color: "white"},
  {label: "自己紹介", icon: "user", href: "#about", color: "white"},
  {label: "レポろく", imgSrc: reporokuImg, href: "#レポろく", color: "#4B56C0"},
]