'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ShimmerButton from '@/components/ui/ShimmerButton';

const navLinks = [
  { label: 'Services',     href: '/#services' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Process',      href: '/#framework' },
  { label: 'About',        href: '/about' },
  { label: 'Insights',     href: '/blog' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* ── Nav ── */}
      <header className="fixed inset-x-0 top-0 z-40">
        <nav
          className="w-full border-b"
          style={{
            background: '#ffffff',
            borderColor: '#e0e3e5',
            boxShadow: '0 1px 3px rgba(17,22,30,0.06)',
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

              {/* Logo: icon + text */}
              <Link
                href="/"
                className="flex items-center gap-2.5 flex-shrink-0"
                title="Digi Brand Booster, Home"
              >
                <Image
                  src="/logo-icon.webp"
                  alt="Digi Brand Booster logo"
                  width={40}
                  height={40}
                  className="w-9 h-9 flex-shrink-0"
                  priority
                />
                <span
                  className="font-heading font-bold tracking-tight hidden sm:block"
                  style={{ fontSize: '18px', color: '#000000' }}
                >
                  Digi Brand Booster
                </span>
              </Link>

              {/* Desktop nav links */}
              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="nav-link px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              {/* CTA + hamburger */}
              <div className="flex items-center gap-3">
                <ShimmerButton href="/#contact" variant="primary" className="hidden md:inline-flex">
                  Free 48h Audit
                </ShimmerButton>
                <button
                  className="md:hidden p-2.5 rounded-lg"
                  style={{ color: '#11161e', background: 'rgba(19,27,46,0.06)', border: '1px solid rgba(19,27,46,0.1)' }}
                  onClick={() => setMenuOpen(v => !v)}
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile nav panel */}
          {menuOpen && (
            <div style={{ borderTop: '1px solid #e0e3e5', background: '#ffffff' }}>
              <div className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="px-4 py-3 rounded-lg text-sm font-medium"
                    style={{ color: '#191c1e' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <ShimmerButton href="/#contact" variant="primary" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>
                  Free 48h Audit
                </ShimmerButton>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
