import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand, PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { WorksGrid } from '@/components/works/WorksGrid';
import { photos } from '@/lib/images';

export const metadata: Metadata = {
  title: '対応事例',
  description:
    '九州建設テクノロジーの対応事例。DXコンサルティング・システム開発・SES・施工管理DXで対応可能な案件の例をご紹介します。',
};

const summary = [
  { value: '3', unit: '領域', label: 'DXコンサル・開発・SES' },
  { value: '1', unit: 'つ', label: '注力領域：施工管理DX' },
  { value: '2024', unit: '', label: '設立' },
];

export default function WorksPage() {
  return (
    <>
      <PageHero
        label="WORKS"
        title="対応事例"
        description="業務改善のコンサルティングからシステム開発、エンジニア参画まで。以下は対応可能な案件の一例です。"
        image={photos.heroWorks}
      />
      <Breadcrumb current="対応事例" />

      {/* 対応力サマリー */}
      <section className="bg-navy py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 text-center xs:grid-cols-3 xs:gap-0">
            {summary.map((item, i) => (
              <div
                key={item.label}
                className={i < summary.length - 1 ? 'p-5 xs:border-r xs:border-white/10' : 'p-5'}
              >
                <div className="font-en text-[3rem] leading-none font-black text-white">
                  {item.value}
                  {item.unit && <span className="text-[1.4rem] text-gold">{item.unit}</span>}
                </div>
                <div className="mt-2 text-[13px] tracking-[0.06em] text-white/55">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 対応事例一覧 */}
      <PageSection>
        <Container>
          <Reveal className="mb-16 text-center">
            <LabelTag center>WORKS LIST</LabelTag>
            <SectionTitle>対応可能な案件の例</SectionTitle>
            <Divider center />
            <SectionSub className="mt-4">
              特定のお客様の事例ではなく、対応可能な案件の内容をご案内するための例です
            </SectionSub>
          </Reveal>

          <WorksGrid />
        </Container>
      </PageSection>

      <CtaBand
        title="プロジェクトのご相談はこちら"
        description="実績に関するお問い合わせ・新規プロジェクトのご相談をお受けしております"
        primary={{ href: '/contact/', label: 'お問い合わせ →' }}
        secondary={{ href: '/services/', label: '事業内容を見る' }}
      />
    </>
  );
}
