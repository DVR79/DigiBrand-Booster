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
      detail: 'AI Overviews and answer engines now respond on the results page itself. If your page is not the source they cite, that buyer never sees you.',
      source: 'SparkToro, 2024',
    },
    result: {
      stat: '15+',
      label: 'AI citations earned per AEO client',
      detail: 'We restructure content question-first so ChatGPT, Perplexity, and Google AI Overviews can lift the answer and name your brand as the source.',
      badge: 'AEO / GEO',
    },
  },
  {
    color: 'indigo',
    icon: <TrendingDown size={20} />,
    challenge: {
      stat: '~40%',
      label: 'of Meta ad data lost post-iOS 14',
      detail: 'Without server-side Conversions API, the browser pixel undercounts conversions, so Meta optimises on partial data and you overspend to hit the same result.',
      source: 'Meta Business, 2023',
    },
    result: {
      stat: '41%',
      label: 'average CPL reduction, paid media clients',
      detail: 'We install server-side tracking with proper deduplication, rebuild targeting on first-party data, and cut wasted spend inside the first 30 days.',
      badge: 'Meta Ads',
    },
  },
  {
    color: 'blue',
    icon: <BarChart3 size={20} />,
    challenge: {
      stat: '75%',
      label: 'of users never scroll past page one',
      detail: "If you are not on page one for the terms your buyers use, that traffic effectively does not exist for you.",
      source: 'Backlinko, 2024',
    },
    result: {
      stat: '260%',
      label: 'average organic growth, SEO clients',
      detail: 'Technical fixes first, then content mapped to buyer intent and links that actually shift rankings, not vanity metrics.',
      badge: 'SEO',
    },
  },
  {
    color: 'blue',
    icon: <Target size={20} />,
    challenge: {
      stat: '100M+',
      label: 'queries per day on ChatGPT alone',
      detail: 'Your buyers are asking AI tools which brand to pick. Most businesses have no plan for showing up in that answer.',
      source: 'OpenAI, 2024',
    },
    result: {
      stat: '4x',
      label: 'best paid ROAS achieved',
      detail: 'We pair tight paid-search targeting with AI-search visibility, so you win the click and the recommendation.',
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
    accent: '#0058be',
    iconBg: 'rgba(0, 88, 190,0.1)',
    iconColor: '#0058be',
    badgeBg: 'rgba(0, 88, 190,0.08)',
    badgeColor: '#0058be',
    statColor: '#0058be',
    border: 'rgba(0, 88, 190,0.18)',
    resultBg: 'rgba(0, 88, 190,0.03)',
  },
  indigo: {
    accent: '#2170e4',
    iconBg: 'rgba(230, 151, 0,0.1)',
    iconColor: '#2170e4',
    badgeBg: 'rgba(230, 151, 0,0.08)',
    badgeColor: '#2170e4',
    statColor: '#2170e4',
    border: 'rgba(230, 151, 0,0.18)',
    resultBg: 'rgba(230, 151, 0,0.03)',
  },
};

export default function MarketResults() {
  return (
    <section id="results" className="py-14 md:py-20 px-4" style={{ background: '#f3f3f4' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The market problem, and our answer"
          title="Each number is a problem we were hired to solve"
          description="On the left, a shift happening across the market. On the right, what we did for a client facing exactly that. The market stats are sourced; the results come from client accounts."
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
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: c.border }}>

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
            Client results here are actual, from accounts we ran in the last 12 months. Best cases are marked as such, not presented as averages.
          </p>
          <ShimmerButton variant="cta" href="/#contact" title="Book a free audit and see how we can move the numbers for your brand">
            Get a free audit for your brand
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
