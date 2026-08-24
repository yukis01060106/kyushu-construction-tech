import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { footerNav, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-navy-800">
      <div className="h-1 bg-gradient-to-r from-brand to-gold" />

      <Container className="grid grid-cols-[280px_1fr] gap-20 border-b border-white/[0.07] pt-16 pb-14 max-lg:grid-cols-1 max-lg:gap-10">
        <div>
          <Link
            href="/"
            className="mb-5 flex items-center gap-[10px] transition-transform duration-300 ease-brand hover:scale-[1.02]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="block h-8 w-auto" src="/logo-mark-white.svg" alt="" width={32} height={32} />
            <span className="font-serif text-base leading-none font-bold tracking-[0.04em] whitespace-nowrap text-white">
              {site.shortName}
            </span>
          </Link>
          <p className="text-sm leading-[1.8] text-white/45">
            九州の建設現場を、
            <br />
            テクノロジーで革新する。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 font-en text-[11px] font-bold tracking-[0.15em] text-white/35 uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-[10px]">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="text-sm text-white/60 transition-colors duration-[250ms] hover:text-white">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-white/60 transition-colors duration-[250ms] hover:text-white">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="py-6">
        <Container>
          <p className="text-center text-[13px] text-white/25">{site.copyright}</p>
        </Container>
      </div>
    </footer>
  );
}
