import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ServicePlaceholder } from '@/components/sections/ServicePlaceholder';

// Reset des architectures Services (2026-09-07) : page d'attente transitoire.
// Reconstruction via le workflow validé (ChatGPT -> PO -> revue -> Code -> PO).
export const metadata: Metadata = {
  title: 'Boutiques en ligne',
  robots: { index: false, follow: true },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ServicePlaceholder locale={locale} title="Boutiques en ligne" />;
}
