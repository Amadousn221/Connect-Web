import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { OfferPage } from '@/components/sections/offer/OfferPage';
import { boutiquesEnLigne as content } from '@/content/fr/offres/boutiques-en-ligne';

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
