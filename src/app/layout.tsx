import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

const SITE_URL = 'https://www.digibrandbooster.tech';

export const metadata: Metadata = {
  title: {
    default: 'Performance Marketing Agency India | Meta Ads, Google Ads, SEO, AEO & GEO | Digi Brand Booster',
    template: `%s | Digi Brand Booster`,
  },
  description: 'Digi Brand Booster is India\'s leading AI-native performance marketing agency in Bangalore. We specialise in Meta Ads, Google Ads, SEO, AEO, GEO and CRO for D2C and SaaS brands. 90-day results guarantee.',
  keywords: [
    // Short-tail
    'performance marketing agency India',
    'digital marketing agency Bangalore',
    'SEO agency India',
    'Meta ads agency India',
    'Google ads agency Bangalore',
    'AEO agency India',
    'GEO optimization agency',
    'AI marketing agency India',
    // Long-tail
    'performance marketing agency for D2C brands India',
    'AI-native digital marketing agency Bangalore',
    'answer engine optimization services India',
    'generative engine optimization agency',
    'Meta ads agency for ecommerce India',
    'Google Ads management agency Bangalore',
    '90 day ROI guarantee marketing agency India',
    'performance marketing agency for SaaS India',
    'best digital marketing agency Bangalore 2025',
    'conversion rate optimization agency India',
    'paid media agency for D2C brands India',
    'technical SEO agency Bangalore',
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: siteConfig.name,
    title: 'Performance Marketing Agency India | Meta Ads, Google Ads, SEO, AEO & GEO',
    description: 'India\'s AI-native performance marketing agency in Bangalore. Meta Ads, Google Ads, SEO, AEO, GEO for D2C and SaaS. 90-day guarantee.',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Digi Brand Booster: Performance Marketing Agency India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency India | Digi Brand Booster',
    description: 'Meta Ads, Google Ads, SEO, AEO and GEO for D2C and SaaS brands. 90-day results guarantee.',
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // verification: { google: 'ADD_YOUR_CODE_HERE' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Digi Brand Booster',
  description: 'AI-native performance marketing agency in Bangalore specialising in Meta Ads, Google Ads, SEO, AEO, GEO and CRO.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: '₹₹₹',
  areaServed: ['India', 'United States', 'United Kingdom', 'UAE', 'Singapore'],
  knowsAbout: ['Performance Marketing', 'Meta Ads', 'Google Ads', 'SEO', 'AEO', 'GEO', 'CRO', 'D2C Marketing', 'SaaS Marketing'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'BTM 1st Stage',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560068',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/digibrandbooster',
    'https://www.linkedin.com/in/d-venkataramana',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${inter.variable} ${bricolage.variable}`}>
        {children}
      </body>
    </html>
  );
}
