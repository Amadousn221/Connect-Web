'use client';

import { useState } from 'react';

import styles from './ShareButton.module.css';

/**
 * Bouton Partager — Web Share API si disponible (mobile), sinon copie du lien
 * dans le presse-papier avec retour visuel.
 */
export function ShareButton({ title, className }: { title: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (!url) return;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* partage annulé par l'utilisateur */
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papier indisponible */
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      className={[styles.btn, className].filter(Boolean).join(' ')}
      aria-label="Partager cette page"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8.6 13.5 15.4 17M15.4 7 8.6 10.5M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {copied ? 'Lien copié' : 'Partager'}
    </button>
  );
}
