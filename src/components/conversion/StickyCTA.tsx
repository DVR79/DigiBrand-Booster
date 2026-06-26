'use client';

import { useEffect, useState } from 'react';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 shadow-2xl"
      style={{ animation: 'fadeInUp 0.3s ease forwards' }}
    >
      <ShimmerButton variant="cta" href="#contact">
        Claim Your Free Audit
      </ShimmerButton>
    </div>
  );
}
