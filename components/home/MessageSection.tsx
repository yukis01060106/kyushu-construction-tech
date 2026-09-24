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
          alt="ビル街に立つビジネスマン"
          loading="lazy"
          className="h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,15,30,0.92)_40%,rgba(10,15,30,0.6)_100%)]" />
      </div>

      <Container className="relative z-[1]">
        <Reveal className="max-w-[620px]">
          <LabelTag tone="gold">MESSAGE</LabelTag>
          <blockquote className="my-5 mb-7 border-l-4 border-gold pl-6 font-black tracking-[-0.01em] text-[clamp(1.5rem,2.5vw,2.1rem)] leading-[1.6] text-white">
            「現場を知っているから、
            <br />
            使われるシステムがつくれる。」
          </blockquote>
          <p className="mb-7 text-[15px] leading-[1.95] text-white/72">
            システムは、使われてはじめて価値を持ちます。私たちはDXとシステム開発で多くの業務に向き合いながら、自ら施工管理の現場にも立ってきました。現場の手間や不安を知っているからこそ、つくれるものがある。その強みを、建設業のDXに注いでいきます。
          </p>
          <p className="text-sm text-white/55">
            取締役副社長 <strong className="mt-[2px] block text-base text-white">中島 嘉寿</strong>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
