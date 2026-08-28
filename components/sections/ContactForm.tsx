'use client';

import { useState } from 'react';
import { contactFormContent } from '@/content/fr/accueil';
import styles from './ContactSection.module.css';

// A12 — Formulaire de contact. UI complète, mais NON branché en M2 : la
// soumission affiche un message et renvoie vers téléphone / WhatsApp.
// Le câblage vers l'outil CRM/notification (TEC-3) est le Milestone M5.
export function ContactForm() {
  const [notice, setNotice] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setNotice(true);
      }}
    >
      <p className={`cw-serif ${styles.formTitle}`}>{contactFormContent.title}</p>

      <div className={styles.row}>
        <label className={styles.field}>
          Nom
          <input type="text" name="nom" placeholder="Votre nom" autoComplete="name" />
        </label>
        <label className={styles.field}>
          Email
          <input
            type="email"
            name="email"
            placeholder="vous@exemple.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className={styles.field}>
        Type d'organisation
        <select name="organisation" defaultValue={contactFormContent.orgTypes[0]}>
          {contactFormContent.orgTypes.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        Ce que vous cherchez à faire
        <select name="objectif" defaultValue={contactFormContent.goals[0]}>
          {contactFormContent.goals.map((g) => (
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
        />
      </label>

      <button type="submit" className={`cw-pill ${styles.submit}`}>
        {contactFormContent.submitLabel}
      </button>

      {notice ? (
        <p className={styles.notice} role="status">
          {contactFormContent.disabledNote}
        </p>
      ) : (
        <p className={styles.reassurance}>{contactFormContent.reassurance}</p>
      )}
    </form>
  );
}
