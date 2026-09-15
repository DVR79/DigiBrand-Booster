import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  CheckCircle2,
  TrendingUp,
  PenLine,
  Eye,
  Users,
  Search,
  MousePointerClick,
  Palette,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Digi Brand Booster: Senior-Led Performance Marketing',
  description:
    'Why high-stakes brands pick a senior-led boutique over a factory-line agency. A senior specialist works every account. Senior-only team, month-to-month, no lock-in.',
};

const philosophyCards = [
  {
    Icon: PenLine,
    iconBg: 'rgba(0,0,0,0.04)',
    iconColor: '#000000',
    title: 'KPIs signed before we start',
    body: 'Your ROAS, cost per lead, or traffic target is written into the contract up front, so what we are accountable for is always clear.',
    tag: 'KPIs in writing',
  },
  {
    Icon: Eye,
    iconBg: 'rgba(0,88,190,0.06)',
    iconColor: '#0058be',
    title: 'Reporting you never chase',
    body: 'A live dashboard daily and a written Monday update covering what changed, why, and what is next.',
    tag: 'Live Reporting',
  },
  {
    Icon: Users,
    iconBg: 'rgba(19,27,46,0.05)',
    iconColor: '#11161e',
    title: 'Small client list, by design',
    body: 'We cap active clients deliberately. Fewer accounts means real attention and partnerships that last.',
    tag: '94% Client Retention',
  },
];

const comparison = [
  {
    label: 'Who works on your account',
    us: 'Senior strategist on every account',
    them: 'Junior exec who rotates off in months',
  },
  {
    label: 'Onboarding time',
    us: '48 hours from contract signing',
    them: '2 to 4 weeks of discovery calls',
  },
  {
    label: 'KPIs and accountability',
    us: 'In the signed contract before we start',
    them: 'Discussed on a call, rarely written down',
  },
  {
    label: 'Client capacity',
    us: 'Kept deliberately low for quality',
    them: '50 to 100 accounts per team member',
  },
];

const specialisms = [
  { Icon: Search,           label: 'SEO & AI Search',          bg: 'rgba(0,0,0,0.04)',      color: '#000000' },
  { Icon: MousePointerClick, label: 'Paid Media (Meta/Google)', bg: 'rgba(0,88,190,0.06)',   color: '#0058be' },
  { Icon: Palette,           label: 'Content & CRO',            bg: 'rgba(19,27,46,0.05)',   color: '#11161e' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ───────────────────────────────────── */}
        <section
          className="relative text-center overflow-hidden"
          style={{
            paddingTop: '148px',
            paddingBottom: '100px',
            background: [
              'radial-gradient(ellipse at top, rgba(0, 88, 190,0.45) 0%, transparent 60%)',
              'radial-gradient(circle at 25% 75%, rgba(190,198,224,0.3) 0%, transparent 55%)',
              '#f7f9fb',
            ].join(', '),
          }}
        >
          {/* Soft blobs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div style={{ position: 'absolute', top: '20%', left: '20%', width: 400, height: 400, background: '#d8e2ff', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.35 }} />
            <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: 400, height: 400, background: '#d8e2ff', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.3 }} />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Eyebrow */}
            <span
              className="inline-block px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
              style={{ background: 'rgba(0,88,190,0.06)', border: '1px solid rgba(0,88,190,0.18)', color: '#0058be' }}
            >
              The Agency Alternative
            </span>

            {/* H1 */}
            <h1
              className="font-heading font-bold leading-[1.12] tracking-tight mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', color: '#000000' }}
            >
              Boutique by choice.
              <br />
              <span className="font-heading" style={{ color: '#0058be' }}>Accountable by design.</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg leading-relaxed mx-auto"
              style={{ color: '#45464d', maxWidth: '640px' }}
            >
              Why high-stakes brands pick a senior-led team over a factory-line agency.
              We do not hide behind account managers. We put our name on the results.
            </p>
          </div>
        </section>

        {/* ── FOUNDER SPOTLIGHT ──────────────────────── */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ background: '#ffffff' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: founder image + floating stat */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/team-visual.webp"
                    alt="Venkat, Founder of Digi Brand Booster"
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover"
                    style={{ minHeight: '380px', objectPosition: 'center top' }}
                  />
                </div>
                {/* Floating stat card */}
                <div
                  className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl p-6 shadow-xl"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.6)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ background: 'rgba(0,88,190,0.08)' }}>
                      <TrendingUp size={22} style={{ color: '#0058be' }} />
                    </div>
                    <div>
                      <div
                        className="font-heading text-2xl font-bold"
                        style={{ color: '#000000' }}
                      >
                        3+ Years
                      </div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wider mt-0.5"
                        style={{ color: '#45464d' }}
                      >
                        Technical SEO &amp; AI Search
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: copy */}
              <div>
                <h2
                  className="font-heading font-semibold leading-tight mb-6"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#000000' }}
                >
                  Senior-led on every account.
                </h2>

                {/* Pull quote */}
                <p
                  className="text-lg leading-relaxed mb-8 italic"
                  style={{
                    color: '#45464d',
                    borderLeft: '4px solid #0058be',
                    paddingLeft: '24px',
                  }}
                >
                  "The specialist who audits your account is the one who scales it. You talk
                  with the person doing the work, not a manager relaying it."
                </p>

                {/* Feature items */}
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div
                      className="mt-1 p-2 rounded-lg flex-shrink-0"
                      style={{ background: 'rgba(0,88,190,0.08)' }}
                    >
                      <CheckCircle2 size={20} style={{ color: '#0058be' }} />
                    </div>
                    <div>
                      <h4
                        className="font-heading text-lg font-bold mb-1"
                        style={{ color: '#000000' }}
                      >
                        Direct Accountability
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#45464d' }}>
                        No handoffs. The specialist who audits your account is the one who scales it.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div
                      className="mt-1 p-2 rounded-lg flex-shrink-0"
                      style={{ background: 'rgba(0,88,190,0.08)' }}
                    >
                      <TrendingUp size={20} style={{ color: '#0058be' }} />
                    </div>
                    <div>
                      <h4
                        className="font-heading text-lg font-bold mb-1"
                        style={{ color: '#000000' }}
                      >
                        Proven Expertise
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#45464d' }}>
                        Three-plus years building organic growth for D2C, EdTech, and B2B brands, with technical SEO and AI search as the core craft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY CARDS ───────────────────────── */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ background: '#f7f9fb' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2
                className="font-heading font-semibold leading-tight"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#000000' }}
              >
                The Booster Framework
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#45464d' }}>
                Documented, repeatable, and accountable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {philosophyCards.map(({ Icon, iconBg, iconColor, title, body, tag }) => (
                <div
                  key={title}
                  className="rounded-2xl p-10 flex flex-col transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    background: 'rgba(255,255,255,0.65)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    boxShadow: '0 4px 24px rgba(13,27,46,0.06)',
                  }}
                >
                  <div
                    className="inline-flex p-3 rounded-xl mb-6 self-start"
                    style={{ background: iconBg, border: `1px solid ${iconBg}` }}
                  >
                    <Icon size={22} style={{ color: iconColor }} />
                  </div>
                  <h3
                    className="font-heading text-2xl font-semibold mb-4"
                    style={{ color: '#000000' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-8" style={{ color: '#45464d' }}>
                    {body}
                  </p>
                  <div
                    className="text-xs font-bold uppercase tracking-widest pt-4"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.08)', color: '#0058be' }}
                  >
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ───────────────────────── */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8"
          style={{ background: '#f2f4f6', borderTop: '1px solid #e0e3e5', borderBottom: '1px solid #e0e3e5' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2
                className="font-heading font-semibold leading-tight"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#000000' }}
              >
                How we compare
              </h2>
              <p className="mt-4 text-lg" style={{ color: '#45464d' }}>
                The reality of the agency model, challenged.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-2xl shadow-xl"
              style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {/* Header row */}
              <div
                className="grid grid-cols-3"
                style={{ background: '#f2f4f6', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="p-6 text-xs font-semibold uppercase tracking-widest" style={{ color: '#45464d' }}>
                  What matters to you
                </div>
                <div
                  className="p-6 font-heading text-lg font-bold"
                  style={{ background: 'rgba(0,0,0,0.02)', borderLeft: '1px solid rgba(0,0,0,0.06)', borderRight: '1px solid rgba(0,0,0,0.06)', color: '#000000' }}
                >
                  Digi Brand Booster
                </div>
                <div className="p-6 text-xs font-semibold uppercase tracking-widest" style={{ color: '#45464d' }}>
                  Large Agency
                </div>
              </div>

              {/* Data rows */}
              <div className="divide-y" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
                {comparison.map((row, i) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-3 transition-colors hover:bg-[rgba(247,249,251,0.5)]"
                    style={{ background: i % 2 === 1 ? 'rgba(247,249,251,0.4)' : undefined }}
                  >
                    <div className="p-6 font-semibold text-sm" style={{ color: '#000000' }}>
                      {row.label}
                    </div>
                    <div
                      className="p-6 text-sm font-medium flex items-center gap-3"
                      style={{
                        background: 'rgba(0,0,0,0.015)',
                        borderLeft: '1px solid rgba(0,0,0,0.06)',
                        borderRight: '1px solid rgba(0,0,0,0.06)',
                        color: '#000000',
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: '#0058be', flexShrink: 0 }} />
                      {row.us}
                    </div>
                    <div className="p-6 text-sm" style={{ color: '#45464d' }}>
                      {row.them}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIALISTS ────────────────────────────── */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 text-center"
          style={{ background: '#ffffff' }}
        >
          <div className="mx-auto max-w-5xl">
            <h2
              className="font-heading font-semibold leading-tight mb-6"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#000000' }}
            >
              Specialists, not generalists.
            </h2>
            <p
              className="text-lg leading-relaxed mx-auto mb-12"
              style={{ color: '#45464d', maxWidth: '680px' }}
            >
              Every person on your account specialises in one channel: SEO and AI search, paid media, or content and conversion. No generalists spreading thin, no handoffs.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {specialisms.map(({ Icon, label, bg, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-8 py-5 rounded-2xl cursor-default transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                  style={{ background: '#f3f3f4', border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <div className="p-2 rounded-lg" style={{ background: bg }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <span
                    className="font-heading text-lg font-bold"
                    style={{ color: '#000000' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ────────────────────────────── */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{ background: '#11161e' }}
        >
          {/* Subtle glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div style={{ position: 'absolute', top: '30%', left: '30%', width: 500, height: 400, background: '#0058be', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.08 }} />
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div
              className="text-center rounded-3xl px-10 py-16 md:px-20"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h2
                className="font-heading font-semibold leading-tight mb-6 text-white"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
              >
                Ready to start your audit?
              </h2>
              <p
                className="text-lg leading-relaxed mx-auto mb-10"
                style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '540px' }}
              >
                Get a 48-hour deep dive into your ad accounts, analytics, SEO, and closest
                competitors. No commitment needed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5">
                <a
                  href="/#contact"
                  className="px-8 py-4 rounded-full text-sm font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5"
                  style={{ background: '#ffffff', color: '#11161e' }}
                >
                  Get Your Free 48-Hour Audit
                </a>
                <a
                  href="/#pricing"
                  className="btn-outline-dark px-8 py-4 rounded-full text-sm font-semibold"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
