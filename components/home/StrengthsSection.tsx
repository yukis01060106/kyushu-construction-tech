import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const strengths = [
  {
    title: '高度有資格者による専門チーム',
    description:
      '1級施工管理技士をはじめ各専門分野の有資格者が在籍。豊富な現場経験と専門知識で複雑な工事案件にも対応。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'DX・AIを活用したスマート管理',
    description:
      'ドローン測量・BIM/CIM・AIによる画像解析や施工管理アプリなど、最新のDX・AI技術を積極活用。データに基づく精度の高い管理とリアルタイム情報共有を実現。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '九州全域をカバーする対応力',
    description:
      '福岡を拠点に九州7県に対応可能。地元密着の強みを活かしつつ広域案件にも迅速対応。緊急時のサポート体制も万全です。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '経験豊富な技術者による確かな実行力',
    description:
      '会社としては新しいスタートですが、集まる技術者は皆、現場最前線で培った知識と経験を持つプロフェッショナル。確かな品質と対応力をお約束します。',
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
          alt="建設現場"
          loading="lazy"
          data-cursor-big
          className="h-full w-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,30,0.93)_0%,rgba(29,78,216,0.82)_100%)]" />
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
