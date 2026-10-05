import { type TimelineEventType } from "../components/TimelineEvent/TimelineEvent.types";

export const timeline: TimelineEventType[] = [
  { phase: 1, date: '2025年9月〜', title: '初めてのアプリ開発！Swiftで純利益計算機を作る',
    connection: '母の要望でグラフ機能を追加。GitHubへの公開は2026年4月',
    appId: 'profit-calculator' },
  { phase: 2, date: '2026年春ごろ', title: '初めてのReact Native（TrainingTimerApp・未完成）',
    connection: 'iOSだけでなくAndroidでも使えるアプリを作るため、React Nativeを始めた。未完成でも、画面の書き方（JSX）とstateの使い方を学べた', },
  { phase: 2, date: '2026年5月', title: 'Quiz-Creator-App（JavaScript）',
    coderLabel: '自力＋AI相談', appId: 'quiz-creator' },
  { phase: 2, date: '2026年5月', title: 'CookingApp',
    coderLabel: '自力（スタイルはAI）', appId: 'cooking-app' },
  {
    phase: 2,
    date: '2026年5月末〜6月',
    title: 'コーチングアプリ(未完成)',
    coderLabel: '自力＋AI相談',
    coderDisc: 'React Nativeに慣れるため、AIにたくさん質問しながらコーディングした。',
    connection: 'CookingAppの構造を参考に、通信処理を分けるサービス層を作成。Gemini APIは混雑エラーが多かったため、画像入力を手放して速さを取り、Groq APIに切り替えた。',
  },
  { phase: 3, date: '2026年6月〜9月', title: 'スタンプ抜き（iOS 8月・Android 9月公開）',
    appId: 'stamp-nuki' },
  { phase: 3, date: '2026年8月末', title: 'うりつみ公開',
    connection: 'Swift版の純利益計算機をReact Nativeに移植', appId: 'uritsumi' },
  { phase: 3, date: '2026年9月', title: 'レポろく公開', appId: 'reporoku' },
  { phase: 4, date: '2026年9月', title: 'Reactを始めて、ポートフォリオサイトを作成', appId: 'portfolio-site' },
];