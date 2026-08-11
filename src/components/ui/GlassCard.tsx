import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div className={cn('card p-6', hover ? '' : '[&]:hover:transform-none [&]:hover:shadow-[var(--shadow-sm)]', className)}>
      {children}
    </div>
  );
}
