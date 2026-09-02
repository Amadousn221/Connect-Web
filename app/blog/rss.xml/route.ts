import { getBlogFeedItems } from '@/sanity/lib/queries';
import { buildRssFeed } from '@/lib/seo/rss';

// Route hors [locale] : le middleware i18n exclut déjà les URLs `*.xml`.

export const revalidate = 3600;

export async function GET() {
  const items = await getBlogFeedItems(20);

  const xml = buildRssFeed({
    title: 'Blog Connect Web',
    description:
      "Retours d'expérience, décisions techniques et veille sur le digital ouest-africain.",
    feedPath: '/blog/rss.xml',
    sitePath: '/blog',
    items: items.map((i) => ({
      title: i.title,
      path: `/blog/${i.slug}`,
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
