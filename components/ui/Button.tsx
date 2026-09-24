import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'gold' | 'ghost' | 'primary';

const base =
  'relative overflow-hidden inline-flex items-center gap-2 rounded-md border-2 border-transparent px-8 py-[15px] font-jp text-[15px] font-bold tracking-[0.02em] transition-all duration-300 ease-brand cursor-pointer [&_svg]:size-[18px] [&_svg]:shrink-0';

const variants: Record<Variant, string> = {
  gold: 'bg-accent-grad text-white border-transparent hover:brightness-110 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(34,211,238,0.45)]',
  ghost:
    'bg-transparent text-white border-white/45 hover:bg-white/12 hover:border-white hover:-translate-y-[3px]',
  primary:
    'bg-brand text-white border-brand hover:bg-brand-dark hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(29,78,216,0.4)]',
};

type CommonProps = {
  variant?: Variant;
  /** 幅いっぱいに広げる */
  full?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'className' | 'children'
  >;

type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'children'
  >;

/**
 * mock の .btn / .btn-gold / .btn-ghost / .btn-primary に相当。
 * data-ripple / data-magnetic は SiteEffects がクリック波紋・磁石ホバーに使う。
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'gold', full, className, children } = props;
  const classes = cn(base, variants[variant], full && 'w-full justify-center', className);

  if (props.href !== undefined) {
    const { variant: _v, full: _f, className: _c, children: _ch, href, ...rest } = props;
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link href={href} className={classes} data-ripple data-magnetic {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} data-ripple data-magnetic {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, full: _f, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} data-ripple data-magnetic {...rest}>
      {children}
    </button>
  );
}
