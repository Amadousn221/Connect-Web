import Image from 'next/image';
import { showValidationNotes } from '@/lib/flags';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { clientsIntro, clientLogos } from '@/content/fr/accueil';
import styles from './LogoStrip.module.css';

// Bande de logos clients — copy V1 : rattachée à la réassurance (StatsBlock),
// juste au-dessus, logos agrandis. AUCUN défilement automatique : grille
// centrée statique, adaptable au nombre réel de logos. Tant qu'aucun fichier
// n'est fourni : grille de repères [LOGO_MANQUANT] en preview seulement.
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
                  width={240}
                  height={80}
                  sizes="(max-width: 640px) 42vw, 208px"
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
