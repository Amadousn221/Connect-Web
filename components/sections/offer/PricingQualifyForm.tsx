'use client';

import { useState } from 'react';
import { contactFormContent } from '@/content/fr/accueil';
import styles from './PricingQualifyForm.module.css';

// P-PRICING — formulaire de qualification court (3-4 champs, note
// tarification : « garder court, pas un interrogatoire »), intégré à la
// carte prix. Réutilise le même endpoint que le formulaire de contact
// complet (`app/api/contact/route.ts` n'exige que nom/email/message —
// organisation reste optionnel) : aucune nouvelle route nécessaire.
type Status = 'idle' | 'loading' | 'success' | 'error';

export function PricingQualifyForm({ offerTitle }: { offerTitle: string }) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get('entreprise_site') as string)?.trim()) {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: data.get('nom'),
          email: data.get('email'),
          organisation: data.get('organisation'),
          objectif: `Devis — ${offerTitle}`,
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const isDone = status === 'success';

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.honeypot}>
        <label>
          Ne remplissez pas ce champ
          <input type="text" name="entreprise_site" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={styles.field}>
        Nom
        <input type="text" name="nom" placeholder="Votre nom" autoComplete="name" required disabled={isDone} />
      </label>

      <label className={styles.field}>
        Email
        <input
          type="email"
          name="email"
          placeholder="vous@exemple.com"
          autoComplete="email"
          required
          disabled={isDone}
        />
      </label>

      <label className={styles.field}>
        Type d&apos;organisation
        <select name="organisation" defaultValue={contactFormContent.orgTypes[0]} disabled={isDone}>
          {contactFormContent.orgTypes.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        Votre besoin en une ligne
        <input
          type="text"
          name="message"
          placeholder="Ex. boutique 40 produits, paiement international"
          required
          disabled={isDone}
        />
      </label>

      <button type="submit" className={styles.submit} disabled={status === 'loading' || isDone}>
        {status === 'loading' ? 'Envoi en cours…' : isDone ? 'Demande envoyée' : 'Demander un devis'}
      </button>

      {status === 'success' ? (
        <p className={styles.notice} role="status">
          Merci ! On revient vers vous sous 24 h.
        </p>
      ) : status === 'error' ? (
        <p className={styles.error} role="alert">
          L&apos;envoi a échoué. Réessayez, ou écrivez-nous directement.
        </p>
      ) : (
        <p className={styles.reassurance}>Réponse sous 24 h · Sans engagement</p>
      )}
    </form>
  );
}
