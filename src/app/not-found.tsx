import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="text-center max-w-lg mx-auto">
          <p className="font-heading text-8xl font-extrabold mb-4" style={{ color: 'var(--accent-primary)', opacity: 0.12 }}>
            404
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
            Page not found
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            The page you are looking for does not exist or has been moved. Let us get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ShimmerButton variant="primary" href="/" title="Go back to the homepage">
              Back to Homepage
            </ShimmerButton>
            <ShimmerButton variant="outline" href="/blog" title="Browse all blog posts">
              Browse Blog
            </ShimmerButton>
          </div>
          <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
            Need help?{' '}
            <Link href="/#contact" className="font-semibold" style={{ color: 'var(--accent-primary)' }}>
              Contact us
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
