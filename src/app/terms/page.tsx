import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalPage from '@/components/layout/LegalPage';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that govern your use of the Digi Brand Booster website and the information provided on it.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

const UPDATED = '15 September 2026';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage title="Terms of Service" updated={UPDATED}>
          <p>
            These terms govern your use of the Digi Brand Booster website. By accessing or using the site,
            you agree to them. If you do not agree, please do not use the site.
          </p>

          <h2>About this website</h2>
          <p>
            This site provides information about our performance marketing services. Nothing on it is a
            binding offer. Any engagement is governed by a separate written agreement between us and the
            client, which sets out the scope, fees, and deliverables.
          </p>

          <h2>No guarantee of results</h2>
          <p>
            Marketing results depend on many factors outside our control, including your market, budget,
            product, and competition. Case studies, metrics, and examples on this site describe past or
            best-case outcomes and are not a promise of future results. We do not offer a results guarantee.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content, design, logos, and graphics on this site are owned by Digi Brand Booster or used
            under licence, and are protected by applicable laws. You may not copy, reproduce, or reuse them
            without our written permission.
          </p>

          <h2>Acceptable use</h2>
          <p>You agree not to use the site to:</p>
          <ul>
            <li>Break any law or infringe anyone&rsquo;s rights.</li>
            <li>Attempt to gain unauthorised access to the site or its systems.</li>
            <li>Introduce malware or disrupt the site&rsquo;s operation.</li>
            <li>Scrape or harvest data for spam or resale.</li>
          </ul>

          <h2>Third-party links</h2>
          <p>
            The site may link to third-party websites and services. We are not responsible for their content
            or practices, and a link does not imply endorsement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties of any kind. To the fullest extent
            permitted by law, Digi Brand Booster is not liable for any indirect or consequential loss arising
            from your use of, or inability to use, the site.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of India. Any dispute is subject to the exclusive
            jurisdiction of the courts of Bangalore, Karnataka.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The date at the top shows when they were last
            revised. Continued use of the site means you accept the current version.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about these terms? Email{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
