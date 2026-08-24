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
    '九州建設テクノロジーの採用情報。施工管理技術者・現場監督など積極採用中。資格取得支援・完全週休2日制など充実した環境。',
};

const jobs = [
  {
    badge: '正社員',
    badgeTone: 'bg-[#dcfce7] text-[#16a34a]',
    title: '施工管理技術者',
    subtitle: '（経験者・未経験者歓迎）',
    description:
      '建築・土木・電気・管工事のいずれかの施工管理業務を担当していただきます。未経験の方は先輩社員がマンツーマンでフォロー。資格取得を目指しながら現場経験を積んでいただけます。',
    details: [
      { label: '給与', value: '月給 22万円〜40万円（経験・資格による）' },
      { label: '勤務地', value: '九州各地の建設現場（転居不要）' },
      { label: '休日', value: '完全週休2日制・年間休日120日以上' },
      { label: '対象', value: '未経験者歓迎・学歴不問' },
    ],
  },
  {
    badge: '中途採用',
    badgeTone: 'bg-[#dbeafe] text-[#1d4ed8]',
    title: '現場監督',
    subtitle: '（施工管理経験3年以上）',
    description:
      '施工管理経験者を積極的に募集しています。即戦力として活躍していただきながら、ICT・BIM活用など最新技術も習得できる環境です。1級施工管理技士取得者は優遇します。',
    details: [
      { label: '給与', value: '月給 30万円〜55万円（経験・資格による）' },
      { label: '勤務地', value: '九州各地の建設現場' },
      { label: '休日', value: '完全週休2日制・年間休日120日以上' },
      { label: '対象', value: '施工管理経験3年以上' },
    ],
  },
  {
    badge: '新卒採用',
    badgeTone: 'bg-[#fef9c3] text-[#a16207]',
    title: '施工管理職',
    subtitle: '（2027年3月卒業見込み）',
    description:
      '建築・土木・電気系の学科を卒業見込みの方を対象に採用しています。入社後は充実した新人研修と丁寧なOJTで即戦力として育成。早期の資格取得もサポートします。',
    details: [
      { label: '給与', value: '月給 22万円〜（別途各種手当あり）' },
      { label: '勤務地', value: '九州各地の建設現場' },
      { label: '休日', value: '完全週休2日制・年間休日120日以上' },
      { label: '対象', value: '建築・土木・電気系学科卒業見込み' },
    ],
  },
];

const benefits = [
  {
    title: '資格取得支援',
    description: '1級施工管理技士などの受験費用・講習費用を全額補助。取得後の報奨金制度もあります。',
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
    description: '業務効率化とICT活用で残業削減。月平均20時間以下の健全な就業環境を実現しています。',
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
    description: '新人研修・OJT・ICT研修・安全教育など体系的な研修で着実なスキルアップを支援します。',
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
        description="九州の建設業界を共に革新する仲間を募集しています。あなたの技術と熱意をここで活かしてください。"
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
                alt="現場"
                loading="lazy"
                data-cursor-big
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <LabelTag>MESSAGE FROM MANAGEMENT</LabelTag>
              <SectionTitle className="mb-4">
                現場に誇りを、
                <br />
                未来に情熱を。
              </SectionTitle>
              <Divider />
              <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
                私たちが日々行っている施工管理の仕事は、地域の人々の暮らしを支える社会インフラを守ることです。一つひとつの現場で安全・品質・工期を守り抜くことが、街をつくることに直結しています。
              </p>
              <p className="mb-[14px] text-[15px] leading-[1.95] text-gray-600">
                九州建設テクノロジーでは、技術者一人ひとりが「プロフェッショナル」として成長できる環境を整えています。資格取得支援・ICT教育・メンター制度など、長期的なキャリアを見据えたサポートを充実させています。
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

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
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
                    i === recruitFlow.length - 1 ? 'bg-gold' : 'bg-brand',
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
