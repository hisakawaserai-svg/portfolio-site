import { type TimelineEventType } from "../components/TimelineEvent/TimelineEvent.types";

export const timeline: TimelineEventType[] = [
  { phase: 1, date: '2025年9月', title: 'Swiftで純利益計算機を作り始める'},
  { phase: 1, date: '2026年3月', title: '純利益計算機を大改造して完成（グラフ・電卓機能）' },
  { phase: 2, date: '2026年4月', title: 'React Nativeに移行（TrainingApp）',
    coderLabel: '自力＋AI'},
  { phase: 2, date: '2026年5月', title: 'Quiz-Creator-App（JavaScript）',
    coderLabel: '自力', appId: 'quiz-creator' },
  { phase: 2, date: '2026年5月', title: 'CookingApp',
    coderLabel: '自力', appId: 'cooking-app' },
  {
    phase: 2,
    date: '2026年5月末〜6月',
    title: 'コーチングアプリ(未完成)',
    coderLabel: '自力',
    coderDisc: '自力でコーディング。本当にわからないところだけAIに質問した。',
    connection: 'CookingAppの構造を参考に、通信処理を分けるサービス層を作成。Gemini APIは混雑エラーが多かったため、画像入力を手放して速さを取り、Groq APIに切り替えた。',
    // appId は付けない(apps に入れず、年表だけに載せる)
  },
  { phase: 3, date: '2026年6月〜9月', title: 'スタンプ抜き（iOS 8月・Android 9月公開）',
    appId: 'stamp-nuki'},
  { phase: 3, date: '2026年8月末', title: 'うりつみ公開',
    connection: 'Swift版の純利益計算機をReact Nativeに移植', appId: 'uritsumi' },
  { phase: 3, date: '2026年9月', title: 'レポろく公開', appId: 'reporoku' },
  { phase: 4, date: '2026年9月', title: 'Reactを始めて、ポートフォリオサイトを作成', appId: 'portfolio-site'},
];