import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { SitesInstitutionnelsPage } from '@/components/sections/sites-institutionnels/SitesInstitutionnelsPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { ongMeta } from '@/content/fr/sitesInstitutionnels';

// Page « Sites institutionnels & ONG » — reconstruite depuis le pack de handoff
// (Opus + maquette V1, 12 sections). `noindex` CONSERVÉ jusqu'à la recette
// visuelle PO — à lever avec l'ajout au sitemap et à la nav.
export const metadata: Metadata = {
  title: { absolute: ongMeta.title },
  description: ongMeta.description,
  alternates: { canonical: absoluteUrl('/services/sites-institutionnels-ong') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'Conception et développement web',
    url: absoluteUrl('/services/conception-et-developpement-web'),
  },
  {
    name: 'Sites institutionnels & ONG',
    url: absoluteUrl('/services/sites-institutionnels-ong'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Site web pour ONG et institution',
  serviceType: 'Conception de site institutionnel',
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/sites-institutionnels-ong'),
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
      <SitesInstitutionnelsPage locale={locale} />
    </>
  );
}
