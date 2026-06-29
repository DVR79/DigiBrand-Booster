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
  'relative inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  cta: 'bg-[#f59e0b] text-white shadow-md hover:bg-[#2563eb] hover:shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 focus-visible:ring-[#f59e0b] transition-all duration-300',
  primary: 'bg-[#2563eb] text-white shadow-md hover:bg-[#1d4ed8] hover:shadow-[0_0_18px_rgba(37,99,235,0.40)] hover:-translate-y-0.5 focus-visible:ring-[#2563eb] transition-all duration-300',
  outline: 'bg-transparent border border-[var(--border)] text-[var(--text-primary)] hover:bg-[#2563eb] hover:border-[#2563eb] hover:text-white hover:shadow-[0_0_16px_rgba(37,99,235,0.30)] focus-visible:ring-[#2563eb] transition-all duration-300',
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
