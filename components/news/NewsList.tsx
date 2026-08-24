import { cn } from '@/lib/cn';
import type { NewsItem } from '@/lib/data/news';

/** お知らせ一覧（トップ・お知らせページ共用） */
export function NewsList({ items, className }: { items: NewsItem[]; className?: string }) {
  return (
    <ul className={cn('flex flex-col', className)}>
      {items.map((item) => (
        <li
          key={`${item.date}-${item.title}`}
          className="flex items-baseline gap-5 border-b border-gray-100 py-[18px] first:pt-0 max-md:flex-wrap max-md:gap-x-[14px] max-md:gap-y-[6px] max-md:py-[14px]"
        >
          <span className="w-[92px] shrink-0 font-en text-[13px] text-gray-400">{item.date}</span>
          <span
            className={cn(
              'shrink-0 rounded-full px-3 py-[3px] text-[11px] font-bold tracking-[0.02em]',
              item.tag === '採用' ? 'bg-[#fef3c7] text-[#b45309]' : 'bg-[#dbeafe] text-brand',
            )}
          >
            {item.tag}
          </span>
          <p className="text-sm leading-[1.6] text-gray-700 max-md:w-full max-md:text-[13px]">
            {item.title}
          </p>
        </li>
      ))}
    </ul>
  );
}
