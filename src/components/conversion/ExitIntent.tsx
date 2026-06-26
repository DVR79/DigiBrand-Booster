'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    if (sessionStorage.getItem('exit-dismissed')) return;

    function onMouseLeave(e: MouseEvent) {
      if (e.clientY < 10 && !dismissed) {
        setShow(true);
      }
    }

    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, [dismissed]);

  function dismiss() {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('exit-dismissed', '1');
  }

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center px-4"
      style={{ background: 'rgba(10,10,20,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div className="glass rounded-2xl p-8 max-w-md w-full text-center relative">
        <button
          onClick={dismiss}
          className="absolute right-4 top-4"
          style={{ color: 'var(--text-secondary)' }}
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: 'var(--accent-primary)' }}
        >
          Wait before you go
        </p>
        <h3
          className="font-heading text-2xl font-bold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Get a free 48-hour audit
        </h3>
        <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
          We will review your ad accounts, SEO, and conversion funnel, and send you a prioritised fix
          list. No obligation, no hard sell.
        </p>
        <ShimmerButton variant="cta" href="#contact" className="w-full" onClick={dismiss}>
          Claim My Free Audit
        </ShimmerButton>
        <button
          className="mt-4 text-xs"
          style={{ color: 'var(--text-secondary)' }}
          onClick={dismiss}
        >
          No thanks, I will pass
        </button>
      </div>
    </div>
  );
}
