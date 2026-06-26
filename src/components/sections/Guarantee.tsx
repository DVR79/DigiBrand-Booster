'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';

const steps = [
  { n: '01', label: 'KPIs agreed in writing before we start' },
  { n: '02', label: 'Weekly progress reviews with you' },
  { n: '03', label: 'Full management fee refund if we miss' },
];

export default function Guarantee() {
  return (
    <section className="py-24 px-4 section-alt">
      <div className="mx-auto max-w-4xl">
        <div className="card p-10 md:p-14 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-6"
            style={{ background: 'rgba(5,150,105,0.1)', color: 'var(--accent-success)' }}
          >
            <ShieldCheck size={32} aria-hidden="true" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            The 90-Day Results Guarantee
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: 'var(--text-secondary)' }}
          >
            We write the KPIs into the contract before we start. If we do not hit them by day 90,
            you get a full refund of management fees. No ambiguity, no small print.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-3 p-4 rounded-xl text-left" style={{ background: 'var(--bg-section-alt)', border: '1px solid var(--border)' }}>
                <span className="font-heading text-xl font-bold shrink-0" style={{ color: 'var(--accent-primary)' }}>{s.n}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          <ShimmerButton variant="primary" href="#contact" className="px-8 py-3" title="Start with our 90-day guarantee - full management fee refund if we miss your KPIs">
            Start with Zero Risk
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
