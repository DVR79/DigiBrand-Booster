'use client';

import { motion } from 'framer-motion';
import ShimmerButton from '@/components/ui/ShimmerButton';
import TypingText from '@/components/ui/TypingText';
import { siteConfig } from '@/lib/data';

const fadUp = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Background aurora blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, var(--accent-primary) 0%, var(--accent-purple) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] opacity-10"
        style={{
          background:
            'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          variants={fadUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            color: 'var(--accent-primary)',
          }}
        >
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ background: 'var(--accent-success)' }}
          />
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          variants={fadUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Brands that grow{' '}
          <TypingText words={['3.5x faster.', 'more profitably.', 'without guessing.']} />
        </motion.h1>

        <motion.p
          variants={fadUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We run paid media, SEO, and conversion systems for ambitious D2C and SaaS brands. Every
          engagement comes with a 90-day results guarantee, or you get your money back.
        </motion.p>

        <motion.div
          variants={fadUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShimmerButton variant="cta" href="#contact" className="px-8 py-4 text-base">
            Get Free Audit
          </ShimmerButton>
          <ShimmerButton variant="outline" href="#case-studies" className="px-8 py-4 text-base">
            See Case Studies
          </ShimmerButton>
        </motion.div>

        <motion.p
          variants={fadUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 text-xs"
          style={{ color: 'var(--text-secondary)' }}
        >
          No credit card. 48-hour onboarding. 90-day guarantee.
        </motion.p>
      </div>
    </section>
  );
}
