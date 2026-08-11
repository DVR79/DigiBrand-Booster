import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { insightPosts } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://www.digibrandbooster.tech/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: 'Digi Brand Booster',
      type: 'article',
      publishedTime: post.date,
      authors: ['D Venkataramana'],
      tags: [post.category, 'Digital Marketing', 'Performance Marketing', 'Bangalore'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const categoryColors: Record<string, { bg: string; color: string }> = {
  AEO:          { bg: 'rgba(67,56,202,0.1)',   color: '#4338ca' },
  GEO:          { bg: 'rgba(37,99,235,0.1)',   color: '#2563eb' },
  'Paid Media': { bg: 'rgba(37,99,235,0.1)',   color: '#2563eb' },
  SEO:          { bg: 'rgba(67,56,202,0.1)',   color: '#4338ca' },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const cat = categoryColors[post.category] ?? { bg: 'rgba(37,99,235,0.1)', color: '#2563eb' };
  const related = insightPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'D Venkataramana',
      jobTitle: 'Founder, Digi Brand Booster',
      url: 'https://www.digibrandbooster.tech/#why-us',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Digi Brand Booster',
      url: 'https://www.digibrandbooster.tech',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.digibrandbooster.tech/blog/${post.slug}`,
    },
    keywords: [post.category, 'Digital Marketing India', 'Performance Marketing Bangalore', 'SEO Agency India'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="min-h-screen" style={{ background: 'var(--bg-dark)' }}>

        {/* Article header */}
        <section className="pt-32 pb-12 px-4" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)' }}>
          <div className="mx-auto max-w-2xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors" style={{ color: 'var(--text-secondary)' }}>
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: cat.bg, color: cat.color }}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                <Calendar size={11} /> {post.date}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-5 leading-tight" style={{ color: 'var(--text-primary)' }}>
              {post.title}
            </h1>

            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {post.excerpt}
            </p>

            <div className="mt-6 pt-6 flex items-center gap-3" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl font-heading font-bold text-sm" style={{ background: cat.bg, color: cat.color }}>
                DV
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>D Venkataramana</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Founder, Digi Brand Booster</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-4">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-10">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {section.heading}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 card p-8 text-center card-blue">
              <p className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Want this done for your brand?
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Book a free 48-hour audit. We will identify exactly what is holding back your performance and what to fix first.
              </p>
              <ShimmerButton variant="cta" href="/#contact" title="Book a free 48-hour audit">
                Get My Free Audit
              </ShimmerButton>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="pb-20 px-4">
            <div className="mx-auto max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
                More from the blog
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((r) => {
                  const rc = categoryColors[r.category] ?? { bg: 'rgba(37,99,235,0.1)', color: '#2563eb' };
                  return (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="card p-5 no-underline" style={{ textDecoration: 'none' }}>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full mb-3 inline-block" style={{ background: rc.bg, color: rc.color }}>
                        {r.category}
                      </span>
                      <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{r.title}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
