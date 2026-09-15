'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, FileCheck, BarChart3, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';

const reasons = [
  {
    icon: <Clock size={20} />,
    title: 'Senior-led on every account',
    description: 'Venkat leads strategy and reviews every campaign personally. You talk to the person doing the work, not an account manager relaying it.',
    iconBg: 'rgba(0, 88, 190,0.1)', iconColor: '#0058be', card: 'card-blue',
  },
  {
    icon: <FileCheck size={20} />,
    title: 'KPIs signed before we start',
    description: 'Your ROAS, cost per lead, or traffic target is written into the contract up front, so what we are accountable for is never in doubt.',
    iconBg: 'rgba(230, 151, 0,0.1)', iconColor: '#2170e4', card: 'card-indigo',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Reporting you never have to chase',
    description: 'A live dashboard you can open any day, plus a written update every Monday covering what changed, why, and what is next.',
    iconBg: 'rgba(0, 88, 190,0.1)', iconColor: '#0058be', card: 'card-blue',
  },
  {
    icon: <Users size={20} />,
    title: 'Small client list, by design',
    description: 'We cap active clients on purpose. Fewer accounts means real attention, which is how we hold a 94% retention rate.',
    iconBg: 'rgba(230, 151, 0,0.1)', iconColor: '#2170e4', card: 'card-indigo',
  },
];

const rows = [
  { feature: 'Who works on your account', us: 'Senior strategist on every account', them: 'Junior exec who rotates off in months' },
  { feature: 'Onboarding time', us: '48 hours from contract signing', them: '2 to 4 weeks of discovery calls' },
  { feature: 'KPIs and accountability', us: 'In the signed contract before we start', them: 'Discussed on a call, rarely written down' },
  { feature: 'Reporting', us: 'Live dashboard, plus a written Monday update', them: 'A monthly PDF, when they remember' },
  { feature: 'Response time', us: 'Same day on WhatsApp or email', them: 'Scheduled calls and support tickets' },
  { feature: 'AI search visibility (AEO and GEO)', us: 'A core service, in every strategy', them: 'Most have not built this capability yet' },
  { feature: 'Client capacity', us: 'Kept deliberately low for quality', them: '50 to 100 accounts per team member' },
];

export default function AgencyComparison() {
  return (
    <section id="why-us" className="py-14 md:py-20 px-4" style={{ background: '#ffffff' }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Why us"
          title="Small on purpose. Accountable by design."
          description="Large agencies are built to scale headcount. We are built to stay close to a small number of accounts. Here is what changes when a senior specialist who is personally on the hook runs your growth."
        />

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className={`card p-6 ${r.card}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl mb-4" style={{ background: r.iconBg, color: r.iconColor }}>
                {r.icon}
              </div>
              <h3 className="font-heading text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{r.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
          How we compare
        </p>

        {/* Scrollable table wrapper for mobile */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div style={{ minWidth: '520px' }}>
            <div className="grid grid-cols-3 gap-4 mb-3 px-4">
              <p className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>What matters to you</p>
              <div className="text-center text-sm font-bold py-2 rounded-xl" style={{ background: 'rgba(0, 88, 190,0.1)', color: 'var(--accent-primary)' }}>
                Digi Brand Booster
              </div>
              <div className="text-center text-sm font-semibold py-2 rounded-xl" style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)' }}>
                Large Agency
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {rows.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="grid grid-cols-3 gap-4 items-start rounded-2xl px-4 py-4"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <p className="text-sm font-medium pt-0.5" style={{ color: 'var(--text-primary)' }}>{row.feature}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-success)' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{row.us}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle size={15} className="mt-0.5 shrink-0" style={{ color: '#ef4444' }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{row.them}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <ShimmerButton variant="primary" href="#contact" className="px-8 py-3" title="Get a free 48-hour audit">
            Get Your Free 48-Hour Audit
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
