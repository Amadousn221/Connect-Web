import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { AnchorScroll } from './AnchorScroll';
import { HubContact } from './HubContact';
import { HubExpertiseIndex } from './HubExpertiseIndex';
import { HubWebFamily } from './HubWebFamily';
import { HubExpertiseBlock } from './HubExpertiseBlock';
import { HubOrientation } from './HubOrientation';
import { HubMarkers } from './HubMarkers';
import { HubProjects } from './HubProjects';
import { HubMethod } from './HubMethod';
import {
  hubHero,
  hubExpertises,
  hubConseil,
  hubFaqIntro,
  hubFaqItems,
} from '@/content/fr/servicesHub';

// Hub Services (/services) — page d'orientation. Composition propre :
// S1 Hero partagé · S2 index des 5 expertises · S3 famille web (riche) ·
// S4–S7 expertises compactes · S8 Conseil (bande pétrole distincte) ·
// S9 orientation · S10 marqueurs · S11 réalisations · S12 méthode ·
// S13 FAQ (composant partagé) · S14 contact (composant partagé, formulaire réel).
//
// Fonds alternés : blanc → crème → blanc → crème … pétrole (S8) … pétrole (S14).
export function ServicesHub({ locale }: { locale: Locale }) {
  // S4 Logiciels · S5 ERP · S6 IA · S7 Marketing
  const expertiseMeta = [
    { id: 'logiciels', bg: undefined },
    { id: 'erp', bg: 'soft' as const },
    { id: 'ia', bg: undefined },
    { id: 'marketing', bg: 'soft' as const },
  ];

  return (
    <AnchorScroll>
      <ServiceHero
        eyebrow={hubHero.eyebrow}
        title={hubHero.title}
        intro={hubHero.intro}
        primaryCta={hubHero.primaryCta}
        secondaryCta={hubHero.secondaryCta}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={hubHero.reassurance}
      />

      <HubExpertiseIndex />

      <HubWebFamily locale={locale} />

      {hubExpertises.map((exp, i) => (
        <HubExpertiseBlock
          key={exp.title}
          id={expertiseMeta[i].id}
          bg={expertiseMeta[i].bg}
          eyebrow={exp.eyebrow}
          title={exp.title}
          intro={exp.intro}
          cta={exp.cta}
          blocks={exp.blocks}
          locale={locale}
        />
      ))}

      <HubExpertiseBlock
        id="conseil"
        bg="deep"
        tone="on-dark"
        eyebrow={hubConseil.eyebrow}
        title={hubConseil.title}
        intro={hubConseil.intro}
        cta={hubConseil.cta}
        blocks={hubConseil.blocks}
        locale={locale}
      />

      <HubOrientation locale={locale} />

      <HubMarkers />

      <HubProjects locale={locale} />

      <HubMethod />

      <FaqAccordion
        locale={locale}
        intro={hubFaqIntro}
        items={hubFaqItems}
        layout="split"
        allowMultiple
      />

      <HubContact />
    </AnchorScroll>
  );
}
