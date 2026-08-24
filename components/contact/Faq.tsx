'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { site } from '@/lib/site';

const faqs = [
  {
    question: '施工管理の対応エリアはどこですか？',
    answer:
      '九州全域（福岡・佐賀・長崎・熊本・大分・宮崎・鹿児島）に対応しています。現地の状況に応じて、迅速に対応できる体制を整えています。',
  },
  {
    question: '施工管理のみの依頼は可能ですか？',
    answer:
      'はい、施工管理業務のみのご依頼にも対応しています。元請会社様からの施工管理者派遣や、特定工程の管理サポートなど、柔軟にご対応します。まずはご相談ください。',
  },
  {
    question: '対応できる工事の規模に制限はありますか？',
    answer:
      '規模による制限はありません。小規模な改修工事から、数十億円規模の大型プロジェクトまで対応しています。規模に応じた最適な体制を整えてご対応します。',
  },
  {
    question: '見積もりは無料ですか？',
    answer:
      'はい、お見積もりは無料です。工事内容・規模・現場状況をお伺いした上で、詳細なお見積もりを作成します。まずはお気軽にお問い合わせください。',
  },
  {
    question: '緊急の施工管理対応は可能ですか？',
    answer: `緊急対応も可能な限り対応します。災害復旧工事や急を要するプロジェクトの場合は、まずはお電話（${site.tel}）にてご連絡ください。状況に応じて最速で対応体制を整えます。`,
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
