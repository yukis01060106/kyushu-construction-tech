'use client';

import { Field, FieldRow, Honeypot, Input, RequiredBadge, Select, Textarea } from '@/components/forms/fields';
import { FormResult, SubmitButton } from '@/components/forms/FormFeedback';
import { useContactForm } from '@/lib/useContactForm';

const regions = ['北海道・東北', '関東', '中部', '近畿', '中国・四国', '九州・沖縄', '海外・その他'];

const subjects = [
  'DXコンサルティングについて',
  'システム開発のご相談',
  'SES・エンジニアのご依頼',
  '施工管理DXについて',
  '施工管理業務について',
  'お見積もり依頼',
  '採用について',
  'その他',
];

const budgets = [
  '〜100万円',
  '100万〜300万円',
  '300万〜1,000万円',
  '1,000万円以上',
  '未定・相談したい',
];

/** お問い合わせページの詳細フォーム */
export function FullContactForm({ className }: { className?: string }) {
  const { status, errorMessage, handleSubmit } = useContactForm();

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h3 className="mb-7 border-b border-gray-100 pb-5 text-[1.3rem] font-bold text-navy">
        お問い合わせフォーム
      </h3>

      <Honeypot />
      <input type="hidden" name="form_name" value="お問い合わせページ" />

      <FieldRow>
        <Field label="お名前" htmlFor="cpf-name" required>
          <Input type="text" id="cpf-name" name="name" placeholder="山田 太郎" required autoComplete="name" />
        </Field>
        <Field label="ふりがな" htmlFor="cpf-kana">
          <Input type="text" id="cpf-kana" name="kana" placeholder="やまだ たろう" />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="会社名・組織名" htmlFor="cpf-company">
          <Input type="text" id="cpf-company" name="company" placeholder="株式会社〇〇" autoComplete="organization" />
        </Field>
        <Field label="部署名・役職" htmlFor="cpf-dept">
          <Input type="text" id="cpf-dept" name="dept" placeholder="営業部 部長" />
        </Field>
      </FieldRow>

      <FieldRow>
        <Field label="メールアドレス" htmlFor="cpf-email" required>
          <Input type="email" id="cpf-email" name="email" placeholder="example@mail.com" required autoComplete="email" />
        </Field>
        <Field label="電話番号" htmlFor="cpf-tel">
          <Input type="tel" id="cpf-tel" name="tel" placeholder="03-6804-2140" autoComplete="tel" />
        </Field>
      </FieldRow>

      {/* contact.php は prefecture の名前で受け取る */}
      <Field label="地域" htmlFor="cpf-region">
        <Select id="cpf-region" name="prefecture" defaultValue="">
          <option value="">選択してください</option>
          {regions.map((region) => (
            <option key={region}>{region}</option>
          ))}
        </Select>
      </Field>

      <Field label="お問い合わせ種別" htmlFor="cpf-subject" required>
        <Select id="cpf-subject" name="subject" required defaultValue="">
          <option value="">選択してください</option>
          {subjects.map((subject) => (
            <option key={subject}>{subject}</option>
          ))}
        </Select>
      </Field>

      <Field label="ご予算・規模感（任意）" htmlFor="cpf-budget">
        <Select id="cpf-budget" name="budget" defaultValue="">
          <option value="">選択してください</option>
          {budgets.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </Select>
      </Field>

      <Field label="お問い合わせ内容" htmlFor="cpf-message" required>
        <Textarea
          id="cpf-message"
          name="message"
          rows={6}
          required
          placeholder={'ご相談内容をできるだけ詳しくご記入ください。\n（例）現在の課題・対象の業務・ご希望の時期など'}
        />
      </Field>

      <div className="mb-6">
        <label className="flex cursor-pointer items-start gap-3 font-normal">
          <input
            type="checkbox"
            name="privacy"
            required
            value="同意する"
            className="mt-[2px] size-[18px] shrink-0 accent-brand"
          />
          <span className="text-[13px] text-gray-600">
            プライバシーポリシーに同意の上、送信してください。
            <RequiredBadge />
          </span>
        </label>
      </div>

      <SubmitButton status={status} variant="primary" className="p-[18px] text-base">
        <span>送信する</span>
        <svg viewBox="0 0 20 20" fill="none">
          <path d="M5 10H15M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </SubmitButton>

      <FormResult
        status={status}
        errorMessage={errorMessage}
        successMessage="お問い合わせを受け付けました。2営業日以内にご返信いたします。"
      />
    </form>
  );
}
