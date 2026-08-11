import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.digibrandbooster.tech/sitemap.xml',
    host: 'https://www.digibrandbooster.tech',
  };
}
