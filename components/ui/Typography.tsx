import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** セクション上部の英字ラベル（ABOUT US / SERVICES など） */
export function LabelTag({
  tone = 'blue',
  center,
  className,
  children,
}: {
  tone?: 'blue' | 'gold';
  center?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        'mb-[14px] font-en text-[11px] font-bold tracking-[0.2em] uppercase',
        tone === 'gold' ? 'text-gold' : 'text-brand',
        center ? 'block' : 'inline-block',
        className,
      )}
    >
      {children}
    </p>
  );
}

/** セクション見出し（明朝体） */
export function SectionTitle({
  as: Tag = 'h2',
  white,
  className,
  children,
}: {
  as?: 'h1' | 'h2' | 'h3';
  white?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        'font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.3] font-bold',
        white ? 'text-white' : 'text-navy',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** 見出し下の補足文 */
export function SectionSub({
  white,
  className,
  children,
}: {
  white?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        'mt-[14px] text-[15px]',
        white ? 'text-white/65' : 'text-gray-500',
        className,
      )}
    >
      {children}
    </p>
  );
}

/** 見出し下の金色の区切り線 */
export function Divider({ center, className }: { center?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        'h-[3px] w-12 rounded-[2px] bg-gold',
        center ? 'mx-auto mt-5 mb-7' : 'mt-5 mb-7',
        className,
      )}
    />
  );
}
