import type { MetadataRoute } from 'next';

import { getBlogSitemapEntries, getResourceSitemapEntries } from '@/sanity/lib/queries';
import { absoluteUrl } from '@/lib/seo/site';

// FR servi à la racine (DECISION 09). L'anglais n'est pas encore un contenu
// localisé distinct (Milestone M4) → le sitemap ne liste que les URLs FR pour
// éviter tout signal de contenu dupliqué. À enrichir avec hreflang en M4.

export const revalidate = 3600;

const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/agence', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/realisations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.9, changeFrequency: 'daily' },
  { path: '/ressources', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/boutiques-en-ligne', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/plateformes-applications', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/sites-entreprise', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/sites-institutionnels-ong', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/crm-erp-integrations', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/ia-automatisation', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/marketing-acquisition', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/services/conseil-strategie', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/mentions-legales', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/politique-de-confidentialite', priority: 0.2, changeFrequency: 'yearly' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((e) => ({
    url: absoluteUrl(e.path),
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  let dynamicEntries: MetadataRoute.Sitemap = [];
  try {
    const [posts, resources] = await Promise.all([
      getBlogSitemapEntries(),
      getResourceSitemapEntries(),
    ]);
    dynamicEntries = [
      ...posts.map((p) => ({
        url: absoluteUrl(`/blog/${p.slug}`),
        lastModified: new Date(p.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
      ...resources.map((r) => ({
        url: absoluteUrl(`/ressources/${r.slug}`),
        lastModified: new Date(r.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      })),
    ];
  } catch {
    // Sanity indisponible au build : on sert au moins les URLs statiques.
  }

  return [...staticEntries, ...dynamicEntries];
}
