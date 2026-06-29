'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { formatCurrency } from '@/lib/utils';

export default function ROICalculator() {
  const [spend, setSpend] = useState(200000);
  const [currentRoas, setCurrentRoas] = useState(1.5);
  const [targetRoas] = useState(3.5);

  const currentRevenue = spend * currentRoas;
  const projectedRevenue = spend * targetRoas;
  const uplift = projectedRevenue - currentRevenue;

  return (
    <section id="roi" className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="ROI Calculator"
          title="What could your numbers look like?"
          description="Adjust the sliders to see a conservative projection based on our average client ROAS of 3.5x."
        />

        <GlassCard hover={false}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Monthly ad spend: <strong>{formatCurrency(spend)}</strong>
                </label>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={50000}
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full accent-[var(--accent-primary)]"
                  aria-label="Monthly ad spend"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  <span>{formatCurrency(50000)}</span>
                  <span>{formatCurrency(2000000)}</span>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Current ROAS: <strong>{currentRoas}x</strong>
                </label>
                <input
                  type="range"
                  min={0.5}
                  max={4}
                  step={0.1}
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="w-full accent-[var(--accent-primary)]"
                  aria-label="Current ROAS"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  <span>0.5x</span>
                  <span>4x</span>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="space-y-4">
              <div className="rounded-xl p-4" style={{ background: 'var(--bg-card-hover)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-secondary)' }}>
                  Current monthly revenue
                </p>
                <p className="font-heading text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {formatCurrency(currentRevenue)}
                </p>
              </div>

              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(91,141,255,0.1)', border: '1px solid rgba(91,141,255,0.3)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-primary)' }}>
                  Projected at 3.5x ROAS
                </p>
                <p className="font-heading text-2xl font-bold" style={{ color: 'var(--accent-primary)' }}>
                  {formatCurrency(projectedRevenue)}
                </p>
              </div>

              {uplift > 0 && (
                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-success)' }}>
                    Potential uplift
                  </p>
                  <p className="font-heading text-2xl font-bold" style={{ color: 'var(--accent-success)' }}>
                    +{formatCurrency(uplift)}
                  </p>
                </div>
              )}
              {uplift <= 0 && (
                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-primary)' }}>
                    Already at target ROAS
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Your current ROAS is already at or above 3.5x. We can help you scale spend profitably.
                  </p>
                </div>
              )}

              <ShimmerButton variant="cta" href="#contact" className="w-full" title="Get a free audit and see how we can hit these numbers for your brand">
                Get My Free Audit
              </ShimmerButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
