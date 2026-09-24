import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { HomeSection } from '@/components/ui/Section';
import { LabelTag } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';

const points = [
  {
    num: '01',
    title: '資格取得・スキルアップ支援',
    description: 'IT系資格・施工管理系資格の受験費用を補助。技術研修で着実な成長を支えます。',
  },
  {
    num: '02',
    title: '完全週休2日・年休120日以上',
    description: '残業月平均20時間以下。ワークライフバランスを重視した働き方を実現。',
  },
  {
    num: '03',
    title: '充実した福利厚生',
    description: '社会保険完備・退職金制度・住宅手当・家族手当など手厚くサポート。',
  },
];

const jobs = [
  { badge: '中途', tone: 'bg-[#dbeafe] text-[#1d4ed8]', label: 'システムエンジニア・プログラマー' },
  { badge: '中途', tone: 'bg-[#dbeafe] text-[#1d4ed8]', label: 'DXコンサルタント・PM' },
  { badge: '経験者', tone: 'bg-[#dcfce7] text-[#16a34a]', label: '建設DXスペシャリスト（施工管理経験者）' },
  { badge: '新卒', tone: 'bg-[#fef9c3] text-[#a16207]', label: 'ITエンジニア・コンサルタント職' },
];

export function RecruitSection() {
  return (
    <HomeSection id="recruit" tone="gray">
      <Container>
        <div className="grid grid-cols-2 items-center gap-20 max-lg:grid-cols-1 max-lg:gap-12">
          <Reveal
            variant="left"
            className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-xl max-lg:aspect-[16/10] max-lg:max-w-[480px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos.recruitMain}
              alt="笑顔でPC作業するエンジニア"
              loading="lazy"
              data-cursor-big
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-8 left-8 rounded-md bg-white/95 px-6 py-5 shadow-lg backdrop-blur-[12px]">
              <strong className="mb-1 block text-xs font-bold tracking-[0.06em] text-gray-500">年間休日</strong>
              <span className="font-en text-[2.8rem] leading-none font-black text-brand">
                120
                <small className="text-base font-bold text-brand">日以上</small>
              </span>
            </div>
          </Reveal>

          <Reveal variant="right" className="pb-8">
            <LabelTag>RECRUIT</LabelTag>
            <h2 className="mt-[6px] mb-5 text-[clamp(1.8rem,2.8vw,2.5rem)] font-black tracking-[-0.03em] text-navy">
              ITの力で、
              <br />
              建設の現場を変えよう
            </h2>
            <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
              エンジニア・コンサルタントとして、さまざまな業界のDXに携われる環境です。施工管理の経験を活かしてIT領域へ挑戦したい方も歓迎します。
            </p>

            <div className="my-7 flex flex-col gap-5">
              {points.map((point) => (
                <div key={point.num} className="flex items-start gap-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-brand font-en text-[13px] font-extrabold text-white">
                    {point.num}
                  </div>
                  <div>
                    <strong className="mb-1 block text-sm font-bold text-navy">{point.title}</strong>
                    <p className="text-[13px] leading-[1.7] text-gray-500">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-7 flex flex-col gap-[10px]">
              {jobs.map((job) => (
                <div
                  key={job.label}
                  className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700"
                >
                  <span className={cn('shrink-0 rounded-full px-[10px] py-[3px] text-[11px] font-bold tracking-[0.04em]', job.tone)}>
                    {job.badge}
                  </span>
                  {job.label}
                </div>
              ))}
            </div>

            <Button href="/contact/" variant="primary">
              採用について問い合わせる →
            </Button>
          </Reveal>
        </div>
      </Container>
    </HomeSection>
  );
}
