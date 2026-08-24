import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { HomeSection } from '@/components/ui/Section';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

const services = [
  {
    num: '01',
    title: '建築施工管理',
    image: photos.srvArchitecture,
    description:
      '住宅・商業施設・オフィスビルなど、あらゆる建築工事の施工管理を担当。品質・安全・工程・原価を総合的に管理します。',
    items: ['住宅・マンション建設', '商業施設・オフィスビル', '公共建築物・改修工事'],
  },
  {
    num: '02',
    title: '土木施工管理',
    image: photos.srvCivil,
    description:
      '道路・橋梁・河川・港湾など土木工事全般の施工管理。安全で長寿命な社会基盤を構築します。',
    items: ['道路・橋梁工事', '河川・ダム・港湾工事', '造成・基礎・地盤改良'],
  },
  {
    num: '03',
    title: '電気施工管理',
    image: photos.srvElectric,
    description:
      '電力設備・通信設備・防災設備など電気工事の施工管理。省エネ・スマートビルディング対応も万全です。',
    items: ['受変電・照明設備工事', '通信・LAN設備工事', '防災・セキュリティ設備'],
  },
  {
    num: '04',
    title: '管工事施工管理',
    image: photos.srvPipe,
    description:
      '給排水・空調・ガス配管など管工事の施工管理。高い精度と品質で設備工事を管理・監督します。',
    items: ['給排水衛生設備工事', '空調・換気設備工事', '消防・スプリンクラー設備'],
  },
  {
    num: '05',
    title: '品質管理・検査',
    image: photos.srvQuality,
    description:
      '施工品質の確保に向けた徹底した品質管理。各工程での検査・試験を実施し、品質基準を確実に満たします。',
    items: ['工程内・竣工品質検査', '材料・機器品質確認', '是正措置・改善指導'],
  },
  {
    num: '06',
    title: '安全管理・コンサルティング',
    image: photos.srvSafety,
    description:
      '「ゼロ災害」を目指した安全管理体制の構築・運用。リスクアセスメントから安全教育まで包括支援。',
    items: ['安全計画書作成・運用', 'リスクアセスメント', '安全教育・KY活動支援'],
  },
];

export function ServicesSection() {
  return (
    <HomeSection id="services" tone="gray">
      <Container>
        <Reveal className="mb-16 text-center">
          <LabelTag center>SERVICES</LabelTag>
          <SectionTitle>事業内容</SectionTitle>
          <SectionSub>施工管理全般にわたる幅広いサービスを提供しています</SectionSub>
        </Reveal>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:gap-[14px]">
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
