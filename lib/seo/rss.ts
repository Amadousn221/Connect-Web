import { absoluteUrl } from './site';

export type RssItem = {
  title: string;
  path: string;
  description: string;
  published: string;
};

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Flux RSS 2.0 minimal, généré à la main (aucune dépendance). */
export function buildRssFeed(opts: {
  title: string;
  description: string;
  feedPath: string;
  sitePath: string;
  items: RssItem[];
}): string {
  const now = new Date().toUTCString();
  const entries = opts.items
    .map((item) => {
      const url = absoluteUrl(item.path);
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${new Date(item.published).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(opts.title)}</title>
    <link>${absoluteUrl(opts.sitePath)}</link>
    <description>${escapeXml(opts.description)}</description>
    <language>fr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${absoluteUrl(opts.feedPath)}" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;
}
