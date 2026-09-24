'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { LOADER_DONE_EVENT } from '@/components/home/Loader';
import { HeroTerminal } from '@/components/home/HeroTerminal';
import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';

const titleLines = [
  { text: 'テクノロジーで、', accent: false },
  { text: '現場を前へ。', accent: true },
];

const stats = [
  { target: 3, unit: '領域', label: 'DXコンサル・開発・SES' },
  { target: 53, unit: '名', label: 'グループ人員' },
  { target: 2024, unit: '', label: '設立' },
];

const heroOverlay =
  'linear-gradient(to right, rgba(5,10,28,.93) 0%, rgba(7,18,48,.8) 55%, rgba(7,18,48,.62) 100%),' +
  'linear-gradient(to top, rgba(5,10,28,.85) 0%, transparent 50%)';

export function Hero() {
  const photoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (photoRef.current?.complete) setPhotoLoaded(true);
  }, []);

  // ローダーが閉じたらヒーローのテキストアニメーションを開始する
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStarted(true);
      return;
    }
    const start = () => setStarted(true);
    window.addEventListener(LOADER_DONE_EVENT, start);
    // ローダーが動かなかった場合の保険
    const fallback = window.setTimeout(start, 6000);
    return () => {
      window.removeEventListener(LOADER_DONE_EVENT, start);
      clearTimeout(fallback);
    };
  }, []);

  // 見出しを1文字ずつ span に分解して順番に浮かび上がらせる
  useEffect(() => {
    const title = titleRef.current;
    if (!started || !title) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lines = title.querySelectorAll<HTMLElement>('[data-line]');
    lines.forEach((line, lineIndex) => {
      const raw = line.textContent ?? '';
      line.textContent = '';
      [...raw].forEach((char, charIndex) => {
        const span = document.createElement('span');
        span.className = 'hero-char';
        span.textContent = char;
        const delay = lineIndex * 160 + charIndex * 38;
        span.style.transition = `opacity .55s ${delay}ms cubic-bezier(.22,1,.36,1), transform .7s ${delay}ms cubic-bezier(.34,1.56,.64,1)`;
        line.appendChild(span);
      });
    });

    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        title.querySelectorAll('.hero-char').forEach((span) => span.classList.add('is-in'));
      }),
    );
    return () => cancelAnimationFrame(raf);
  }, [started]);

  // スクロールに合わせた背景写真のパララックス
  useEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.15, 50);
        photo.style.transform = `scale(1) translateY(${shift}px)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden" id="home">
      {/* 背景写真 */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={photoRef}
          src={photos.heroHome}
          alt="ノートPCを囲んで話し合う社員"
          fetchPriority="high"
          onLoad={() => setPhotoLoaded(true)}
          className={cn(
            'photo-zoom absolute top-[-8%] left-0 h-[116%] w-full object-cover object-[center_40%]',
            photoLoaded && 'is-loaded',
          )}
        />
        <div className="absolute inset-0" style={{ background: heroOverlay }} />
      </div>

      {/* 方眼グリッドと光のにじみ */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="bg-tech-grid absolute inset-0" />
        <div className="absolute top-[10%] right-[5%] size-[520px] rounded-full bg-brand/30 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-5%] size-[420px] rounded-full bg-gold/15 blur-[120px]" />
      </div>

      {/* 下端のアクセントライン */}
      <div className="absolute bottom-0 left-0 z-[3] h-px w-full bg-gradient-to-r from-gold to-transparent opacity-40" />

      <div className="relative z-[2] mx-auto grid w-full max-w-[1160px] grid-cols-[1.15fr_1fr] items-center gap-12 px-6 pt-[120px] pb-[140px] max-lg:grid-cols-1 max-lg:pb-[180px]">
        <div>
          <div className="mb-7 inline-flex animate-fade-down items-center gap-[10px] rounded-full border border-white/20 bg-white/10 px-[18px] py-2 font-mono text-[12px] font-medium tracking-[0.06em] text-white/90 backdrop-blur-[8px] max-xs:text-[10px]">
            <span className="size-2 animate-dot-pulse rounded-full bg-gold shadow-[0_0_0_3px_rgba(34,211,238,0.3)]" />
            <span>DX × SYSTEM DEVELOPMENT × CONSTRUCTION TECH</span>
          </div>

          <h1
            ref={titleRef}
            className="mb-7 flex flex-col text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.2] font-black tracking-[-0.03em]"
          >
            {titleLines.map((line, i) => (
              <span
                key={line.text}
                data-line
                className={cn(
                  'block animate-fade-up',
                  line.accent ? 'text-gold' : 'text-white',
                )}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p
            className="mb-11 animate-fade-up text-[clamp(1rem,1.4vw,1.1rem)] leading-[1.9] text-white/78"
            style={{ animationDelay: '0.3s' }}
          >
            DXコンサルティングとシステム開発で、企業の業務変革を支援。
            <br />
            施工管理の現場を知るエンジニアとして、
            <br className="max-md:hidden" />
            建設業のDXに本気で取り組みます。
          </p>

          <div className="flex animate-fade-up flex-col gap-4 xs:flex-row xs:flex-wrap" style={{ animationDelay: '0.4s' }}>
            <Button href="#services" variant="gold" className="w-full justify-center xs:w-auto">
              <span>事業内容を見る</span>
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M5 10H15M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button href="/contact/" variant="ghost" className="w-full justify-center xs:w-auto">
              お問い合わせ
            </Button>
          </div>
        </div>

        <HeroTerminal className="animate-fade-up [animation-delay:0.5s] max-lg:hidden" />
      </div>

      {/* 数値バー */}
      <div className="relative z-[2] flex items-center justify-center border-t border-white/10 bg-white/6 backdrop-blur-[20px] max-md:flex-wrap">
        {stats.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && <div className="h-10 w-px shrink-0 bg-white/15 max-md:hidden" />}
            <div
              className="flex-1 animate-fade-up px-4 py-7 text-center max-md:flex-[1_1_40%]"
              style={{ animationDelay: `${0.5 + i * 0.09}s` }}
            >
              <div className="flex items-baseline justify-center gap-[2px] font-en text-[clamp(2rem,3vw,2.8rem)] leading-none font-black text-white">
                <Counter target={stat.target} />
                {stat.unit && <span className="text-[0.55em] font-bold text-gold">{stat.unit}</span>}
              </div>
              <div className="mt-[6px] text-xs tracking-[0.06em] text-white/55">{stat.label}</div>
            </div>
          </Fragment>
        ))}
      </div>

      {/* スクロールヒント */}
      <div className="absolute right-12 bottom-[100px] z-[2] flex flex-col items-center gap-3 max-md:hidden">
        <div className="h-16 w-px animate-scroll-line bg-gradient-to-b from-gold to-transparent" />
        <span className="font-en text-[9px] font-bold tracking-[0.2em] text-white/40 [writing-mode:vertical-rl]">
          SCROLL
        </span>
      </div>
    </section>
  );
}
