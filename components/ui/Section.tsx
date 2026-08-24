import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

const tones = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-navy-800',
  dark: 'bg-navy',
} as const;

/** トップページの基本セクション（上下104px / SPは72px） */
export function HomeSection({
  id,
  tone = 'white',
  className,
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn('py-[104px] max-md:py-[72px]', tones[tone], className)}>
      {children}
    </section>
  );
}

/** 下層ページの基本セクション（上下96px / SPは64px） */
export function PageSection({
  tone = 'white',
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn('py-24 max-md:py-16', tones[tone], className)}>{children}</section>
  );
}

/** ページ下部の共通CTA帯 */
export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <div className="bg-[linear-gradient(135deg,#0a0f1e_0%,#1e3a8a_100%)] py-20 text-center">
      <Container>
        <h2 className="mb-4 text-[clamp(1.8rem,3vw,2.6rem)] font-black tracking-[-0.03em] text-white">
          {title}
        </h2>
        <p className="mb-9 text-[15px] text-white/65">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primary.href} variant="gold">
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="ghost">
            {secondary.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}
