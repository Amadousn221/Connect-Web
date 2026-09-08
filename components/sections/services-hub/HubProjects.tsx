import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import { HubHead, HubCta } from './_shared';
import { hubProjects } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S11 — Réalisations en preuve. Trois cartes uniformes : couverture 16:10
// (capture réelle en `contain`, ou couverture typographique si le visuel
// manque), badge discret, H3, texte, CTA. CTA alignés en bas par flexbox.
//
// Captures réelles : ATTA Africa et SCOD VTC (fournies PO, dans /public).
// Maison Peinture : couverture typographique — visuel réel non fourni.
// « Voir le cas » → /realisations tant que les fiches /realisations/[slug]
// ne sont pas livrées.
export function HubProjects({ locale }: { locale: Locale }) {
  return (
    <section id="realisations" className={styles.section}>
      <div className="cw-sec">
        <HubHead
          eyebrow={hubProjects.eyebrow}
          title={hubProjects.title}
          lead={hubProjects.intro}
        />

        <div className={styles.projects}>
          {hubProjects.projects.map((p) => (
            <article key={p.name} className={`${styles.project} ${styles.clickable}`}>
              <div className={styles.projectCover}>
                {p.image ? (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : p.cover ? (
                  <span className={styles.coverType}>
                    {p.cover[0]}
                    <small>{p.cover[1]}</small>
                  </span>
                ) : null}
              </div>
              <div className={styles.projectBody}>
                <span className={styles.projectBadge}>{p.badge}</span>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
                <HubCta
                  href={p.cta.href}
                  locale={locale}
                  ariaLabel={`${p.cta.label} — ${p.name}`}
                >
                  {p.cta.label}
                </HubCta>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.sectionCta}>
          <HubCta href={hubProjects.cta.href} locale={locale}>
            {hubProjects.cta.label}
          </HubCta>
        </div>
      </div>
    </section>
  );
}
