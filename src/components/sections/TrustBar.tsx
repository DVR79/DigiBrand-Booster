import { awards } from '@/lib/data';

export default function TrustBar() {
  return (
    <section style={{ background: 'var(--bg-section-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest mr-4" style={{ color: 'var(--text-muted)' }}>
            Trusted by
          </span>
          {awards.map((award) => (
            <span key={award} className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              {award}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
