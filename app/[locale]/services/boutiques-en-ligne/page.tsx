import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { BoutiquesEnLignePage } from '@/components/sections/BoutiquesEnLignePage';
import { boutiquesMeta } from '@/content/fr/offres/boutiques-en-ligne';

export const metadata: Metadata = {
  title: boutiquesMeta.title,
  description: boutiquesMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <BoutiquesEnLignePage locale={locale} />;
}
