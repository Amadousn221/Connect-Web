import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { OfferPage } from '@/components/sections/offer/OfferPage';
import { conseilStrategie as content } from '@/content/fr/offres/conseil-strategie';

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <OfferPage locale={locale} content={content} />;
}
