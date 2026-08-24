import Link from 'next/link';
import { LabelTag } from '@/components/ui/Typography';
import { ZoomPhoto } from '@/components/ui/ZoomPhoto';

const overlay =
  'linear-gradient(to right, rgba(10,15,30,.88) 0%, rgba(10,15,30,.6) 60%, rgba(10,15,30,.35) 100%),' +
  'linear-gradient(to top, rgba(10,15,30,.75) 0%, transparent 50%)';

/** 下層ページ共通のヒーロー */
export function PageHero({
  label,
  title,
  description,
  image,
}: {
  label: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section
      className="relative flex h-[440px] flex-col justify-end overflow-hidden max-md:h-[360px]"
      data-cursor-big
    >
      <div className="absolute inset-0">
        <ZoomPhoto src={image} alt={title} priority className="object-[center_40%]" />
        <div className="absolute inset-0" style={{ background: overlay }} />
      </div>
      <div className="relative z-2 mx-auto w-full max-w-[1160px] px-6 pb-14">
        <LabelTag tone="gold">{label}</LabelTag>
        <h1 className="mb-[14px] font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.3] font-bold text-white">
          {title}
        </h1>
        <p className="max-w-[520px] text-[15px] leading-[1.85] text-white/70">{description}</p>
      </div>
    </section>
  );
}

/** パンくずリスト */
export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="border-b border-gray-200 bg-gray-50 py-[14px]">
      <div className="mx-auto flex w-full max-w-[1160px] items-center gap-[10px] px-6 text-[13px] text-gray-500">
        <Link href="/" className="text-gray-500 transition-colors duration-200 hover:text-brand">
          ホーム
        </Link>
        <span className="text-[10px] text-gray-400">›</span>
        <span className="font-semibold text-gray-700">{current}</span>
      </div>
    </div>
  );
}
