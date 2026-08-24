import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand, PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';

export const metadata: Metadata = {
  title: '事業内容',
  description:
    '九州建設テクノロジーの事業内容。建築・土木・電気・管工事の施工管理から安全管理コンサルティングまで。',
};

const services = [
  {
    num: 'SERVICE 01',
    title: '建築施工管理',
    image: photos.srvDetailArchitecture,
    paragraphs: [
      '住宅・マンション・商業施設・オフィスビルなど、あらゆる建築工事の施工管理を担当します。設計図書に基づき、品質・安全・工程・原価の4管理を徹底し、お客様の理想を形にします。',
      'BIM（建築情報モデリング）を活用し、3次元モデルによる施工シミュレーションや干渉チェックを実施。設計変更への迅速な対応と施工品質の向上を両立しています。',
    ],
    tags: ['住宅・マンション', '商業施設', 'オフィスビル', '公共建築物', '改修・リノベーション'],
  },
  {
    num: 'SERVICE 02',
    title: '土木施工管理',
    image: photos.srvDetailCivil,
    paragraphs: [
      '道路・橋梁・河川・港湾・ダムなど土木工事全般の施工管理を行います。地域インフラの整備・維持に貢献し、安全で長寿命な社会基盤を構築します。',
      'ドローン測量・3Dスキャナー・TS（トータルステーション）などICT建機を活用したスマート施工により、高精度な出来形管理と効率化を実現しています。',
    ],
    tags: ['道路・舗装工事', '橋梁・トンネル', '河川・ダム', '港湾・海岸', '造成・地盤改良'],
  },
  {
    num: 'SERVICE 03',
    title: '電気施工管理',
    image: photos.srvDetailElectric,
    paragraphs: [
      '受変電設備・電灯コンセント設備・通信設備・防災設備など電気工事の施工管理を行います。省エネ・スマートビルディングへの対応も万全で、最新の電気設備工事に対応します。',
      'BEMS（ビルエネルギー管理システム）や太陽光発電・蓄電池システムなど、再生可能エネルギーを活用したゼロエネルギービル（ZEB）対応工事にも積極的に取り組んでいます。',
    ],
    tags: ['受変電設備', '照明・コンセント', '通信・LAN設備', '防災・警報設備', '太陽光・蓄電池'],
  },
  {
    num: 'SERVICE 04',
    title: '管工事施工管理',
    image: photos.srvDetailPipe,
    paragraphs: [
      '給排水・衛生・空調・換気・ガス配管など管工事の施工管理を行います。快適な生活・労働環境を支える設備工事を、高い精度と品質で管理・監督します。',
      '病院・ホテル・集合住宅など衛生管理が特に重要な施設での実績も多数。稼働中の建物での改修工事においても、運営への影響を最小限に抑えた施工計画を立案します。',
    ],
    tags: ['給排水衛生設備', '空調・換気設備', 'ガス配管', '消防・スプリンクラー', '医療ガス設備'],
  },
  {
    num: 'SERVICE 05',
    title: '品質管理・検査',
    image: photos.srvDetailQuality,
    paragraphs: [
      '施工品質の確保に向けた徹底した品質管理を行います。各工程での検査・試験を実施し、設計図書・仕様書に基づく品質基準を確実に満たします。',
      '社内品質管理システムに基づく工程内検査・受入検査・完成検査を実施。不具合発見時の是正措置・改善指導まで一貫してサポートします。',
    ],
    tags: ['工程内品質検査', '材料受入検査', '竣工・完成検査', '是正措置対応', '品質記録管理'],
  },
  {
    num: 'SERVICE 06',
    title: '安全管理・コンサルティング',
    image: photos.srvDetailSafety,
    paragraphs: [
      '「ゼロ災害」を目標に、安全管理体制の構築・運用を支援します。リスクアセスメントから日常の安全パトロール、安全教育まで包括的にサポートします。',
      '労働安全衛生法に基づく安全衛生計画の策定・実施から、安全文化の醸成・定着まで、企業全体の安全レベル向上をトータルでコンサルティングします。',
    ],
    tags: ['安全計画書作成', 'リスクアセスメント', '安全パトロール', '安全教育・KY', '労災防止コンサル'],
  },
];

const flow = [
  { num: '01', title: ['ご相談・', 'お問い合わせ'], description: 'まずはお電話・メール・フォームにてお気軽にご相談ください' },
  { num: '02', title: ['現場調査・', 'ヒアリング'], description: '現地調査と詳細ヒアリングにより、最適なプランを検討します' },
  { num: '03', title: ['ご提案・', 'お見積もり'], description: '施工管理計画書と見積書を作成し、内容をご説明します' },
  { num: '04', title: ['契約・', '施工管理開始'], description: 'ご契約後、担当技術者を配置し施工管理業務を開始します' },
  { num: '05', title: ['竣工・', 'アフターフォロー'], description: '完成検査・引渡し後も継続的なサポートを提供します' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        title="事業内容"
        description="建築・土木・電気・管工事の施工管理全般を手がける、九州のプロフェッショナル集団です。"
        image={photos.heroServices}
      />
      <Breadcrumb current="事業内容" />

      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>SERVICE LIST</LabelTag>
            <SectionTitle>6つのサービス</SectionTitle>
            <Divider />
            <SectionSub className="mt-0">施工管理全般にわたる幅広いサービスを提供しています</SectionSub>
          </Reveal>

          {services.map((service, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal
                key={service.num}
                className="grid grid-cols-2 items-center gap-20 border-b border-gray-100 py-20 last:border-b-0 max-lg:grid-cols-1 max-lg:gap-10"
              >
                <div
                  className={cn(
                    'group aspect-[4/3] overflow-hidden rounded-lg shadow-xl max-lg:order-none',
                    reverse && 'order-2',
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-[1.04]"
                  />
                </div>
                <div className={cn('max-lg:order-none', reverse && 'order-1')}>
                  <p className="mb-3 font-en text-[11px] font-extrabold tracking-[0.2em] text-brand-light">
                    {service.num}
                  </p>
                  <h2 className="mb-5 text-[clamp(1.6rem,2.5vw,2.1rem)] font-black tracking-[-0.03em] text-navy">
                    {service.title}
                  </h2>
                  <Divider />
                  {service.paragraphs.map((text) => (
                    <p key={text} className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
                      {text}
                    </p>
                  ))}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#dbeafe] px-[14px] py-[5px] text-xs font-semibold text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </PageSection>

      {/* 業務の流れ */}
      <PageSection tone="gray">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>PROCESS</LabelTag>
            <SectionTitle>業務の流れ</SectionTitle>
            <Divider />
            <SectionSub className="mt-0">お問い合わせから施工完了まで、丁寧にサポートします</SectionSub>
          </Reveal>

          <Reveal className="relative grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:before:absolute lg:before:top-9 lg:before:right-[10%] lg:before:left-[10%] lg:before:h-[2px] lg:before:bg-gray-200 lg:before:content-['']">
            {flow.map((step) => (
              <div key={step.num} className="relative z-[1] flex flex-col items-center px-3 text-center">
                <div className="mb-[18px] flex size-[72px] items-center justify-center rounded-full bg-brand font-en text-xl font-black text-white shadow-[0_4px_16px_rgba(29,78,216,0.35)]">
                  {step.num}
                </div>
                <h4 className="mb-2 text-sm leading-[1.4] font-bold text-navy">
                  {step.title[0]}
                  <br />
                  {step.title[1]}
                </h4>
                <p className="text-xs leading-[1.7] text-gray-500">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </PageSection>

      <CtaBand
        title="施工管理のご相談はお気軽に"
        description="まずはお問い合わせフォームよりご連絡ください。専門スタッフがご対応します。"
        primary={{ href: '/contact/', label: '無料相談・お見積もり →' }}
        secondary={{ href: '/works/', label: '対応事例を見る' }}
      />
    </>
  );
}
