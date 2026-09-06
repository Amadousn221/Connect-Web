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

// Refonte Accueil — brief §04-S10 / D31. La section Ressources de l'accueil est
// livrée mais MASQUÉE par défaut. Elle ne s'affiche que si (a) le flag est
// explicitement activé ET (b) au moins 2 vrais contenus publiés existent
// (garde-fou anti-slop : jamais de blog vide ni de titres placeholder).
// Piloté par NEXT_PUBLIC_RESOURCES_ENABLED — "1"/"true"/"on" pour activer.
export function resourcesEnabled(): boolean {
  const raw = process.env.NEXT_PUBLIC_RESOURCES_ENABLED?.trim().toLowerCase();
  return raw === '1' || raw === 'true' || raw === 'on' || raw === 'yes';
}
