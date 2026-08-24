import { photos } from '@/lib/images';

export const workCategories = ['建築', '土木', '電気', '管工事'] as const;

export type WorkCategory = (typeof workCategories)[number];

export type WorkItem = {
  category: WorkCategory;
  title: string;
  description: string;
  image: string;
  meta: string[];
};

/** 実績ではなく「対応可能な工事の例」として掲載している */
export const works: WorkItem[] = [
  {
    category: '建築',
    title: '大型商業施設 新築工事',
    description:
      '延床15,000㎡クラスの大型商業施設にも対応。BIMを活用し、工期・品質基準を守った施工管理を行います。',
    image: photos.workCommercial,
    meta: ['福岡県', '延床15,000㎡クラス'],
  },
  {
    category: '土木',
    title: '市道改良・舗装工事',
    description:
      '延長2.5kmクラスの道路整備にも対応。ICT施工機械を活用し、効率的な品質管理を実現します。',
    image: photos.workRoad,
    meta: ['熊本県', '延長2.5kmクラス'],
  },
  {
    category: '電気',
    title: 'オフィスビル 電気設備一式工事',
    description:
      '地上10階建てクラスのオフィスビル電気設備にも対応。省エネBEMS導入によるエネルギー消費削減もサポートします。',
    image: photos.workOfficeElectric,
    meta: ['長崎県', '地上10階クラス'],
  },
  {
    category: '管工事',
    title: '総合病院 空調・衛生設備改修工事',
    description:
      '300床規模クラスの病院にも対応。高い衛生基準を保ちながら、稼働中の建物での改修工事も安全に管理します。',
    image: photos.workHospital,
    meta: ['鹿児島県', '300床クラス'],
  },
  {
    category: '土木',
    title: '橋梁 耐震補強工事',
    description:
      '経年劣化した橋梁の耐震補強にも対応。ドローン点検・3Dスキャナーを活用した高精度な診断・補強を行います。',
    image: photos.workBridge,
    meta: ['大分県', '橋長180mクラス'],
  },
  {
    category: '建築',
    title: '大規模マンション 新築工事',
    description:
      '地上15階・120戸クラスの大規模マンションにも対応。BIM活用により設計変更への迅速対応と高品質施工を両立します。',
    image: photos.workMansion,
    meta: ['福岡県', '地上15階・120戸クラス'],
  },
  {
    category: '建築',
    title: '製造工場 新築工事',
    description:
      '延床20,000㎡クラスの大規模工場建設にも対応。特殊な基礎工事や大型クレーンを用いた高難度施工も安全に管理します。',
    image: photos.workFactory,
    meta: ['福岡県', '延床20,000㎡クラス'],
  },
  {
    category: '土木',
    title: '河川改修・護岸工事',
    description:
      '洪水対策のための河川改修・護岸工事にも対応。出水期を避けた綿密な工程管理で、安全に工事を進めます。',
    image: photos.workRiver,
    meta: ['佐賀県', '延長3.2kmクラス'],
  },
  {
    category: '電気',
    title: '大規模太陽光発電設備 施工管理',
    description:
      '出力2MWクラスの太陽光発電所にも対応。パネル設置から変電設備まで、電気設備全般の施工管理を担当します。',
    image: photos.workSolar,
    meta: ['宮崎県', '出力2MWクラス'],
  },
  {
    category: '管工事',
    title: 'シティホテル 衛生設備新設工事',
    description:
      '200室規模クラスのホテル給排水・衛生設備にも対応。稼働中の既存施設との調整を伴う工事も安全に管理します。',
    image: photos.workHotel,
    meta: ['福岡県', '200室クラス'],
  },
  {
    category: '建築',
    title: '公立小学校 大規模改修工事',
    description:
      '築年数の経った学校施設の大規模改修にも対応。授業への影響を最小化する分棟施工計画など、柔軟な工程管理が可能です。',
    image: photos.workSchool,
    meta: ['熊本県', '延床4,500㎡クラス'],
  },
  {
    category: '土木',
    title: '港湾整備工事（岸壁改良）',
    description:
      '水深10mクラスの岸壁改良工事にも対応。海上作業を伴う特殊な施工環境でも、安全管理・品質管理を徹底します。',
    image: photos.workPort,
    meta: ['長崎県', '岸壁延長250mクラス'],
  },
];
