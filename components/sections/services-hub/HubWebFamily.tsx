import type { Locale } from '@/lib/i18n/config';
import { HubHead, HubCta, SmartLink } from './_shared';
import { hubWeb } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S3 — Expertise 1 : Conception et développement web. Section la plus riche :
// deux axes de lecture (par usage / par plateforme), encart de preuve ATTA
// nettement séparé, puis CTA vers la page parente.
//
// Les 3 blocs « par plateforme » (WordPress / Shopify / Refonte) restent
// visibles SANS lien tant que leurs pages dédiées n'existent pas (décision PO).
export function HubWebFamily({ locale }: { locale: Locale }) {
  return (
    <section id="web" className={styles.section} data-bg="soft">
      <div className="cw-sec">
        <HubHead
          eyebrow={hubWeb.eyebrow}
          title={hubWeb.title}
          lead={hubWeb.intro}
        />

        <div className={styles.railTitle}>{hubWeb.usagesTitle}</div>
        <div className={styles.usageGrid}>
          {hubWeb.usages.map((u) => (
            <article key={u.title} className={`${styles.usage} ${styles.clickable}`}>
              <h3>{u.title}</h3>
              <p>{u.body}</p>
              <HubCta href={u.link.href} locale={locale}>
                {u.link.label}
              </HubCta>
            </article>
          ))}
        </div>

        <div className={styles.railTitle}>{hubWeb.platformsTitle}</div>
        <div className={styles.platformList}>
          {hubWeb.platforms.map((p) => (
            <article key={p.title} className={styles.platform}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
        <p className={styles.platformNote}>
          Pages Développement WordPress, Développement Shopify et Refonte de site
          internet en cours de construction.
        </p>

        <aside className={styles.proof}>
          <span className={styles.proofLabel}>Preuve — ATTA Africa</span>
          <p>
            Boutique Shopify DTC premium, vente en plusieurs devises (EUR, USD,
            CAD, XOF), paiements Mobile Money via PayDunya (Wave, Orange, Free) et
            paiements internationaux (cartes, PayPal, Apple Pay, Shop Pay). Voir
            le projet en ligne :{' '}
            <SmartLink href={hubWeb.proofLink.href} locale={locale}>
              {hubWeb.proofLink.label}
            </SmartLink>
          </p>
        </aside>

        <div className={styles.sectionCta}>
          <HubCta href={hubWeb.cta.href} locale={locale}>
            {hubWeb.cta.label}
          </HubCta>
        </div>
      </div>
    </section>
  );
}
