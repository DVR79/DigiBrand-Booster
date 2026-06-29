'use client';

import { cn } from '@/lib/utils';

type Variant = 'cta' | 'primary' | 'outline';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  href?: string;
  title?: string;
}

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  cta: 'bg-[var(--accent-cta)] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-[var(--accent-cta)]',
  primary: 'bg-[var(--accent-primary)] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-[var(--accent-primary)]',
  outline: 'bg-transparent border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-card)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus-visible:ring-[var(--accent-primary)]',
};

export default function ShimmerButton({
  variant = 'primary',
  children,
  className,
  href,
  title,
  ...props
}: ShimmerButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return <a href={href} className={classes} title={title}>{children}</a>;
  }

  return (
    <button className={classes} title={title} {...props}>
      {children}
    </button>
  );
}
