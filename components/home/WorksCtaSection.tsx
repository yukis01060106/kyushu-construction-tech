import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const stats = [
  { value: '3', unit: '領域', label: 'DXコンサル・開発・SES' },
  { value: '1', unit: 'つ', label: '注力領域：施工管理DX' },
  { value: '2024', unit: '', label: '設立' },
];

export function WorksCtaSection() {
  return (
    <section id="works" className="relative overflow-hidden py-28 text-center max-md:py-[72px]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.worksCtaBg}
          alt="データセンター"
          loading="lazy"
          className="h-full w-full object-cover object-[center_55%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,30,0.93)_0%,rgba(10,15,30,0.78)_100%)]" />
      </div>

      <Container className="relative z-[1] max-w-[700px]">
        <Reveal>
          <LabelTag tone="gold" center>
            WORKS
          </LabelTag>
          <SectionTitle white>対応事例</SectionTitle>
          <SectionSub white className="mx-auto max-w-[560px]">
            業務改善のコンサルティングからシステム開発、エンジニア参画まで。
            <br className="max-md:hidden" />
            対応可能な案件の例を対応事例ページでご紹介しています。
          </SectionSub>

          <div className="my-10 mb-11 flex flex-wrap justify-center gap-14 max-md:my-8 max-md:mb-9 max-md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-[6px]">
                <strong className="font-en text-[2.2rem] leading-none font-black text-white max-md:text-[1.8rem]">
                  {stat.value}
                  {stat.unit && <i className="ml-[2px] text-[1.05rem] text-gold not-italic">{stat.unit}</i>}
                </strong>
                <span className="text-xs tracking-[0.04em] text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>

          <Button href="/works/" variant="gold">
            <span>対応事例を詳しく見る</span>
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M5 10H15M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
