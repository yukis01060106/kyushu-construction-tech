import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand, PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';

export const metadata: Metadata = {
  title: '採用情報',
  description:
    '九州建設テクノロジーの採用情報。システムエンジニア・DXコンサルタント・建設DXスペシャリストなどを募集中。資格取得支援・完全週休2日制など充実した環境。',
};

const salary = '経験・スキルを考慮のうえ決定';
const office = '本社（東京都中央区）またはプロジェクト先';
const holiday = '完全週休2日制・年間休日120日以上';

const jobs = [
  {
    badge: '中途採用',
    badgeTone: 'bg-[#dbeafe] text-[#1d4ed8]',
    title: 'システムエンジニア・プログラマー',
    subtitle: '（開発経験者）',
    description:
      '受託開発やお客様先のプロジェクトで、業務システム・Webアプリケーションの設計・開発・テストを担当していただきます。経験やご希望に合わせてプロジェクトをアサインします。',
    details: [
      { label: '給与', value: salary },
      { label: '勤務地', value: office },
      { label: '休日', value: holiday },
      { label: '対象', value: 'システム開発の実務経験がある方' },
    ],
  },
  {
    badge: '中途採用',
    badgeTone: 'bg-[#dbeafe] text-[#1d4ed8]',
    title: 'DXコンサルタント・PM',
    subtitle: '（コンサル・PM経験者）',
    description:
      'お客様の業務課題のヒアリング・整理から、DX計画の立案、システム導入プロジェクトの推進までを担っていただきます。',
    details: [
      { label: '給与', value: salary },
      { label: '勤務地', value: office },
      { label: '休日', value: holiday },
      { label: '対象', value: 'ITコンサル・PM・PMOいずれかの経験がある方' },
    ],
  },
  {
    badge: '経験者採用',
    badgeTone: 'bg-[#dcfce7] text-[#16a34a]',
    title: '建設DXスペシャリスト',
    subtitle: '（施工管理経験者・IT未経験可）',
    description:
      '施工管理の現場経験を活かし、建設会社様向けDXの企画や要件定義、現場への導入支援を担っていただきます。ITの知識は入社後に身につけられます。',
    details: [
      { label: '給与', value: salary },
      { label: '勤務地', value: office },
      { label: '休日', value: holiday },
      { label: '対象', value: '施工管理の実務経験がある方' },
    ],
  },
  {
    badge: '新卒採用',
    badgeTone: 'bg-[#fef9c3] text-[#a16207]',
    title: 'ITエンジニア・コンサルタント職',
    subtitle: '（2027年3月卒業見込み）',
    description:
      '入社後の研修でITの基礎を身につけたうえで、開発やDX支援のプロジェクトに参加していただきます。文系・理系は問いません。',
    details: [
      { label: '給与', value: salary },
      { label: '勤務地', value: office },
      { label: '休日', value: holiday },
      { label: '対象', value: '2027年3月卒業見込みの方（学部不問）' },
    ],
  },
];

const benefits = [
  {
    title: '資格取得支援',
    description: 'IT系資格・施工管理系資格の受験費用を補助。業務に役立つ資格の取得を後押しします。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8l4.5 9L38 18.5l-7 7L32.5 36 24 31.5 15.5 36l1.5-10.5-7-7 9.5-1.5z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '完全週休2日制',
    description: '土日・祝日休み。年間休日120日以上。ワークライフバランスを重視した働き方を実現しています。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 8v8M32 8v8M8 24h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '社会保険完備',
    description: '健康保険・厚生年金・雇用保険・労災保険完備。退職金制度・確定拠出年金制度もあります。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M35 18l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '残業月平均20h以下',
    description: '業務の効率化を自社でも実践。月平均20時間以下の健全な就業環境を実現しています。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '住宅手当',
    description: '自社物件・賃貸物件への住宅手当を支給。家賃補助により生活をしっかりサポートします。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 36h32M14 36V20l10-10 10 10v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="19" y="26" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: '研修制度充実',
    description: '新人研修・OJT・技術研修など、体系的な研修で着実なスキルアップを支援します。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8v32M12 20h24M16 14h16M14 26h20M16 32h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '家族手当',
    description: '配偶者・子どもへの家族手当を支給。家族構成に合わせたサポートで安定した生活基盤を支えます。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="18" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="30" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path d="M26 18c0 4.418 3.582 8 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: '健康診断・人間ドック',
    description: '年1回の定期健康診断に加え、35歳以上は人間ドックの受診費用を会社が補助します。',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8z" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const recruitFlow = [
  {
    num: '01',
    title: 'エントリー・書類選考',
    description:
      'お問い合わせフォームまたはお電話にてご応募ください。履歴書・職務経歴書を拝見し、書類選考を行います。選考結果は1週間以内にご連絡します。',
  },
  {
    num: '02',
    title: '一次面接（オンライン可）',
    description:
      '人事担当者との面接を行います。ZoomなどのWEB面接も対応可能です。これまでの経験・スキル・志望動機などをお聞きします（所要時間：60分程度）。',
  },
  {
    num: '03',
    title: '二次面接（役員面接）',
    description:
      '役員との面接を行います。より詳しい志望動機や将来のキャリアビジョンについてお聞きします（所要時間：60〜90分程度）。',
  },
  {
    num: '04',
    title: '内定・条件確認',
    description:
      '内定通知書をご送付します。給与・勤務地・入社日など勤務条件の詳細についてご確認いただきます。',
  },
  {
    num: '05',
    title: '入社・オリエンテーション',
    description:
      '入社後は丁寧なオリエンテーションと研修プログラムを実施。先輩社員のメンターがつき、安心して業務をスタートできます。',
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        label="RECRUIT"
        title="採用情報"
        description="ITの力で、企業と建設の現場を変えていく仲間を募集しています。"
        image={photos.heroRecruit}
      />
      <Breadcrumb current="採用情報" />

      {/* 採用メッセージ */}
      <PageSection>
        <Container>
          <Reveal className="grid grid-cols-2 items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos.recruitMessage}
                alt="PC作業をするエンジニア"
                loading="lazy"
                data-cursor-big
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <LabelTag>MESSAGE FROM MANAGEMENT</LabelTag>
              <SectionTitle className="mb-4">
                技術で、
                <br />
                現場を前へ。
              </SectionTitle>
              <Divider />
              <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
                私たちの仕事は、テクノロジーで企業の「働き方」を変えることです。業務の課題を見つけ、仕組みをつくり、現場で使われるところまで見届ける。その積み重ねが、お客様の成長に直結しています。
              </p>
              <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
                そして私たちは、建設業の施工管理DXという、まだ誰も答えを出しきれていない領域に挑んでいます。エンジニアとしての技術を磨きたい方も、施工管理の経験をITで活かしたい方も、ここで一緒に挑戦しませんか。
              </p>
              <p className="mb-[14px] text-[15px] leading-[1.95] font-bold text-navy">
                ぜひ、あなたのチカラをこの会社で発揮してください。
              </p>
              <p className="mt-4 text-sm text-gray-400">取締役副社長　中島 嘉寿</p>
            </div>
          </Reveal>
        </Container>
      </PageSection>

      {/* 募集職種 */}
      <PageSection tone="gray">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>JOB OPENINGS</LabelTag>
            <SectionTitle>募集職種</SectionTitle>
            <Divider />
          </Reveal>

          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            {jobs.map((job, i) => (
              <Reveal
                key={job.title}
                delay={i * 0.1}
                tilt
                className="rounded-lg border-2 border-gray-200 bg-white px-8 py-9 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
              >
                <span className={cn('mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.05em]', job.badgeTone)}>
                  {job.badge}
                </span>
                <h3 className="mb-[14px] text-[1.2rem] font-bold text-navy">
                  {job.title}
                  <br />
                  <small className="text-[0.75em] font-medium text-gray-500">{job.subtitle}</small>
                </h3>
                <p className="mb-5 text-sm leading-[1.85] text-gray-600">{job.description}</p>
                <dl className="flex flex-col gap-[10px] border-t border-gray-100 pt-[18px]">
                  {job.details.map((detail) => (
                    <div key={detail.label} className="grid grid-cols-[72px_1fr] gap-3 text-[13px]">
                      <dt className="font-bold text-gray-500">{detail.label}</dt>
                      <dd className="text-gray-700">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* 福利厚生 */}
      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>WELFARE</LabelTag>
            <SectionTitle>福利厚生</SectionTitle>
            <Divider />
            <SectionSub className="mt-0">社員が長く安心して働けるよう、充実した環境を整えています</SectionSub>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Reveal
                key={benefit.title}
                delay={(i % 4) * 0.1}
                tilt
                className="rounded-md bg-white px-6 py-8 text-center shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#dbeafe,#e0e7ff)] text-brand [&_svg]:size-7">
                  {benefit.icon}
                </div>
                <h4 className="mb-2 text-sm font-bold text-navy">{benefit.title}</h4>
                <p className="text-[13px] leading-[1.7] text-gray-500">{benefit.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </PageSection>

      {/* 職場環境 */}
      <PageSection tone="gray">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>WORK ENVIRONMENT</LabelTag>
            <SectionTitle>職場環境</SectionTitle>
            <Divider />
          </Reveal>

          <Reveal className="grid grid-cols-3 gap-4 max-md:grid-cols-2">
            {photos.workplace.map((src, i) => (
              <div
                key={src + i}
                className={cn(
                  'overflow-hidden rounded-lg shadow-md',
                  i === 0 ? 'row-span-2 max-md:row-span-1 max-md:aspect-video' : 'aspect-video',
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`職場環境${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </Reveal>
        </Container>
      </PageSection>

      {/* 採用の流れ */}
      <PageSection>
        <Container>
          <Reveal className="mb-16">
            <LabelTag>RECRUIT FLOW</LabelTag>
            <SectionTitle>採用の流れ</SectionTitle>
            <Divider />
          </Reveal>

          <Reveal className="relative mx-auto max-w-[640px]">
            <div className="absolute top-16 bottom-0 left-8 z-0 w-[2px] bg-gray-200" />
            {recruitFlow.map((step, i) => (
              <div key={step.num} className="relative grid grid-cols-[64px_1fr] gap-6 pb-9 last:pb-0">
                <div
                  className={cn(
                    'relative z-[1] flex size-16 shrink-0 items-center justify-center rounded-full font-en text-lg font-black text-white shadow-[0_4px_12px_rgba(29,78,216,0.3)]',
                    i === recruitFlow.length - 1 ? 'bg-accent-grad' : 'bg-brand',
                  )}
                >
                  {step.num}
                </div>
                <div>
                  <h4 className="mb-[6px] pt-4 text-[15px] font-bold text-navy">{step.title}</h4>
                  <p className="text-[13px] leading-[1.75] text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </PageSection>

      <CtaBand
        title="まずはお気軽にご応募ください"
        description="「話だけでも聞いてみたい」という方も大歓迎です。お気軽にお問い合わせください。"
        primary={{ href: '/contact/', label: '応募・お問い合わせ →' }}
        secondary={{ href: '/about/', label: '会社概要を見る' }}
      />
    </>
  );
}
