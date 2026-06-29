'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4" style={{ background: 'var(--bg-dark)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent pricing. No percentage-of-spend surprises."
          description="Flat monthly retainer. KPIs written into the contract. 90-day guarantee on every plan. Ad spend is paid directly to the platform, not through us."
        />

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={tier.highlight ? 'relative' : ''}
            >
              {tier.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white"
                  style={{ background: 'var(--accent-primary)' }}
                >
                  Most Popular
                </div>
              )}

              <div
                className="card p-8 h-full flex flex-col"
                style={tier.highlight ? { borderColor: 'var(--accent-primary)', borderWidth: '2px' } : {}}
              >
                {/* Header */}
                <div className="mb-6">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: tier.highlight ? 'var(--accent-primary)' : 'var(--text-muted)' }}
                  >
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-heading text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                      {tier.price}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{tier.priceNote}</span>
                  </div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{tier.tagline}</p>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{tier.ideal}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ background: 'rgba(5,150,105,0.1)', color: '#059669' }}
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <ShimmerButton
                  variant={tier.highlight ? 'cta' : 'primary'}
                  href="#contact"
                  className="w-full text-center"
                  title={`Book a free audit to discuss the ${tier.name} plan`}
                >
                  {tier.cta}
                </ShimmerButton>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: 'var(--text-muted)' }}>
          Not sure which plan fits? Book a free 48-hour audit and we will recommend the right scope for your goals.
        </p>
      </div>
    </section>
  );
}
