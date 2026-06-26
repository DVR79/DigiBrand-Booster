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
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
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
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-heading text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
            <span className="gradient-text">{siteConfig.name}</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--text-secondary)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={openSearch}
              className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition-colors"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
              aria-label="Open search (Ctrl+K)"
            >
              <Search size={14} />
              <span>Search</span>
              <kbd className="ml-1 rounded px-1 text-[10px]" style={{ background: 'var(--bg-card-hover)' }}>
                ⌘K
              </kbd>
            </button>
            <ThemeToggle />
            <ShimmerButton variant="cta" href="#contact" className="hidden md:inline-flex">
              Get Free Audit
            </ShimmerButton>
            <button
              className="md:hidden p-2"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass" style={{ borderTop: '1px solid var(--border)' }}>
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium py-1"
                style={{ color: 'var(--text-primary)' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ShimmerButton variant="cta" href="#contact" className="mt-2 w-full">
              Get Free Audit
            </ShimmerButton>
          </nav>
        </div>
      )}
    </header>
  );
}
