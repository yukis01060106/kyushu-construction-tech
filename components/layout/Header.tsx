'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { navLinks, site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // 下層ページは常に白背景ヘッダー。トップはスクロールで切り替える。
  useEffect(() => {
    const onScroll = () => {
      setScrolled(!isHome || window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // モバイルメニューを開いている間は背面をスクロールさせない
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // ページ遷移したらメニューを閉じる
  useEffect(() => setOpen(false), [pathname]);

  const navLinkClass = (href: string) => {
    const active = pathname === href;
    return cn(
      'block rounded-sm px-[14px] py-2 text-sm font-medium transition-all duration-[250ms]',
      'max-md:w-full max-md:px-4 max-md:py-[13px] max-md:text-gray-700 max-md:hover:bg-gray-50 max-md:hover:text-brand',
      scrolled
        ? 'text-gray-700 hover:bg-gray-100 hover:text-brand'
        : 'text-white/88 hover:bg-white/12 hover:text-white',
      active && 'bg-[#dbeafe] font-bold text-brand max-md:bg-[#dbeafe]',
    );
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[1000] transition-[background,box-shadow] duration-[400ms] ease-brand',
        scrolled && 'bg-white/97 shadow-sm backdrop-blur-[16px]',
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1160px] items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-[10px] transition-transform duration-300 ease-brand hover:scale-[1.02]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="block h-[34px] w-auto"
            src={scrolled ? '/logo-mark.svg' : '/logo-mark-white.svg'}
            alt=""
            width={34}
            height={34}
          />
          <span
            className={cn(
              'font-serif text-[17px] leading-none font-bold tracking-[0.04em] whitespace-nowrap transition-colors duration-[400ms] max-[380px]:text-[15px]',
              scrolled ? 'text-navy-800' : 'text-white',
            )}
          >
            {site.shortName}
          </span>
        </Link>

        <nav
          className={cn(
            'max-md:fixed max-md:inset-x-0 max-md:top-[72px] max-md:z-[999] max-md:bg-white/98 max-md:shadow-lg max-md:backdrop-blur-[16px] max-md:transition-transform max-md:duration-[400ms] max-md:ease-brand',
            open ? 'max-md:translate-y-0' : 'max-md:-translate-y-[calc(100%+80px)]',
          )}
        >
          <ul className="flex items-center gap-1 max-md:flex-col max-md:items-stretch max-md:gap-1 max-md:px-6 max-md:pt-5 max-md:pb-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={navLinkClass(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                className="block rounded-sm bg-gold px-[14px] py-2 text-sm font-bold text-white transition-all duration-[250ms] hover:bg-gold-dark max-md:w-full max-md:px-4 max-md:py-[13px]"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="hidden cursor-pointer flex-col gap-[5px] border-none bg-transparent p-2 max-md:flex"
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                'block h-[2px] w-6 rounded-[2px] transition-all duration-300 ease-brand',
                scrolled ? 'bg-gray-700' : 'bg-white',
                open && i === 0 && 'translate-y-[7px] rotate-45',
                open && i === 1 && 'scale-x-0 opacity-0',
                open && i === 2 && '-translate-y-[7px] -rotate-45',
              )}
            />
          ))}
        </button>
      </div>

      {/* スクロール進捗バー */}
      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 z-10 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand to-gold"
      />
    </header>
  );
}
