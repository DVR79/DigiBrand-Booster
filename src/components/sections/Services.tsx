'use client';

import { motion } from 'framer-motion';
import { Target, Search, Code, FileText, TrendingUp, Brain, Sparkles, MapPin, Share2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { services } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={20} />,
  search: <Search size={20} />,
  code: <Code size={20} />,
  fileText: <FileText size={20} />,
  trendingUp: <TrendingUp size={20} />,
  brain: <Brain size={20} />,
  sparkles: <Sparkles size={20} />,
  mapPin: <MapPin size={20} />,
  share: <Share2 size={20} />,
};

const colorMap: Record<string, { card: string; iconBg: string; iconColor: string; planBg: string; planColor: string }> = {
  blue:   { card: 'card-blue',   iconBg: 'rgba(37,99,235,0.1)',   iconColor: '#2563eb', planBg: 'rgba(37,99,235,0.08)',   planColor: '#2563eb' },
  purple: { card: 'card-purple', iconBg: 'rgba(124,58,237,0.1)',  iconColor: '#7c3aed', planBg: 'rgba(124,58,237,0.08)',  planColor: '#7c3aed' },
  cyan:   { card: 'card-cyan',   iconBg: 'rgba(14,165,233,0.1)',  iconColor: '#0ea5e9', planBg: 'rgba(14,165,233,0.08)',  planColor: '#0891b2' },
  green:  { card: 'card-green',  iconBg: 'rgba(5,150,105,0.1)',   iconColor: '#059669', planBg: 'rgba(5,150,105,0.08)',   planColor: '#059669' },
  amber:  { card: 'card-amber',  iconBg: 'rgba(245,158,11,0.1)',  iconColor: '#f59e0b', planBg: 'rgba(245,158,11,0.08)',  planColor: '#d97706' },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Eight services. One goal — measurable growth."
          description="Every service is tied to a specific outcome. Pick the plan that fits your stage and we handle execution, reporting, and results."
        />

        {/* Plan legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['Starter', 'Growth', 'Scale'] as const).map((plan, i) => {
            const colors = [colorMap.blue, colorMap.green, colorMap.purple];
            const c = colors[i];
            return (
              <span
                key={plan}
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ background: c.planBg, color: c.planColor }}
              >
                {plan} plan
              </span>
            );
          })}
          <span className="text-xs" style={{ color: 'var(--text-muted)', alignSelf: 'center' }}>
            — shown on each card below
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const c = colorMap[service.color] ?? colorMap.blue;
            const planColor = service.plan === 'Starter' ? colorMap.blue : service.plan === 'Growth' ? colorMap.green : colorMap.purple;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className={`card p-6 flex flex-col ${c.card}`}
              >
                {/* Icon + plan badge row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: c.iconBg, color: c.iconColor }}
                  >
                    {iconMap[service.icon] ?? <Target size={20} />}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {service.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(124,58,237,0.1)', color: '#7c3aed' }}>
                        {service.badge}
                      </span>
                    )}
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: planColor.planBg, color: planColor.planColor }}
                    >
                      {service.plan}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>

                {/* Outcome — the one-liner they care about */}
                <p className="text-sm font-medium mb-3 leading-snug" style={{ color: c.iconColor }}>
                  {service.outcome}
                </p>

                {/* 3 bullet points */}
                <ul className="space-y-2 flex-1">
                  {service.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.iconColor }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ShimmerButton variant="cta" href="#contact" title="Book a free audit to discuss which services fit your goals">
            Get a free audit — we will recommend the right plan
          </ShimmerButton>
          <a href="#pricing" className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
            View pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
