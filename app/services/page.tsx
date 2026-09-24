import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
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
    '九州建設テクノロジーの事業内容。DXコンサルティング・システム開発・SES、そして注力領域である施工管理DXをご紹介します。',
};

const services = [
  {
    num: 'SERVICE 01',
    title: 'DXコンサルティング',
    image: photos.srvDetailConsulting,
    paragraphs: [
      '「DXを進めたいが、何から手をつければいいかわからない」。そんな段階からご相談ください。現場へのヒアリングで業務の流れと課題を洗い出し、デジタル化すべき業務と優先順位を整理します。',
      '既存のSaaSで解決できるならツールの選定と導入を、独自の仕組みが必要ならシステムの企画を。導入後も、社内に定着するまで運用ルールづくりや改善を一緒に進めます。',
    ],
    tags: ['業務フロー可視化', '課題整理・優先順位づけ', 'ツール選定・導入', 'DX推進体制づくり', '定着・改善支援'],
  },
  {
    num: 'SERVICE 02',
    title: 'システム開発',
    image: photos.srvDetailDevelopment,
    paragraphs: [
      '業務システムやWebアプリケーションを、要件定義・設計から開発・テスト・運用保守まで一貫して手がけます。お客様の業務に合わせたオーダーメイドの仕組みをつくります。',
      'Excelや紙で回している業務のシステム化、古くなった既存システムの改修・刷新にも対応。最初から大きくつくり込まず、効果の出る範囲から段階的に開発します。',
    ],
    tags: ['業務システム', 'Webアプリケーション', '既存システム改修', '要件定義・設計', '運用保守'],
  },
  {
    num: 'SERVICE 03',
    title: 'SES・エンジニア支援',
    image: photos.srvDetailSes,
    paragraphs: [
      'お客様の開発プロジェクトに、当社のエンジニアが参画します。アプリケーション開発からインフラの構築・運用、プロジェクト推進（PMO）まで、必要なスキルを必要な期間だけご提供します。',
      '「人手が足りない」「特定の技術を持つメンバーがほしい」といったご要望に、グループのネットワークも活かして柔軟にお応えします。',
    ],
    tags: ['アプリケーション開発', 'インフラ構築・運用', 'テスト・品質保証', 'PMO', 'プロジェクト推進'],
  },
  {
    num: 'FOCUS',
    title: '施工管理DX',
    image: photos.srvDetailConstructionDx,
    paragraphs: [
      '私たちが次の柱として注力しているのが、建設業の施工管理DXです。施工管理の現場で得た知見とシステム開発の技術をかけ合わせ、書類・写真・工程・日報など、現場に残るアナログな業務のデジタル化に取り組んでいます。',
      '建設会社様の業務改善のご相談から、共同での検証（PoC）まで。現場を知る私たちだからこそできるDXを、一緒に形にしていきます。',
    ],
    tags: ['書類・帳票の電子化', '写真・工程管理', '日報・安全書類', '現場の見える化', '建設会社様向けDX支援'],
    link: { href: '/construction-dx/', label: '施工管理DXについて詳しく →' },
  },
];

const flow = [
  { num: '01', title: ['ご相談・', 'お問い合わせ'], description: 'まだ課題が漠然としている段階でも、お気軽にご相談ください' },
  { num: '02', title: ['ヒアリング・', '課題整理'], description: '業務の流れや現場の声を伺い、課題と優先順位を整理します' },
  { num: '03', title: ['ご提案・', 'お見積もり'], description: '進め方・体制・費用をご提案し、内容をご説明します' },
  { num: '04', title: ['開発・導入・', 'エンジニア参画'], description: 'ご契約後、担当チームを編成してプロジェクトを開始します' },
  { num: '05', title: ['運用・', '定着支援'], description: '導入後も改善を重ね、社内に定着するまで伴走します' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SERVICES"
        title="事業内容"
        description="DXコンサルティング・システム開発・SESで、企業の業務変革を支援します。"
        image={photos.heroServices}
      />
      <Breadcrumb current="事業内容" />

      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>SERVICE LIST</LabelTag>
            <SectionTitle>3つのサービスと、注力領域</SectionTitle>
            <Divider />
            <SectionSub className="mt-0">DXの企画から開発・運用まで。そして、施工管理DXへ</SectionSub>
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
                  <p
                    className={cn(
                      'mb-3 font-en text-[11px] font-extrabold tracking-[0.2em]',
                      service.link ? 'text-gold-dark' : 'text-brand-light',
                    )}
                  >
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
                  {service.link && (
                    <Button href={service.link.href} variant="primary" className="mt-8">
                      {service.link.label}
                    </Button>
                  )}
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
            <SectionSub className="mt-0">ご相談から運用・定着まで、一貫してサポートします</SectionSub>
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
        title="DX・システム開発のご相談はお気軽に"
        description="課題が整理できていない段階でも大丈夫です。まずはお問い合わせフォームよりご連絡ください。"
        primary={{ href: '/contact/', label: '無料で相談する →' }}
        secondary={{ href: '/works/', label: '対応事例を見る' }}
      />
    </>
  );
}
