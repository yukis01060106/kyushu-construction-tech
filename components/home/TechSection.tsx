import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { HomeSection } from '@/components/ui/Section';
import { LabelTag, SectionSub, SectionTitle } from '@/components/ui/Typography';

/** 対応技術（案件に応じて体制を組む技術領域） */
const stacks = [
  { key: 'frontend', title: 'フロントエンド', items: ['React', 'Next.js', 'TypeScript', 'Vue.js'] },
  { key: 'backend', title: 'バックエンド', items: ['Java', 'PHP', 'Python', 'Node.js', 'Go'] },
  { key: 'cloud', title: 'クラウド・インフラ', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Linux'] },
  { key: 'database', title: 'データベース', items: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server'] },
  { key: 'mobile', title: 'モバイル', items: ['iOS', 'Android', 'Flutter'] },
  { key: 'saas', title: '業務SaaS', items: ['kintone', 'Salesforce', 'Microsoft 365', 'Google Workspace'] },
];

export function TechSection() {
  return (
    <HomeSection id="technology">
      <Container>
        <Reveal className="mb-14 grid grid-cols-[1fr_auto] items-end gap-8 max-lg:grid-cols-1">
          <div>
            <LabelTag>TECHNOLOGY</LabelTag>
            <SectionTitle>対応技術</SectionTitle>
            <SectionSub>業務システムからクラウド、SaaS活用まで。案件に合わせて最適な技術を選びます</SectionSub>
          </div>
          <p className="font-mono text-xs leading-[1.9] text-gray-400 max-lg:hidden">
            <span className="text-brand">const</span> stack = <span className="text-gold-dark">&apos;best fit&apos;</span>;
            <br />
            <span className="text-brand">return</span> solution(client.needs);
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 max-lg:grid-cols-2 max-md:grid-cols-1">
          {stacks.map((stack, i) => (
            <Reveal key={stack.key} delay={(i % 3) * 0.08} className="bg-white px-8 py-8 transition-colors duration-300 hover:bg-gray-50 max-md:px-6 max-md:py-6">
              <p className="mb-1 font-mono text-[11px] tracking-[0.12em] text-brand-light">
                ./{stack.key}
              </p>
              <h3 className="mb-4 text-base font-bold text-navy">{stack.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-gray-200 bg-gray-50 px-[10px] py-1 font-mono text-[12px] text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </HomeSection>
  );
}
