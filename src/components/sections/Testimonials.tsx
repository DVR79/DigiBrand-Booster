'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Client stories"
          title="From the brands we have grown"
          description="We let the numbers do the talking, but here is what our clients say."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard>
                <Quote size={24} className="mb-3" style={{ color: 'var(--accent-primary)', opacity: 0.5 }} />
                <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-primary)' }}>
                  {t.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {t.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                      {t.title}, {t.company}
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold rounded-full px-3 py-1"
                    style={{ background: 'rgba(52,211,153,0.1)', color: 'var(--accent-success)' }}
                  >
                    {t.metric}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
