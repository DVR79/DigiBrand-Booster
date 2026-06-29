import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { insightPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog: SEO, Paid Ads & AEO Insights | Digi Brand Booster',
  description: 'Practical guides on AEO, GEO, Meta Ads, Google Ads and SEO. No fluff — only what actually moves rankings and reduces cost per lead.',
};

const categoryColors: Record<string, { bg: string; color: string }> = {
  AEO:        { bg: 'rgba(124,58,237,0.1)',  color: '#7c3aed' },
  GEO:        { bg: 'rgba(37,99,235,0.1)',   color: '#2563eb' },
  'Paid Media': { bg: 'rgba(245,158,11,0.1)', color: '#d97706' },
  SEO:        { bg: 'rgba(5,150,105,0.1)',   color: '#059669' },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ background: 'var(--bg-dark)' }}>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <span className="pill mb-4 inline-flex">Blog</span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
              Practical guides. No filler.
            </h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              What we have learned running SEO, paid media, AEO, and GEO for D2C, EdTech, and SaaS brands — written in plain language.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insightPosts.map((post) => {
                const cat = categoryColors[post.category] ?? { bg: 'rgba(37,99,235,0.1)', color: '#2563eb' };
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card p-6 flex flex-col group no-underline hover:no-underline"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: cat.bg, color: cat.color }}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading text-base font-bold mb-3 leading-snug flex-1" style={{ color: 'var(--text-primary)' }}>
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                      <span className="flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: cat.color }}>
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
