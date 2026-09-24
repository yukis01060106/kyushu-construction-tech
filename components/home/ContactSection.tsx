import { HomeContactForm } from '@/components/forms/HomeContactForm';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';
import { photos } from '@/lib/images';
import { site } from '@/lib/site';

const contactItems = [
  {
    label: 'メールアドレス',
    value: site.email,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 5l9 9 9-9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: 'お電話',
    value: site.tel,
    note: site.businessHours,
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
  {
    label: '所在地',
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

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 max-md:py-[72px]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.contactBg}
          alt="オフィス"
          loading="lazy"
          className="h-full w-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,30,0.96)_0%,rgba(29,78,216,0.88)_100%)]" />
      </div>

      <Container className="relative z-[1]">
        <Reveal className="mb-16 text-center">
          <LabelTag tone="gold" center>
            CONTACT
          </LabelTag>
          <SectionTitle white>お問い合わせ</SectionTitle>
          <SectionSub white>まずはお気軽にご相談ください</SectionSub>
        </Reveal>

        <div className="grid grid-cols-[320px_1fr] items-start gap-16 max-lg:grid-cols-1 max-lg:gap-12">
          <Reveal variant="left" className="flex flex-col gap-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-[18px]">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/8 text-white [&_svg]:size-5">
                  {item.icon}
                </div>
                <div>
                  <p className="mb-[5px] text-[11px] font-bold tracking-[0.1em] text-white/45 uppercase">
                    {item.label}
                  </p>
                  <p className="text-base font-bold text-white">{item.value}</p>
                  {item.note && <p className="mt-[2px] text-[13px] text-white/50">{item.note}</p>}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal variant="right">
            <HomeContactForm className="rounded-lg bg-white p-11 shadow-xl max-md:px-5 max-md:py-7" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
