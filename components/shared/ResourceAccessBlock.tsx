import { Button } from '@/components/ui/Button';
import { resourceTypeLabel } from '@/sanity/lib/constants';
import type { ResourceFull } from '@/sanity/lib/types';
import { onlineAccessLabels } from '@/content/fr/ressources';

import { DownloadForm } from './DownloadForm';
import styles from './ResourceAccessBlock.module.css';

/**
 * Bloc d'accès à la ressource — cœur de la page (spec §6.4 Zone 7).
 * - `deliveryMode === 'online'` → bouton direct vers `onlineUrl`.
 * - `deliveryMode === 'download'` → formulaire de capture email.
 *
 * L'incrément du compteur et l'envoi email sont câblés à l'Étape 3.4.
 */
export function ResourceAccessBlock({ resource }: { resource: ResourceFull }) {
  const typeLabel = resourceTypeLabel(resource.resourceType);

  if (resource.deliveryMode === 'online') {
    if (!resource.onlineUrl) {
      return (
        <section className={styles.block}>
          <p className={styles.pending}>Le lien d&apos;accès sera disponible très bientôt.</p>
        </section>
      );
    }
    const label = onlineAccessLabels[resource.resourceType] ?? 'Accéder à la ressource';
    return (
      <section className={styles.block} id="acceder">
        <p className={styles.title}>Accès libre</p>
        <p className={styles.lead}>Cette ressource est consultable en ligne, sans formulaire.</p>
        <Button href={resource.onlineUrl} variant="primary" size="lg" onDark>
          {label}
        </Button>
      </section>
    );
  }

  // deliveryMode === 'download'
  return (
    <section className={styles.block} id="obtenir">
      <p className={styles.title}>Recevoir {typeLabel.toLowerCase()}</p>
      <p className={styles.lead}>Indiquez votre email : on vous envoie le fichier directement.</p>
      {resource.downloadFile ? null : (
        <p className={styles.pendingInline}>
          {/* Contrôle éditorial : le fichier est requis en mode téléchargement
              (validation schéma), ce garde-fou couvre un contenu incomplet. */}
          Le fichier sera disponible très bientôt.
        </p>
      )}
      <DownloadForm slug={resource.slug} confirmationMessage={resource.confirmationMessage} />
    </section>
  );
}
