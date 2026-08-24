import Link from 'next/link';
import { NewsList } from '@/components/news/NewsList';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag, SectionTitle } from '@/components/ui/Typography';
import { news } from '@/lib/data/news';

export function NewsSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-14 max-md:py-10">
      <Container>
        <Reveal className="grid grid-cols-[220px_1fr] items-start gap-12 max-md:grid-cols-1 max-md:gap-4">
          <div>
            <LabelTag className="mb-2">NEWS</LabelTag>
            <SectionTitle className="mb-5 text-2xl">お知らせ</SectionTitle>
            <Link
              href="/news/"
              className="group inline-flex items-center gap-[6px] text-[13px] font-bold text-brand transition-[gap] duration-[250ms] ease-brand hover:gap-[10px]"
            >
              <span>一覧を見る</span>
              <svg viewBox="0 0 20 20" fill="none" className="size-4 transition-transform duration-[250ms] ease-brand group-hover:translate-x-[2px]">
                <path d="M5 10H15M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <NewsList items={news.slice(0, 3)} />
        </Reveal>
      </Container>
    </section>
  );
}
