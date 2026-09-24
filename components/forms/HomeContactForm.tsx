'use client';

import { Field, FieldRow, Honeypot, Input, Select, Textarea } from '@/components/forms/fields';
import { FormResult, SubmitButton } from '@/components/forms/FormFeedback';
import { useContactForm } from '@/lib/useContactForm';

/** トップページの簡易お問い合わせフォーム */
export function HomeContactForm({ className }: { className?: string }) {
  const { status, errorMessage, handleSubmit } = useContactForm();

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Honeypot />
      <input type="hidden" name="form_name" value="トップページ お問い合わせ" />

      <FieldRow>
        <Field label="お名前" htmlFor="cf-name" required>
          <Input type="text" id="cf-name" name="name" placeholder="山田 太郎" required autoComplete="name" />
        </Field>
        <Field label="会社名" htmlFor="cf-company">
          <Input type="text" id="cf-company" name="company" placeholder="株式会社〇〇" autoComplete="organization" />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="メールアドレス" htmlFor="cf-email" required>
          <Input type="email" id="cf-email" name="email" placeholder="example@mail.com" required autoComplete="email" />
        </Field>
        <Field label="電話番号" htmlFor="cf-tel">
          <Input type="tel" id="cf-tel" name="tel" placeholder="03-6804-2140" autoComplete="tel" />
        </Field>
      </FieldRow>

      <Field label="お問い合わせ種別" htmlFor="cf-subject" required>
        <Select id="cf-subject" name="subject" required defaultValue="">
          <option value="">選択してください</option>
          <option>DXコンサルティングについて</option>
          <option>システム開発のご相談</option>
          <option>SES・エンジニアのご依頼</option>
          <option>施工管理DXについて</option>
          <option>採用について</option>
          <option>その他</option>
        </Select>
      </Field>

      <Field label="お問い合わせ内容" htmlFor="cf-message" required>
        <Textarea id="cf-message" name="message" rows={5} placeholder="お問い合わせ内容をご記入ください" required />
      </Field>

      <SubmitButton status={status}>
        <span>送信する</span>
        <svg viewBox="0 0 20 20" fill="none">
          <path d="M5 10H15M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SubmitButton>

      <FormResult
        status={status}
        errorMessage={errorMessage}
        successMessage="お問い合わせを受け付けました。担当者よりご連絡いたします。"
      />
    </form>
  );
}
