import type { MetadataRoute } from 'next';

import { absoluteUrl, SITE_URL } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  const isProd =
    (process.env.VERCEL_ENV ?? process.env.NODE_ENV) === 'production' &&
    !SITE_URL.includes('localhost');

  // Les déploiements Preview ne doivent pas être indexés.
  if (!isProd) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/api/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
