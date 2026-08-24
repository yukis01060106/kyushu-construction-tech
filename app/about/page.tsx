import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand, PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社九州建設テクノロジーの会社概要。経営理念・会社情報・沿革・アクセスをご紹介します。',
};

const philosophy = [
  {
    title: '品質への誠実',
    description:
      'すべての工事において、設計仕様と品質基準を厳守します。「手を抜かない」を合言葉に、一つひとつの工程を丁寧に積み重ねます。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6l4.5 9L38 16.5l-7 7 1.5 10L24 29l-8.5 4.5 1.5-10-7-7 9.5-1.5z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '人を守る安全',
    description:
      '働く人の命と健康を最優先に考えます。ゼロ災害を目標に、徹底した安全管理と現場教育を通じて、安心できる職場環境をつくります。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '地域への貢献',
    description:
      '九州の社会インフラと建設環境を支え、地域の発展に貢献します。次世代へ誇れるものづくりを、九州の地から世界へ発信していきます。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const corpRows = [
  { label: '会社名', value: site.name },
  { label: '英文社名', value: site.nameEn },
  { label: '設立', value: site.founded },
  { label: '従業員数', value: site.employees },
  { label: '本社所在地', value: `${site.zip}　${site.address}` },
  { label: 'TEL / FAX', value: `TEL：${site.tel}　／　FAX：${site.fax}` },
  { label: '営業時間', value: `${site.businessHours}（${site.businessHoursNote}）` },
  { label: '事業内容', value: '建築・土木・電気・管工事の施工管理業務全般、安全管理コンサルティング' },
];

const career = [
  { year: '2020', text: '株式会社ALCS 入社' },
  { year: '2021', text: 'テレマ営業にて連続月間成績1位を獲得' },
  { year: '2022', text: '国策事業のプロジェクトマネージャー就任' },
  { year: '2023', text: 'Rise Tech Solutions 入社・社長室就任' },
  { year: '2024', text: 'システム開発エンジニア就任' },
  { year: '2025', text: '執行役員 CHRO 就任' },
  {
    year: '2026',
    text: '株式会社九州建設テクノロジー 取締役副社長就任。施工管理の現場にも自ら立ち、事業を牽引',
  },
];

const history = [
  { year: '2024.08', title: '法人設立', description: '法人を設立。' },
  {
    year: '2026.07',
    title: '商号変更・施工管理事業を本格始動',
    description:
      '商号を「株式会社九州建設テクノロジー」に変更。経験豊富な技術者を迎え、建築・土木・電気・管工事の施工管理事業をスタート。',
  },
  {
    year: '2026.08',
    title: 'コーポレートサイト公開',
    description: '九州の建設現場をテクノロジーで支えるべく、コーポレートサイトを公開。',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT US"
        title="会社概要"
        description="2024年の設立以来、経験豊富な技術者とDX・AIの力で、九州の建設現場を支えていきます。"
        image={photos.heroAbout}
      />
      <Breadcrumb current="会社概要" />

      {/* 経営理念 */}
      <PageSection>
        <Container>
          <Reveal className="mb-16 text-center">
            <LabelTag center>PHILOSOPHY</LabelTag>
            <SectionTitle>経営理念</SectionTitle>
            <Divider center />
            <SectionSub>私たちが大切にしている3つの価値観</SectionSub>
          </Reveal>

          <Reveal className="grid grid-cols-3 gap-[2px] overflow-hidden rounded-lg bg-gray-200 max-lg:grid-cols-1">
            {philosophy.map((item) => (
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

      {/* 会社情報 */}
      <PageSection tone="gray">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>COMPANY INFO</LabelTag>
            <SectionTitle>会社情報</SectionTitle>
            <Divider />
          </Reveal>

          <Reveal>
            <dl className="overflow-hidden rounded-lg border border-gray-200">
              {corpRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 border-b border-gray-200 last:border-b-0 xs:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr]"
                >
                  <dt className="flex items-center border-b border-gray-200 bg-gray-50 px-6 py-[18px] text-sm font-bold text-gray-700 xs:border-r xs:border-b-0">
                    {row.label}
                  </dt>
                  <dd className="flex items-center px-6 py-[18px] text-sm leading-[1.75] text-gray-700">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </PageSection>

      {/* 役員紹介 */}
      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>EXECUTIVES</LabelTag>
            <SectionTitle>役員紹介</SectionTitle>
            <Divider />
          </Reveal>

          <Reveal className="mx-auto grid max-w-[640px] grid-cols-1 gap-8">
            <div
              data-tilt
              className="grid grid-cols-[200px_1fr] overflow-hidden rounded-lg bg-white shadow-md transition-[transform,box-shadow] duration-[400ms] ease-brand hover:-translate-y-[6px] hover:shadow-xl max-md:grid-cols-1"
            >
              <div className="relative min-h-[260px] overflow-hidden max-md:min-h-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/exec-nakajima.jpg" alt="中島 嘉寿" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-7 pl-6">
                <p className="mb-2 font-en text-[11px] font-bold tracking-[0.18em] text-brand-light uppercase">
                  Director &amp; Vice President
                </p>
                <p className="mb-[6px] text-base font-bold text-navy">取締役副社長</p>
                <h3 className="mb-1 text-[1.4rem] font-black tracking-[-0.02em] text-navy">中島 嘉寿</h3>
                <p className="mb-5 font-en text-xs font-semibold tracking-[0.08em] text-gray-400">
                  Yoshikazu Nakajima
                </p>
                <ul className="flex flex-col gap-[7px]">
                  {career.map((item) => (
                    <li key={item.year} className="flex gap-3 text-[12.5px] leading-[1.55]">
                      <span className="w-9 shrink-0 font-en font-bold text-brand">{item.year}</span>
                      <span className="text-gray-600">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </PageSection>

      {/* 沿革 */}
      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>HISTORY</LabelTag>
            <SectionTitle>沿革</SectionTitle>
            <Divider />
          </Reveal>

          <Reveal className="relative pb-4 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:-translate-x-1/2 before:bg-gray-200 before:content-[''] max-lg:before:hidden">
            {history.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="mb-12 grid grid-cols-[1fr_64px_1fr] items-start max-lg:grid-cols-[80px_1fr]"
                >
                  <div className="col-start-2 row-start-1 flex justify-center pt-[6px] max-lg:col-start-1">
                    <div className="relative z-[1] size-4 rounded-full border-[3px] border-white bg-brand shadow-[0_0_0_3px_var(--color-brand)]" />
                  </div>
                  <div
                    className={cn(
                      'row-start-1 max-lg:col-start-2 max-lg:pr-0 max-lg:pl-6 max-lg:text-left',
                      isLeft ? 'col-start-1 pr-10 text-right' : 'col-start-3 pl-10 text-left',
                    )}
                  >
                    <p className="mb-2 font-en text-sm font-extrabold tracking-[0.05em] text-brand max-lg:text-right">
                      {item.year}
                    </p>
                    <h3 className="mb-[6px] text-[15px] leading-[1.4] font-bold text-navy">{item.title}</h3>
                    <p className="text-[13px] leading-[1.75] text-gray-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </Container>
      </PageSection>

      {/* ギャラリー */}
      <PageSection tone="gray">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>GALLERY</LabelTag>
            <SectionTitle>現場の様子</SectionTitle>
            <Divider />
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3">
            {photos.gallery.map((src, i) => (
              <div key={src + i} className="group aspect-[4/3] overflow-hidden rounded-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`現場${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </Reveal>
        </Container>
      </PageSection>

      <CtaBand
        title="まずはお気軽にご相談ください"
        description="施工管理に関するお問い合わせ・お見積もりはこちらから"
        primary={{ href: '/contact/', label: 'お問い合わせ →' }}
        secondary={{ href: '/services/', label: '事業内容を見る' }}
      />
    </>
  );
}
