'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock, FileCheck, BarChart3, Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';

const reasons = [
  {
    icon: <Clock size={20} />,
    title: 'Founder-led on every account',
    description: 'Venkat personally leads strategy and reviews every campaign. You always speak with the person doing the work, not a junior account manager.',
    iconBg: 'rgba(37,99,235,0.1)', iconColor: '#2563eb', card: 'card-blue',
  },
  {
    icon: <FileCheck size={20} />,
    title: 'KPIs signed before we start',
    description: 'Your ROAS, CPL, or traffic target is written into the contract. If we miss it in 90 days, you get a full management fee refund.',
    iconBg: 'rgba(67,56,202,0.1)', iconColor: '#4338ca', card: 'card-indigo',
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Full transparency every week',
    description: 'Live dashboard access daily. Written Monday update — what changed, why, and what comes next. You never need to chase us for an update.',
    iconBg: 'rgba(37,99,235,0.1)', iconColor: '#2563eb', card: 'card-blue',
  },
  {
    icon: <Users size={20} />,
    title: 'Boutique capacity by design',
    description: 'We limit active clients deliberately. Fewer accounts means more attention, better results, and a 94% client retention rate.',
    iconBg: 'rgba(67,56,202,0.1)', iconColor: '#4338ca', card: 'card-indigo',
  },
];

const rows = [
  { feature: 'Who works on your account', us: 'Founder personally, on every account', them: 'Junior exec who changes every 6 months' },
  { feature: 'Onboarding time', us: '48 hours from contract signing', them: '2 to 4 weeks of discovery calls' },
  { feature: 'KPIs and accountability', us: 'Signed into the contract before we start', them: 'Discussed verbally, rarely documented' },
  { feature: 'Reporting', us: 'Live dashboard daily, written update every Monday', them: 'Monthly PDF sent when they remember' },
  { feature: 'Response time', us: 'Same day on WhatsApp or email', them: 'Scheduled calls and ticketing systems' },
  { feature: 'AI search visibility (AEO and GEO)', us: 'Core service, built into every strategy', them: 'Most have not built this capability yet' },
  { feature: 'Client capacity', us: 'Limited deliberately for quality', them: '50 to 100 accounts per team member' },
];

export default function AgencyComparison() {
  return (
    <section id="why-us" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Why us"
          title="Boutique by choice. Accountable by design."
          description="Big agencies win awards. We win results. Here is what actually changes when your account is managed by a founder who is personally invested in your growth."
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
              <div className="text-center text-sm font-bold py-2 rounded-xl" style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--accent-primary)' }}>
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
