import { getResourceFeedItems } from '@/sanity/lib/queries';
import { buildRssFeed } from '@/lib/seo/rss';

// Route hors [locale] : le middleware i18n exclut déjà les URLs `*.xml`.

export const revalidate = 3600;

export async function GET() {
  const items = await getResourceFeedItems(20);

  const xml = buildRssFeed({
    title: 'Ressources Connect Web',
    description: 'Guides, checklists, templates et formations pour piloter vos projets numériques.',
    feedPath: '/ressources/rss.xml',
    sitePath: '/ressources',
    items: items.map((i) => ({
      title: i.title,
      path: `/ressources/${i.slug}`,
      description: i.excerpt,
      published: i.publishedAt,
    })),
  });

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
