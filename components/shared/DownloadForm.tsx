'use client';

import { useState } from 'react';

import { downloadForm as f } from '@/content/fr/ressources';

import styles from './ResourceAccessBlock.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulaire de capture email avant téléchargement (spec §6.4 Zone 7, cas A).
 * Consentement RGPD obligatoire (bouton désactivé tant que non coché).
 *
 * ⚠️ L'endpoint `/api/download-resource` est créé à l'Étape 3.4. D'ici là, la
 * soumission renvoie une erreur (404) et l'utilisateur voit le message d'échec —
 * comportement attendu, tout le reste (UI, validation, POST) est prêt.
 */
export function DownloadForm({
  slug,
  confirmationMessage,
}: {
  slug: string;
  confirmationMessage?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading' || !consent) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();

    if (!EMAIL_RE.test(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    setStatus('loading');
    try {
      const res = await fetch('/api/download-resource', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          name: data.get('name'),
          email,
          org: data.get('org'),
          consent: true,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className={styles.confirmation} role="status">
        {confirmationMessage || f.successFallback}
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <label className={styles.field} htmlFor="dl-name">
          {f.fields.name}
          <input id="dl-name" type="text" name="name" autoComplete="name" required />
        </label>
        <label className={styles.field} htmlFor="dl-email">
          {f.fields.email}
          <input
            id="dl-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            aria-invalid={emailError || undefined}
            onChange={() => emailError && setEmailError(false)}
          />
        </label>
      </div>

      <label className={styles.field} htmlFor="dl-org">
        {f.fields.org}
        <input id="dl-org" type="text" name="org" autoComplete="organization" />
      </label>

      <label className={styles.consent}>
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        {f.fields.consent}
      </label>

      <button type="submit" className={styles.submit} disabled={status === 'loading' || !consent}>
        {status === 'loading' ? f.submitPending : f.submitLabel}
      </button>

      <p className={styles.formStatus} aria-live="polite">
        {emailError ? f.invalidEmail : status === 'error' ? f.errorGeneric : ''}
      </p>
    </form>
  );
}
