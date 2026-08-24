import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { LabelTag } from '@/components/ui/Typography';
import { photos } from '@/lib/images';

export function MessageSection() {
  return (
    <section className="relative overflow-hidden py-30">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos.messageBg}
          alt="現場作業員チーム"
          loading="lazy"
          className="h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,15,30,0.92)_40%,rgba(10,15,30,0.6)_100%)]" />
      </div>

      <Container className="relative z-[1]">
        <Reveal className="max-w-[620px]">
          <LabelTag tone="gold">MESSAGE</LabelTag>
          <blockquote className="my-5 mb-7 border-l-4 border-gold pl-6 font-serif text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.6] font-bold text-white">
            「現場の安全と品質は、
            <br />
            すべての基盤である。」
          </blockquote>
          <p className="mb-7 text-[15px] leading-[1.95] text-white/72">
            私たちは、建設現場の一つひとつが、地域の未来をつくると信じています。技術者としての誇りと責任を胸に、今日も九州の現場で、確かな仕事を積み重ねていきます。
          </p>
          <p className="text-sm text-white/55">
            取締役副社長 <strong className="mt-[2px] block text-base text-white">中島 嘉寿</strong>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
