import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locales, isLocale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Toute locale hors liste → 404 (pas de page fantôme).
export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <a href="#contenu" className="cw-skip-link">
        Aller au contenu
      </a>
      <Header locale={locale} />
      <main id="contenu">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
