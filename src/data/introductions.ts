import { type DescriptionItem } from "../components/IntroductionItem/IntroductionItem.types";

export const descriptionItems: DescriptionItem[] = [
  {dt: "大学", text: "通信制大学 / 2028年3月卒業予定"},
  {dt: "志望職", text: "モバイルアプリエンジニア（React Native）\nReact・TypeScriptのフロントエンドも志望"},
  {dt: "主な技術", items: ["React Native", "TypeScript", "React"]},
  {dt: "アプリを作り始めたきっかけ", text: "母からの相談。まずSwiftで作り、その後React Native（TypeScript）へ移った"},
  {dt: "強み", text: "続ける力（Duolingoを450日以上毎日続けている。「毎日1レッスンだけ」とハードルを下げたのが続いた理由）、使う人の目線で機能を選ぶこと"},
  {dt: "好きな言葉", text: "百聞は一見に如かず（リリースしたアプリの使い方画面には、文章だけで分かりにくかった部分に図を入れた）"},
  {dt: "資格・免許", qual: [ 
    {name: "ITパスポート試験", desc: "2025年10月 合格"},
    {name: "paiza スキルチェック Bランク", desc: "2026年4月（Python3）"},
    {name: "普通自動車免許（AT限定）", desc: "2024年1月 取得"},
  ]},
  {dt: "このサイトについて", text: "React＋TypeScript（Vite）で作成。Reactは2026年9月26日に始めた。"}
]