import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ServicePageShell } from '@/components/sections/service-page/ServicePageShell';
import { SpCta } from '@/components/sections/service-page/parts';
import {
  Section,
  Prose,
  Trio,
  Timeline,
  SelectorSection,
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  appsHero,
  appsFrontier,
  appsSignals,
  appsTypes,
  appsMethod,
  appsFirstVersion,
  appsReassure,
  appsOwnership,
  appsConnected,
  appsSituations,
  appsNext,
  appsFaqIntro,
  appsFaqItems,
  appsContact,
} from '@/content/fr/plateformesApplications';
import extras from './apps-extras.module.css';

// Page « Plateformes & applications web sur mesure » — 13 sections (maquette V1,
// builder unifié kind=apps). S4 (types) et S10 (situations) : sélecteurs
// interactifs. Aucune preuve client nommée (aucune fournie). Fonds alternés ;
// pétrole sur S8 propriété.
export function PlateformesApplicationsPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="plateformes-applications">
      <ServiceHero
        eyebrow={appsHero.eyebrow}
        title={appsHero.title}
        intro={appsHero.intro}
        primaryCta={appsHero.primaryCta}
        secondaryCta={appsHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={appsHero.reassurance}
      />

      <Section id="s2" labelledBy="apps-s2">
        <Prose
          headId="apps-s2"
          eyebrow={appsFrontier.eyebrow}
          title={appsFrontier.title}
          body={appsFrontier.body}
        />
        <div className={extras.rattache}>
          <p>{appsFrontier.rattache.text}</p>
          <SpCta href={appsFrontier.rattache.link.href} locale={locale}>
            {appsFrontier.rattache.link.label}
          </SpCta>
        </div>
      </Section>

      <Section id="s3" bg="soft" labelledBy="apps-s3">
        <Prose
          headId="apps-s3"
          eyebrow={appsSignals.eyebrow}
          title={appsSignals.title}
          body={appsSignals.body}
        />
      </Section>

      <Section id="s4" labelledBy="apps-s4">
        <SelectorSection
          headId="apps-s4"
          eyebrow={appsTypes.eyebrow}
          title={appsTypes.title}
          intro={appsTypes.intro}
          ariaLabel={appsTypes.selectorLabel}
          panelEyebrow={appsTypes.panelEyebrow}
          items={appsTypes.operations}
        />
      </Section>

      <Section id="s5" bg="soft" labelledBy="apps-s5">
        <Timeline
          headId="apps-s5"
          eyebrow={appsMethod.eyebrow}
          title={appsMethod.title}
          intro={appsMethod.intro}
          steps={appsMethod.steps}
        />
      </Section>

      <Section id="s6" labelledBy="apps-s6">
        <Prose
          headId="apps-s6"
          eyebrow={appsFirstVersion.eyebrow}
          title={appsFirstVersion.title}
          body={appsFirstVersion.body}
        />
        <div className={extras.phases}>
          {appsFirstVersion.phases.map((ph) => (
            <div key={ph.title} className={extras.phase}>
              <h3>{ph.title}</h3>
              <ul>
                {ph.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="s7" bg="soft" labelledBy="apps-s7">
        <Trio
          headId="apps-s7"
          eyebrow={appsReassure.eyebrow}
          title={appsReassure.title}
          items={appsReassure.items}
          numbered={false}
        />
      </Section>

      <Section id="s8" bg="deep" labelledBy="apps-s8">
        <Prose
          headId="apps-s8"
          eyebrow={appsOwnership.eyebrow}
          title={appsOwnership.title}
          body={appsOwnership.body}
          tone="on-dark"
        />
      </Section>

      <Section id="s9" labelledBy="apps-s9">
        <Prose
          headId="apps-s9"
          eyebrow={appsConnected.eyebrow}
          title={appsConnected.title}
          body={appsConnected.body}
        />
      </Section>

      <Section id="s10" bg="soft" labelledBy="apps-s10">
        <SelectorSection
          headId="apps-s10"
          eyebrow={appsSituations.eyebrow}
          title={appsSituations.title}
          intro={appsSituations.intro}
          ariaLabel={appsSituations.selectorLabel}
          panelEyebrow={appsSituations.panelEyebrow}
          items={appsSituations.operations}
        />
      </Section>

      <Section id="s11" labelledBy="apps-s11">
        <Extensions
          headId="apps-s11"
          eyebrow={appsNext.eyebrow}
          title={appsNext.title}
          intro={appsNext.intro}
          rows={appsNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s12" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={appsFaqIntro}
          items={appsFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={appsContact.eyebrow}
          title={appsContact.title}
          lead={appsContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
