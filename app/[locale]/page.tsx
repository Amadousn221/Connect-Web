import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { TrustBar } from '@/components/sections/TrustBar';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { AudienceTabs } from '@/components/sections/AudienceTabs';
import { OfferGrid } from '@/components/sections/OfferGrid';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { TrajectoryGrid } from '@/components/sections/TrajectoryGrid';
import { CaseTeaserCarousel } from '@/components/sections/CaseTeaserCarousel';
import { ProofGrid } from '@/components/sections/ProofGrid';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import {
  casesIntro,
  caseTeasers,
  casesLink,
  faqIntro,
  faqItems,
  faqOutro,
} from '@/content/fr/accueil';

// Accueil — base : maquette `Connect Web - Accueil V2.dc.html`, en cours de
// refonte V2.1 (Design Handoff). Copy : content/fr/accueil.ts.
// Lot A livré : Hero statique + Bande de logos clients + trust line.
// Lots B/C/D à venir : Services (carte parente), Wedge/Chiffres/Méthode,
// Cas phares. Contenu homepage HARDCODÉ (pas d'ACF/GraphQL). Formulaire : UI
// seule, câblage CRM en M5.

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero />
      <LogoStrip />
      <TrustBar />
      <NeedSelector locale={locale} />
      <AudienceTabs />
      <OfferGrid locale={locale} />
      <SystemRoad />
      <TrajectoryGrid locale={locale} />
      <CaseTeaserCarousel
        locale={locale}
        intro={casesIntro}
        items={caseTeasers}
        link={casesLink}
      />
      <ProofGrid />
      <ProcessSteps />
      <FaqAccordion
        locale={locale}
        intro={faqIntro}
        items={faqItems}
        outro={faqOutro}
      />
      <ContactSection />
    </>
  );
}
