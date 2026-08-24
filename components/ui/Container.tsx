import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** max-width 1160px / 左右24px の共通コンテナ */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn('mx-auto w-full max-w-[1160px] px-6', className)}>{children}</div>;
}
