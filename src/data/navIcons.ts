import { type AppIconType } from "../components/AppIcon/AppIcon.types"

import reporokuImg from '/reporoku.png';

type AppIconImgType = AppIconType & {
  icon?: string;
  imgSrc?: string;
}

export const navIcons: AppIconImgType[] = [
  {label: "レポろく", imgSrc: reporokuImg, href: "#レポろく", color: "#4B56C0"},
]