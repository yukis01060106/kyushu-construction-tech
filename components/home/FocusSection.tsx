import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const themes = [
  {
    num: '01',
    title: '書類・帳票のデジタル化',
    description: '紙とExcelに分散した施工計画書・安全書類・検査記録を、探せて共有できる形に。',
  },
  {
    num: '02',
    title: '写真・工程・日報の一元管理',
    description: '現場と事務所で同じ情報を見られるようにし、確認と転記の手間を減らします。',
  },
  {
    num: '03',
    title: 'データで現場を見える化',
    description: '蓄積した記録を活かし、進捗や課題を早く・正確に把握できる状態をつくります。',
  },
];

export function FocusSection() {
  return (
    <section id="focus" className="relative overflow-hidden py-28 max-md:py-[72px]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.focusBg}
          alt="建設現場の空撮"
          loading="lazy"
          className="h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,15,30,0.94)_35%,rgba(10,15,30,0.7)_100%)]" />
        <div className="bg-tech-grid absolute inset-0" />
      </div>

      <Container className="relative z-[1]">
        <div className="grid grid-cols-[1fr_1.1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-12">
          <Reveal variant="left">
            <LabelTag tone="gold">FOCUS</LabelTag>
            <SectionTitle white>
              施工管理DXへ、
              <br />
              尖っていく。
            </SectionTitle>
            <p className="mt-6 mb-[14px] text-[15px] leading-[1.95] text-white/75">
              建設業は、人手不足や時間外労働の上限規制（2024年4月〜）など、大きな転換点を迎えています。一方で、施工管理の現場には今も紙・Excel・電話に頼った業務が多く残っています。
            </p>
            <p className="mb-9 text-[15px] leading-[1.95] text-white/75">
              私たちは施工管理の現場で得た知見と、システム開発の技術をかけ合わせ、現場で本当に使われるDXを形にしていきます。
            </p>
            <Button href="/construction-dx/" variant="gold">
              <span>施工管理DXについて</span>
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M5 10H15M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </Reveal>

          <div className="flex flex-col gap-4">
            {themes.map((theme, i) => (
              <Reveal
                key={theme.num}
                variant="right"
                delay={i * 0.12}
                className="flex items-start gap-5 rounded-md border border-white/10 bg-white/6 px-7 py-6 backdrop-blur-[6px] transition-colors duration-300 hover:bg-white/10 max-md:px-5"
              >
                <span className="font-en text-[1.6rem] leading-none font-black text-gold">{theme.num}</span>
                <div>
                  <h3 className="mb-[6px] text-base font-bold text-white">{theme.title}</h3>
                  <p className="text-[13.5px] leading-[1.8] text-white/60">{theme.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
