'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Code, FileText, TrendingUp, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { serviceTabs } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={22} />, search: <Search size={22} />, code: <Code size={22} />,
  fileText: <FileText size={22} />, trendingUp: <TrendingUp size={22} />, mail: <Mail size={22} />,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 px-4 section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Services built for measurable growth"
          description="We focus on three channels where we can move the needle in 90 days."
        />

        <div className="flex justify-center mb-10 gap-2 flex-wrap">
          {serviceTabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className="rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200"
              style={{
                background: activeTab === i ? 'var(--accent-primary)' : 'var(--bg-dark)',
                color: activeTab === i ? '#fff' : 'var(--text-secondary)',
                border: activeTab === i ? '1px solid var(--accent-primary)' : '1px solid var(--border)',
                boxShadow: activeTab === i ? 'var(--shadow-md)' : 'none',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {serviceTabs[activeTab].services.map((service) => (
            <div key={service.title} className="card p-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                style={{ background: 'rgba(37,99,235,0.08)', color: 'var(--accent-primary)' }}
              >
                {iconMap[service.icon] ?? <Target size={22} />}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
              <ul className="space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: 'var(--accent-success)' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
