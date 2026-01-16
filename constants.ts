import { CompanyInfo, FeatureItem, NavItem, PricePlan, ServiceItem, StaffMember, TrainingProgram } from './types';

export const COLORS = {
  main: '#94A684',       // Muted Sage Green
  sub: '#F9F7F2',        // Sand Beige
  accentOrange: '#E6A57E', // Terracotta / Muted Orange
  accentBlue: '#8FB1CC',   // Smoky Blue
  text: '#595045',       // Warm Charcoal / Dark Brownish Gray
};

export const COMPANY_INFO: CompanyInfo = {
  name: '合同会社ユーアールエー',
  representative: '代表 浦崎 幸人',
  facilityName: '豊島サッカースクール/パーソナル/レンタルスタジオ「ウラトレ」',
  postalCode: '〒171-0052',
  address: '東京都豊島区南長崎5-9-10-1F（ときわ荘通り沿い）',
  phone: '080-3214-6210',
  email: 'info.urachan@gmail.com',
  hours: 'AM10:00〜PM20:00（毎日営業）',
  stations: '大江戸線 落合南長崎駅 徒歩8分 / 西武池袋線 東長崎駅 徒歩7分',
  reservationUrl: 'https://reserva.be/uratore2',
  instagram: 'https://www.instagram.com/ura.tore',
  line: 'https://line.me/R/ti/p/@119odnxs',
};

// Use absolute paths with hash for cross-page navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'ホーム', href: '/#hero' },
  { label: 'コンセプト', href: '/#features' },
  { label: 'サービス', href: '/#services' },
  { label: '料金', href: '/#pricing' },
  { label: 'アクセス', href: '/#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'soccer',
    title: '小学生サッカースクール',
    description: '「運動×脳トレ」の独自メソッド。技術・戦術・フィジカル・メンタル・社会性の5つをバランスよく指導します。',
    iconName: 'soccer',
    image: '/images/service-school.jpg',
  },
  {
    id: 'personal',
    title: 'パーソナルトレーニング',
    description: '中学生以上対象。サッカー・ゴルフ特化から、ダイエット、筋力・持久力アップまで個別にサポート。',
    iconName: 'dumbbell',
    image: '/images/service-personal.png',
  },
  {
    id: 'studio',
    title: 'レンタルスタジオ',
    description: '土日祝はレンタルスタジオとして開放。ダンスやヨガ、ワークショップなど多目的にご利用いただけます。',
    iconName: 'building',
    image: '/images/service-studio.png',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: '浦崎式「ウラトレ」',
    description: '元国体選抜選手が考案。チーム練習では補えない「個」の力を、独自のメソッドで裏から強化します。',
    iconName: 'award',
  },
  {
    title: '少人数制＆プロ指導',
    description: '1コマ3〜5名の少人数制。Jリーグやフットサル日本代表経験者など、7名の有資格者が在籍。',
    iconName: 'users',
  },
  {
    title: '脳トレ×運動',
    description: '身体だけでなく頭も使うトレーニングで、効率的にパフォーマンスと判断力を向上させます。',
    iconName: 'sun',
  },
  {
    title: '毎日営業・駅近',
    description: '大江戸線・西武池袋線の2駅から徒歩圏内。毎日営業でライフスタイルに合わせて通えます。',
    iconName: 'calendar',
  },
];

export const PRICING_PLANS: PricePlan[] = [
  {
    category: 'サッカースクール',
    items: [
      { name: 'U-9 (小1-3)', details: '毎週月曜日- 金曜日 16:15 - 17:00 (45分)', price: '1,500円 (1回)' },
      { name: 'U-12 (小4-6)', details: '毎週月曜日- 金曜日 17:30 - 18:15 (45分)', price: '1,500円 (1回)' },
    ],
  },
  {
    category: 'パーソナルトレーニング',
    items: [
      { name: '初回体験', details: 'カウンセリング込み', price: '無料', note: '※中学生以上対象' },
      { name: '通常トレーニング', details: '月〜金 9時/10時/20時', price: '3,000円 / 回' },
    ],
  },
  {
    category: 'レンタルスタジオ',
    items: [
      { name: 'スタジオ利用', details: '土日祝 10:00-21:00', price: '2,000円 / 45分', note: '※要事前予約' },
    ],
  },
];

// スタッフ情報
export const STAFF_MEMBERS: StaffMember[] = [
  {
    name: '浦崎 幸人',
    role: '代表',
    description: '兵庫県出身　滝川第二高校卒（兵庫県国体選抜）\n東京農業大学卒業（総理大臣杯優勝）',
  },
  {
    name: '川浦 亜希雄',
    role: 'コーチ',
    description: '愛媛県出身　愛媛国体選抜\n愛媛FC しまなみ(現FC今治)',
  },
  {
    name: '坂元 要介',
    role: 'コーチ',
    description: '京都府出身　滝川第二高校卒（兵庫県国体選抜）\nアトランタ五輪サッカー日本代表\n京都パープルサンガ　現在Weリーグ相模原U18監督',
  },
  {
    name: '黒岩 文幸',
    role: 'アドバイザー',
    description: '愛知県出身　中京高校出身\nNTT関東(現大宮アルディージャ)　フットサル元日本代表',
  },
  {
    name: '橋本 圭悟',
    role: 'アドバイザー',
    description: '選手歴：banespa(ブラジル) - Malwee(ブラジル)\nシュライカー大阪(Fリーグ) - バサジィ大分(Fリーグ) - ペスカドーラ町田(Fリーグ)\n現ハビスケーロ品川ドリブルスクール代表',
  },
  {
    name: '森谷 優',
    role: 'アドバイザー',
    description: 'CASCAVEL TOKYO - ペスカドーラ町田(Fリーグ)',
  },
  {
    name: '中村 亮',
    role: 'アドバイザー',
    description: '兵庫県出身　滝川第二高校卒　鹿屋体育大学卒\nFC東京（Jリーグ）\n現株式会社With You代表（アメリカサッカー留学）',
  },
];

// サッカースクール詳細説明
export const SCHOOL_DESCRIPTION = {
  title: '確実にスキルアップできる少人数制サッカートレーニング',
  features: [
    '1コマ3〜5名の少人数制で、きめ細やかな指導',
    '室内トレーニングのため、天候に左右されず安定した環境',
    '「運動と脳トレ」を組み合わせた独自メソッド',
    '認知能力や判断力を向上させ、プレーの質を高める',
  ],
  trainingElements: ['技術', '戦術', 'フィジカル', 'メンタル', '社会性'],
  philosophy: 'サッカーを通じて夢を広げ、人格形成に寄与することを目指しています。世界トップクラスのチームから学んだ知識と経験を活かし、世界で活躍できる人財育成をサポートします。',
};

// パーソナルトレーニング詳細
export const PERSONAL_PROGRAMS: TrainingProgram[] = [
  { name: 'サッカーに必要なトレーニング', price: '3,000円 / 1回' },
  { name: 'ゴルフに必要なトレーニング', price: '3,000円 / 1回' },
  { name: 'ダイエット', price: '3,000円 / 1回' },
  { name: '筋力/持久力アップ', price: '3,000円 / 1回' },
];

export const PERSONAL_DESCRIPTION = {
  target: '中学生から大人の方',
  schedule: '月曜〜金曜 9時・10時・20時',
  trialNote: '初回体験無料',
};

// ウラトレとは
export const URATORE_CONCEPT = {
  title: 'ウラトレとは？',
  description: '「浦崎式トレーニング法（ウラトレ）」は、サッカー国体選抜経験を持つ代表の浦崎が、その豊富なキャリアを活かして考案した独自のトレーニングメソッドです。チームトレーニングだけでは補いきれないフィジカル面を強化するため、個別に裏で行うトレーニングについても重点を置いています。このメソッドにより、効率的に身体を鍛え、持久力やパフォーマンスの向上を実現します。',
};