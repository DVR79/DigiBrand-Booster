'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { insightPosts } from '@/lib/data';

export default function Insights() {
  return (
    <section id="insights" className="py-24 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <SectionHeader
            eyebrow="Insights"
            title="Practical guides, no fluff"
            center={false}
          />
          <ShimmerButton variant="outline" href="#insights">
            View all
          </ShimmerButton>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insightPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col">
                <span
                  className="inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4 w-fit"
                  style={{ background: 'var(--bg-card-hover)', color: 'var(--accent-primary)' }}
                >
                  {post.category}
                </span>
                <h3
                  className="font-heading text-lg font-bold mb-2 flex-1"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {post.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    {post.readTime}
                  </span>
                  <a
                    href={`/insights/${post.slug}`}
                    className="flex items-center gap-1 text-xs font-semibold transition-colors"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    Read <ArrowRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
