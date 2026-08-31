'use client';

import { useState } from 'react';
import { contactFormContent as c } from '@/content/fr/accueil';
import styles from './ContactSection.module.css';

// A12 — Formulaire de contact. Vague 4 : branché sur /api/contact (POST JSON).
// États idle / loading / success / error tous gérés. Honeypot anti-spam
// (`entreprise_site`, masqué). Après succès : message + reset des champs.
type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot : un bot remplit ce champ caché → on simule un succès sans envoi.
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
          objectif: data.get('objectif'),
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
      <p className={`cw-serif ${styles.formTitle}`}>{c.title}</p>

      {/* Honeypot anti-spam — hors flux visuel et hors ordre de tabulation ;
          libellé explicite pour les lecteurs d'écran. Un bot le remplira. */}
      <div className={styles.honeypot}>
        <label>
          Ne remplissez pas ce champ
          <input
            type="text"
            name="entreprise_site"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          Nom
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            autoComplete="name"
            required
            disabled={isDone}
          />
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
      </div>

      <label className={styles.field}>
        Type d&apos;organisation
        <select name="organisation" defaultValue={c.orgTypes[0]} disabled={isDone}>
          {c.orgTypes.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        Ce que vous cherchez à faire
        <select name="objectif" defaultValue={c.goals[0]} disabled={isDone}>
          {c.goals.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        Votre message
        <textarea
          name="message"
          rows={4}
          placeholder="Où vous en êtes, ce qui bloque, ce que vous aimeriez obtenir…"
          required
          disabled={isDone}
        />
      </label>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'loading' || isDone}
      >
        {status === 'loading' ? c.submittingLabel : c.submitLabel}
      </button>

      {status === 'success' ? (
        <p className={styles.notice} role="status">
          {c.successMessage}
        </p>
      ) : status === 'error' ? (
        <p className={styles.error} role="alert">
          {c.errorMessage}
        </p>
      ) : (
        <p className={styles.reassurance}>{c.reassurance}</p>
      )}
    </form>
  );
}
