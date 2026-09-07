import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ServicePlaceholder } from '@/components/sections/ServicePlaceholder';

// Reset des architectures Services (2026-09-07) : page d'attente transitoire.
// Reconstruction page par page via le workflow validé.
export const metadata: Metadata = {
  title: 'Services',
  robots: { index: false, follow: true },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ServicePlaceholder locale={locale} title="Services" isHub />;
}
