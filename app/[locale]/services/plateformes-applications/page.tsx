import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { PlateformesApplicationsPage } from '@/components/sections/plateformes-applications/PlateformesApplicationsPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { appsMeta } from '@/content/fr/plateformesApplications';

// Page « Plateformes & applications web sur mesure » — reconstruite depuis le
// pack de handoff (maquette V1, builder unifié, 13 sections). `noindex`
// CONSERVÉ jusqu'à la recette visuelle PO — à lever avec l'ajout au sitemap.
export const metadata: Metadata = {
  title: { absolute: appsMeta.title },
  description: appsMeta.description,
  alternates: { canonical: absoluteUrl('/services/plateformes-applications') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'Plateformes & applications web',
    url: absoluteUrl('/services/plateformes-applications'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plateformes et applications web sur mesure',
  serviceType: "Développement d'application web sur mesure",
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/plateformes-applications'),
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
      <PlateformesApplicationsPage locale={locale} />
    </>
  );
}
