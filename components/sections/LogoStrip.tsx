import Image from 'next/image';
import { showValidationNotes } from '@/lib/flags';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { clientsIntro, clientLogos } from '@/content/fr/accueil';
import styles from './LogoStrip.module.css';

// Bande de logos clients — Refonte Accueil / Lot 2. Déplacée entre « Du site au
// système » et « Réalisations », sur fond ivoire. AUCUN défilement automatique :
// grille centrée statique, adaptable au nombre réel de logos. Tant qu'aucun
// fichier n'est fourni : grille de repères [LOGO_MANQUANT] en preview seulement.
export function LogoStrip() {
  const hasLogos = clientLogos.some((c) => c.src);
  const showNotes = showValidationNotes();
  if (!hasLogos && !showNotes) return null;

  // En prod : uniquement les logos réellement fournis. En preview : toute la
  // liste, avec les repères [LOGO_MANQUANT].
  const logos =
    hasLogos && !showNotes ? clientLogos.filter((c) => c.src) : clientLogos;

  return (
    <section className={styles.section} aria-labelledby="clients-label">
      <div className="cw-sec">
        <p id="clients-label" className={styles.intro}>
          {clientsIntro}
        </p>

        <ul className={styles.grid}>
          {logos.map((logo) => (
            <li key={logo.name} className={styles.item}>
              {logo.src ? (
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={200}
                  height={64}
                  sizes="(max-width: 640px) 40vw, 170px"
                  className={styles.logo}
                />
              ) : (
                <ValidationNote>{`LOGO_MANQUANT : ${logo.name}`}</ValidationNote>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
