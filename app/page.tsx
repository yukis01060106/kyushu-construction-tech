import { AboutSection } from '@/components/home/AboutSection';
import { ContactSection } from '@/components/home/ContactSection';
import { Hero } from '@/components/home/Hero';
import { Loader } from '@/components/home/Loader';
import { MessageSection } from '@/components/home/MessageSection';
import { NewsSection } from '@/components/home/NewsSection';
import { RecruitSection } from '@/components/home/RecruitSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { StrengthsSection } from '@/components/home/StrengthsSection';
import { WorksCtaSection } from '@/components/home/WorksCtaSection';

export default function HomePage() {
  return (
    <>
      <Loader />
      <Hero />
      <NewsSection />
      <AboutSection />
      <ServicesSection />
      <StrengthsSection />
      <WorksCtaSection />
      <MessageSection />
      <RecruitSection />
      <ContactSection />
    </>
  );
}
