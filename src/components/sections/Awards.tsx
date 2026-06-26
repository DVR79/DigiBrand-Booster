import { awards } from '@/lib/data';

export default function Awards() {
  return (
    <section id="awards" className="py-16 px-4" style={{ background: 'var(--bg-card)' }}>
      <div className="mx-auto max-w-7xl">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Recognition and partnerships
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award) => (
            <div
              key={award}
              className="glass rounded-xl px-6 py-3 text-sm font-medium"
              style={{ color: 'var(--text-primary)' }}
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
