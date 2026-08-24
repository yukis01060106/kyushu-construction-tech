'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type RevealVariant = 'up' | 'left' | 'right';

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
};

/**
 * スクロールで画面に入ったら .is-visible を付けてフェードインさせるラッパー。
 * 実際のトランジションは globals.css の .reveal / .reveal-left / .reveal-right が担当。
 */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  tilt,
  className,
  children,
}: {
  as?: ElementType;
  variant?: RevealVariant;
  /** 遅延（秒） */
  delay?: number;
  /** マウス追従で傾ける（SiteEffects が処理） */
  tilt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // モーション低減設定の場合はアニメーションせずそのまま表示
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(variantClass[variant], visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      data-tilt={tilt || undefined}
    >
      {children}
    </Tag>
  );
}
