'use client';

import { motion } from 'framer-motion';
import { Bot, TrendingDown, BarChart3, Target, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';

const pairs = [
  {
    color: 'blue',

    icon: <Bot size={20} />,
    challenge: {
      stat: '60%',
      label: 'of Google searches end without a click',
      detail: 'AI Overviews now answer queries directly on the results page. Brands not cited as the source are invisible to that buyer.',
      source: 'SparkToro, 2024',
    },
    result: {
      stat: '15+',
      label: 'AI citations earned per AEO client',
      detail: 'We structure your content so AI engines like ChatGPT, Perplexity, and Google AI Overviews cite your brand as the answer.',
      badge: 'AEO / GEO',
    },
  },
  {
    color: 'indigo',
    icon: <TrendingDown size={20} />,
    challenge: {
      stat: '~40%',
      label: 'of Meta ad data lost post-iOS 14',
      detail: 'Without server-side Conversions API, your Meta pixel undercounts conversions. Most brands bid on incomplete data and overspend.',
      source: 'Meta Business, 2023',
    },
    result: {
      stat: '41%',
      label: 'avg CPL reduction (paid media clients)',
      detail: 'We implement server-side tracking, rebuild audience targeting from first-party data, and cut wasted spend within the first 30 days.',
      badge: 'Meta Ads',
    },
  },
  {
    color: 'blue',
    icon: <BarChart3 size={20} />,
    challenge: {
      stat: '75%',
      label: 'of users never scroll past page one',
      detail: "If you are not ranking on page one for your buyers' search terms, you effectively do not exist to that traffic.",
      source: 'Backlinko, 2024',
    },
    result: {
      stat: '260%',
      label: 'avg organic traffic growth (SEO clients)',
      detail: 'Technical SEO fixes, content built around buyer intent, and systematic link building that moves rankings within 90 days.',
      badge: 'SEO',
    },
  },
  {
    color: 'blue',
    icon: <Target size={20} />,
    challenge: {
      stat: '100M+',
      label: 'queries per day on ChatGPT alone',
      detail: 'Your buyers are asking AI tools which brand to choose. Most businesses have zero strategy for appearing in those answers.',
      source: 'OpenAI, 2024',
    },
    result: {
      stat: '4x',
      label: 'best paid ROAS achieved (Google Ads)',
      detail: 'While competitors chase clicks, we combine paid media precision with AI-search visibility so your brand wins across every touchpoint.',
      badge: 'Google Ads',
    },
  },
];

const colorMap: Record<string, {
  accent: string;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeColor: string;
  statColor: string;
  border: string;
  resultBg: string;
}> = {
  blue: {
    accent: '#2563eb',
    iconBg: 'rgba(37,99,235,0.1)',
    iconColor: '#2563eb',
    badgeBg: 'rgba(37,99,235,0.08)',
    badgeColor: '#2563eb',
    statColor: '#2563eb',
    border: 'rgba(37,99,235,0.18)',
    resultBg: 'rgba(37,99,235,0.03)',
  },
  indigo: {
    accent: '#4338ca',
    iconBg: 'rgba(67,56,202,0.1)',
    iconColor: '#4338ca',
    badgeBg: 'rgba(67,56,202,0.08)',
    badgeColor: '#4338ca',
    statColor: '#4338ca',
    border: 'rgba(67,56,202,0.18)',
    resultBg: 'rgba(67,56,202,0.03)',
  },
};

export default function MarketResults() {
  return (
    <section id="results" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Market reality vs. our results"
          title="The problem is real. So is the proof."
          description="Every stat below is a market-wide challenge. Next to it is what we actually delivered for clients facing the same problem."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {pairs.map((pair, i) => {
            const c = colorMap[pair.color];
            return (
              <motion.div
                key={pair.challenge.stat}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card overflow-hidden"
                style={{ borderTop: `3px solid ${c.accent}` }}
              >
                {/* Top: icon + badge row */}
                <div className="flex items-center justify-between px-6 pt-5 pb-4" style={{ borderBottom: `1px solid ${c.border}` }}>
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{ background: c.iconBg, color: c.iconColor }}
                    >
                      {pair.icon}
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: c.badgeBg, color: c.badgeColor }}>
                      {pair.result.badge}
                    </span>
                  </div>
                </div>

                {/* Two columns: challenge | result */}
                <div className="grid grid-cols-2 divide-x" style={{ borderColor: c.border }}>

                  {/* Left: market challenge */}
                  <div className="px-5 py-5" style={{ background: 'var(--bg-card)' }}>
                    <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                      Market reality
                    </p>
                    <p className="font-heading text-3xl font-extrabold mb-1" style={{ color: 'var(--text-secondary)' }}>
                      {pair.challenge.stat}
                    </p>
                    <p className="text-xs font-semibold mb-3 leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {pair.challenge.label}
                    </p>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {pair.challenge.detail}
                    </p>
                    <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                      {pair.challenge.source}
                    </span>
                  </div>

                  {/* Right: our result */}
                  <div className="px-5 py-5 relative" style={{ background: c.resultBg }}>
                    <div className="flex items-center gap-1.5 mb-3">
                      <ArrowRight size={12} style={{ color: c.accent }} />
                      <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: c.badgeColor }}>
                        Our result
                      </p>
                    </div>
                    <p className="font-heading text-3xl font-extrabold mb-1" style={{ color: c.statColor }}>
                      {pair.result.stat}
                    </p>
                    <p className="text-xs font-semibold mb-3 leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {pair.result.label}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {pair.result.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            These are not projections. They are pulled from live client accounts in the last 12 months.
          </p>
          <ShimmerButton variant="cta" href="/#contact" title="Book a free audit and see how we can move the numbers for your brand">
            Get a free audit for your brand
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
