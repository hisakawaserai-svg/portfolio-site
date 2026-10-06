import { type DevProcessStepType } from "../components/DevProcessStep/DevProcessStep.types";

export const devProcessSteps: DevProcessStepType[] = [
  {
    stepNum: 1,
    title: '相談',
    text: 'Claudeのチャットで、作りたいアプリを相談する',
    stepRole: 'me',
  },
  {
    stepNum: 2,
    title: '設計',
    text: 'Claude Codeに設計書（docs）を書かせる',
    stepRole: 'both',
    desc: 'Claudeに勧められ、必要だと思って採用',
  },
  {
    stepNum: 3,
    title: '実装',
    text: 'Claude Codeが、設計どおりにコードを書く',
    stepRole: 'ai',
    desc: '思いついた機能は、追加のdocsに自分で記録',
    inLoop: true,
  },
  {
    stepNum: 4,
    title: '検証',
    text: 'Claude Codeが出した確認項目を、シミュレータで試す',
    stepRole: 'me',
    desc: '実機は、ネイティブ部分・節目・リリース前後',
    inLoop: true,
  },
  {
    stepNum: 5,
    title: '報告',
    text: '実装内容とテスト結果をClaudeに報告し、3へ戻る',
    stepRole: 'me',
    desc: '欲しい機能が出たら2へ',
    inLoop: true,
  },
];