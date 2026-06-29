'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { siteConfig } from '@/lib/data';

const navLinks = [
  { label: 'Services',     href: '/#services',     title: 'Our services - Meta Ads, Google Ads, SEO, AEO, GEO' },
  { label: 'Results',      href: '/#results',      title: 'Client results and performance metrics' },
  { label: 'Case Studies', href: '/#case-studies', title: 'Real brand growth case studies' },
  { label: 'Pricing',      href: '/#pricing',      title: 'Transparent pricing plans' },
  { label: 'About',        href: '/#why-us',       title: 'About Digi Brand Booster - founder-led boutique agency' },
  { label: 'Blog',         href: '/blog',          title: 'Performance marketing blog - AEO, GEO, paid media guides' },
];

const NAV_BG = '#0f172a';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function openSearch() {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: NAV_BG,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="font-heading text-xl font-extrabold" style={{ color: '#60a5fa' }} title="Digi Brand Booster - Home">
            {siteConfig.name}
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                title={l.title}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={openSearch}
              title="Search the site (Ctrl+K)"
              className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
            >
              <Search size={13} />
              <span>Search</span>
              <kbd className="rounded px-1 text-[10px]" style={{ background: 'rgba(255,255,255,0.1)' }}>⌘K</kbd>
            </button>
            <ThemeToggle />
            <ShimmerButton variant="primary" href="/#contact" className="hidden md:inline-flex" title="Get a free 48-hour performance audit - no commitment">
              Free Audit
            </ShimmerButton>
            <button
              className="md:hidden p-3 rounded-lg"
              style={{ color: '#ffffff', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open navigation menu'}
              title={menuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: NAV_BG, borderTop: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                title={l.title}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ShimmerButton variant="primary" href="/#contact" className="mt-3 w-full" onClick={() => setMenuOpen(false)} title="Get a free 48-hour performance audit - no commitment">
              Get Free Audit
            </ShimmerButton>
          </nav>
        </div>
      )}
    </header>
  );
}
