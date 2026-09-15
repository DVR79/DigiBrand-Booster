'use client';

import { pricingTiers } from '@/lib/data';

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-14 md:py-20"
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e0e3e5',
        borderBottom: '1px solid #e0e3e5',
      }}
      aria-label="Pricing section"
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 -z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(224, 227, 229, 0.3), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Heading section */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold leading-tight mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#000000' }}
          >
            Priced by the stage you are at
          </h2>
          <p
            className="text-lg"
            style={{ color: '#45464d', maxWidth: '800px', margin: '0 auto' }}
          >
            One channel or the full stack, on a flat monthly retainer. No percentage of ad spend, no lock-in. Not sure which fits? The free audit tells us, and we will say so honestly.
          </p>
        </div>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="relative">

              {/* Most Popular badge for Growth tier */}
              {tier.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-6 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full shadow-lg"
                  style={{
                    background: '#0058be',
                    color: '#ffffff',
                  }}
                >
                  Most Popular
                </div>
              )}

              <div
                className={`rounded-[12px] p-6 md:p-10 h-full flex flex-col relative ${tier.highlight ? 'md:-translate-y-4 transform' : ''}`}
                style={
                  tier.highlight
                    ? {
                        background: '#11161e',
                        color: '#ffffff',
                        boxShadow: '0 20px 60px -15px rgba(19,27,46,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        zIndex: 10,
                      }
                    : {
                        background: '#ffffff',
                        border: '1px solid rgba(198,198,205,0.3)',
                        color: '#000000',
                        boxShadow: '0 2px 8px rgba(13,27,54,0.05)',
                      }
                }
              >
                {/* Tier name */}
                <p
                  className="text-xs font-bold uppercase tracking-[0.12em] mb-4"
                  style={{ color: tier.highlight ? '#adc6ff' : '#0058be' }}
                >
                  {tier.name}
                </p>

                {/* Tier title/subtitle */}
                <h3
                  className="font-heading text-3xl font-bold mb-2"
                  style={{ color: tier.highlight ? '#ffffff' : '#000000' }}
                >
                  {tier.name}
                </h3>

                {/* Tagline */}
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: tier.highlight ? 'rgba(255,255,255,0.7)' : '#45464d' }}
                >
                  {tier.tagline}
                </p>

                {/* Features list */}
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: tier.highlight ? '#d8e2ff' : '#0058be' }}
                      />
                      <span
                        className="text-base leading-relaxed"
                        style={{ color: tier.highlight ? 'rgba(255,255,255,0.8)' : '#45464d' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href="/#contact"
                  className="w-full flex items-center justify-center px-6 py-3 text-sm font-bold rounded-[2px] transition-all hover:-translate-y-0.5 duration-300 uppercase tracking-[0.05em]"
                  style={
                    tier.highlight
                      ? {
                          background: '#0058be',
                          color: '#ffffff',
                          boxShadow: '0 8px 24px rgba(0,88,190,0.3)',
                        }
                      : {
                          background: '#11161e',
                          color: '#ffffff',
                          boxShadow: '0 4px 12px rgba(19,27,46,0.1)',
                        }
                  }
                >
                  {tier.cta || 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-sm mt-8"
          style={{ color: '#76777d' }}
        >
          Not sure which plan fits? Book a free 48-hour audit and we will recommend the right scope.
        </p>
      </div>
    </section>
  );
}
