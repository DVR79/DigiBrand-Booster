import { awards } from '@/lib/data';

export default function TrustBar() {
  return (
    <section
      className="py-8"
      style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {awards.map((award) => (
            <span
              key={award}
              className="text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {award}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
