'use client';

import { motion } from 'framer-motion';
import { Clock, FileCheck, BarChart3, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const reasons = [
  { icon: <Clock size={22} aria-hidden="true" />, title: '48-hour audit turnaround', description: 'Your account audit, written strategy, and KPI targets are delivered within 48 hours of signing. No weeks-long discovery phases.' },
  { icon: <FileCheck size={22} aria-hidden="true" />, title: 'KPIs signed before we start', description: 'Your ROAS, CPL, or traffic targets go into the contract before a single campaign launches. You know exactly what we are accountable for.' },
  { icon: <BarChart3 size={22} aria-hidden="true" />, title: 'Live dashboard, every day', description: 'You access the same live numbers we see, in real time. No chasing reports, no waiting until Monday morning.' },
  { icon: <Users size={22} aria-hidden="true" />, title: 'Specialist-led, not account-managed', description: 'The people doing your work are specialists in their channel. Not an account manager relaying instructions to a junior.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-4 section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why us"
          title="Different by design, not by claim"
          description="Most agencies offer the same pitch. Here is what makes how we work structurally different from what you have probably experienced before."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-4" style={{ background: 'rgba(37,99,235,0.08)', color: 'var(--accent-primary)' }}>
                {r.icon}
              </div>
              <h3 className="font-heading text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
