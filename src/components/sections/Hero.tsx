'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';
import TypingText from '@/components/ui/TypingText';

const trust = ['No credit card required', '48-hour onboarding', '90-day results guarantee'];

function HeroBanner() {
  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Performance marketing dashboard showing ROAS growth, organic traffic increase, and conversion metrics for Indian D2C and SaaS brands"
      role="img"
      className="w-full max-w-lg mx-auto"
    >
      <title>AI-native performance marketing dashboard - Digi Brand Booster</title>
      {/* Background card */}
      <rect x="20" y="20" width="520" height="360" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5"/>

      {/* Header bar */}
      <rect x="20" y="20" width="520" height="52" rx="20" fill="white"/>
      <rect x="20" y="52" width="520" height="20" fill="white"/>
      <circle cx="52" cy="46" r="10" fill="#2563eb" opacity="0.12"/>
      <circle cx="52" cy="46" r="5" fill="#2563eb"/>
      <rect x="74" y="40" width="100" height="12" rx="6" fill="#e2e8f0"/>
      <rect x="420" y="38" width="80" height="16" rx="8" fill="#2563eb"/>
      <rect x="424" y="42" width="72" height="8" rx="4" fill="white" opacity="0.8"/>

      {/* KPI Cards row */}
      <rect x="36" y="90" width="140" height="76" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="52" y="115" fontSize="11" fill="#64748b" fontFamily="Inter, sans-serif">ROAS</text>
      <text x="52" y="142" fontSize="26" fontWeight="700" fill="#2563eb" fontFamily="Inter, sans-serif">4.1x</text>
      <text x="130" y="142" fontSize="11" fill="#059669" fontFamily="Inter, sans-serif">+240%</text>

      <rect x="192" y="90" width="140" height="76" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="208" y="115" fontSize="11" fill="#64748b" fontFamily="Inter, sans-serif">Organic Traffic</text>
      <text x="208" y="142" fontSize="26" fontWeight="700" fill="#7c3aed" fontFamily="Inter, sans-serif">312%</text>
      <text x="284" y="142" fontSize="11" fill="#059669" fontFamily="Inter, sans-serif">growth</text>

      <rect x="348" y="90" width="148" height="76" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="364" y="115" fontSize="11" fill="#64748b" fontFamily="Inter, sans-serif">AI Citations</text>
      <text x="364" y="142" fontSize="26" fontWeight="700" fill="#0ea5e9" fontFamily="Inter, sans-serif">48</text>
      <text x="408" y="142" fontSize="11" fill="#059669" fontFamily="Inter, sans-serif">AEO wins</text>

      {/* Chart area */}
      <rect x="36" y="184" width="320" height="140" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="52" y="208" fontSize="11" fontWeight="600" fill="#0f172a" fontFamily="Inter, sans-serif">Revenue Growth</text>
      <text x="260" y="208" fontSize="10" fill="#94a3b8" fontFamily="Inter, sans-serif">Last 90 days</text>
      {/* Chart line */}
      <polyline points="52,295 100,280 148,268 196,250 244,235 292,210 340,195" stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="52,295 100,280 148,268 196,250 244,235 292,210 340,195 340,310 52,310" fill="#2563eb" opacity="0.06"/>
      {/* Axis labels */}
      <text x="52" y="318" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">Week 1</text>
      <text x="148" y="318" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">Week 4</text>
      <text x="244" y="318" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">Week 8</text>
      <text x="316" y="318" fontSize="9" fill="#94a3b8" fontFamily="Inter, sans-serif">Week 12</text>
      {/* Dot at peak */}
      <circle cx="340" cy="195" r="5" fill="#2563eb"/>
      <circle cx="340" cy="195" r="9" fill="#2563eb" opacity="0.15"/>

      {/* Right panel */}
      <rect x="372" y="184" width="124" height="66" rx="12" fill="#2563eb"/>
      <text x="388" y="208" fontSize="10" fill="rgba(255,255,255,0.8)" fontFamily="Inter, sans-serif">CPL Reduced</text>
      <text x="388" y="234" fontSize="24" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">58%</text>

      <rect x="372" y="258" width="124" height="66" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="388" y="282" fontSize="10" fill="#64748b" fontFamily="Inter, sans-serif">Brands Grown</text>
      <text x="388" y="308" fontSize="24" fontWeight="700" fill="#0f172a" fontFamily="Inter, sans-serif">350+</text>

      {/* Badge */}
      <rect x="36" y="352" width="160" height="20" rx="10" fill="rgba(5,150,105,0.1)"/>
      <circle cx="52" cy="362" r="4" fill="#059669"/>
      <text x="62" y="366" fontSize="10" fill="#059669" fontFamily="Inter, sans-serif" fontWeight="600">90-Day Results Guarantee</text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative pt-24 pb-16 px-4 overflow-hidden"
      style={{ background: 'var(--bg-dark)' }}
      aria-label="Hero section - AI-native performance marketing agency India"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)', filter: 'blur(70px)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-5">
              <span className="pill">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-success)] animate-pulse" aria-hidden="true" />
                AI-Native Performance Marketing Agency India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl mb-5"
              style={{ color: 'var(--text-primary)' }}
            >
              Grow your brand{' '}
              <span className="gradient-text">
                <TypingText words={['3.5x faster.', 'with Meta Ads.', 'with AEO & GEO.', 'more profitably.']} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              India&apos;s leading performance marketing agency for D2C and SaaS brands. We run Meta Ads,
              Google Ads, SEO, AEO and GEO, with written KPIs and a 90-day results guarantee built into every contract.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <ShimmerButton variant="primary" href="#contact" className="px-7 py-3 text-base" title="Get a free 48-hour audit of your Meta Ads, Google Ads, and SEO - no credit card required">
                Get Free 48-Hour Audit <ArrowRight size={16} aria-hidden="true" />
              </ShimmerButton>
              <ShimmerButton variant="outline" href="#case-studies" className="px-7 py-3 text-base" title="See real brand growth case studies - ROAS, CPL reduction, and organic traffic results">
                View Case Studies
              </ShimmerButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--accent-success)' }} aria-hidden="true" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <HeroBanner />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          role="list"
          aria-label="Agency performance statistics"
        >
          {[
            { value: '350+', label: 'Brands Grown', title: 'Over 350 D2C and SaaS brands grown' },
            { value: '3.5x', label: 'Average ROAS', title: 'Average return on ad spend across all client accounts' },
            { value: '90%', label: 'Client Retention', title: '90% of clients renew after the first 90 days' },
            { value: '48h', label: 'Onboarding', title: 'Full account audit and strategy delivered in 48 hours' },
          ].map((s) => (
            <div key={s.label} className="card py-5 px-4 text-center" role="listitem" title={s.title}>
              <p className="font-heading text-3xl font-extrabold" style={{ color: 'var(--accent-primary)' }} aria-label={s.title}>{s.value}</p>
              <p className="text-sm mt-1 font-medium" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
