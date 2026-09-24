import type { Metadata } from 'next';
import { Faq } from '@/components/contact/Faq';
import { FullContactForm } from '@/components/forms/FullContactForm';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';
import { mapEmbedUrl, mapUrl, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '九州建設テクノロジーへのお問い合わせ・ご相談はこちら。フォーム・電話・メールにてお気軽にご連絡ください。',
};

const contactCards = [
  {
    label: 'お電話でのお問い合わせ',
    value: site.tel,
    note: `受付時間：${site.businessHours}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 10.9a16 16 0 006.18 6.18l1.27-.34a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 19.92v-3z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  // {
  //   label: 'メールでのお問い合わせ',
  //   value: site.email,
  //   note: '24時間受付（返信は翌営業日以降）',
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none">
  //       <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.8" />
  //       <path d="M3 5l9 9 9-9" stroke="currentColor" strokeWidth="1.8" />
  //     </svg>
  //   ),
  // },
  {
    label: '本社所在地',
    value: site.zip,
    note: site.address,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const accessItems = [
  {
    label: '所在地',
    value: (
      <>
        {site.zip}
        <br />
        {site.address}
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: '電話番号',
    value: (
      <a href={site.telHref} className="font-semibold text-brand">
        {site.tel}
      </a>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 3L4 7l14 14 4-4-14-14z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 21l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'メールアドレス',
    value: (
      <a href={`mailto:${site.email}`} className="font-semibold text-brand">
        {site.email}
      </a>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 5l9 9 9-9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: '営業時間',
    value: (
      <>
        {site.businessHours}
        <br />
        <span className="text-xs text-gray-400">{site.businessHoursNote}</span>
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'アクセス',
    value: (
      <>
        東京メトロ日比谷線「築地駅」より徒歩3分
        <br />
        都営大江戸線「築地市場駅」より徒歩5分
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 17l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 7l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="お問い合わせ"
        description="DX・システム開発・SESのご相談、施工管理DXのご相談、採用のご質問など、お気軽にご連絡ください。"
        image={photos.heroContact}
      />
      <Breadcrumb current="お問い合わせ" />

      {/* フォーム */}
      <PageSection>
        <Container>
          <div className="grid grid-cols-[1fr_1.2fr] items-start gap-20 max-lg:grid-cols-1 max-lg:gap-10">
            <Reveal variant="left" className="sticky top-[100px] max-lg:static">
              <LabelTag>GET IN TOUCH</LabelTag>
              <h2 className="mb-[6px] text-[clamp(1.6rem,2.5vw,2.2rem)] font-black tracking-[-0.03em] text-navy">
                まずはお気軽に
                <br />
                ご相談ください
              </h2>
              <Divider />
              <p className="mb-9 text-[15px] leading-[1.9] text-gray-600">
                「何から始めればいいかわからない」という段階でも大丈夫です。DX・システム開発・エンジニアのご依頼、採用についてなど、どんなことでもお問い合わせください。担当者が丁寧にご対応いたします。
              </p>

              <div className="flex flex-col gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-start gap-[18px] rounded-md border border-gray-200 bg-white px-6 py-[22px] transition-[border-color,box-shadow] duration-200 hover:border-brand hover:shadow-sm"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#dbeafe,#e0e7ff)] text-brand [&_svg]:size-5">
                      {card.icon}
                    </div>
                    <div>
                      <p className="mb-1 text-[11px] font-bold tracking-[0.08em] text-gray-400 uppercase">
                        {card.label}
                      </p>
                      <p className="text-base font-bold text-navy">{card.value}</p>
                      <p className="mt-[2px] text-xs text-gray-400">{card.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-md border-l-[3px] border-gold bg-gray-50 px-6 py-5">
                <p className="mb-[6px] text-[13px] font-bold text-navy">返信目安について</p>
                <p className="text-[13px] leading-[1.7] text-gray-500">
                  お問い合わせいただいた内容は、通常2営業日以内にご返信いたします。お急ぎの場合はお電話にてご連絡ください。
                </p>
              </div>
            </Reveal>

            <Reveal variant="right">
              <FullContactForm className="rounded-lg border border-gray-200 bg-white p-11 shadow-md max-md:px-5 max-md:py-7" />
            </Reveal>
          </div>
        </Container>
      </PageSection>

      {/* アクセス */}
      <section className="bg-gray-100 py-20">
        <Container>
          <Reveal className="mb-16">
            <LabelTag>ACCESS</LabelTag>
            <SectionTitle>アクセス</SectionTitle>
            <Divider />
          </Reveal>

          <div className="grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
            <Reveal variant="left">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                <iframe
                  src={mapEmbedUrl}
                  title={`${site.name} 本社の地図`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="size-full border-0"
                />
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-[6px] text-[13px] font-semibold text-brand transition-opacity duration-200 hover:opacity-70"
              >
                Google マップで開く
                <svg viewBox="0 0 24 24" fill="none" className="size-[14px]">
                  <path d="M14 4h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 4l-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </Reveal>

            <Reveal variant="right">
              <h3 className="mb-6 text-[1.3rem] font-bold text-navy">本社</h3>
              <dl className="flex flex-col gap-4">
                {accessItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-brand text-white [&_svg]:size-[18px]">
                      {item.icon}
                    </div>
                    <div>
                      <dt className="mb-[3px] text-xs font-bold tracking-[0.06em] text-gray-400 uppercase">
                        {item.label}
                      </dt>
                      <dd className="text-sm leading-[1.7] text-gray-700">{item.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <PageSection>
        <Container>
          <Reveal className="mb-16 text-center">
            <LabelTag center>FAQ</LabelTag>
            <SectionTitle>よくあるご質問</SectionTitle>
            <Divider center />
          </Reveal>
          <Reveal>
            <Faq />
          </Reveal>
        </Container>
      </PageSection>
    </>
  );
}
