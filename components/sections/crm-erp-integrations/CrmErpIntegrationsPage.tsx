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
  crmHero,
  crmBasics,
  crmSignals,
  crmScope,
  crmConnect,
  crmTools,
  crmMethod,
  crmOwnership,
  crmProof,
  crmNext,
  crmFaqIntro,
  crmFaqItems,
  crmContact,
} from '@/content/fr/crmErpIntegrations';

// Page « ERP, CRM et intégrations » — 12 sections (copy Opus, dossier
// EN-ATTENTE-UX). Aucune maquette validée : blocs du kit partagé choisis par
// type de section. Fonds alternés ; pétrole sur S8 (propriété). `noindex`.
export function CrmErpIntegrationsPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="crm-erp-integrations">
      <ServiceHero
        eyebrow={crmHero.eyebrow}
        title={crmHero.title}
        intro={crmHero.intro}
        primaryCta={crmHero.primaryCta}
        secondaryCta={crmHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={crmHero.reassurance}
      />

      <Section id="s2" bg="soft" labelledBy="crm-s2">
        <Reading
          headId="crm-s2"
          eyebrow={crmBasics.eyebrow}
          title={crmBasics.title}
          intro={crmBasics.intro}
          items={crmBasics.items}
        />
      </Section>

      <Section id="s3" labelledBy="crm-s3">
        <Sequence
          headId="crm-s3"
          eyebrow={crmSignals.eyebrow}
          title={crmSignals.title}
          intro={crmSignals.intro}
          items={crmSignals.items}
        />
      </Section>

      <Section id="s4" bg="soft" labelledBy="crm-s4">
        <Reading
          headId="crm-s4"
          eyebrow={crmScope.eyebrow}
          title={crmScope.title}
          intro={crmScope.intro}
          items={crmScope.items}
          locale={locale}
        />
      </Section>

      <Section id="s5" labelledBy="crm-s5">
        <Reading
          headId="crm-s5"
          eyebrow={crmConnect.eyebrow}
          title={crmConnect.title}
          intro={crmConnect.intro}
          items={crmConnect.items}
        />
      </Section>

      <Section id="s6" bg="soft" labelledBy="crm-s6">
        <ConfigCards
          headId="crm-s6"
          eyebrow={crmTools.eyebrow}
          title={crmTools.title}
          intro={crmTools.intro}
          cards={crmTools.cards}
          notes={crmTools.notes}
        />
      </Section>

      <Section id="s7" labelledBy="crm-s7">
        <Timeline
          headId="crm-s7"
          eyebrow={crmMethod.eyebrow}
          title={crmMethod.title}
          intro={crmMethod.intro}
          steps={crmMethod.steps}
        />
      </Section>

      <Section id="s8" bg="deep" labelledBy="crm-s8">
        <ConfigCards
          headId="crm-s8"
          eyebrow={crmOwnership.eyebrow}
          title={crmOwnership.title}
          intro={crmOwnership.intro}
          cards={crmOwnership.cards}
          outro={crmOwnership.outro}
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="crm-s9">
        <Reading
          headId="crm-s9"
          eyebrow={crmProof.eyebrow}
          title={crmProof.title}
          intro={crmProof.intro}
          items={crmProof.items}
          cta={crmProof.cta}
          split={false}
          locale={locale}
        />
      </Section>

      <Section id="s10" labelledBy="crm-s10">
        <Extensions
          headId="crm-s10"
          eyebrow={crmNext.eyebrow}
          title={crmNext.title}
          intro={crmNext.intro}
          rows={crmNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s11" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={crmFaqIntro}
          items={crmFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={crmContact.eyebrow}
          title={crmContact.title}
          lead={crmContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
