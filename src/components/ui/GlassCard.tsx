import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div className={cn(hover ? 'card' : 'card [&]:hover:transform-none [&]:hover:shadow-[var(--shadow-sm)]', className)}>
      <div className="p-6">{children}</div>
    </div>
  );
}
