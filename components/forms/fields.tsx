import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { cn } from '@/lib/cn';

/** 入力欄の共通スタイル。:user-invalid で入力後だけ赤くする。 */
const control =
  'w-full rounded-sm border-2 border-gray-200 bg-gray-50 px-4 py-[13px] font-jp text-[15px] text-gray-900 outline-none appearance-none transition-[border-color,background] duration-[250ms] focus:border-brand focus:bg-white user-invalid:border-[#ef4444] user-invalid:shadow-[0_0_0_3px_rgba(239,68,68,0.12)]';

/** 必須バッジ */
export function RequiredBadge() {
  return (
    <span className="ml-[6px] inline-block rounded-[3px] bg-brand px-[7px] py-px align-middle text-[10px] font-bold text-white">
      必須
    </span>
  );
}

export function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('mb-5', className)}>
      <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-bold text-gray-700">
        {label}
        {required && <RequiredBadge />}
      </label>
      {children}
    </div>
  );
}

/** 2カラムに並ぶ入力行（SPでは1カラム） */
export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">{children}</div>;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(control, className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(control, 'form-select cursor-pointer pr-[42px]', className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(control, 'min-h-[130px] resize-y', className)} {...props} />;
}

/** スパム対策のハニーポット（人間には見えない入力欄） */
export function Honeypot() {
  return (
    <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden>
      <label htmlFor="website">Website</label>
      <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
