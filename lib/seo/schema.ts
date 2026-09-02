// Constructeurs de JSON-LD schema.org (spec §12.2). Sérialisés par
// <JsonLd> dans un <script type="application/ld+json">.

type JsonLdObject = Record<string, unknown>;

type ArticleInput = {
  headline: string;
  description?: string;
  url: string;
  imageUrl?: string | null;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  /** 'Article' pour le blog, 'LearningResource' pour une ressource. */
  type?: 'Article' | 'LearningResource';
};

export function articleJsonLd({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  type = 'Article',
}: ArticleInput): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    headline,
    ...(description ? { description } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    datePublished,
    dateModified: dateModified ?? datePublished,
    ...(authorName ? { author: { '@type': 'Person', name: authorName } } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Connect Web',
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Schéma racine, injecté une fois dans le layout (spec §12.2). */
export function organizationJsonLd(opts: {
  siteUrl: string;
  logoUrl?: string;
  sameAs?: string[];
  phones?: string[];
  email?: string;
}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Connect Web',
    url: opts.siteUrl,
    ...(opts.logoUrl ? { logo: opts.logoUrl } : {}),
    ...(opts.sameAs && opts.sameAs.length ? { sameAs: opts.sameAs } : {}),
    ...(opts.phones?.length || opts.email
      ? {
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            ...(opts.phones?.length ? { telephone: opts.phones } : {}),
            ...(opts.email ? { email: opts.email } : {}),
            areaServed: 'SN',
            availableLanguage: ['fr'],
          },
        }
      : {}),
  };
}

export function websiteJsonLd(siteUrl: string): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Connect Web',
    url: siteUrl,
    inLanguage: 'fr',
  };
}
