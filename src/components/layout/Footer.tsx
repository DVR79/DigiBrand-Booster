import Link from 'next/link';
import { siteConfig } from '@/lib/data';

const footerCols = {
  Services: [
    { label: 'SEO',        href: '/#services' },
    { label: 'PPC',        href: '/#services' },
    { label: 'Social Ads', href: '/#services' },
    { label: 'Content',    href: '/#services' },
    { label: 'CRO',        href: '/#services' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  Contact: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/d-venkata-ramana/', external: true },
    { label: 'WhatsApp', href: `https://wa.me/${siteConfig.phone.replace(/\D/g, '')}`, external: true },
    { label: 'Audit', href: '/#contact' },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#11161e',
        color: '#ffffff',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand column — logo + copyrght */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-6"
              title="Digi Brand Booster - Home"
            >
              <span
                className="font-heading font-bold tracking-tight"
                style={{ fontSize: '18px', color: '#ffffff' }}
              >
                Digi Brand Booster
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#7c839b' }}
            >
              Senior-led performance marketing in Bangalore. Precision growth for high-stakes startups.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerCols).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-xs font-bold uppercase tracking-[0.12em] mb-4"
                style={{ color: '#ffffff' }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map(l => {
                  const isExternal = 'external' in l && l.external;
                  const cls = 'text-base font-normal transition-colors hover:text-secondary-fixed duration-200';
                  return (
                    <li key={l.label}>
                      {isExternal ? (
                        <a
                          href={l.href}
                          className={cls}
                          style={{ color: '#7c839b' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={cls} style={{ color: '#7c839b' }}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom copyright bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-sm" style={{ color: '#7c839b' }}>
            © {new Date().getFullYear()} Digi Brand Booster. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#7c839b' }}>
            Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
