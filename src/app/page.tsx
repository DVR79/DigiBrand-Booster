import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import ProblemSection from '@/components/sections/ProblemSection';
import MarketResults from '@/components/sections/MarketResults';
import AgencyComparison from '@/components/sections/AgencyComparison';
import Industries from '@/components/sections/Industries';
import BoosterFramework from '@/components/sections/BoosterFramework';
import Guarantee from '@/components/sections/Guarantee';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Insights from '@/components/sections/Insights';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import StickyCTA from '@/components/conversion/StickyCTA';
import WhatsAppButton from '@/components/conversion/WhatsAppButton';
import ExitIntent from '@/components/conversion/ExitIntent';
import BackToTop from '@/components/conversion/BackToTop';
import SearchModal from '@/components/ui/SearchModal';
import CursorFollower from '@/components/effects/CursorFollower';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency Bangalore | Digi Brand Booster',
  description:
    'Senior-led performance marketing in Bangalore. SEO, Meta Ads, Google Ads, plus AEO and GEO for D2C and SaaS brands. Free 48-hour audit, month-to-month.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <ProblemSection />
        <MarketResults />
        <AgencyComparison />
        <Industries />
        <BoosterFramework />
        <Guarantee />
        <Pricing />
        <Testimonials />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Conversion helpers */}
      <StickyCTA />
      <WhatsAppButton />
      <ExitIntent />
      <BackToTop />

      {/* UI overlays */}
      <SearchModal />
      <CursorFollower />
    </>
  );
}
