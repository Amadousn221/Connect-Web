import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ServicesHubPage } from '@/components/sections/ServicesHubPage';
import { servicesHubMeta } from '@/content/fr/servicesHub';

export const metadata: Metadata = {
  title: servicesHubMeta.title,
  description: servicesHubMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ServicesHubPage locale={locale} />;
}
