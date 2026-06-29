'use client';

import { motion } from 'framer-motion';
import { Clock, FileCheck, BarChart3, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const reasons = [
  { icon: <Clock size={22} aria-hidden="true" />, title: 'Founder-led on every account', description: 'Venkat personally leads strategy and oversees execution on every client account. You are not handed off to a junior team after signing.', cardClass: 'card-blue', iconBg: 'rgba(37,99,235,0.1)', iconColor: '#2563eb' },
  { icon: <FileCheck size={22} aria-hidden="true" />, title: 'KPIs written into the contract', description: 'Your ROAS, CPL, or organic traffic target is documented and signed before we start. If we miss it in 90 days, you get a full management fee refund.', cardClass: 'card-purple', iconBg: 'rgba(124,58,237,0.1)', iconColor: '#7c3aed' },
  { icon: <BarChart3 size={22} aria-hidden="true" />, title: 'Full transparency, every week', description: 'Live dashboard access daily. Written Monday update covering exactly what changed, why, and what comes next. You never need to chase us.', cardClass: 'card-cyan', iconBg: 'rgba(14,165,233,0.1)', iconColor: '#0ea5e9' },
  { icon: <Users size={22} aria-hidden="true" />, title: 'Boutique capacity by design', description: 'We limit active clients deliberately. Fewer accounts means more attention per account, better results, and a 94% retention rate.', cardClass: 'card-green', iconBg: 'rgba(5,150,105,0.1)', iconColor: '#059669' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-4 section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why us"
          title="Boutique by choice. Accountable by design."
          description="We deliberately stay small so every client gets senior attention, documented results, and a founder who is genuinely invested in your growth."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`card p-7 ${r.cardClass}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl mb-4" style={{ background: r.iconBg, color: r.iconColor }}>
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
