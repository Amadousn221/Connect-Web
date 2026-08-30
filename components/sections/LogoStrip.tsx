import Image from 'next/image';
import { showValidationNotes } from '@/lib/flags';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { clientsIntro, clientLogos } from '@/content/fr/accueil';
import type { ClientLogo } from '@/content/types';
import styles from './LogoStrip.module.css';

// Bande de logos clients — §03 / §06.2 du Design Handoff. Placée juste après le
// Hero, avant la bande réassurance. Défilement lent horizontal en CSS pur quand
// les logos réels existent (piste dupliquée, pause au survol/focus, coupé par
// `prefers-reduced-motion`). Tant qu'aucun fichier n'est fourni : grille
// statique de placeholders [LOGO_MANQUANT], visible en preview uniquement.
export function LogoStrip() {
  const hasLogos = clientLogos.some((c) => c.src);
  if (!hasLogos && !showValidationNotes()) return null;

  return (
    <section
      className={styles.section}
      data-has-logos={String(hasLogos)}
      aria-labelledby="clients-label"
    >
      <div className="cw-sec">
        <p id="clients-label" className={styles.intro}>
          {clientsIntro}
        </p>

        <div className={styles.viewport}>
          <ul className={styles.track}>
            {clientLogos.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </ul>
          {hasLogos ? (
            <ul className={styles.track} aria-hidden="true">
              {clientLogos.map((logo) => (
                <LogoItem key={`dup-${logo.name}`} logo={logo} />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function LogoItem({ logo }: { logo: ClientLogo }) {
  return (
    <li className={styles.item}>
      {logo.src ? (
        <Image
          src={logo.src}
          alt={logo.name}
          width={132}
          height={32}
          className={styles.logo}
        />
      ) : (
        <ValidationNote>{`LOGO_MANQUANT : ${logo.name}`}</ValidationNote>
      )}
    </li>
  );
}
