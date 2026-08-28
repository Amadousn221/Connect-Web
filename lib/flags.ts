// Flags de build/preview. Lus au build (statique) — pas de config runtime.

// Affiche les repères « À valider » des maquettes (badges pointillés orange sur
// les données qui attendent une source réelle). ON par défaut en preview,
// OFF en production. Piloté par NEXT_PUBLIC_SHOW_VALIDATION_NOTES.
//   - valeur "0" / "false" / "off"  -> masqué
//   - non défini                    -> visible hors production (VERCEL_ENV/NODE_ENV)
//   - toute autre valeur            -> visible
export function showValidationNotes(): boolean {
  const raw = process.env.NEXT_PUBLIC_SHOW_VALIDATION_NOTES?.trim().toLowerCase();
  if (raw === '0' || raw === 'false' || raw === 'off' || raw === 'no') return false;
  if (raw) return true;
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV;
  return env !== 'production';
}
