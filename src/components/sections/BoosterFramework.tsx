'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search, PencilRuler, Hammer, Settings, Rocket } from 'lucide-react';
import { frameworkSteps } from '@/lib/data';

const stepIcons = [Search, PencilRuler, Hammer, Settings, Rocket];

// Real photography per framework step
const stepImages = [
  '/images/process-audit.webp',      // Phase 01 - Audit
  '/images/process-strategy.webp',   // Phase 02 - Strategy
  '/images/process-build.webp',      // Phase 03 - Build
  '/images/process-optimise.webp',   // Phase 04 - Optimise
  '/images/process-scale.webp',      // Phase 05 - Scale
];

export default function BoosterFramework() {
  return (
    <section id="framework" className="py-14 md:py-20 px-4" style={{ background: '#ffffff' }}>
      <div className="mx-auto max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2
            className="font-heading font-bold mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: '#191c1e' }}
          >
            The Booster Framework
          </h2>
          <p
            className="text-lg mx-auto max-w-2xl"
            style={{ color: '#45464d' }}
          >
            The Booster Framework is the same five-step sequence we run on every account. It exists so growth is repeatable and you can see exactly where your account is at any point, from first audit to scaling spend.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -z-10"
            style={{ background: '#d8dadc' }}
            aria-hidden
          />

          <div className="space-y-12 md:space-y-16">
            {frameworkSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const phaseNum = String(i + 1).padStart(2, '0');
              const imageUrl = stepImages[i] || '/images/process-audit.webp';

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12`}
                >
                  {/* Left/Right content block */}
                  <div className="w-full md:w-5/12">
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: '#0058be' }}
                    >
                      Phase {phaseNum}
                    </div>
                    <h2
                      className="font-heading font-bold mb-4"
                      style={{
                        fontSize: 'clamp(24px, 3vw, 32px)',
                        color: '#191c1e',
                      }}
                    >
                      {step.title}
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: '#45464d' }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Center circle with icon */}
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full flex-col md:flex-none"
                    style={{
                      background: '#ffffff',
                      border: '4px solid #eceef0',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                    }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{ color: '#0058be' }}
                    >
                      {(() => {
                        const Icon = stepIcons[i] ?? Search;
                        return <Icon size={22} strokeWidth={2} />;
                      })()}
                    </div>
                  </div>

                  {/* Image block */}
                  <div className="w-full md:w-5/12">
                    <div
                      className="w-full h-64 rounded-xl overflow-hidden border"
                      style={{
                        background: '#e0e3e5',
                        borderColor: '#eceef0',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Image
                        src={imageUrl}
                        alt={`Phase ${i + 1}: ${step.title}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-14 rounded-[12px] p-8 md:p-16 text-center"
          style={{
            background: '#11161e',
            color: '#ffffff',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }}
        >
          <h2
            className="font-heading font-bold mb-6"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            Want us to run step one on your account?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Book a discovery call and get a free 48-hour audit of your
            current performance, done by a senior specialist.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-[2px] transition-all hover:-translate-y-1"
            style={{
              background: '#ffffff',
              color: '#191c1e',
            }}
          >
            Schedule Your Audit
          </a>
        </div>
      </div>
    </section>
  );
}
