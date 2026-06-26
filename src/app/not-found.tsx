import ShimmerButton from '@/components/ui/ShimmerButton';

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ background: 'var(--bg-dark)' }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: 'var(--accent-primary)' }}
      >
        404
      </p>
      <h1
        className="font-heading text-4xl font-bold md:text-5xl mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        Page not found
      </h1>
      <p className="text-base max-w-md mb-8" style={{ color: 'var(--text-secondary)' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <ShimmerButton variant="cta" href="/">
        Back to Home
      </ShimmerButton>
    </main>
  );
}
