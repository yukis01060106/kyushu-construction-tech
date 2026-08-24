'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * mock の script.js が担っていたページ横断の演出をまとめたもの。
 * - カスタムカーソル（PCのみ）
 * - ページトップへ戻るボタン / フローティングCTA
 * - ボタンのクリック波紋・磁石ホバー
 * - カードのチルト
 * - ページ内アンカーのスムーススクロール（ヘッダー分オフセット）
 */
export function SiteEffects() {
  const pathname = usePathname();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  const [showCta, setShowCta] = useState(false);

  // ---- スクロール量に応じたボタン表示 ----
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      setShowCta(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---- カスタムカーソル ----
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || window.innerWidth < 768) return;

    document.body.classList.add('has-cursor');
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const loop = () => {
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      rx = lerp(rx, mx, 0.14);
      ry = lerp(ry, my, 0.14);
      ring.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const hoverSelector = 'a,button,[data-tilt],[data-ripple]';
    const bigSelector = '[data-cursor-big]';
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(hoverSelector)) {
        dot.classList.add('is-active');
        ring.classList.add('is-active');
      }
      if (target?.closest(bigSelector)) ring.classList.add('is-big');
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(hoverSelector)) {
        dot.classList.remove('is-active');
        ring.classList.remove('is-active');
      }
      if (target?.closest(bigSelector)) ring.classList.remove('is-big');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove('has-cursor');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  // ---- クリック波紋 & アンカースクロール（イベント委譲） ----
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const rippleHost = target.closest<HTMLElement>('[data-ripple]');
      if (rippleHost) {
        const rect = rippleHost.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2.2;
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        rippleHost.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor) {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 72,
          behavior: 'smooth',
        });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // ---- カードのチルト / ボタンの磁石ホバー（ページごとに貼り直す） ----
  useEffect(() => {
    if (window.innerWidth < 768) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
      let raf = 0;
      const onMove = (e: MouseEvent) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transition = 'transform .08s ease, box-shadow .08s ease';
          card.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateY(-8px) scale(1.025)`;
          card.style.boxShadow = `${-x * 12}px ${-y * 12}px 40px rgba(29,78,216,.18), 0 20px 40px rgba(0,0,0,.15)`;
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(raf);
        card.style.transition = 'transform .55s cubic-bezier(.23,1,.32,1), box-shadow .55s ease';
        card.style.transform = '';
        card.style.boxShadow = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.38;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.38;
        btn.style.transition = 'transform .1s ease';
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      };
      const onLeave = () => {
        btn.style.transition = 'transform .55s cubic-bezier(.23,1,.32,1)';
        btn.style.transform = '';
      };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />

      {pathname === '/' && (
        <div
          className={cn(
            'fixed right-8 bottom-24 z-[200] transition-all duration-[400ms] ease-brand max-md:right-4 max-md:bottom-20',
            showCta ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-5 opacity-0',
          )}
        >
          <Link
            href="/contact/"
            className="flex size-16 flex-col items-center justify-center rounded-full bg-gold text-center text-[10px] leading-[1.3] font-bold tracking-[0.04em] text-white shadow-[0_8px_24px_rgba(245,158,11,0.45)] transition-all duration-300 ease-brand hover:scale-[1.12] hover:-translate-y-[3px] hover:shadow-[0_14px_32px_rgba(245,158,11,0.55)]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="mb-[2px] size-5">
              <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M3 5l9 9 9-9" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            お問い合わせ
          </Link>
        </div>
      )}

      <button
        type="button"
        aria-label="ページトップへ"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          'fixed right-8 bottom-8 z-[100] flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-lg transition-all duration-[350ms] ease-brand hover:bg-brand-dark max-md:right-5 max-md:bottom-5',
          showTop
            ? 'translate-y-0 scale-100 opacity-100 hover:-translate-y-1'
            : 'pointer-events-none translate-y-5 scale-90 opacity-0',
        )}
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
