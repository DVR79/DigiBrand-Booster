interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, center = true }: SectionHeaderProps) {
  return (
    <div className={cn(center ? 'text-center max-w-2xl mx-auto mb-14' : 'max-w-xl mb-12')}>
      {eyebrow && <p className="pill mb-4">{eyebrow}</p>}
      <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
    </div>
  );
}

function cn(...c: (string | undefined | false)[]) { return c.filter(Boolean).join(' '); }
