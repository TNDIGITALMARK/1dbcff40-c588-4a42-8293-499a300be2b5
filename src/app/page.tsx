import { Metadata } from 'next';
import { Navigation } from '@/components/glooper/navigation';
import { HeroSection } from '@/components/glooper/hero-section';
import { ServicesOverview } from '@/components/glooper/services-overview';
import { StatsSection } from '@/components/glooper/stats-section';
import { CtaSection } from '@/components/glooper/cta-section';
import { Footer } from '@/components/glooper/footer';

export const metadata: Metadata = {
  title: 'Glooper Digital - Digital Marketing for SMBs',
  description: 'Unlock your digital potential with proven marketing strategies that drive real results for small and medium businesses.',
};

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}