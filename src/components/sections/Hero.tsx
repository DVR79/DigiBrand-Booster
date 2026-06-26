'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';
import TypingText from '@/components/ui/TypingText';

const trust = ['No credit card required', '48-hour onboarding', '90-day guarantee'];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      {/* Blue glow top */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-success)] animate-pulse" />
            AI-Native Performance Marketing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Grow your brand{' '}
          <span className="gradient-text">
            <TypingText words={['3.5x faster.', 'more profitably.', 'with confidence.']} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We run paid media, SEO, and conversion systems for ambitious D2C and SaaS brands.
          Every engagement comes with a 90-day results guarantee, or you get your money back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <ShimmerButton variant="primary" href="#contact" className="px-7 py-3 text-base">
            Get Free Audit <ArrowRight size={16} />
          </ShimmerButton>
          <ShimmerButton variant="outline" href="#case-studies" className="px-7 py-3 text-base">
            See Case Studies
          </ShimmerButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          {trust.map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <CheckCircle size={14} style={{ color: 'var(--accent-success)' }} />
              {t}
            </span>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '350+', label: 'Brands Grown' },
            { value: '3.5x', label: 'Average ROAS' },
            { value: '90%', label: 'Client Retention' },
            { value: '48h', label: 'Onboarding' },
          ].map((s) => (
            <div
              key={s.label}
              className="card py-5 px-4 text-center"
            >
              <p className="font-heading text-3xl font-extrabold" style={{ color: 'var(--accent-primary)' }}>{s.value}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
