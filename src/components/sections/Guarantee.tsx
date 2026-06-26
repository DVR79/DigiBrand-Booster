'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function Guarantee() {
  return (
    <section className="py-20 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-6"
          style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-success)' }}
        >
          <ShieldCheck size={32} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          The 90-Day Results Guarantee
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We write the KPIs into the contract before we start. If we do not hit them by day 90, you
          get a full refund of management fees. No ambiguity, no small print.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm"
        >
          {[
            { label: 'KPIs agreed upfront', icon: '01' },
            { label: 'Progress reviewed weekly', icon: '02' },
            { label: 'Full refund if we miss', icon: '03' },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-xl p-4 flex items-center gap-3"
            >
              <span
                className="font-heading text-lg font-bold"
                style={{ color: 'var(--accent-primary)' }}
              >
                {item.icon}
              </span>
              <span style={{ color: 'var(--text-primary)' }}>{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <ShimmerButton variant="cta" href="#contact">
            Start with Zero Risk
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
