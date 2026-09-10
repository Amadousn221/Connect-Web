import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ServicePageShell } from '@/components/sections/service-page/ServicePageShell';
import {
  Section,
  Sequence,
  Reading,
  ConfigCards,
  Timeline,
  Ownership,
  Projects,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  refonteHero,
  refonteSignals,
  refonteLevels,
  refonteDiagnostic,
  refonteProtect,
  refontePlatform,
  refonteMethod,
  refonteOwnership,
  refonteProof,
  refonteFaqIntro,
  refonteFaqItems,
  refonteContact,
} from '@/content/fr/refonteSiteInternet';

// Page « Refonte de site internet » — 11 sections (copy Opus, EN-ATTENTE-UX).
// Page transversale : part de l'existant. S3 : progression des 5 niveaux
// d'intervention. Fonds alternés ; pétrole sur S8 (propriété). `noindex`.
export function RefonteSiteInternetPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="refonte-site-internet">
      <ServiceHero
        eyebrow={refonteHero.eyebrow}
        title={refonteHero.title}
        intro={refonteHero.intro}
        primaryCta={refonteHero.primaryCta}
        secondaryCta={refonteHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={refonteHero.reassurance}
      />

      <Section id="s2" bg="soft" labelledBy="ref-s2">
        <Sequence
          headId="ref-s2"
          eyebrow={refonteSignals.eyebrow}
          title={refonteSignals.title}
          intro={refonteSignals.intro}
          items={refonteSignals.items}
        />
      </Section>

      <Section id="s3" labelledBy="ref-s3">
        <Timeline
          headId="ref-s3"
          eyebrow={refonteLevels.eyebrow}
          title={refonteLevels.title}
          intro={refonteLevels.intro}
          steps={refonteLevels.steps}
        />
      </Section>

      <Section id="s4" bg="soft" labelledBy="ref-s4">
        <Reading
          headId="ref-s4"
          eyebrow={refonteDiagnostic.eyebrow}
          title={refonteDiagnostic.title}
          intro={refonteDiagnostic.intro}
          items={refonteDiagnostic.items}
        />
      </Section>

      <Section id="s5" labelledBy="ref-s5">
        <Reading
          headId="ref-s5"
          eyebrow={refonteProtect.eyebrow}
          title={refonteProtect.title}
          intro={refonteProtect.intro}
          items={refonteProtect.items}
        />
      </Section>

      <Section id="s6" bg="soft" labelledBy="ref-s6">
        <ConfigCards
          headId="ref-s6"
          eyebrow={refontePlatform.eyebrow}
          title={refontePlatform.title}
          intro={refontePlatform.intro}
          cards={refontePlatform.cards}
        />
      </Section>

      <Section id="s7" labelledBy="ref-s7">
        <Timeline
          headId="ref-s7"
          eyebrow={refonteMethod.eyebrow}
          title={refonteMethod.title}
          intro={refonteMethod.intro}
          steps={refonteMethod.steps}
        />
      </Section>

      <Section id="s8" bg="deep" labelledBy="ref-s8">
        <Ownership
          headId="ref-s8"
          eyebrow={refonteOwnership.eyebrow}
          title={refonteOwnership.title}
          intro={refonteOwnership.intro}
          rows={refonteOwnership.rows}
          aside={refonteOwnership.aside}
          tone="on-dark"
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="ref-s9">
        <Projects
          headId="ref-s9"
          eyebrow={refonteProof.eyebrow}
          title={refonteProof.title}
          intro={refonteProof.intro}
          cards={refonteProof.cards}
          note={refonteProof.note}
          cta={refonteProof.cta}
          locale={locale}
        />
      </Section>

      <Section id="s10" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={refonteFaqIntro}
          items={refonteFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={refonteContact.eyebrow}
          title={refonteContact.title}
          lead={refonteContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
