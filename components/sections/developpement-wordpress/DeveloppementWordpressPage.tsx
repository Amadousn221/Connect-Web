import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ServicePageShell } from '@/components/sections/service-page/ServicePageShell';
import {
  Section,
  Reading,
  ConfigCards,
  SelectorSection,
  Timeline,
  Trio,
  Ownership,
  Projects,
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  wpHero,
  wpFit,
  wpProjects,
  wpApproach,
  wpAutonomy,
  wpQuality,
  wpRefonte,
  wpOwnership,
  wpRealisations,
  wpNext,
  wpFaqIntro,
  wpFaqItems,
  wpContact,
} from '@/content/fr/developpementWordpress';

// Page « Développement WordPress » — 12 sections (maquette V1, builder unifié
// kind=wordpress). S5 : sélecteur d'actions d'administration. Fonds alternés ;
// pétrole sur S8 propriété.
export function DeveloppementWordpressPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="developpement-wordpress">
      <ServiceHero
        eyebrow={wpHero.eyebrow}
        title={wpHero.title}
        intro={wpHero.intro}
        primaryCta={wpHero.primaryCta}
        secondaryCta={wpHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={wpHero.reassurance}
      />

      <Section id="s2" bg="soft" labelledBy="wp-s2">
        <ConfigCards
          headId="wp-s2"
          eyebrow={wpFit.eyebrow}
          title={wpFit.title}
          intro={wpFit.intro}
          cards={wpFit.cards}
        />
      </Section>

      <Section id="s3" labelledBy="wp-s3">
        <Reading
          headId="wp-s3"
          eyebrow={wpProjects.eyebrow}
          title={wpProjects.title}
          intro={wpProjects.intro}
          items={wpProjects.items}
          locale={locale}
        />
      </Section>

      <Section id="s4" bg="soft" labelledBy="wp-s4">
        <Trio
          headId="wp-s4"
          eyebrow={wpApproach.eyebrow}
          title={wpApproach.title}
          intro={wpApproach.intro}
          items={wpApproach.items}
          notes={wpApproach.notes}
          numbered={false}
        />
      </Section>

      <Section id="s5" labelledBy="wp-s5">
        <SelectorSection
          headId="wp-s5"
          eyebrow={wpAutonomy.eyebrow}
          title={wpAutonomy.title}
          intro={wpAutonomy.intro}
          ariaLabel={wpAutonomy.selectorLabel}
          panelEyebrow={wpAutonomy.panelEyebrow}
          items={wpAutonomy.operations}
        />
      </Section>

      <Section id="s6" labelledBy="wp-s6">
        <Trio
          headId="wp-s6"
          eyebrow={wpQuality.eyebrow}
          title={wpQuality.title}
          intro={wpQuality.intro}
          items={wpQuality.items}
          numbered={false}
        />
      </Section>

      <Section id="s7" bg="soft" labelledBy="wp-s7">
        <Timeline
          headId="wp-s7"
          eyebrow={wpRefonte.eyebrow}
          title={wpRefonte.title}
          intro={wpRefonte.intro}
          steps={wpRefonte.steps}
        />
      </Section>

      <Section id="s8" bg="deep" labelledBy="wp-s8">
        <Ownership
          headId="wp-s8"
          eyebrow={wpOwnership.eyebrow}
          title={wpOwnership.title}
          intro={wpOwnership.intro}
          rows={wpOwnership.rows}
          aside={wpOwnership.aside}
          tone="on-dark"
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="wp-s9">
        <Projects
          headId="wp-s9"
          eyebrow={wpRealisations.eyebrow}
          title={wpRealisations.title}
          intro={wpRealisations.intro}
          cards={wpRealisations.cards}
          note={wpRealisations.note}
          cta={wpRealisations.cta}
          locale={locale}
        />
      </Section>

      <Section id="s10" labelledBy="wp-s10">
        <Extensions
          headId="wp-s10"
          eyebrow={wpNext.eyebrow}
          title={wpNext.title}
          intro={wpNext.intro}
          rows={wpNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s11" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={wpFaqIntro}
          items={wpFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={wpContact.eyebrow}
          title={wpContact.title}
          lead={wpContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
