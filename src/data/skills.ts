import type { SkillItemType } from "../components/SkillItem/SkillItem.types";

export const skills: SkillItemType[] = [
  { name: "React Native", level: 4, text: "ボタンを押すとカウントが増える画面までなら、白紙から書ける。作ったアプリは、AIのヒントをもらいながら進めた" },
  { name: "TypeScript", level: 4, text: "基本の型（type、ユニオン型、?）まで" },
  { name: "React", level: 4, text: "小さなコンポーネントまで（useState、map、filter）" },
  { name: "JavaScript / HTML / CSS", level: 3, text: "Quiz-Creator-App（LocalStorage、History API）。AIに質問しながら作った。コンソールのエラーを見ながら、簡単なバグは直せる" },
  { name: "Git / GitHub", level: 3, text: "ブランチ・コミット・PRは自分でやる。ミスしたときの直し方は、AIに聞いて直した" },
  { name: "Swift", level: 1, text: "純利益計算機。ChatGPT に質問して、コピペと、自分のコードの修正をしてもらった。中身は具体的には覚えていない" },
];