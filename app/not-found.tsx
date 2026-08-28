import Link from 'next/link';

// 404 — rendu à l'intérieur du layout racine (Header/Footer absents ici car
// non spécifiques à une locale). Version M0 sobre ; le polish des pages sans
// maquette est traité au Milestone M6.
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px',
        gap: '12px',
      }}
    >
      <h1 className="cw-serif" style={{ fontSize: 'var(--text-h2)', margin: 0 }}>
        Page introuvable
      </h1>
      <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/fr" style={{ fontWeight: 600, marginTop: '8px' }}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
