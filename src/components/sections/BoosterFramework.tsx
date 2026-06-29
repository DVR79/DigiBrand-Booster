'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { frameworkSteps } from '@/lib/data';

export default function BoosterFramework() {
  return (
    <section id="framework" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="How we work"
          title="The Booster Framework"
          description="A five-stage process that goes from audit to scale in 90 days. Documented, repeatable, and accountable."
        />

        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute left-5 top-0 h-full w-px hidden md:block"
            style={{ background: 'var(--border)' }}
            aria-hidden
          />

          <div className="space-y-8">
            {frameworkSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6"
              >
                {/* Step number */}
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-heading font-bold text-sm"
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#fff',
                  }}
                >
                  {step.step}
                </div>

                <div className="glass rounded-xl px-6 py-4 flex-1">
                  <h3
                    className="font-heading text-lg font-bold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
