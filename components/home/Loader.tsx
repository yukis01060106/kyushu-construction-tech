'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/** ローダーが閉じたことを Hero に伝えるイベント名 */
export const LOADER_DONE_EVENT = 'loader:done';

/** トップページの読み込み演出（0→100%のプログレスバー） */
export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const finish = () => {
      setDone(true);
      document.body.style.overflow = '';
      window.dispatchEvent(new Event(LOADER_DONE_EVENT));
      timers.current.push(window.setTimeout(() => setHidden(true), 700));
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      window.dispatchEvent(new Event(LOADER_DONE_EVENT));
      return;
    }

    document.body.style.overflow = 'hidden';
    let value = 0;

    const tick = () => {
      value = Math.min(value + Math.random() * 5 + (value < 60 ? 3 : 1), 100);
      setProgress(value);
      if (value < 100) {
        timers.current.push(window.setTimeout(tick, 28));
        return;
      }
      timers.current.push(window.setTimeout(finish, 350));
    };

    timers.current.push(window.setTimeout(tick, 80));

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-navy transition-[opacity,transform] duration-[600ms] ease-brand',
        done && 'pointer-events-none -translate-y-full opacity-0',
      )}
    >
      <div className="flex flex-col items-center gap-[18px]">
        <div className="flex size-16 animate-loader-pulse items-center justify-center rounded-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark-white.svg" alt="" width={48} height={48} className="size-12" />
        </div>
        <p className="text-[15px] font-bold tracking-[0.12em] text-white/70">九州建設テクノロジー</p>
        <div className="h-[3px] w-[220px] overflow-hidden rounded-[2px] bg-white/12">
          <div
            className="h-full rounded-[2px] bg-gradient-to-r from-brand to-gold transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-en text-[2.4rem] leading-none font-black text-white">
          {Math.floor(progress)}
          <span className="text-[1.2rem] text-gold">%</span>
        </div>
      </div>
    </div>
  );
}
