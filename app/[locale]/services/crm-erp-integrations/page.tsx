import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { CrmErpIntegrationsPage } from '@/components/sections/crm-erp-integrations/CrmErpIntegrationsPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { crmMeta } from '@/content/fr/crmErpIntegrations';

// Page « ERP, CRM et intégrations » — intégrée depuis la copy Opus
// (EN-ATTENTE-UX, aucune maquette validée). `noindex` CONSERVÉ jusqu'à la
// recette visuelle PO — à lever avec l'ajout au sitemap et à la nav globale.
export const metadata: Metadata = {
  title: { absolute: crmMeta.title },
  description: crmMeta.description,
  alternates: { canonical: absoluteUrl('/services/crm-erp-integrations') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'ERP, CRM et intégrations',
    url: absoluteUrl('/services/crm-erp-integrations'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ERP, CRM et intégrations',
  serviceType: "Mise en place d'ERP, CRM et intégrations d'outils",
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/crm-erp-integrations'),
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
      <CrmErpIntegrationsPage locale={locale} />
    </>
  );
}
