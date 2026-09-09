import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ServicePlaceholder } from '@/components/sections/ServicePlaceholder';

// Page d'attente transitoire — créée pour recevoir les renvois S5 / FAQ Q7 de
// la page parente « Conception et développement web ». Reconstruction via le
// workflow validé (ChatGPT -> PO -> revue -> Code -> PO). `noindex` le temps
// du chantier.
export const metadata: Metadata = {
  title: 'Refonte de site internet',
  robots: { index: false, follow: true },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ServicePlaceholder locale={locale} title="Refonte de site internet" />;
}
