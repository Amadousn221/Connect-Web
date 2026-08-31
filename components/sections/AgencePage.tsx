import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { ContactSection } from '@/components/sections/ContactSection';
import { ShieldCheckIcon, CheckCircleIcon, MapPinIcon } from '@/components/ui/icons';
import { localePath } from '@/lib/i18n/routing';
import { showValidationNotes } from '@/lib/flags';
import type { Locale } from '@/lib/i18n/config';
import {
  agenceHero,
  agenceMission,
  agenceValues,
  agenceStats,
  agenceTeamIntro,
  agenceMethod,
} from '@/content/fr/agence';
import styles from './AgencePage.module.css';

const VALUE_ICON: Record<(typeof agenceValues)[number]['icon'], ReactNode> = {
  shield: <ShieldCheckIcon />,
  check: <CheckCircleIcon />,
  pin: <MapPinIcon />,
};

export function AgencePage({ locale }: { locale: Locale }) {
  const preview = showValidationNotes();

  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`cw-sec ${styles.heroInner}`}>
          <nav className={styles.crumb} aria-label="Fil d'Ariane">
            <Link href={localePath(locale, '/')}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Agence</span>
          </nav>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.dot} />
            {agenceHero.eyebrow}
          </p>
          <h1 className={`cw-serif ${styles.heroTitle}`}>{agenceHero.title}</h1>
          <p className={styles.heroSub}>{agenceHero.subtitle}</p>
          <div className={styles.heroCtas}>
            <Button href={agenceHero.ctas[0].href} variant="primary" onDark size="md">
              {agenceHero.ctas[0].label}
            </Button>
            <Button
              href={localePath(locale, agenceHero.ctas[1].href)}
              variant="outline"
              onDark
              size="md"
            >
              {agenceHero.ctas[1].label}
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={`cw-sec ${styles.missionGrid}`}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow={agenceMission.eyebrow}
              title={agenceMission.title}
            />
            {agenceMission.paragraphs.map((p) => (
              <p key={p} className={`cw-prose ${styles.missionP}`}>
                {p}
              </p>
            ))}
          </RevealOnScroll>
          <RevealOnScroll className={styles.missionMedia}>
            {preview ? (
              <ValidationNote>{"Photo de l'équipe ou du bureau"}</ValidationNote>
            ) : null}
          </RevealOnScroll>
        </div>

        <RevealOnScroll className={`cw-sec ${styles.values}`}>
          {agenceValues.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon} aria-hidden="true">
                {VALUE_ICON[v.icon]}
              </span>
              <p className={`cw-serif ${styles.valueTitle}`}>{v.title}</p>
              <p className={styles.valueBody}>{v.body}</p>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      <section className={styles.stats}>
        <RevealOnScroll className={`cw-sec ${styles.statsGrid}`}>
          {agenceStats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={`cw-serif ${styles.statValue}`}>{s.value}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      {preview ? (
        <section className={styles.team}>
          <div className="cw-sec">
            <RevealOnScroll>
              <SectionHeading
                eyebrow={agenceTeamIntro.eyebrow}
                title={agenceTeamIntro.title}
                lead={agenceTeamIntro.lead}
                align="center"
              />
            </RevealOnScroll>
            <div className={styles.teamGrid}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.teamCard}>
                  <span className={styles.teamPhoto}>
                    <ValidationNote>Photo</ValidationNote>
                  </span>
                  <ValidationNote>Prénom Nom · Rôle</ValidationNote>
                </div>
              ))}
            </div>
            <p className={styles.teamNote}>
              <ValidationNote variant="box">
                {
                  "Noms, rôles et photos de l'équipe à fournir par le PO — section masquée en production tant qu'ils manquent."
                }
              </ValidationNote>
            </p>
          </div>
        </section>
      ) : null}

      <section className={styles.method}>
        <div className="cw-sec">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={agenceMethod.eyebrow}
              title={agenceMethod.title}
              align="center"
            />
          </RevealOnScroll>
          <RevealOnScroll className={styles.methodGrid}>
            {agenceMethod.steps.map((step) => (
              <div key={step.num} className={styles.methodStep}>
                <span className={`cw-serif ${styles.methodNum}`} aria-hidden="true">
                  {step.num}
                </span>
                <p className={`cw-serif ${styles.methodTitle}`}>{step.title}</p>
                <p className={styles.methodBody}>{step.body}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
