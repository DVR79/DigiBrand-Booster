'use client';

import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'cta' | 'primary' | 'outline';
type Size = 'md' | 'lg';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  href?: string;
  title?: string;
}

/* Solid button, uppercase Oswald label, a shine sweep and an arrow that
   slides on hover. No detached accent block. */
const base =
  'btn-shine font-heading group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[2px] font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(17,22,30,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  cta:     'bg-[#0058be] text-white hover:bg-[#11161e] focus-visible:ring-[#0058be]',
  primary: 'bg-[#11161e] text-white hover:bg-[#0058be] focus-visible:ring-[#11161e]',
  outline: 'bg-transparent border border-[#11161e] text-[#11161e] hover:bg-[#11161e] hover:text-white focus-visible:ring-[#11161e]',
};

const sizes: Record<Size, string> = { md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' };

export default function ShimmerButton({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  title,
  onClick,
  ...props
}: ShimmerButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight
        size={size === 'lg' ? 18 : 16}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        title={title}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} title={title} onClick={onClick} {...props}>
      {inner}
    </button>
  );
}
