import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { HomeSection } from '@/components/ui/Section';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const services = [
  {
    num: '01',
    title: 'DXコンサルティング',
    image: photos.srvConsulting,
    description:
      '業務の流れを整理し、どこをデジタル化すべきかを一緒に見極めます。ツール選定から導入、社内への定着まで伴走します。',
    items: ['業務フローの可視化・課題整理', 'SaaS・ツールの選定と導入支援', 'DX推進体制づくり・定着支援'],
  },
  {
    num: '02',
    title: 'システム開発',
    image: photos.srvDevelopment,
    description:
      '業務システムやWebアプリケーションを、要件定義から設計・開発・運用保守まで一貫して手がけます。',
    items: ['業務システム・Webアプリ開発', '既存システムの改修・保守', '要件定義・設計からの伴走'],
  },
  {
    num: '03',
    title: 'SES・エンジニア支援',
    image: photos.srvSes,
    description:
      'お客様のプロジェクトにエンジニアが参画し、開発・インフラ・プロジェクト推進を支えます。必要なスキルを、必要な期間だけ。',
    items: ['アプリケーション開発', 'インフラ構築・運用', 'PMO・プロジェクト推進支援'],
  },
];

export function ServicesSection() {
  return (
    <HomeSection id="services" tone="gray">
      <Container>
        <Reveal className="mb-16 text-center">
          <LabelTag center>SERVICES</LabelTag>
          <SectionTitle>事業内容</SectionTitle>
          <SectionSub>DXの企画から開発・運用まで、3つのサービスで支えます</SectionSub>
        </Reveal>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:mx-auto max-lg:max-w-[560px] max-md:gap-[14px]">
          {services.map((service, i) => (
            <Reveal
              key={service.num}
              delay={i * 0.1}
              tilt
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-[transform,box-shadow] duration-[400ms] ease-brand hover:-translate-y-[10px] hover:shadow-xl after:absolute after:inset-x-0 after:top-0 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-t-[3px] after:bg-gradient-to-r after:from-brand after:to-gold after:transition-transform after:duration-[400ms] after:ease-brand after:content-[''] hover:after:scale-x-100"
            >
              <div className="relative aspect-video shrink-0 overflow-hidden max-md:aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-[1.08]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(10,15,30,0.55))]" />
              </div>
              <div className="flex flex-1 flex-col p-7 pb-8 max-md:p-[14px] max-md:pb-4">
                <span className="mb-[10px] block font-en text-[11px] font-extrabold tracking-[0.15em] text-brand-light max-md:mb-1 max-md:text-[10px]">
                  {service.num}
                </span>
                <h3 className="mb-3 text-[1.1rem] leading-[1.4] font-bold text-navy max-md:mb-[6px] max-md:text-[0.9rem]">
                  {service.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-[1.85] text-gray-600 max-md:mb-0 max-md:line-clamp-3 max-md:text-xs max-md:leading-[1.6]">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-[7px] border-t border-gray-100 pt-4 max-md:hidden">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-[18px] text-[13px] text-gray-600 before:absolute before:top-2 before:left-0 before:size-[7px] before:rounded-full before:bg-brand before:opacity-55 before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
