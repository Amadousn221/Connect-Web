import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

// Page d'accueil — coquille M0. Le vrai contenu (hero, bande confiance, wedge,
// cas phares, offre 4+3, process, ressources, FAQ, CTA) est construit au
// Milestone M2 à partir de la copy P08 et du mockup `Connect Web - Accueil V2`.
// M0 vérifie seulement : header + footer + bascule de thème fonctionnels,
// et sert de page pour le Lighthouse de référence.

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <section className={`cw-sec ${styles.shell}`}>
      <p className={styles.eyebrow}>Milestone M0 — scaffold &amp; design system</p>
      <h1 className={`cw-serif ${styles.title}`}>
        Le squelette est en place.
      </h1>
      <p className={styles.body}>
        En-tête, méga-menu Services, pied de page et bascule de thème
        clair/sombre sont portés depuis les maquettes. Le contenu des pages
        arrive aux milestones suivants.
      </p>
    </section>
  );
}
