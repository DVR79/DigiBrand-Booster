import { siteConfig } from '@/lib/data';

const footerLinks = {
  Services: [
    { label: 'Meta Ads', href: '#services' },
    { label: 'Google Ads', href: '#services' },
    { label: 'SEO', href: '#services' },
    { label: 'Conversion Optimisation', href: '#services' },
    { label: 'Email and Retention', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#team' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-section-alt)', borderTop: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-lg font-extrabold mb-3" style={{ color: 'var(--accent-primary)' }}>{siteConfig.name}</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              AI-native performance marketing. 90-day results guarantee.
            </p>
            <div className="space-y-1">
              <a href={`tel:${siteConfig.phone}`} className="footer-link block text-sm">{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`} className="footer-link block text-sm">{siteConfig.email}</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-primary)' }}>{group}</h3>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer-link text-sm transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}>
          <p>{new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>BTM 1st Stage, Bangalore, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
