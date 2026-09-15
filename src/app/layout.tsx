import type { Metadata } from 'next';
import { Oswald, Open_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/lib/data';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['400', '500', '600', '700'] });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-heading', display: 'swap', weight: ['300', '400', '500', '600', '700'] });

const SITE_URL = 'https://www.digibrandbooster.tech';

export const metadata: Metadata = {
  title: {
    default: 'Performance Marketing Agency India | Digi Brand Booster',
    template: `%s | Digi Brand Booster`,
  },
  description: 'Senior-led performance marketing agency in Bangalore. SEO, Meta Ads, Google Ads, plus AEO and GEO to get you cited in AI answers. For D2C, SaaS, and EdTech. Month-to-month.',
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
    'senior led performance marketing agency Bangalore',
    'performance marketing agency for SaaS India',
    'performance marketing agency for EdTech India',
    'senior led digital marketing agency Bangalore',
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
  icons: {
    icon: `${SITE_URL}/favicon.png`,
    shortcut: `${SITE_URL}/favicon.png`,
    apple: `${SITE_URL}/apple-icon.png`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: siteConfig.name,
    title: 'Performance Marketing Agency India | Digi Brand Booster',
    description: 'SEO, Meta Ads, Google Ads, plus AEO and GEO for D2C, SaaS, and EdTech brands in India. Senior-led, specialist team, month-to-month.',
    images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630, alt: 'Digi Brand Booster: Performance Marketing Agency India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency | Digi Brand Booster',
    description: 'SEO, Meta Ads, Google Ads, plus AEO and GEO for D2C, SaaS, and EdTech brands. Senior-led, specialist team, month-to-month.',
    images: [`${SITE_URL}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // verification: { google: 'ADD_YOUR_GSC_VERIFICATION_CODE_HERE' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Digi Brand Booster',
  description: 'Senior-led performance marketing agency in Bangalore. SEO, Meta Ads, Google Ads, AEO and GEO. Specialist team, month-to-month.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.svg`,
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
    'https://www.linkedin.com/in/d-venkata-ramana/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${openSans.variable} ${oswald.variable}`} suppressHydrationWarning>
        {children}
        {/* Google Analytics 4 - loaded after interactive to avoid blocking FCP */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KHVK9W5N3N" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-KHVK9W5N3N');
        `}</Script>
      </body>
    </html>
  );
}
