'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { LOADER_DONE_EVENT } from '@/components/home/Loader';
import { Button } from '@/components/ui/Button';
import { Counter } from '@/components/ui/Counter';
import { cn } from '@/lib/cn';
import { photos } from '@/lib/images';

const titleLines = [
  { text: '技術で、九州の', accent: false },
  { text: '未来を建てる。', accent: true },
];

const stats = [
  { target: 7, unit: '県', label: '対応エリア' },
  { target: 4, unit: '分野', label: '施工管理分野' },
  { target: 4, unit: '管理', label: '品質・安全・工期・コスト' },
  { target: 2024, unit: '', label: '設立' },
];

const heroOverlay =
  'linear-gradient(to right, rgba(10,15,30,.88) 0%, rgba(10,15,30,.55) 60%, rgba(10,15,30,.3) 100%),' +
  'linear-gradient(to top, rgba(10,15,30,.8) 0%, transparent 50%)';

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
          alt="建設現場の空撮"
          fetchPriority="high"
          onLoad={() => setPhotoLoaded(true)}
          className={cn(
            'photo-zoom absolute top-[-8%] left-0 h-[116%] w-full object-cover object-[center_40%]',
            photoLoaded && 'is-loaded',
          )}
        />
        <div className="absolute inset-0" style={{ background: heroOverlay }} />
      </div>

      {/* 浮遊する幾何学図形 */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute top-[-80px] right-[-80px] size-[400px] animate-geo-float rounded-full border border-white/6 [animation-duration:18s]" />
        <div className="absolute top-[20%] right-[15%] size-[250px] animate-geo-float rounded-full border border-white/6 [animation-direction:reverse] [animation-duration:22s]" />
        <div className="absolute right-[8%] bottom-[15%] size-[160px] animate-geo-float rounded-full border border-white/6 opacity-50 [animation-duration:14s]" />
      </div>

      {/* 下端の金ライン */}
      <div className="absolute bottom-0 left-0 z-[3] h-px w-full bg-gradient-to-r from-gold to-transparent opacity-40" />

      <div className="relative z-[2] mx-auto w-full max-w-[1160px] px-6 pt-[120px] pb-[180px]">
        <div className="mb-7 inline-flex animate-fade-down items-center gap-[10px] rounded-full border border-white/20 bg-white/10 px-[18px] py-2 text-[13px] font-semibold tracking-[0.04em] text-white/90 backdrop-blur-[8px]">
          <span className="size-2 animate-dot-pulse rounded-full bg-gold shadow-[0_0_0_3px_rgba(245,158,11,0.3)]" />
          <span>建設 × DX × AI</span>
        </div>

        <h1
          ref={titleRef}
          className="mb-7 flex flex-col font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[1.25] font-bold"
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
          建築・土木・電気・管工事、あらゆる施工管理に対応。
          <br />
          DX・AIを活用した確かな技術力で、
          <br className="max-md:hidden" />
          百年先の街並みを見据えたものづくりを続けます。
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
