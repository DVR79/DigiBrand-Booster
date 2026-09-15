'use client';

import Image from 'next/image';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { User, Zap, Unlock } from 'lucide-react';

const trust = [
  { Icon: User,   label: 'Senior-led accounts' },
  { Icon: Zap,    label: '48-hour audit' },
  { Icon: Unlock, label: 'Month-to-month, no lock-in' },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-20"
      style={{ background: '#f3f3f4' }}
      aria-label="Hero, Digi Brand Booster"
    >
      {/* Amber accent background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(0, 88, 190, 0.14), transparent 45%), radial-gradient(circle at bottom left, rgba(17, 22, 30, 0.05), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left copy block ────────────────────────── */}
          <div>
            {/* H1 with accent */}
            <h1
              className="font-heading font-bold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(38px, 5.2vw, 60px)', color: '#11161e' }}
            >
              Get found on Google.
              <br />
              Get cited by AI.
              <br />
              <span
                className="font-heading"
                style={{ color: '#0058be', fontWeight: 600 }}
              >
                Get chosen.
              </span>
            </h1>

            {/* Body copy */}
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#45464d', maxWidth: '520px' }}
            >
              Your next customer is on Google, Meta, and AI before they ever contact you. We make your brand show up and get chosen across every one, through SEO, paid ads, and AI-search optimisation, so your brand is the one AI cites and recommends when buyers are deciding.
            </p>

            {/* CTAs — Hamela notched buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <ShimmerButton href="/#contact" variant="primary" size="lg">
                Get Your Free Audit
              </ShimmerButton>
              <ShimmerButton href="/#case-studies" variant="outline" size="lg">
                See Real Results
              </ShimmerButton>
            </div>

            {/* Trust indicators - horizontal pills */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-5 border-t" style={{ borderColor: '#e0e3e5' }}>
              {trust.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: '#45464d' }}
                >
                  <Icon size={16} style={{ color: '#0058be' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: professional photo with floating stat card ── */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-[6px]"
              style={{ boxShadow: '0 24px 60px rgba(17,22,30,0.18)' }}
            >
              <Image
                src="/images/hero-team.webp"
                alt="A senior marketing specialist reviewing client performance with the team"
                width={1000}
                height={667}
                priority
                className="w-full object-cover"
                style={{ height: '520px' }}
              />
              {/* subtle dark gradient at the base for the card to sit on */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(17,22,30,0.35), transparent)' }}
                aria-hidden="true"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 left-4 sm:left-8 flex gap-6 rounded-[6px] px-6 py-5"
              style={{ background: '#11161e', boxShadow: '0 20px 45px rgba(0,0,0,0.28)' }}
            >
              <div>
                <p className="font-heading text-3xl font-bold" style={{ color: '#0058be' }}>4.0x</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Best paid ROAS</p>
              </div>
              <div className="pl-6" style={{ borderLeft: '1px solid rgba(255,255,255,0.15)' }}>
                <p className="font-heading text-3xl font-bold text-white">94%</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Client retention</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
