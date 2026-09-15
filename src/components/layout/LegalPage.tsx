import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

/** Shared layout for legal/policy pages (Privacy, Terms). Server component. */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="pt-32 pb-24" style={{ background: '#ffffff' }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors"
          style={{ color: 'var(--accent-primary)' }}
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1
          className="font-heading font-bold leading-tight tracking-tight mb-3"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: '#11161e' }}
        >
          {title}
        </h1>
        <p className="text-sm mb-12" style={{ color: 'var(--text-muted)' }}>
          Last updated: {updated}
        </p>

        <div className="legal-prose">{children}</div>
      </div>
    </section>
  );
}
