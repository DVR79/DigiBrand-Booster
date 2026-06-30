import Image from 'next/image';
import { siteConfig } from '@/lib/data';

const footerLinks = {
  Services: [
    { label: 'Technical SEO', href: '/#services' },
    { label: 'Link Building', href: '/#services' },
    { label: 'Local SEO', href: '/#services' },
    { label: 'AEO and GEO', href: '/#services' },
    { label: 'Meta and Google Ads', href: '/#services' },
  ],
  Company: [
    { label: 'Why Us', href: '/#why-us' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ],
  'Work with us': [
    { label: 'Free 48-Hour Audit', href: '/#contact' },
    { label: 'The 90-Day Guarantee', href: '/#guarantee' },
    { label: 'Our Process', href: '/#framework' },
    { label: 'Industries We Serve', href: '/#industries' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="DigiBrand Booster" width={220} height={55} style={{ height: '45px', width: 'auto' }} />
            </a>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Performance marketing with a 90-day guarantee. Founder-led, boutique, Bangalore.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                title="Call DigiBrand Booster"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                title="Email DigiBrand Booster"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#60a5fa';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#60a5fa';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Mail Us
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>{group}</h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer-link-dark text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>BTM 1st Stage, Bangalore, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
