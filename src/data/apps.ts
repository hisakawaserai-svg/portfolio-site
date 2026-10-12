import { type AppType } from '../components/AppCard/AppCard.types';

// apps のデータ（新しい AppType に合わせたもの）
// 「要確認」のコメントがある所は、記録に無い・自信が無い所です。本当の値に直してください。

export const apps: AppType[] = [
  {
    id: "stamp-nuki",
    image: '/bg-remover.png',
    title: 'スタンプ抜き',
    description: "イラストシートから、キャラクターを1体ずつ切り出して透過PNGにするアプリです。\n画像はすべて端末の中だけで処理され、サーバーへ送信されません。\n外部通信は広告配信に必要な範囲に限ります。",
    color: '#006B78',
    textColor: '#006B78',
    band: 'check',
    platforms: [
      { platform: 'iOS', platformURL: 'https://apps.apple.com/jp/app/id6798574833' },
      { platform: 'Android', platformURL: 'https://play.google.com/store/apps/details?id=com.seraapps.stampnuki' },
    ],
    reason: "母の「AIイラストからキャラクターを切り抜いて、LINEスタンプにしたい」という相談がきっかけ。",
    points: [
      "実機で操作して、自動で切り抜けない部分は手で範囲を直せるようにし（範囲を調整）、指で隠れる部分が見えるようルーペを足した",
      "母が使っているのを見て面倒そうだと思い、キャラクターが多いシート向けの一括処理を追加",
      "背景が単色の素材が多いため、四隅の色で背景を判定する方式を採用",
      "母の要望で写真の人物にも対応。OSの被写体検出は試すと文字まで透明になったため、写真専用の選択式にして目立たない場所に置いた",
      "母のスマホでチュートリアルが崩れた原因が端末のアニメーション設定のオフだと突き止め、オフでも動くよう対応。以後は設定の違う2通りで確認している",
      "処理はすべて端末内で行い、自前のサーバーやDBは持たない構成にした",
    ],
    techs: [
      { name: 'React Native', usage: ['iOS・Android両方のアプリ本体'] },
      { name: 'TypeScript', usage: ['アプリ全体の型定義'] },
      { name: 'react-native-bg-removal', usage: ['端末内で被写体を検出して背景を除去'] },
      { name: 'Skia', usage: ['画像の描画', '背景の透過と切り抜きの処理'] },
      { name: 'Reanimated', usage: [
        'チュートリアル・スプラッシュ・編集画面のアニメーション',
        '範囲を調整するときのジェスチャ',
        '端末のアニメーション設定がオフでも動くよう ReduceMotion.Never を指定',
      ] },
      { name: 'image-picker / camera-roll / share', usage: ['写真の選択・保存・共有'] },
      { name: 'AdMob', usage: ['広告の表示と収益化'] },
      { name: 'Jest', usage: ['実装のたびに、Claude Codeがテストを実行して動作を確認'] },
    ],
    roles: [
      {
        role: 'me',
        text: [
          "企画と、どの機能を入れるかの判断",
          "実機での動作確認と、不具合が起きる条件の整理",
          "App Store・Google Playの申請と審査対応、12人・14日間のクローズドテスト、広告の設定",
        ],
      },
      {
        role: 'ai',
        text: [
          "Claude Code：画像処理のロジック、Skia・AdMobの実装",
          "Claude：要件の整理と、実装の指示づくり",
        ],
      },
    ],
    release: 'release',
    coder: 'ai',
    githubUrl: 'https://github.com/hisakawaserai-svg/bg-remover',
    dateInfo: [
      { dateType: 'create', date: '2026-06' },
      { dateType: 'release', date: '2026-08' },
    ],
  },
  {
    id: "uritsumi",
    image: '/uritsumi.png',
    title: 'うりつみ',
    description: "フリマで売った記録をつけて、手元にいくら残ったかが分かるアプリです。\n手数料・送料・梱包材まで含めて計算できます。記録はすべて端末の中だけに保存され、サーバーへ送信されません。\n外部通信は広告配信に必要な範囲に限ります。",
    color: '#324B6D',
    textColor: '#324B6D',
    band: 'steps',
    platforms: [
      { platform: 'iOS', platformURL: 'https://apps.apple.com/jp/app/id6804385417' },
      { platform: 'Android', platformURL: 'https://play.google.com/store/apps/details?id=com.sera.profitcalculator' },
    ],
    reason: 'Swiftで作った純利益計算機はMacとiPhoneで使えたが、Androidを使う母は気軽にMacを使えなかったため、React Nativeで作り直した。',
    points: [
      "値下げ時にあると便利だと考え、値下げシミュレータを追加。母に好評だった",
      "手数料・梱包材・送料をプリセットとして登録でき、毎回入力せず呼び出せる。タグでジャンル分けして、検索フィルターやグラフの推移にも使える",
      "Duolingoを参考に、続けやすくなる実績機能を追加",
      "記録への画像添付は1枚に限定。容量と手間を考え、入れすぎて別のアプリにならないようにした",
    ],
    techs: [
      { name: 'React Native + TypeScript', usage: ['アプリ全体'] },
      { name: 'expo-sqlite', usage: ['端末内にデータを保存'] },
      { name: 'react-native-gifted-charts', usage: ['グラフ表示'] },
      { name: 'react-native-google-mobile-ads', usage: ['広告表示（AdMobの広告ユニット作成と設定は自分）'] },
      { name: 'expo-file-system / expo-sharing', usage: ['バックアップとCSVの書き出し・共有'] },
      { name: 'expo-image-picker', usage: ['写真の選択'] },
    ],
    roles: [
      {
        role: 'me',
        text: [
          "移植の方針と、新しい機能の発案",
          "丸め処理の修正プランを確認して実行を指示し、iOSシミュレータで確認",
          "App Store・Google Playの申請と審査対応、12人・14日間のクローズドテスト、広告の設定",
        ],
      },
      {
        role: 'ai',
        text: [
          "Claude Code：Swift版からReact Nativeへの移植の実装、移植中に旧版の丸め処理の不整合を発見",
        ],
      },
    ],
    release: 'release',
    coder: 'ai',
    githubUrl: 'https://github.com/hisakawaserai-svg/Profit-Calculator-App-RN',
    dateInfo: [
      { dateType: 'create', date: '2026-08' },
      { dateType: 'release', date: '2026-08' },
    ],
  },
  {
    id: "reporoku",
    image: '/reporoku.png',
    title: 'レポろく',
    description: "研修などの話を録音し、端末内で文字起こししてノートに残すアプリです。録音しながら要点にマークをつけて、あとで見返せます。\n音声・ノート・写真は端末内に保存し、クラウドに学習データとして送りません。\n外部通信は広告配信に必要な範囲に限ります。",
    color: '#4B56C0',
    textColor: '#4B56C0',
    band: 'eq',
    platforms: [
      { platform: 'iOS', platformURL: 'https://apps.apple.com/jp/app/録音まとめメモ-レポろく/id6808242881' },
    ],
    reason: '将来、研修などでメモを取るのが大変になると考え、長めの録音を文字起こしできるアプリを作った。',
    points: [
      "音声を外部のサーバーに送らず、端末の中だけで文字起こしまで完結させた",
      "録音しながらリアルタイムに文字起こしし、文字をタップするとその位置から音声を再生できる",
      "タイムラインに、重要・ToDo・質問のマークと写真、メモをまとめて記録できる",
      "複数の記録をまたいで、未対応のToDoや未解決の質問を一覧できる",
    ],
    techs: [
      { name: 'React Native (Expo)', usage: ['iOSアプリ本体'] },
      { name: 'expo-audio / expo-speech-recognition', usage: ['録音と、端末内での文字起こし'] },
      { name: 'expo-sqlite', usage: ['記録を端末内に保存'] },
      { name: 'fflate', usage: ['バックアップのzip作成と復元'] },
      { name: 'expo-print / expo-sharing', usage: ['レポートのPDF出力と共有'] },
      { name: 'i18next', usage: ['日本語・英語の切り替え'] },
      { name: 'AdMob', usage: ['広告の表示と収益化'] },
    ],
    roles: [
      {
        role: 'me',
        text: [
          "企画と、どの機能を入れるかの判断",
          "動作の確認と、App Storeの申請",
        ],
      },
      {
        role: 'ai',
        text: [
          "Claude Code：アプリの実装",
        ],
      },
    ],
    release: 'release',
    coder: 'ai',
    githubUrl: 'https://github.com/hisakawaserai-svg/reporoku',
    dateInfo: [
      { dateType: 'release', date: '2026-09' },
    ],
  },
  {
    id: "cooking-app",
    image: '/cookingapp.png',
    title: 'CookingApp',
    description: 'ネットで調べたレシピや、AIとの対話で得たレシピを、材料と手順に整理して保存するレシピ管理アプリです。',
    color: '#CA6443',
    textColor: '#CA6443',
    band: 'bookmark',
    reason: '母と自分が、ネットで調べたレシピをまとめて保存できるようにするため作った。',
    points: [
      "AIが出したレシピやWebのレシピ（文章）を、ボタン1つでGemini APIに送り、材料と手順に自動で整理して保存できる",
      "AIは間違えることがあるので、保存後に編集でき、AIを使わず手入力でも保存できるようにした",
      "材料の分量を、人数に合わせて増減できる",
      "調理に使うタイマーを入れた",
      "最初はチャット形式でレシピ発案から保存までを作っていたが、トークン量が増えすぎたため、Gemini APIに送るのは保存するときだけに変更し、料金とトークンを抑えた",
    ],
    techs: [
      { name: 'React Native', usage: ['iOS・Android両方のアプリ本体'] },
      { name: 'TypeScript', usage: ['アプリ全体の型定義'] },
      { name: 'op-sqlite (SQLite)', usage: ['レシピを端末内に保存'] },
      { name: 'Gemini API', usage: ['文章を材料と手順に自動で整理'] },
      { name: 'keep-awake', usage: ['調理中に画面が消えないようにする'] },
      { name: 'wheely', usage: ['タイマーの時間をホイールで選ぶ'] },
      { name: 'reanimated-color-picker', usage: ['タグの色を選ぶ'] },
    ],
    coder: 'me',
    roles: [
      {role: 'me', text: ['データ構造とロジックを、AIのヒントをもらいながらコーディング']},
      {role: 'ai', text: ['Codex：画面のスタイル（見た目）']},
    ],
    release: 'unrelease',
    githubUrl: 'https://github.com/hisakawaserai-svg/CookingApp',
    dateInfo: [
      { dateType: 'create', date: '2026-05' },
    ],
  },
  {
    id: 'quiz-creator',
    platforms: [
      { 
        platform: 'Web',
        platformURL: "https://hisakawaserai-svg.github.io/Quiz-Creator-App/" 
      },
    ],
    release: 'demo',
    coder: 'me',
    description: 'クイズを自分で作って、解いて遊べるWebアプリです。作ったクイズはブラウザに保存されます。',
    reason: 'AIに就活について相談した際に、ポートフォリオを作っておくべきと言われて作った。',
    roles: [
      { role: 'me', text: ['設計・コーディングを自分で行った'] },
      { role: 'ai', text: ['ChatGPT：わからない点への回答（何度も質問しながら進めた）、デザインの案'] },
    ],
    techs: [
      { name: 'HTML / CSS / JavaScript', usage: ['フレームワークを使わず、1ページ内で画面を切り替えるWebアプリを作成'] },
      { name: 'LocalStorage', usage: ['作ったクイズを文字列（JSON）にしてブラウザに保存'] },
      { name: 'History API', usage: ['画面ごとにURLを変え、戻る・進むボタンでも画面が切り替わるようにした'] },
      { name: 'GitHub Pages', usage: ['デモの公開'] },
    ],
    points: [
      'デザインがシンプルすぎると感じて、AIに案を出してもらい、iOS風の見た目にした',
      '空欄の入力欄を赤枠で警告するバリデーションを入れた',
      '戻る・進むボタンでも画面が切り替わるようにした',
      '管理者としてログインしたときだけ、クイズの削除ボタンが表示されるようにした（学習用で、ID・パスワードはコードに直接書いてあるため、本格的なセキュリティ対策ではない）',
    ],
    dateInfo: [{ dateType: 'create', date: '2026-05' }],
    githubUrl: 'https://github.com/hisakawaserai-svg/Quiz-Creator-App',
    title: 'Quiz-Creator-App',
    color: '#2F7D5B',
    textColor: '#2F7D5B',
    gradient: 'linear-gradient(135deg, #2F7D5B, #5BB98C)',
    band: 'progress'
  },
  {
    id: 'portfolio-site',
    platforms: [{ platform: 'Web', platformURL: 'https://portfolio-site-hisakawaserai.vercel.app/'}],
    release: 'release',
    coder: 'me',
    githubUrl: 'https://github.com/hisakawaserai-svg/portfolio-site',
    description: '自分のプログラミングと開発の歴史、作ったアプリを紹介するポートフォリオサイトです。（このページ）',
    reason: 'ポートフォリオが必要だったのと、React Native は使ったことがあったが、React は未経験だったため。',
    techs: [
      { name: 'React', usage: ['サイト全体の画面を、コンポーネントと state で作成'] },
      { name: 'TypeScript', usage: ['props や state の型を定義'] },
      { name: 'lucide-react', usage: ['アイコンの表示'] },
      { name: 'Vite', usage: ['開発中の確認用サーバーと、公開用ファイルへのビルド'] },
      { name: 'react-intersection-observer', usage: ['useInView で、画面に表示されているセクションを検知して目次に反映', '目次が画面の外に出たかを判定し、表示を切り替え'] },
    ],
    title: 'portfolio',
    color: '#7A4E9E',
    textColor: '#7A4E9E',
    gradient: 'linear-gradient(135deg, #7A4E9E, #c8a1e9)',
    band: 'arrows',
    points: [
      '年表のデータは appId だけを持たせ、アプリの情報は getApp で一覧のデータから引く形にした（同じ情報を二重に持たない方針はAIの提案で、実装は自分）',
      'アプリ一覧を、公開中・デモ・未公開の3グループに分けて表示する。配列を分ける reduce は調べて、自分で実装した',
      'スマホ画面をまねた目次の中の鳥を押すと、隣にセリフが表示され、押すたびに次のセリフに進む（ページ数つき）。他のアプリでも使ってきたキャラクターを入れた、自己紹介の遊び心ある演出を実装した',
      'セリフをランダムにするため、配列を偏りなく並べ替える shuffle を実装し、useState の初期化関数で最初の1回だけ実行するようにした（書き方はAIに教わり、自分で実装）',
    ],
    roles: [
      {role: 'me', text: ['サイト全体のコーディングを自分で行った。props の型（children、state の更新関数など）は自分で調べて定義した']},
      {role: 'ai', text: [
        'Claude Code：どのメソッドを使えばよいかのヒント、コードのレビュー、終盤に追加した機能の設計（/design。実装は自分）',
        'Claude Design：スタイルの案（案から選び、自分で写経）',
        'GitHub Copilot：コミットメッセージの生成（VS Code）',
      ]},
    ],
    dateInfo: [
      {dateType: 'create', date: '2026-09'}
    ]
  },
  {
    id: 'profit-calculator',
    title: '純利益計算機',
    platforms: [{ platform: 'iOS' }],
    image: '/profit-calc.png',
    release: 'unrelease',
    coder: 'ai',
    githubUrl: 'https://github.com/hisakawaserai-svg/Profit-Calculator-App',
    description: '売値・原価・送料・手数料から純利益を計算し、販売記録と月ごとのグラフで管理できるiOSアプリです。',
    reason: '母のフリマ販売の純利益を計算できるようにするため作った。',
    techs: [
      { name: 'Swift', usage: ['iOSアプリ本体'] },
      { name: 'CoreData', usage: ['販売記録を端末内に保存'] },
    ],
    points: [
      '目標の利益から売値を出す「逆算」の機能を、自分で発案して入れた',
    ],
    roles: [
      { role: 'me', text: ['機能の発案（逆算など）と、画面・計算の設計', 'Swiftの書き方をAIに聞きながら、一部のコードを自分で書いた'] },
      { role: 'ai', text: ['ChatGPT：Swiftの文法や書き方の回答、コードの一部の作成'] },
    ],
    dateInfo: [{ dateType: 'create', date: '2025-09' }],
    color: '#C23B30',
    textColor: '#C23B30',
    band: 'bars'
  }
];