'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';

const stats = [
  { value: '3+', label: 'Years in SEO', title: 'Over 3 years of hands-on SEO and performance marketing experience' },
  { value: '500+', label: 'Keywords Mapped', title: '500+ keywords researched, clustered and mapped to business goals' },
  { value: '200+', label: 'Pages Audited', title: '200+ pages technically audited and optimised' },
  { value: '35%', label: 'Avg Traffic Growth', title: 'Average 35% year-on-year organic traffic growth for clients' },
];

const skills = [
  'Technical SEO and Core Web Vitals',
  'Answer Engine Optimisation (AEO)',
  'Generative Engine Optimisation (GEO)',
  'Google Analytics 4 and Search Console',
  'Meta Ads and Google Ads',
  'AI-powered content workflows',
  'Schema Markup and E-E-A-T',
  'Conversion Rate Optimisation',
];

const tools = [
  'SEMrush', 'Ahrefs', 'Screaming Frog', 'GA4',
  'Google Search Console', 'Looker Studio', 'HubSpot',
  'ChatGPT', 'Claude AI', 'Google Tag Manager',
];

const certifications = [
  { name: 'Digital Marketing', issuer: 'HubSpot Academy', year: '2023' },
  { name: 'Technical SEO', issuer: 'SEMrush Academy', year: '2023' },
  { name: 'Webflow CMS', issuer: 'Webflow University', year: '2023' },
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 px-4"
      style={{ background: 'var(--bg-dark)' }}
      aria-label="About the founder — D Venkataramana"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The founder"
          title="The person behind the strategy"
          description="Every recommendation at Digi Brand Booster is backed by data, tied to a business goal, and measured against real KPIs."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — bio and stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar + name card */}
            <div className="card p-8 mb-6">
              <div className="flex items-center gap-5 mb-6">
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-heading text-2xl font-extrabold"
                  style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--accent-primary)' }}
                  aria-label="D Venkataramana initials"
                  title="D Venkataramana — Founder, Digi Brand Booster"
                >
                  DV
                </div>
                <div>
                  <h3
                    className="font-heading text-xl font-extrabold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    D Venkataramana
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
                    Founder and SEO Strategist
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                SEO Executive and Technical SEO Specialist with 3+ years of experience helping
                B2B and EdTech organisations improve search visibility, increase organic traffic,
                and drive measurable growth through technical SEO, content optimisation, analytics,
                and AI-powered marketing strategies.
              </p>

              <blockquote
                className="border-l-2 pl-4 italic text-sm leading-relaxed"
                style={{ borderColor: 'var(--accent-primary)', color: 'var(--text-secondary)' }}
              >
                "I connect SEO strategy directly to revenue impact. Every recommendation is backed
                by data, tied to a business goal, and measured against real KPIs."
              </blockquote>
            </div>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-4"
              role="list"
              aria-label="Founder performance statistics"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card py-5 px-4 text-center"
                  role="listitem"
                  title={s.title}
                >
                  <p
                    className="font-heading text-3xl font-extrabold"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs mt-1 font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — skills, tools, certs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Core skills */}
            <div className="card p-8">
              <h4
                className="font-heading text-base font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Core expertise
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <CheckCircle
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: 'var(--accent-success)' }}
                      aria-hidden="true"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="card p-8">
              <h4
                className="font-heading text-base font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Tools and platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg px-3 py-1.5 text-xs font-semibold"
                    style={{
                      background: 'rgba(37,99,235,0.07)',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(37,99,235,0.15)',
                    }}
                    title={`${t} — used for SEO and performance marketing`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-8">
              <h4
                className="font-heading text-base font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Certifications
              </h4>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {c.name}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {c.issuer}
                      </p>
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(5,150,105,0.1)', color: 'var(--accent-success)' }}
                    >
                      {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <ShimmerButton
                variant="primary"
                href="#contact"
                className="flex-1"
                title="Work with Venkataramana — get a free 48-hour audit"
              >
                Work with me
              </ShimmerButton>
              <ShimmerButton
                variant="outline"
                href="https://venkat-portfolio-omega.vercel.app/"
                title="View the full portfolio of D Venkataramana"
              >
                Full portfolio <ArrowRight size={14} aria-hidden="true" />
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
