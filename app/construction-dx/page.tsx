import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand, PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';

export const metadata: Metadata = {
  title: '施工管理DX',
  description:
    '九州建設テクノロジーが注力する施工管理DX。施工管理の現場を知るエンジニアとして、書類・写真・工程・日報など現場業務のデジタル化に取り組みます。',
};

const issues = [
  {
    title: '担い手不足と高齢化',
    description:
      '建設業では技術者の高齢化が進み、若い担い手の確保が大きな課題に。限られた人数で現場を回す工夫が求められています。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M6 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 20h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '時間外労働の上限規制',
    description:
      '2024年4月から建設業にも時間外労働の上限規制が適用。これまでと同じやり方のままでは、工期と働き方の両立が難しくなっています。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 14v10l7 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '紙・Excel・電話中心の業務',
    description:
      '施工計画書、安全書類、写真整理、日報。現場の後に事務所で行う書類作業や転記・確認が、施工管理者の時間を圧迫しています。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M14 6h14l8 8v28H14z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M28 6v8h8M19 24h12M19 31h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const approach = [
  {
    label: 'FIELD',
    title: '施工管理の現場経験',
    image: photos.cdxField,
    description:
      '現場に立ってきたメンバーが、どの作業に時間がかかり、何が使われずに終わるのかを知っています。現場の言葉で課題をつかみます。',
  },
  {
    label: 'TECHNOLOGY',
    title: 'DX・システム開発の技術',
    image: photos.cdxTech,
    description:
      'コンサルティングから開発・運用まで手がけてきた技術力で、課題を実際に動く仕組みに落とし込みます。既存ツールの活用も含めて最適な形を選びます。',
  },
];

const themes = [
  {
    num: '01',
    title: '書類・帳票のデジタル化',
    description: '施工計画書・安全書類・検査記録などを電子化し、作成・共有・検索の手間を減らします。',
  },
  {
    num: '02',
    title: '写真・図面・工程の一元管理',
    description: '現場写真や図面、工程表を一か所に集約し、現場と事務所で同じ情報を見られるようにします。',
  },
  {
    num: '03',
    title: '日報・報告のスマート化',
    description: 'スマートフォンから日報や報告を入力できるようにし、帰社後の書類作業や転記をなくします。',
  },
  {
    num: '04',
    title: 'データ活用・見える化',
    description: '蓄積した記録から進捗や課題を可視化し、判断を早く・正確にするための土台をつくります。',
  },
];

const roadmap = [
  {
    step: 'STEP 01',
    status: 'NOW',
    title: '個別のDX支援・開発',
    description:
      '建設会社様の業務改善のご相談に、コンサルティングとシステム開発で個別に対応。現場ごとの課題と解決パターンを蓄積します。',
  },
  {
    step: 'STEP 02',
    status: 'NEXT',
    title: '仕組みの共通化・検証',
    description:
      '複数の現場で繰り返し出てくる課題を、共通の仕組みとして整理。パートナー企業様と共同で検証（PoC）を進めます。',
  },
  {
    step: 'STEP 03',
    status: 'FUTURE',
    title: '施工管理DXサービスの提供',
    description:
      '検証を重ねた仕組みを、より多くの建設会社様が使えるサービスとして提供。施工管理DXの専門企業を目指します。',
  },
];

export default function ConstructionDxPage() {
  return (
    <>
      <PageHero
        label="CONSTRUCTION DX"
        title="施工管理DX"
        description="施工管理の現場を知るエンジニアとして、建設業のDXに取り組んでいます。"
        image={photos.heroConstructionDx}
      />
      <Breadcrumb current="施工管理DX" />

      {/* 建設業の課題 */}
      <PageSection>
        <Container>
          <Reveal className="mb-16 text-center">
            <LabelTag center>BACKGROUND</LabelTag>
            <SectionTitle>建設業はいま、転換点にある</SectionTitle>
            <Divider center />
            <SectionSub>施工管理の現場が抱える3つの課題</SectionSub>
          </Reveal>

          <Reveal className="grid grid-cols-3 gap-[2px] overflow-hidden rounded-lg bg-gray-200 max-lg:grid-cols-1">
            {issues.map((item) => (
              <div key={item.title} className="bg-white px-9 py-11 text-center transition-colors duration-300 hover:bg-gray-50">
                <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#e0e7ff)] text-brand [&_svg]:size-8">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-[1.2rem] font-black text-navy">{item.title}</h3>
                <p className="text-sm leading-[1.85] text-gray-600">{item.description}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </PageSection>

      {/* アプローチ */}
      <PageSection tone="gray">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>OUR APPROACH</LabelTag>
            <SectionTitle>
              現場 × テクノロジーで、
              <br />
              使われるDXを。
            </SectionTitle>
            <Divider />
            <SectionSub className="mt-0">
              ツールを入れても、現場で使われなければ意味がありません。私たちは2つの強みをかけ合わせます。
            </SectionSub>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            {approach.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.12}
                tilt
                className="overflow-hidden rounded-lg bg-white shadow-md transition-[transform,box-shadow] duration-[400ms] ease-brand hover:-translate-y-[6px] hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="px-8 pt-7 pb-9 max-md:px-6">
                  <p className="mb-2 font-en text-[11px] font-extrabold tracking-[0.2em] text-brand-light">{item.label}</p>
                  <h3 className="mb-3 text-[1.3rem] font-black text-navy">{item.title}</h3>
                  <p className="text-sm leading-[1.9] text-gray-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* 取り組むテーマ */}
      <section className="bg-navy py-24 max-md:py-16">
        <Container>
          <Reveal className="mb-16">
            <LabelTag tone="gold">THEMES</LabelTag>
            <SectionTitle white>取り組むテーマ</SectionTitle>
            <Divider />
            <SectionSub white className="mt-0">施工管理者の時間を、本来の管理業務に取り戻すために</SectionSub>
          </Reveal>

          <div className="grid grid-cols-2 gap-[2px] max-md:grid-cols-1">
            {themes.map((theme, i) => (
              <Reveal
                key={theme.num}
                delay={(i % 2) * 0.12}
                className="flex items-start gap-6 border border-white/6 bg-white/4 px-10 py-10 transition-colors duration-300 hover:bg-white/9 max-md:px-6 max-md:py-7"
              >
                <span className="font-en text-[2rem] leading-none font-black text-gold">{theme.num}</span>
                <div>
                  <h3 className="mb-2 text-[1.1rem] font-bold text-white">{theme.title}</h3>
                  <p className="text-sm leading-[1.85] text-white/62">{theme.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ロードマップ */}
      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>ROADMAP</LabelTag>
            <SectionTitle>これからの歩み</SectionTitle>
            <Divider />
            <SectionSub className="mt-0">個別の支援から始め、施工管理DXの専門企業へ（構想）</SectionSub>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {roadmap.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 0.12}
                className={cn(
                  'relative rounded-lg border-2 bg-white px-8 py-9',
                  i === 0 ? 'border-brand shadow-lg' : 'border-gray-200',
                )}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-en text-[13px] font-extrabold tracking-[0.15em] text-brand">{item.step}</span>
                  <span
                    className={cn(
                      'rounded-full px-3 py-1 font-en text-[10px] font-bold tracking-[0.12em]',
                      i === 0 ? 'bg-accent-grad text-white' : 'bg-gray-100 text-gray-500',
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="mb-3 text-[1.15rem] font-black text-navy">{item.title}</h3>
                <p className="text-sm leading-[1.85] text-gray-600">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      <CtaBand
        title="施工管理のデジタル化、一緒に考えませんか"
        description="建設会社様からの業務改善のご相談、共同検証（PoC）のパートナーを募集しています。"
        primary={{ href: '/contact/', label: '相談してみる →' }}
        secondary={{ href: '/services/', label: '事業内容を見る' }}
      />
    </>
  );
}
