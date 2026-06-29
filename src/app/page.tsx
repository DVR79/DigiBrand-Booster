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
import MarketInsights from '@/components/sections/MarketInsights';
import Testimonials from '@/components/sections/Testimonials';
import Awards from '@/components/sections/Awards';
import Team from '@/components/sections/Team';
import AgencyComparison from '@/components/sections/AgencyComparison';
import Pricing from '@/components/sections/Pricing';
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
  title: 'Performance Marketing Agency Bangalore | 90-Day Guarantee | Digi Brand Booster',
  description:
    'Boutique performance marketing agency in Bangalore. Meta Ads, Google Ads, SEO, AEO, and GEO for D2C, EdTech, and SaaS brands. Founder-led. 48-hour audit. 90-day guarantee written into the contract.',
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
        <MarketInsights />
        <Testimonials />
        <Awards />
        <Team />
        <AgencyComparison />
        <Pricing />
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
