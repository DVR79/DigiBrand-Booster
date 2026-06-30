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
            <div className="space-y-1">
              <a href={`tel:${siteConfig.phone}`} className="footer-link-dark block text-sm">{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`} className="footer-link-dark block text-sm">{siteConfig.email}</a>
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
