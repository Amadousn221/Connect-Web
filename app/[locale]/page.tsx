import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { HeroRotating } from '@/components/sections/HeroRotating';
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

// Accueil — 12 sections, dans l'ordre de la maquette
// `Connect Web - Accueil V2.dc.html`. Copy : content/fr/accueil.ts.
// Contenu dynamique (carrousel A8) codé en dur ici → bascule WordPress en M3.
// Formulaire A12 : UI seule, câblage CRM en M5.

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
