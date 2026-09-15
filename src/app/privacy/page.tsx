import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LegalPage from '@/components/layout/LegalPage';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Digi Brand Booster collects, uses, and protects your data when you use our website, contact form, or analytics.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const UPDATED = '15 September 2026';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage title="Privacy Policy" updated={UPDATED}>
          <p>
            This Privacy Policy explains how Digi Brand Booster (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            collects, uses, and protects information when you visit{' '}
            <strong>digibrandbooster.tech</strong> or contact us. By using the site, you agree to the
            practices described here.
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Information you give us.</strong> When you submit the contact form, book an audit,
              or message us on WhatsApp, we collect the details you provide, typically your name, email
              address, phone number, and the contents of your message.
            </li>
            <li>
              <strong>Usage data.</strong> Like most websites, we automatically collect standard analytics
              such as pages viewed, approximate location, device and browser type, and referring source.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your enquiry and provide the audit or services you request.</li>
            <li>To communicate with you about your account or project.</li>
            <li>To understand how the site is used and improve its content and performance.</li>
          </ul>

          <h2>Cookies and analytics</h2>
          <p>
            We use Google Analytics 4 to measure traffic and understand how visitors use the site. It sets
            cookies that collect anonymised usage data. You can block cookies in your browser settings or
            opt out using Google&rsquo;s{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              opt-out browser add-on
            </a>
            . We do not use cookies to sell your data or serve third-party advertising on this site.
          </p>

          <h2>Third-party services</h2>
          <p>We rely on a small number of trusted providers to run the site and respond to you:</p>
          <ul>
            <li>
              <strong>Google Analytics</strong> for website analytics.
            </li>
            <li>
              <strong>EmailJS</strong> to deliver contact-form submissions to our inbox.
            </li>
            <li>
              <strong>WhatsApp (Meta)</strong> when you choose to message us there.
            </li>
            <li>
              <strong>Vercel</strong> for website hosting.
            </li>
          </ul>
          <p>Each provider processes data under its own privacy policy.</p>

          <h2>How we share information</h2>
          <p>
            We do not sell or rent your personal information. We share it only with the service providers
            above so they can perform their function, or where required by law.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep enquiry details only for as long as needed to respond to you and, where relevant, to
            deliver our services and meet legal or accounting obligations. You can ask us to delete your
            data at any time.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, or delete the personal
            information we hold about you, and to withdraw consent. To exercise any of these rights, email
            us at{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and we will respond within a
            reasonable time.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your information. No method
            of transmission over the internet is completely secure, so we cannot guarantee absolute security.
          </p>

          <h2>Children</h2>
          <p>
            This site is intended for businesses and is not directed at children under 16. We do not
            knowingly collect information from children.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top shows when it was last revised.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about this policy or your data? Email{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or write to us in Bangalore,
            Karnataka, India.
          </p>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
