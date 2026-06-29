'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import { team } from '@/lib/data';

export default function Team() {
  return (
    <section id="team" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The team"
          title="Specialists, not generalists"
          description="Every person working on your account is a dedicated specialist in their channel: SEO and AI search, paid media, or content and conversion. No generalists, no handoffs."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => {
            const cardColors = ['card-blue', 'card-purple', 'card-green'] as const;
            const avatarColors = [
              { bg: 'rgba(37,99,235,0.1)',  color: '#2563eb' },
              { bg: 'rgba(124,58,237,0.1)', color: '#7c3aed' },
              { bg: 'rgba(5,150,105,0.1)',  color: '#059669' },
            ];
            const colorIdx = i % 3;
            return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className={cardColors[colorIdx]}>
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center font-heading text-2xl font-bold mb-4"
                  style={{ background: avatarColors[colorIdx].bg, color: avatarColors[colorIdx].color }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3
                  className="font-heading text-lg font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-semibold mt-1 mb-3" style={{ color: 'var(--accent-primary)' }}>
                  {member.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {member.bio}
                </p>
              </GlassCard>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
