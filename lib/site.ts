/** サイト全体で共有する会社情報・ナビゲーション定義 */

export const site = {
  name: '株式会社九州建設テクノロジー',
  nameEn: 'KYUSHU CONSTRUCTION TECHNOLOGY CO., LTD.',
  shortName: '九州建設テクノロジー',
  tagline: 'DX・システム開発で、現場を前へ',
  description:
    '株式会社九州建設テクノロジーは、DXコンサルティング・システム開発・SESを軸に、企業の業務変革を支援するテクノロジーカンパニーです。施工管理の現場を知るエンジニアとして、建設業の施工管理DXに取り組んでいます。',
  /** 公開ドメインが決まったら書き換える（OGP・canonical に使用） */
  url: 'https://example.co.jp',
  tel: '03-6804-2140',
  telHref: 'tel:0368042140',
  fax: '03-6804-2140',
  email: 'info@rt-solutions.co.jp',
  zip: '〒104-0045',
  address: '東京都中央区築地2丁目10番2号 JP-BASE築地駅前7階',
  /** Google マップ検索クエリ（埋め込み・外部リンク共通） */
  mapQuery: '東京都中央区築地2-10-2',
  businessHours: '平日 9:00〜18:00',
  businessHoursNote: '土日祝日・年末年始を除く',
  founded: '2024年8月',
  employees: '53名（グループ全体）',
  copyright: '© 2026 株式会社九州建設テクノロジー All Rights Reserved.',
} as const;

/** アクセス欄に埋め込む Google マップ（API キー不要の output=embed 方式） */
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

/** 別タブで開く Google マップ */
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

/** ヘッダーナビゲーション */
export const navLinks = [
  { href: '/about/', label: '会社概要' },
  { href: '/services/', label: '事業内容' },
  { href: '/construction-dx/', label: '施工管理DX' },
  { href: '/works/', label: '対応事例' },
  { href: '/recruit/', label: '採用情報' },
  { href: '/news/', label: 'お知らせ' },
] as const;

/** フッターナビゲーション */
export const footerNav = [
  {
    title: 'サービス',
    links: [
      { href: '/services/', label: 'DXコンサルティング' },
      { href: '/services/', label: 'システム開発' },
      { href: '/services/', label: 'SES・エンジニア支援' },
      { href: '/construction-dx/', label: '施工管理DX' },
    ],
  },
  {
    title: '会社情報',
    links: [
      { href: '/about/', label: '会社概要' },
      { href: '/works/', label: '対応事例' },
      { href: '/news/', label: 'お知らせ' },
      { href: '/recruit/', label: '採用情報' },
    ],
  },
  {
    title: 'お問い合わせ',
    links: [
      { href: '/contact/', label: 'お問い合わせフォーム' },
      { href: site.telHref, label: site.tel },
      { href: `mailto:${site.email}`, label: site.email },
    ],
  },
] as const;
