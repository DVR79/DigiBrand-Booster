'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { siteConfig } from '@/lib/data';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#team' },
  { label: 'Insights', href: '#insights' },
];

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
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="font-heading text-xl font-extrabold" style={{ color: 'var(--accent-primary)' }}>
            {siteConfig.name}
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--accent-primary)';
                  (e.target as HTMLElement).style.background = 'rgba(37,99,235,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.target as HTMLElement).style.background = 'transparent';
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={openSearch}
              className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition-colors"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <Search size={13} />
              <span>Search</span>
              <kbd className="rounded px-1 text-[10px]" style={{ background: 'var(--bg-card-hover)' }}>⌘K</kbd>
            </button>
            <ThemeToggle />
            <ShimmerButton variant="primary" href="#contact" className="hidden md:inline-flex">
              Free Audit
            </ShimmerButton>
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: 'var(--text-primary)', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="px-4 py-2.5 rounded-lg text-sm font-medium" style={{ color: 'var(--text-primary)' }} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <ShimmerButton variant="primary" href="#contact" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>
              Get Free Audit
            </ShimmerButton>
          </nav>
        </div>
      )}
    </header>
  );
}
