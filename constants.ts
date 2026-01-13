import { CompanyInfo, FeatureItem, NavItem, PricePlan, ServiceItem } from './types';

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
  address: '東京都豊島区南長崎5-9-10-1F（ときわ荘通り沿い）',
  phone: '080-3214-6210',
  email: 'info.urachan@gmail.com',
  hours: 'AM10:00〜PM20:00（毎日営業）',
  stations: '大江戸線 落合南長崎駅 徒歩8分 / 西武池袋線 東長崎駅 徒歩7分',
  reservationUrl: 'https://reserva.be/uratore2',
  instagram: 'https://www.instagram.com/ura.tore',
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
    image: 'https://picsum.photos/id/1058/800/600',
  },
  {
    id: 'personal',
    title: 'パーソナルトレーニング',
    description: '中学生以上対象。サッカー・ゴルフ特化から、ダイエット、筋力・持久力アップまで個別にサポート。',
    iconName: 'dumbbell',
    image: 'https://picsum.photos/id/338/800/600',
  },
  {
    id: 'studio',
    title: 'レンタルスタジオ',
    description: '土日祝はレンタルスタジオとして開放。ダンスやヨガ、ワークショップなど多目的にご利用いただけます。',
    iconName: 'building',
    image: 'https://picsum.photos/id/1068/800/600',
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
      { name: 'U-9 (小1-3)', details: '月〜金 16:15-17:00', price: '1,500円 / 回' },
      { name: 'U-12 (小4-6)', details: '月〜金 17:30-18:15', price: '1,500円 / 回' },
    ],
  },
  {
    category: 'パーソナル',
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