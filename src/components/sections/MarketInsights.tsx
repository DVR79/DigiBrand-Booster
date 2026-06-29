'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Zap, Eye, Bot, Target, BarChart3 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';

const insights = [
  {
    icon: <Bot size={22} />,
    stat: '60%',
    label: 'of Google searches end without a click',
    detail: 'AI Overviews now answer the query directly on the results page. If your content is not the source being cited, you are invisible to that buyer.',
    color: 'blue',
    source: 'SparkToro, 2024',
  },
  {
    icon: <TrendingDown size={22} />,
    stat: '~40%',
    label: 'of Meta ad data is lost post-iOS 14',
    detail: 'Without server-side Conversions API, your Meta pixel is undercounting conversions. Most brands are making budget decisions on incomplete data.',
    color: 'purple',
    source: 'Meta Business, 2023',
  },
  {
    icon: <Zap size={22} />,
    stat: '100M+',
    label: 'queries per day on ChatGPT alone',
    detail: 'Your potential customers are asking AI tools to recommend the best product or service in your category. Most brands have zero visibility in those answers.',
    color: 'green',
    source: 'OpenAI, 2024',
  },
  {
    icon: <Eye size={22} />,
    stat: '3–5x',
    label: 'higher CTR from AI Overview citations vs. blue links',
    detail: 'Being cited in a Google AI Overview drives more clicks than ranking #1 in traditional results. AEO is now the highest-value organic channel available.',
    color: 'blue',
    source: 'Semrush, 2024',
  },
  {
    icon: <Target size={22} />,
    stat: '68%',
    label: 'of online experiences begin with a search engine',
    detail: 'But search is no longer just Google. Perplexity, ChatGPT Search, and Gemini are capturing a growing share of discovery moments. SEO alone is not enough.',
    color: 'green',
    source: 'BrightEdge, 2024',
  },
  {
    icon: <BarChart3 size={22} />,
    stat: '75%',
    label: 'of users never scroll past page one of Google',
    detail: "If you are not on page one for your buyer's search terms, you effectively do not exist. Technical SEO, content strategy, and link building fix this systematically.",
    color: 'purple',
    source: 'Backlinko, 2024',
  },
];

const colorMap: Record<string, { iconBg: string; iconColor: string; statColor: string; card: string }> = {
  blue:   { iconBg: 'rgba(37,99,235,0.1)',  iconColor: '#2563eb', statColor: '#2563eb', card: 'card-blue' },
  purple: { iconBg: 'rgba(124,58,237,0.1)', iconColor: '#7c3aed', statColor: '#7c3aed', card: 'card-purple' },
  green:  { iconBg: 'rgba(5,150,105,0.1)',  iconColor: '#059669', statColor: '#059669', card: 'card-green' },
  cyan:   { iconBg: 'rgba(37,99,235,0.1)',  iconColor: '#2563eb', statColor: '#2563eb', card: 'card-blue' },
  amber:  { iconBg: 'rgba(124,58,237,0.1)', iconColor: '#7c3aed', statColor: '#7c3aed', card: 'card-purple' },
};

export default function MarketInsights() {
  return (
    <section id="insights-stats" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Market Reality"
          title="What most brands don't know — but should"
          description="The way customers discover and buy has changed faster in the last two years than in the previous ten. Here is what the data actually says."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item, i) => {
            const c = colorMap[item.color] ?? colorMap.blue;
            return (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`card p-6 ${c.card}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: c.iconBg, color: c.iconColor }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{item.source}</span>
                </div>

                <p className="font-heading text-4xl font-extrabold mb-1" style={{ color: c.statColor }}>
                  {item.stat}
                </p>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            Your brand is competing in every one of these channels. The question is whether you are showing up.
          </p>
          <ShimmerButton variant="cta" href="#contact" title="Book a free audit to find out where your brand is missing">
            Find out where you are missing — free audit
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
