import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { HomeSection } from '@/components/ui/Section';
import { LabelTag, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const companyRows = [
  { label: '会社名', value: '株式会社九州建設テクノロジー' },
  { label: '所在地', value: '東京都中央区築地（九州全域対応）' },
  { label: '設立', value: '2024年8月' },
  { label: '事業内容', value: '施工管理全般（建築・土木・電気・管工事）' },
  { label: '保有資格', value: '1級建築・土木施工管理技士 他多数' },
];

export function AboutSection() {
  return (
    <HomeSection id="about">
      <Container>
        <div className="grid grid-cols-2 items-center gap-20 max-lg:grid-cols-1 max-lg:gap-[60px]">
          <div className="relative max-lg:mx-auto max-lg:max-w-[560px]">
            <Reveal
              variant="left"
              className="group aspect-[4/3] overflow-hidden rounded-lg shadow-xl transition-shadow duration-[400ms] hover:shadow-[0_24px_48px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.12),0_0_0_4px_rgba(29,78,216,0.15)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos.aboutMain}
                alt="設計打ち合わせ"
                loading="lazy"
                data-cursor-big
                className="h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-[1.04]"
              />
            </Reveal>

            <Reveal
              variant="left"
              delay={0.15}
              className="absolute right-[-12px] bottom-[-40px] aspect-square w-[150px] overflow-hidden rounded-md border-4 border-white shadow-xl xs:right-[-32px] xs:w-[200px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos.aboutSub} alt="現場チーム" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/72 text-white backdrop-blur-[4px]">
                <strong className="font-en text-[2.6rem] leading-none font-black text-gold">2024</strong>
                <small className="mt-1 text-[11px] tracking-[0.1em] text-white/70">設立</small>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" className="pb-12">
            <LabelTag>ABOUT US</LabelTag>
            <SectionTitle>
              九州の建設を
              <br />
              支えるプロ集団
            </SectionTitle>
            <p className="mt-5 mb-[18px] text-[1.1rem] leading-[1.8] font-bold text-navy">
              株式会社九州建設テクノロジーは、九州全域を拠点に施工管理全般を手がける専門企業です。
            </p>
            <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
              建設業界に蓄積してきた豊富な知識と経験をもとに、建築・土木・電気・管工事のあらゆる施工管理業務を提供。品質・安全・工期・コストの4管理を徹底し、お客様の大切なプロジェクトを確実に完遂します。
            </p>
            <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
              DX・AI技術やBIM/CIMも積極的に導入し、施工管理のデジタル化・効率化を推進。現場力とテクノロジーを融合させた、新しい建設マネジメントを追求しています。
            </p>

            <dl className="mt-8 overflow-hidden rounded-md border border-gray-200">
              {companyRows.map((row) => (
                <div key={row.label} className="grid grid-cols-[110px_1fr] border-b border-gray-200 last:border-b-0">
                  <dt className="border-r border-gray-200 bg-gray-50 px-4 py-[13px] text-[13px] font-bold text-gray-600">
                    {row.label}
                  </dt>
                  <dd className="px-4 py-[13px] text-sm text-gray-700">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </HomeSection>
  );
}
