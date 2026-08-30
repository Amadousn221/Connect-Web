import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { TrustBar } from '@/components/sections/TrustBar';
import { NeedTable } from '@/components/sections/NeedTable';
import { Wedge } from '@/components/sections/Wedge';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { AudienceTabs } from '@/components/sections/AudienceTabs';
import { CaseTeaserCarousel } from '@/components/sections/CaseTeaserCarousel';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { SystemNarrative } from '@/components/sections/SystemNarrative';
import { Method } from '@/components/sections/Method';
import { ProofGrid } from '@/components/sections/ProofGrid';
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

// Accueil — base : maquette `Connect Web - Accueil V2.dc.html`, refonte V2.1
// (Design Handoff). Contenu HARDCODÉ (pas d'ACF/GraphQL), FR uniquement.
// Lots livrés : A (Hero + logos + trust line) · B (Services) · C (Besoins +
// Wedge + Chiffres + Système + Méthode). Reste Lot D : Cas phares réels, FAQ,
// CTA final, « Pour qui » simplifiée, retrait ProofGrid, QA finale.
// Ordre cible §04 du Design Handoff.

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
      <NeedTable />
      <Wedge />
      <ServiceGrid locale={locale} />
      <AudienceTabs />
      <CaseTeaserCarousel
        locale={locale}
        intro={casesIntro}
        items={caseTeasers}
        link={casesLink}
      />
      <StatsBlock />
      <SystemNarrative />
      <Method />
      <ProofGrid />
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
