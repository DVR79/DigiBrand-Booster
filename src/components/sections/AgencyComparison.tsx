'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';

const rows = [
  {
    feature: 'Who works on your account',
    us: 'Founder personally, on every account',
    them: 'Junior exec who changes every 6 months',
  },
  {
    feature: 'Onboarding time',
    us: '48 hours from contract signing',
    them: '2 to 4 weeks of discovery calls',
  },
  {
    feature: 'KPIs and accountability',
    us: 'Signed into the contract before we start',
    them: 'Discussed verbally, rarely documented',
  },
  {
    feature: 'Results guarantee',
    us: '90-day full management fee refund if we miss',
    them: 'No guarantee of any kind',
  },
  {
    feature: 'Reporting',
    us: 'Live dashboard daily, written update every Monday',
    them: 'Monthly PDF sent when they remember',
  },
  {
    feature: 'Response time',
    us: 'Same day on WhatsApp or email',
    them: 'Scheduled calls, ticketing systems',
  },
  {
    feature: 'AI search visibility (AEO and GEO)',
    us: 'Core service, included in strategy',
    them: 'Most have not built this capability yet',
  },
  {
    feature: 'Client capacity',
    us: 'Limited deliberately for quality',
    them: '50 to 100 accounts per team member',
  },
];

export default function AgencyComparison() {
  return (
    <section id="comparison" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Boutique vs big agency"
          title="Why growing brands choose us over a large agency"
          description="Big agencies win awards. We win results. Here is what actually changes when your account is managed by a founder who is personally invested in your growth."
        />

        {/* Column headers */}
        <div className="grid grid-cols-3 gap-4 mb-3 px-4">
          <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>What matters to you</p>
          <div
            className="text-center text-sm font-bold py-2 rounded-xl"
            style={{ background: 'rgba(91,141,255,0.1)', color: 'var(--accent-primary)' }}
          >
            Digi Brand Booster
          </div>
          <div
            className="text-center text-sm font-semibold py-2 rounded-xl"
            style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}
          >
            Large Agency
          </div>
        </div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-2">
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="grid grid-cols-3 gap-4 items-start rounded-2xl px-4 py-4"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {/* Feature label */}
              <p className="text-sm font-medium pt-0.5" style={{ color: 'var(--text-primary)' }}>
                {row.feature}
              </p>

              {/* Our answer */}
              <div className="flex items-start gap-2">
                <CheckCircle
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--accent-success)' }}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {row.us}
                </p>
              </div>

              {/* Their answer */}
              <div className="flex items-start gap-2">
                <XCircle
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: '#ef4444' }}
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {row.them}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-base mb-5" style={{ color: 'var(--text-secondary)' }}>
            Ready to work with an agency that is actually accountable?
          </p>
          <ShimmerButton
            variant="primary"
            href="#contact"
            className="px-8 py-3"
            title="Get a free 48-hour audit from Digi Brand Booster"
          >
            Get Your Free 48-Hour Audit
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
