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
          description="Everyone here has 8 to 12 years of focused experience in their channel."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard>
                {/* Avatar placeholder */}
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center font-heading text-2xl font-bold mb-4"
                  style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-primary)' }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
