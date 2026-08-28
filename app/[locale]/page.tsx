import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { HeroRotating } from '@/components/sections/HeroRotating';
import { TrustBar } from '@/components/sections/TrustBar';
import { OfferGrid } from '@/components/sections/OfferGrid';
import { TrajectoryGrid } from '@/components/sections/TrajectoryGrid';
import { ProofGrid } from '@/components/sections/ProofGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';

// Accueil — assemblage des sections (M2). Copy : content/fr/accueil.ts
// (extraite de la maquette `Connect Web - Accueil V2.dc.html`).
//
// Fait (M2.2) : A1 Hero · A2 Réassurance · A5 Services · A7 Trajectoires ·
//               A9 Preuve · A11 FAQ.
// À venir (M2.3, sections interactives) : A3 « Ce qu'on construit » (sélecteur) ·
//   A4 « Pour qui » (onglets) · A6 « Du site au système » (road) ·
//   A8 Réalisations (carrousel) · A10 Méthode (scroll-spy) ·
//   A12 Contact (formulaire UI seule, câblage M5).

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <HeroRotating />
      <TrustBar />
      <OfferGrid locale={locale} />
      <TrajectoryGrid locale={locale} />
      <ProofGrid />
      <FaqAccordion locale={locale} />
    </>
  );
}
