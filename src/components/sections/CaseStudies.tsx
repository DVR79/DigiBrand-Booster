'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { caseStudies } from '@/lib/data';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Case studies"
          title="Work that moved the needle"
          description="Real brands, real numbers, real timelines."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.brand}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="card p-7 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="pill text-xs">{cs.industry}</span>
                <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{cs.brand}</h3>
              <p className="text-sm mb-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Challenge: </span>{cs.challenge}
              </p>
              <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>What we did: </span>{cs.result}
              </p>
              <div className="grid grid-cols-3 gap-3 mt-auto pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                {cs.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-heading text-lg font-bold" style={{ color: 'var(--accent-primary)' }}>{m.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
