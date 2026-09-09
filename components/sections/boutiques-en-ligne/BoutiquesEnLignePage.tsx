import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ServicePageShell } from '@/components/sections/service-page/ServicePageShell';
import {
  Section,
  Sequence,
  Reading,
  ConfigCards,
  SelectorSection,
  Timeline,
  Ownership,
  Projects,
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  shopHero,
  shopPillars,
  shopPayShip,
  shopOps,
  shopPlatform,
  shopMethod,
  shopOwnership,
  shopNext,
  shopProjects,
  shopFaqIntro,
  shopFaqItems,
  shopContact,
} from '@/content/fr/boutiquesEnLigne';

// Page « Boutiques en ligne » — 11 sections (Opus + maquette V1). Page
// agnostique sur la plateforme. S4 : sélecteur d'opérations quotidiennes.
export function BoutiquesEnLignePage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="boutiques-en-ligne">
      <ServiceHero
        eyebrow={shopHero.eyebrow}
        title={shopHero.title}
        intro={shopHero.intro}
        primaryCta={shopHero.primaryCta}
        secondaryCta={shopHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={shopHero.reassurance}
      />

      <Section id="s2" labelledBy="shop-s2">
        <Sequence
          headId="shop-s2"
          eyebrow={shopPillars.eyebrow}
          title={shopPillars.title}
          intro={shopPillars.intro}
          items={shopPillars.items}
        />
      </Section>

      <Section id="s3" bg="soft" labelledBy="shop-s3">
        <Reading
          headId="shop-s3"
          eyebrow={shopPayShip.eyebrow}
          title={shopPayShip.title}
          intro={shopPayShip.intro}
          items={shopPayShip.items}
        />
      </Section>

      <Section id="s4" labelledBy="shop-s4">
        <SelectorSection
          headId="shop-s4"
          eyebrow={shopOps.eyebrow}
          title={shopOps.title}
          intro={shopOps.intro}
          ariaLabel={shopOps.selectorLabel}
          panelEyebrow={shopOps.panelEyebrow}
          items={shopOps.operations}
          outro={shopOps.outro}
        />
      </Section>

      <Section id="s5" bg="soft" labelledBy="shop-s5">
        <ConfigCards
          headId="shop-s5"
          eyebrow={shopPlatform.eyebrow}
          title={shopPlatform.title}
          intro={shopPlatform.intro}
          cards={shopPlatform.cards}
          notes={shopPlatform.notes}
        />
      </Section>

      <Section id="s6" labelledBy="shop-s6">
        <Timeline
          headId="shop-s6"
          eyebrow={shopMethod.eyebrow}
          title={shopMethod.title}
          intro={shopMethod.intro}
          steps={shopMethod.steps}
        />
      </Section>

      <Section id="s7" bg="deep" labelledBy="shop-s7">
        <Ownership
          headId="shop-s7"
          eyebrow={shopOwnership.eyebrow}
          title={shopOwnership.title}
          intro={shopOwnership.intro}
          rows={shopOwnership.rows}
          aside={shopOwnership.aside}
          tone="on-dark"
        />
      </Section>

      <Section id="s8" labelledBy="shop-s8">
        <Extensions
          headId="shop-s8"
          eyebrow={shopNext.eyebrow}
          title={shopNext.title}
          intro={shopNext.intro}
          rows={shopNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="shop-s9">
        <Projects
          headId="shop-s9"
          eyebrow={shopProjects.eyebrow}
          title={shopProjects.title}
          intro={shopProjects.intro}
          cards={shopProjects.cards}
          cta={shopProjects.cta}
          locale={locale}
        />
      </Section>

      <Section id="s10">
        <FaqAccordion
          locale={locale}
          intro={shopFaqIntro}
          items={shopFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={shopContact.eyebrow}
          title={shopContact.title}
          lead={shopContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
