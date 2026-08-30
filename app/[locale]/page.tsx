import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { TrustBar } from '@/components/sections/TrustBar';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { AudienceTabs } from '@/components/sections/AudienceTabs';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
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
// Lots A-B livrés : Hero statique + bande logos + trust line ; section Services
// (carte parente + Niveau 2 + Conseil, DECISION 23).
// Lots C/D à venir : Vos besoins/Wedge/Chiffres/Méthode, Cas phares.
// Contenu homepage HARDCODÉ (pas d'ACF/GraphQL). Formulaire : UI seule, M5.

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
      <ServiceGrid locale={locale} />
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
