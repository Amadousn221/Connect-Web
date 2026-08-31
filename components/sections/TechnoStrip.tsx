import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import { technosIntro, technos } from '@/content/fr/technos';
import type { Techno } from '@/content/fr/technos';
import styles from './TechnoStrip.module.css';

// Slider « Les outils qu'on maîtrise » (vague 4). Défilement lent CSS quand les
// logos réels existent (piste dupliquée, pause au survol/focus, coupé par
// `prefers-reduced-motion` → grille statique). Tant qu'aucun fichier n'est
// fourni : liste de repères [LOGO_TECHNO_MANQUANT], visible en preview seulement.
// JAMAIS « Partenaires » (DECISION 05).
export function TechnoStrip() {
  const hasLogos = technos.some((t) => t.src);
  if (!hasLogos && !showValidationNotes()) return null;

  return (
    <section
      className={styles.section}
      data-has-logos={String(hasLogos)}
      aria-labelledby="technos-label"
    >
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            align="center"
            title={technosIntro.title}
            lead={technosIntro.subtitle}
          />
        </RevealOnScroll>

        <span id="technos-label" hidden>
          {technosIntro.title}
        </span>

        {hasLogos ? (
          <div className={styles.viewport}>
            <ul className={styles.track}>
              {technos.map((t) => (
                <TechnoItem key={t.name} techno={t} />
              ))}
            </ul>
            <ul className={styles.track} aria-hidden="true">
              {technos.map((t) => (
                <TechnoItem key={`dup-${t.name}`} techno={t} />
              ))}
            </ul>
          </div>
        ) : (
          <ul className={styles.placeholders}>
            {technos.map((t) => (
              <li key={t.name}>
                <ValidationNote>{`LOGO_TECHNO_MANQUANT : ${t.name}`}</ValidationNote>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function TechnoItem({ techno }: { techno: Techno }) {
  if (!techno.src) return null;
  return (
    <li className={styles.item}>
      <Image
        src={techno.src}
        alt={techno.name}
        width={120}
        height={40}
        className={styles.logo}
      />
    </li>
  );
}
