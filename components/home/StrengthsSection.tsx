import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const strengths = [
  {
    title: '現場を知るエンジニア',
    description:
      '施工管理の現場に立ってきたメンバーが在籍。現場の言葉で課題を理解し、机上ではなく実際に使われるシステムを設計します。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '企画から開発・運用まで一気通貫',
    description:
      '課題整理・要件定義から、設計・開発、導入後の運用保守まで一つのチームで対応。フェーズごとに窓口が変わる手間がありません。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '状況に合わせた柔軟な体制',
    description:
      'コンサルティング・受託開発・SESを組み合わせ、お客様の予算や体制に合った関わり方をご提案。必要なスキルを必要な期間だけ提供します。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '小さく始めて、定着まで伴走',
    description:
      'いきなり大きなシステムはつくりません。効果の出やすい業務から小さく始め、現場の声を聞きながら改善を重ねて定着させます。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8l4 8 9 1.5-6.5 6.5 1.5 9L24 29l-8 4 1.5-9L11 17.5l9-1.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function StrengthsSection() {
  return (
    <section id="strengths" className="relative overflow-hidden py-28">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.strengthsBg}
          alt="オフィス街"
          loading="lazy"
          data-cursor-big
          className="h-full w-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,30,0.93)_0%,rgba(29,78,216,0.82)_100%)]" />
        <div className="bg-tech-grid absolute inset-0" />
      </div>

      <Container className="relative z-[1]">
        <Reveal className="mb-16 text-center">
          <LabelTag tone="gold" center>
            OUR STRENGTHS
          </LabelTag>
          <SectionTitle white>私たちの強み</SectionTitle>
          <SectionSub white>なぜ九州建設テクノロジーが選ばれるのか</SectionSub>
        </Reveal>

        <div className="grid grid-cols-2 gap-[2px] max-md:gap-px">
          {strengths.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.12}
              tilt
              className="border border-white/6 bg-white/4 px-11 py-12 transition-colors duration-300 hover:bg-white/9 max-md:px-4 max-md:py-5"
            >
              <div className="mb-[22px] flex size-[52px] items-center justify-center rounded-md border border-gold/30 bg-gold/15 text-gold max-md:mb-3 max-md:size-9 [&_svg]:size-[26px] max-md:[&_svg]:size-[18px]">
                {item.icon}
              </div>
              <h3 className="mb-[14px] text-[1.1rem] leading-[1.5] font-bold text-white max-md:mb-2 max-md:text-[0.88rem]">
                {item.title}
              </h3>
              <p className="text-sm leading-[1.9] text-white/62 max-md:line-clamp-5 max-md:text-[11.5px] max-md:leading-[1.6]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
