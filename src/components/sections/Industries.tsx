'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { industries } from '@/lib/data';

export default function Industries() {
  return (
    <section className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Industries"
          title="Sectors we know inside out"
          description="Deep vertical knowledge means faster ramp-up and fewer wasted experiments."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="glass rounded-xl px-5 py-2.5 text-sm font-medium"
              style={{ color: 'var(--text-primary)' }}
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
