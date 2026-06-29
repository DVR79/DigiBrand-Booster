import { awards } from '@/lib/data';
import { ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <section style={{ background: 'var(--bg-section-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--text-muted)' }}>
          Certified and verified partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {awards.map((award) => (
            <div
              key={award}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium glass"
              style={{ color: 'var(--text-primary)' }}
            >
              <ShieldCheck size={14} style={{ color: 'var(--accent-success)' }} aria-hidden="true" />
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
