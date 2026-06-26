import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Results from '@/components/sections/Results';
import Guarantee from '@/components/sections/Guarantee';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Industries from '@/components/sections/Industries';
import BoosterFramework from '@/components/sections/BoosterFramework';
import ROICalculator from '@/components/sections/ROICalculator';
import Testimonials from '@/components/sections/Testimonials';
import Awards from '@/components/sections/Awards';
import Team from '@/components/sections/Team';
import Founder from '@/components/sections/Founder';
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
  title: 'AI-Native Performance Marketing Agency | 90-Day Results Guarantee',
  description:
    'Digi Brand Booster helps ambitious D2C and SaaS brands grow with Meta Ads, Google Ads, SEO, and conversion optimisation. 90-day results guarantee, 48-hour onboarding.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
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
        <TrustBar />
        <Results />
        <Guarantee />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <Industries />
        <BoosterFramework />
        <ROICalculator />
        <Testimonials />
        <Awards />
        <Team />
        <Founder />
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
