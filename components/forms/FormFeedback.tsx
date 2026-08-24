import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import type { FormStatus } from '@/lib/useContactForm';

/** 送信ボタン（送信中はスピナー表示） */
export function SubmitButton({
  status,
  variant = 'gold',
  className,
  children,
}: {
  status: FormStatus;
  variant?: 'gold' | 'primary';
  className?: string;
  children: ReactNode;
}) {
  const sending = status === 'sending';
  return (
    <Button type="submit" variant={variant} full disabled={sending} className={className}>
      {sending ? (
        <>
          <span>送信中…</span>
          <svg viewBox="0 0 24 24" fill="none" className="animate-spin-fast">
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,.3)" strokeWidth="3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </>
      ) : (
        children
      )}
    </Button>
  );
}

/** 送信結果の表示 */
export function FormResult({
  status,
  errorMessage,
  successMessage,
}: {
  status: FormStatus;
  errorMessage: string;
  successMessage: string;
}) {
  if (status === 'success') {
    return (
      <div
        role="status"
        className="mt-4 flex items-center gap-3 rounded-sm border border-[#bbf7d0] bg-[#f0fdf4] px-5 py-4 text-sm font-semibold text-[#16a34a]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-[22px] shrink-0">
          <circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2" />
          <path d="M8 12l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {successMessage}
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div
        role="alert"
        className="mt-4 flex items-center gap-3 rounded-sm border border-[#fecaca] bg-[#fef2f2] px-5 py-4 text-sm font-semibold text-[#dc2626]"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-[22px] shrink-0">
          <circle cx="12" cy="12" r="10" stroke="#dc2626" strokeWidth="2" />
          <path d="M12 7v6M12 16.5v.5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {errorMessage}
      </div>
    );
  }

  return null;
}
