import { photos } from '@/lib/images';

export const workCategories = ['DXコンサル', 'システム開発', 'SES', '施工管理DX'] as const;

export type WorkCategory = (typeof workCategories)[number];

export type WorkItem = {
  category: WorkCategory;
  title: string;
  description: string;
  image: string;
  meta: string[];
};

/** 実績ではなく「対応可能な案件の例」として掲載している */
export const works: WorkItem[] = [
  {
    category: 'DXコンサル',
    title: '業務フローの可視化とDX計画づくり',
    description:
      '部署ごとに属人化した業務をヒアリングで洗い出し、課題と優先順位を整理。どこから、何をデジタル化するかの計画を一緒につくります。',
    image: photos.workBusinessFlow,
    meta: ['業種を問わず', 'ヒアリング〜計画策定'],
  },
  {
    category: 'DXコンサル',
    title: 'SaaS・クラウドツールの選定と導入',
    description:
      '勤怠・顧客管理・ワークフローなど、既存サービスで解決できる業務はツールの比較・選定から導入、社内への定着まで支援します。',
    image: photos.workSaas,
    meta: ['中小企業', '選定〜定着支援'],
  },
  {
    category: 'システム開発',
    title: 'Excel管理業務のWebシステム化',
    description:
      '複数のExcelファイルで管理していた案件・在庫・顧客情報を、ブラウザから誰でも使える業務システムに置き換えます。',
    image: photos.workWebApp,
    meta: ['業務システム', '要件定義〜運用保守'],
  },
  {
    category: 'システム開発',
    title: '既存システムの改修・刷新',
    description:
      '長年使ってきたシステムの機能追加や、保守が難しくなった仕組みの段階的な作り直しに対応します。',
    image: photos.workLegacy,
    meta: ['改修・リプレイス', '段階的な移行'],
  },
  {
    category: 'SES',
    title: '開発プロジェクトへのエンジニア参画',
    description:
      'Webアプリケーションや業務システムの開発チームにエンジニアが参画。設計・実装・テストを担います。',
    image: photos.workDevTeam,
    meta: ['アプリ開発', '準委任'],
  },
  {
    category: 'SES',
    title: 'インフラ構築・運用支援',
    description: 'サーバー・クラウド環境の構築や、日々の運用・監視業務を担うエンジニアを提供します。',
    image: photos.workInfra,
    meta: ['インフラ', '構築・運用'],
  },
  {
    category: 'SES',
    title: 'PMO・プロジェクト推進支援',
    description: '進捗・課題管理や関係者間の調整を担い、プロジェクトを前に進める役割で参画します。',
    image: photos.workPmo,
    meta: ['PMO', 'プロジェクト管理'],
  },
  {
    category: '施工管理DX',
    title: '現場写真・工程管理のクラウド化',
    description:
      '現場ごとにバラバラに保存されていた写真や工程表をクラウドで一元管理し、現場と事務所で同じ情報を共有できるようにします。',
    image: photos.workSitePhoto,
    meta: ['建設会社', '写真・工程管理'],
  },
  {
    category: '施工管理DX',
    title: '日報・報告業務のスマートフォン対応',
    description:
      '紙で作成していた作業日報を、現場からスマートフォンで入力できる仕組みに。帰社後の書類作業を減らします。',
    image: photos.workSiteReport,
    meta: ['建設会社', '日報・報告'],
  },
  {
    category: '施工管理DX',
    title: '安全書類・施工書類の電子化',
    description:
      '施工計画書や安全書類のテンプレート化・電子化により、作成と確認の手間を減らし、過去書類もすぐに探せるようにします。',
    image: photos.workSiteDocs,
    meta: ['建設会社', '書類電子化'],
  },
];
