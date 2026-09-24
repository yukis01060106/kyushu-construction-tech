'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

const faqs = [
  {
    question: '何から相談すればいいかわからないのですが、大丈夫ですか？',
    answer:
      'はい、大丈夫です。「業務が回らない」「DXと言われても何をすればいいか」といった段階からのご相談を歓迎しています。まずは現状をお伺いし、課題の整理からご一緒します。',
  },
  {
    question: '建設業以外の企業でも依頼できますか？',
    answer:
      'はい、DXコンサルティング・システム開発・SESは業種を問わず対応しています。施工管理DXは当社が特に力を入れている領域です。',
  },
  {
    question: '開発の一部だけ、または既存システムの改修だけでも依頼できますか？',
    answer:
      'はい、要件定義のみ、特定機能の開発のみ、既存システムの改修・保守のみといったご依頼にも対応しています。状況に合わせて柔軟にご提案します。',
  },
  {
    question: 'SESの契約形態や期間はどうなりますか？',
    answer:
      '準委任契約を中心に、期間・人数・スキルなどご要望に合わせてご相談を承ります。短期のスポット参画から長期の参画まで対応可能です。',
  },
  {
    question: '対応エリアはどこですか？',
    answer:
      '全国に対応しています。打ち合わせはオンラインでも可能です。訪問が必要な場合は、内容に応じてご相談ください。',
  },
  {
    question: '採用応募の方法を教えてください。',
    answer:
      'このページのお問い合わせフォームにて「採用について」をお選びいただくか、採用情報ページからご応募ください。お電話でのご相談も受け付けております。まずはお気軽にご連絡ください。',
  },
];

/** よくあるご質問（開閉は1つずつ） */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto flex max-w-[760px] flex-col gap-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question} className="overflow-hidden rounded-md border border-gray-200 bg-white">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full cursor-pointer items-center gap-4 border-none bg-transparent px-6 py-[22px] text-left font-jp text-[15px] font-bold text-navy transition-colors duration-200 hover:bg-gray-50"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-black text-white">
                Q
              </span>
              <span>{faq.question}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={cn(
                  'ml-auto size-5 shrink-0 text-gray-400 transition-transform duration-300 ease-brand',
                  open && 'rotate-180',
                )}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={cn(
                'grid transition-[grid-template-rows] duration-[400ms] ease-brand',
                open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-[22px] pl-[68px] text-sm leading-[1.9] text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
