'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Client stories" title="From the brands we have grown" />
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-8"
            >
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="var(--accent-cta)" style={{ color: 'var(--accent-cta)' }} aria-hidden="true" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-primary)' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--accent-primary)' }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.title}, {t.company}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(5,150,105,0.1)', color: 'var(--accent-success)' }}>
                  {t.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
