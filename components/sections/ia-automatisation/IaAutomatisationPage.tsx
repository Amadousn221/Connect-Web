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
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  iaHero,
  iaChange,
  iaApproaches,
  iaProof,
  iaFamilies,
  iaMethod,
  iaTrust,
  iaOwnership,
  iaAtta,
  iaNext,
  iaFaqIntro,
  iaFaqItems,
  iaContact,
} from '@/content/fr/iaAutomatisation';

// Page « IA et automatisation » — 12 sections (copy Opus, EN-ATTENTE-UX).
// S4 : traitement PROUVÉ (carte accentuée) vs EXPLORÉ. Fonds alternés ;
// pétrole sur S8 (propriété). Aucune maquette validée. `noindex`.
export function IaAutomatisationPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="ia-automatisation">
      <ServiceHero
        eyebrow={iaHero.eyebrow}
        title={iaHero.title}
        intro={iaHero.intro}
        primaryCta={iaHero.primaryCta}
        secondaryCta={iaHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={iaHero.reassurance}
      />

      <Section id="s2" bg="soft" labelledBy="ia-s2">
        <Sequence
          headId="ia-s2"
          eyebrow={iaChange.eyebrow}
          title={iaChange.title}
          intro={iaChange.intro}
          items={iaChange.items}
        />
      </Section>

      <Section id="s3" labelledBy="ia-s3">
        <ConfigCards
          headId="ia-s3"
          eyebrow={iaApproaches.eyebrow}
          title={iaApproaches.title}
          intro={iaApproaches.intro}
          cards={iaApproaches.cards}
        />
      </Section>

      <Section id="s4" bg="soft" labelledBy="ia-s4">
        <ConfigCards
          headId="ia-s4"
          eyebrow={iaProof.eyebrow}
          title={iaProof.title}
          intro={iaProof.intro}
          cards={iaProof.cards}
        />
      </Section>

      <Section id="s5" labelledBy="ia-s5">
        <Reading
          headId="ia-s5"
          eyebrow={iaFamilies.eyebrow}
          title={iaFamilies.title}
          intro={iaFamilies.intro}
          items={iaFamilies.items}
        />
      </Section>

      <Section id="s6" bg="soft" labelledBy="ia-s6">
        <Timeline
          headId="ia-s6"
          eyebrow={iaMethod.eyebrow}
          title={iaMethod.title}
          intro={iaMethod.intro}
          steps={iaMethod.steps}
        />
      </Section>

      <Section id="s7" labelledBy="ia-s7">
        <Reading
          headId="ia-s7"
          eyebrow={iaTrust.eyebrow}
          title={iaTrust.title}
          intro={iaTrust.intro}
          items={iaTrust.items}
        />
      </Section>

      <Section id="s8" bg="deep" labelledBy="ia-s8">
        <ConfigCards
          headId="ia-s8"
          eyebrow={iaOwnership.eyebrow}
          title={iaOwnership.title}
          intro={iaOwnership.intro}
          cards={iaOwnership.cards}
          outro={iaOwnership.outro}
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="ia-s9">
        <Reading
          headId="ia-s9"
          eyebrow={iaAtta.eyebrow}
          title={iaAtta.title}
          intro={iaAtta.intro}
          items={iaAtta.items}
          cta={iaAtta.cta}
          split={false}
          locale={locale}
        />
      </Section>

      <Section id="s10" labelledBy="ia-s10">
        <Extensions
          headId="ia-s10"
          eyebrow={iaNext.eyebrow}
          title={iaNext.title}
          intro={iaNext.intro}
          rows={iaNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s11" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={iaFaqIntro}
          items={iaFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={iaContact.eyebrow}
          title={iaContact.title}
          lead={iaContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
