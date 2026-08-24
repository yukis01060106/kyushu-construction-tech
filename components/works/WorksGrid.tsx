'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';
import { workCategories, works } from '@/lib/data/works';

const filters = ['すべて', ...workCategories] as const;

/** カテゴリで絞り込める対応事例一覧 */
export function WorksGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>('すべて');
  const visible = active === 'すべて' ? works : works.filter((work) => work.category === active);

  return (
    <>
      <Reveal className="mb-12 flex flex-wrap justify-center gap-[10px]">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              'cursor-pointer rounded-full border-2 px-6 py-[10px] font-jp text-sm font-semibold transition-all duration-[250ms]',
              active === filter
                ? 'border-brand bg-brand text-white'
                : 'border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800',
            )}
          >
            {filter}
          </button>
        ))}
      </Reveal>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {visible.map((work, i) => (
          <Reveal
            key={work.title}
            delay={(i % 3) * 0.1}
            tilt
            className="group overflow-hidden rounded-lg border border-black/4 bg-white shadow-sm transition-[transform,box-shadow] duration-[350ms] ease-brand hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.image}
                alt={work.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.06]"
              />
              <span className="absolute top-[14px] left-[14px] rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-[0.05em] text-white transition-transform duration-300 group-hover:scale-[1.06]">
                {work.category}
              </span>
            </div>
            <div className="px-[26px] pt-6 pb-7">
              <h3 className="mb-[10px] text-base leading-[1.5] font-bold text-navy">{work.title}</h3>
              <p className="mb-4 text-[13px] leading-[1.8] text-gray-500">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.meta.map((meta) => (
                  <span key={meta} className="rounded-full bg-gray-100 px-[10px] py-[3px] text-xs text-gray-400">
                    {meta}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
