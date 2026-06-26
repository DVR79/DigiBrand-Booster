interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto mb-12' : 'max-w-xl mb-12'}>
      {eyebrow && (
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-widest"
          style={{ color: 'var(--accent-primary)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-heading text-3xl font-bold leading-tight md:text-4xl"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
      )}
    </div>
  );
}
