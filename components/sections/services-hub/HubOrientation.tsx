import type { Locale } from '@/lib/i18n/config';
import { Button } from '@/components/ui/Button';
import { HubHead, HubCta } from './_shared';
import { hubOrientation } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S9 — Comment choisir. Sept situations concrètes → destination(s). Une seule
// destination : la ligne entière est cliquable. Plusieurs : liens distincts,
// jamais un lien étiré sur toute la ligne (handoff §7).
export function HubOrientation({ locale }: { locale: Locale }) {
  return (
    <section id="orientation" className={styles.section}>
      <div className="cw-sec">
        <HubHead
          eyebrow={hubOrientation.eyebrow}
          title={hubOrientation.title}
          lead={hubOrientation.intro}
        />

        <div className={styles.situations}>
          {hubOrientation.situations.map((s) => {
            const single = s.links.length === 1;
            return (
              <div
                key={s.situation}
                className={`${styles.situation} ${single ? styles.clickable : ''}`}
              >
                <h3>{s.situation}</h3>
                <div>
                  <p>{s.answer}</p>
                  <div className={styles.situationLinks}>
                    {s.links.map((l) => (
                      <HubCta key={l.href} href={l.href} locale={locale}>
                        {l.label}
                      </HubCta>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.sectionCta}>
          <Button href={hubOrientation.cta.href} variant="primary" size="xs">
            {hubOrientation.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
