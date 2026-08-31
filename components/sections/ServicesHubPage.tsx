import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactSection } from '@/components/sections/ContactSection';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { megaMenuBuild, megaMenuSystem } from '@/components/layout/site-nav';
import {
  servicesHubHero,
  servicesHubGroups,
  servicesHubConseil,
  servicesHubFinalCta,
} from '@/content/fr/servicesHub';
import styles from './ServicesHubPage.module.css';

const ARROW = (
  <span aria-hidden="true" className={styles.arrow}>
    →
  </span>
);

export function ServicesHubPage({ locale }: { locale: Locale }) {
  const groups = [
    { ...servicesHubGroups[0], links: megaMenuBuild },
    { ...servicesHubGroups[1], links: megaMenuSystem },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="cw-sec">
          <nav className={styles.crumb} aria-label="Fil d'Ariane">
            <Link href={localePath(locale, '/')}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{servicesHubHero.eyebrow}</Eyebrow>
          </div>
          <h1 className={`cw-serif ${styles.title}`}>{servicesHubHero.title}</h1>
          <p className={styles.sub}>{servicesHubHero.subtitle}</p>
        </div>
      </section>

      <section className={styles.groups}>
        <div className="cw-sec">
          {groups.map((group) => (
            <RevealOnScroll key={group.title} className={styles.group}>
              <SectionHeading
                eyebrow={group.eyebrow}
                title={group.title}
                lead={group.lead}
              />
              <ul className={styles.list}>
                {group.links.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={localePath(locale, item.path)}
                      className={styles.row}
                    >
                      <span>{item.label}</span>
                      {ARROW}
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className={styles.conseil}>
        <RevealOnScroll className={`cw-sec ${styles.conseilInner}`}>
          <div>
            <div className={styles.eyebrowWrap}>
              <Eyebrow tone="on-dark">{servicesHubConseil.eyebrow}</Eyebrow>
            </div>
            <h2 className={`cw-serif ${styles.conseilTitle}`}>
              {servicesHubConseil.title}
            </h2>
            <p className={styles.conseilBody}>{servicesHubConseil.body}</p>
          </div>
          <Button
            href={localePath(locale, servicesHubConseil.cta.href)}
            variant="primary"
            onDark
            size="md"
          >
            {servicesHubConseil.cta.label}
          </Button>
        </RevealOnScroll>
      </section>

      <section className={styles.finalCta}>
        <RevealOnScroll className={styles.finalInner}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow>{servicesHubFinalCta.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.finalTitle}`}>
            {servicesHubFinalCta.title}
          </h2>
          <Button href={servicesHubFinalCta.cta.href} variant="primary" size="md">
            {servicesHubFinalCta.cta.label}
          </Button>
        </RevealOnScroll>
      </section>

      <ContactSection />
    </>
  );
}
