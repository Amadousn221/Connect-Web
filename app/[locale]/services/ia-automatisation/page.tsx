import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { IaAutomatisationPage } from '@/components/sections/ia-automatisation/IaAutomatisationPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { iaMeta } from '@/content/fr/iaAutomatisation';

// Page « IA et automatisation » — intégrée depuis la copy Opus (EN-ATTENTE-UX,
// aucune maquette validée). `noindex` CONSERVÉ jusqu'à la recette visuelle PO —
// à lever avec l'ajout au sitemap et à la nav globale.
export const metadata: Metadata = {
  title: { absolute: iaMeta.title },
  description: iaMeta.description,
  alternates: { canonical: absoluteUrl('/services/ia-automatisation') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'IA et automatisation',
    url: absoluteUrl('/services/ia-automatisation'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IA et automatisation',
  serviceType: "Automatisation de processus et intégration d'IA appliquée",
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/ia-automatisation'),
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
      <IaAutomatisationPage locale={locale} />
    </>
  );
}
