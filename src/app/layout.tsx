import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });

const SITE_URL = 'https://www.digibrandbooster.tech';

export const metadata: Metadata = {
  title: {
    default: 'Performance Marketing Agency India | Digi Brand Booster',
    template: `%s | Digi Brand Booster`,
  },
  description: 'Boutique performance marketing agency in Bangalore. SEO, Meta Ads, Google Ads, AEO and GEO for D2C and SaaS brands. 90-day results guarantee.',
  keywords: [
    'performance marketing agency India',
    'digital marketing agency Bangalore',
    'SEO agency Bangalore',
    'Meta ads agency India',
    'Google ads agency Bangalore',
    'AEO agency India',
    'GEO optimisation agency',
    'AI search marketing India',
    'boutique performance marketing agency Bangalore',
    'performance marketing agency for D2C brands India',
    'answer engine optimisation services India',
    'generative engine optimisation agency',
    'Meta ads agency for ecommerce India',
    'Google Ads management Bangalore',
    '90 day results guarantee marketing agency',
    'performance marketing agency for SaaS India',
    'performance marketing agency for EdTech India',
    'founder led digital marketing agency Bangalore',
    'paid media agency D2C brands India',
    'technical SEO agency Bangalore',
    'AI citation SEO India',
    'ChatGPT SEO agency India',
    'Perplexity SEO agency',
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
    title: 'Performance Marketing Agency India | Digi Brand Booster',
    description: 'SEO, Meta Ads, Google Ads, AEO and GEO for D2C and SaaS brands in India. 90-day results guarantee.',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Digi Brand Booster: Performance Marketing Agency India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency | Digi Brand Booster',
    description: 'SEO, Meta Ads, Google Ads, AEO and GEO for D2C and SaaS brands. 90-day results guarantee.',
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
  description: 'Boutique performance marketing agency in Bangalore. SEO, Meta Ads, Google Ads, AEO and GEO. 90-day results guarantee.',
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
