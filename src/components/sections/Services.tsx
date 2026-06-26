'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Code, FileText, TrendingUp, Mail, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { serviceTabs } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={20} />,
  search: <Search size={20} />,
  code: <Code size={20} />,
  fileText: <FileText size={20} />,
  trendingUp: <TrendingUp size={20} />,
  mail: <Mail size={20} />,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Services built for measurable growth"
          description="We focus on three channels where we can move the needle in 90 days. No half-measures."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-2 flex-wrap">
          {serviceTabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200"
              style={{
                background: activeTab === i ? 'var(--accent-primary)' : 'var(--bg-card)',
                color: activeTab === i ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {serviceTabs[activeTab].services.map((service) => (
            <GlassCard key={service.title}>
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg mb-4"
                style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-primary)' }}
              >
                {iconMap[service.icon] ?? <Target size={20} />}
              </div>
              <h3
                className="font-heading text-xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: 'var(--accent-success)' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
