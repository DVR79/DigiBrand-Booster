'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { faqs } from '@/lib/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 section-alt">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Common questions" description="If your question is not here, drop us a message." />
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: 'var(--text-primary)' }}>{faq.question}</span>
                <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full" style={{ background: open === i ? 'var(--accent-primary)' : 'var(--bg-section-alt)', color: open === i ? '#fff' : 'var(--text-secondary)' }}>
                  {open === i ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}>
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
