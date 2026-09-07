'use client';

import { useState } from 'react';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import { contactFormContent as c } from '@/content/fr/accueil';
import styles from './ContactSection.module.css';

// A12 — Formulaire de contact (copy V1 : Nom, Entreprise, Email, Téléphone,
// Type de projet, Budget indicatif, Votre besoin). Branché sur /api/contact
// (POST JSON). États idle / loading / success / error tous gérés. Honeypot
// anti-spam (`site_web`, masqué). Après succès : message + reset des champs.
type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot : un bot remplit ce champ caché → on simule un succès sans envoi.
    if ((data.get('site_web') as string)?.trim()) {
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
          entreprise: data.get('entreprise'),
          email: data.get('email'),
          telephone: data.get('telephone'),
          typeProjet: data.get('typeProjet'),
          budget: data.get('budget'),
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
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" />
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
          Entreprise ou organisation
          <input
            type="text"
            name="entreprise"
            placeholder="Nom de votre structure"
            autoComplete="organization"
            disabled={isDone}
          />
        </label>
      </div>

      <div className={styles.row}>
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
          Téléphone
          <input
            type="tel"
            name="telephone"
            placeholder="+221 …"
            autoComplete="tel"
            disabled={isDone}
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          Type de projet
          <select name="typeProjet" defaultValue={c.projectTypes[0]} disabled={isDone}>
            {c.projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          Budget indicatif
          <select name="budget" defaultValue={c.budgets[0]} disabled={isDone}>
            {c.budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={styles.field}>
        Votre besoin
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
        <p className={styles.reassurance}>
          {c.reassurance}
          {showValidationNotes() ? (
            <>
              {' · '}
              <ValidationNote>{c.reassurancePending}</ValidationNote>
            </>
          ) : null}
        </p>
      )}
    </form>
  );
}
