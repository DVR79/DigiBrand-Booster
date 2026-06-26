'use client';

import { cn } from '@/lib/utils';

type Variant = 'cta' | 'primary' | 'outline';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  href?: string;
}

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden';

const variants: Record<Variant, string> = {
  cta: 'bg-[var(--accent-cta)] text-[#0a0a14] hover:brightness-110 focus-visible:ring-[var(--accent-cta)]',
  primary:
    'bg-[var(--accent-primary)] text-white hover:brightness-110 focus-visible:ring-[var(--accent-primary)]',
  outline:
    'border border-[var(--border)] text-[var(--text-primary)] bg-transparent hover:bg-[var(--bg-card-hover)] focus-visible:ring-[var(--accent-primary)]',
};

export default function ShimmerButton({
  variant = 'primary',
  children,
  className,
  href,
  ...props
}: ShimmerButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {variant !== 'outline' && (
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
            style={{
              animation: 'shimmer 2.4s infinite',
              backgroundSize: '200% auto',
            }}
          />
        )}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {variant !== 'outline' && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20"
          style={{ animation: 'shimmer 2.4s infinite' }}
        />
      )}
      {children}
    </button>
  );
}
