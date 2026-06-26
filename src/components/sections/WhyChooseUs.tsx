'use client';

import { motion } from 'framer-motion';
import { Clock, FileCheck, BarChart3, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

const reasons = [
  {
    icon: <Clock size={24} />,
    title: '48-hour onboarding',
    description:
      'Full access, audit, kickoff call, and growth plan delivered within 48 hours of contract signing.',
  },
  {
    icon: <FileCheck size={24} />,
    title: 'Written KPIs in the contract',
    description:
      'Targets are agreed and signed before we touch your budget. No retrospective goal-moving.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Live dashboard, always',
    description:
      'You see the same numbers we see, in real time. No waiting for a Monday morning report.',
  },
  {
    icon: <Users size={24} />,
    title: 'Dedicated team per account',
    description:
      'You get a strategist, a specialist, and a growth manager. Not a rotating helpdesk.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why us"
          title="Different by design, not by claim"
          description="Most agencies say the same things. Here is what makes us structurally different."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-primary)' }}
                >
                  {r.icon}
                </div>
                <h3
                  className="font-heading text-lg font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {r.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
