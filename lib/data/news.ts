export type NewsTag = 'お知らせ' | '採用';

export type NewsItem = {
  date: string;
  tag: NewsTag;
  title: string;
};

/** お知らせ（新しい順）。トップページは先頭3件を表示する。 */
export const news: NewsItem[] = [
  {
    date: '2026.08.15',
    tag: 'お知らせ',
    title: 'コーポレートサイトを公開しました',
  },
  {
    date: '2026.08.01',
    tag: '採用',
    title: '2027年卒 新卒採用エントリーを開始しました',
  },
  {
    date: '2026.07.09',
    tag: 'お知らせ',
    title: '商号を「株式会社九州建設テクノロジー」に変更し、施工管理事業を開始しました',
  },
];
