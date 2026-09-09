import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { SitesEntreprisePage } from '@/components/sections/sites-entreprise/SitesEntreprisePage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { seMeta } from '@/content/fr/sitesEntreprise';

// Page « Sites d'entreprise » — reconstruite depuis le pack de handoff
// (Opus + maquette V1, 11 sections). `noindex` CONSERVÉ jusqu'à la recette
// visuelle PO — à lever avec l'ajout au sitemap et à la nav.
export const metadata: Metadata = {
  title: { absolute: seMeta.title },
  description: seMeta.description,
  alternates: { canonical: absoluteUrl('/services/sites-entreprise') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'Conception et développement web',
    url: absoluteUrl('/services/conception-et-developpement-web'),
  },
  { name: "Sites d'entreprise", url: absoluteUrl('/services/sites-entreprise') },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Site web d'entreprise",
  serviceType: "Conception de site d'entreprise",
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/sites-entreprise'),
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <SitesEntreprisePage locale={locale} />
    </>
  );
}
