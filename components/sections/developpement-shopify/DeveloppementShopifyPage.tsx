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
  Projects,
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  spfHero,
  spfPlatform,
  spfWork,
  spfOps,
  spfPayments,
  spfMigration,
  spfApps,
  spfOwnership,
  spfProof,
  spfNext,
  spfFaqIntro,
  spfFaqItems,
  spfContact,
} from '@/content/fr/developpementShopify';

// Page « Développement Shopify » — 12 sections (maquette V1, builder unifié
// kind=shopify). S4 : sélecteur d'opérations. Fonds alternés ; pétrole sur S8.
export function DeveloppementShopifyPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="developpement-shopify">
      <ServiceHero
        eyebrow={spfHero.eyebrow}
        title={spfHero.title}
        intro={spfHero.intro}
        primaryCta={spfHero.primaryCta}
        secondaryCta={spfHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={spfHero.reassurance}
      />

      <Section id="s2" bg="soft" labelledBy="spf-s2">
        <ConfigCards
          headId="spf-s2"
          eyebrow={spfPlatform.eyebrow}
          title={spfPlatform.title}
          intro={spfPlatform.intro}
          cards={spfPlatform.cards}
        />
      </Section>

      <Section id="s3" labelledBy="spf-s3">
        <Reading
          headId="spf-s3"
          eyebrow={spfWork.eyebrow}
          title={spfWork.title}
          intro={spfWork.intro}
          items={spfWork.items}
        />
      </Section>

      <Section id="s4" bg="soft" labelledBy="spf-s4">
        <SelectorSection
          headId="spf-s4"
          eyebrow={spfOps.eyebrow}
          title={spfOps.title}
          intro={spfOps.intro}
          ariaLabel={spfOps.selectorLabel}
          panelEyebrow={spfOps.panelEyebrow}
          items={spfOps.operations}
        />
      </Section>

      <Section id="s5" labelledBy="spf-s5">
        <Reading
          headId="spf-s5"
          eyebrow={spfPayments.eyebrow}
          title={spfPayments.title}
          intro={spfPayments.intro}
          items={spfPayments.items}
          split={false}
        />
      </Section>

      <Section id="s6" bg="soft" labelledBy="spf-s6">
        <Timeline
          headId="spf-s6"
          eyebrow={spfMigration.eyebrow}
          title={spfMigration.title}
          intro={spfMigration.intro}
          steps={spfMigration.steps}
          split={false}
        />
      </Section>

      <Section id="s7" labelledBy="spf-s7">
        <Reading
          headId="spf-s7"
          eyebrow={spfApps.eyebrow}
          title={spfApps.title}
          intro={spfApps.intro}
          items={spfApps.items}
          split={false}
        />
      </Section>

      <Section id="s8" bg="deep" labelledBy="spf-s8">
        <ConfigCards
          headId="spf-s8"
          eyebrow={spfOwnership.eyebrow}
          title={spfOwnership.title}
          intro={spfOwnership.intro}
          cards={spfOwnership.cards}
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="spf-s9">
        <Projects
          headId="spf-s9"
          eyebrow={spfProof.eyebrow}
          title={spfProof.title}
          intro={spfProof.intro}
          cards={[spfProof.card]}
          locale={locale}
        />
        <Reading
          eyebrow="Ce que nous avons livré"
          title="Cinq chantiers sur ATTA Africa"
          items={spfProof.details}
          split={false}
        />
      </Section>

      <Section id="s10" labelledBy="spf-s10">
        <Extensions
          headId="spf-s10"
          eyebrow={spfNext.eyebrow}
          title={spfNext.title}
          intro={spfNext.intro}
          rows={spfNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s11" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={spfFaqIntro}
          items={spfFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={spfContact.eyebrow}
          title={spfContact.title}
          lead={spfContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
