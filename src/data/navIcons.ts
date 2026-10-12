import { type AppIconType } from "../components/AppIcon/AppIcon.types"

import bgRemoverImg from '/bg-remover.png';
import uritsumiImg from '/uritsumi.png';
import reporokuImg from '/reporoku.png';
import cookingAppImg from '/cookingapp.png';
import profitCalcImg from '/profit-calc.png';

type AppIconImgType = AppIconType & {
  imgSrc?: string;
}

export const navIcons: AppIconImgType[] = [
  {label: "スタンプ抜き", imgSrc: bgRemoverImg, href: "#スタンプ抜き"},
  {label: "うりつみ", imgSrc: uritsumiImg, href:"#うりつみ"},
  {label: "レポろく", imgSrc: reporokuImg, href: "#レポろく"},
  {label: "クイズ", href: "#Quiz-Creator-App", color: "linear-gradient(135deg, #2F7D5B, #5BB98C)"},
  {label: "クッキング", imgSrc: cookingAppImg, href: "#CookingApp"},
  {label: "ポートフォリオ", imgSrc: "/apple-touch-icon.png", href: "#portfolio"},
  {label: "純利益計算機", imgSrc: profitCalcImg, href: "#純利益計算機"},
]