import type { MetadataRoute } from 'next';
import { insightPosts } from '@/lib/data';

const BASE = 'https://www.digibrandbooster.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
