import type { Metadata } from 'next';
import { NewsList } from '@/components/news/NewsList';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand, PageSection } from '@/components/ui/Section';
import { Divider, LabelTag, SectionTitle } from '@/components/ui/Typography';
import { news } from '@/lib/data/news';
import { photos } from '@/lib/images';

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '株式会社九州建設テクノロジーからのお知らせ一覧。会社・採用に関する最新情報をご紹介します。',
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="NEWS"
        title="お知らせ"
        description="会社・採用に関する最新のお知らせをご紹介します。"
        image={photos.heroNews}
      />
      <Breadcrumb current="お知らせ" />

      <PageSection>
        <Container>
          <Reveal className="mb-16 text-center">
            <LabelTag center>NEWS LIST</LabelTag>
            <SectionTitle>お知らせ一覧</SectionTitle>
            <Divider center />
          </Reveal>

          <Reveal>
            <NewsList items={news} className="mx-auto max-w-[820px]" />
          </Reveal>
        </Container>
      </PageSection>

      <CtaBand
        title="まずはお気軽にご相談ください"
        description="施工管理に関するお問い合わせ・お見積もりはこちらから"
        primary={{ href: '/contact/', label: 'お問い合わせ →' }}
        secondary={{ href: '/services/', label: '事業内容を見る' }}
      />
    </>
  );
}
