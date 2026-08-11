'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, GraduationCap, Building2, Cpu, Heart, BarChart2 } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { industries } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  shopping: <ShoppingCart size={22} />,
  graduation: <GraduationCap size={22} />,
  building: <Building2 size={22} />,
  cpu: <Cpu size={22} />,
  heart: <Heart size={22} />,
  chart: <BarChart2 size={22} />,
};

const cardColors = [
  { card: 'card-blue',   iconBg: 'rgba(37,99,235,0.1)',  iconColor: '#2563eb', tagBg: 'rgba(37,99,235,0.08)',  tagColor: '#2563eb' },
  { card: 'card-indigo', iconBg: 'rgba(67,56,202,0.1)',  iconColor: '#4338ca', tagBg: 'rgba(67,56,202,0.08)',  tagColor: '#4338ca' },
  { card: 'card-blue',   iconBg: 'rgba(37,99,235,0.1)',  iconColor: '#2563eb', tagBg: 'rgba(37,99,235,0.08)',  tagColor: '#2563eb' },
  { card: 'card-indigo', iconBg: 'rgba(67,56,202,0.1)',  iconColor: '#4338ca', tagBg: 'rgba(67,56,202,0.08)',  tagColor: '#4338ca' },
  { card: 'card-blue',   iconBg: 'rgba(37,99,235,0.1)',  iconColor: '#2563eb', tagBg: 'rgba(37,99,235,0.08)',  tagColor: '#2563eb' },
  { card: 'card-indigo', iconBg: 'rgba(67,56,202,0.1)',  iconColor: '#4338ca', tagBg: 'rgba(67,56,202,0.08)',  tagColor: '#4338ca' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Industries"
          title="We know your market, not just your metrics"
          description="Vertical expertise means faster ramp-up, fewer wasted experiments, and campaigns built around how your customers actually buy."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const color = cardColors[i % cardColors.length];
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className={`card p-6 ${color.card}`}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                  style={{ background: color.iconBg, color: color.iconColor }}
                >
                  {iconMap[industry.icon]}
                </div>

                <h3 className="font-heading text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {industry.name}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {industry.pain}
                </p>

                <div className="flex flex-wrap gap-2">
                  {industry.channels.map((ch) => (
                    <span
                      key={ch}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: color.tagBg, color: color.tagColor }}
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
