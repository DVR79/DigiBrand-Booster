'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { caseStudies } from '@/lib/data';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Case studies"
          title="Work that moved the needle"
          description="Real brands, real numbers, real timelines. No stock-photo testimonials."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="mb-4">
                  <span
                    className="inline-block text-xs font-semibold rounded-full px-3 py-1"
                    style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-primary)' }}
                  >
                    {cs.industry}
                  </span>
                </div>
                <h3
                  className="font-heading text-xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {cs.brand}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Challenge:</strong> {cs.challenge}
                </p>
                <p className="text-sm mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>What we did:</strong> {cs.result}
                </p>
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl p-3 text-center"
                      style={{ background: 'var(--bg-card-hover)' }}
                    >
                      <p
                        className="font-heading text-lg font-bold"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        {m.value}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
