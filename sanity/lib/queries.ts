// Query de TEST — sert uniquement à valider que la connexion API Sanity
// fonctionne (Étape 0). Renvoie les 5 premiers assets image du dataset, ou un
// tableau vide si le dataset est vide (cas au démarrage). À supprimer / remplacer
// par les vraies queries Blog & Ressources à l'Étape 3 (avec `defineQuery` + typegen).
export const TEST_QUERY = `*[_type == "sanity.imageAsset"][0...5]{
  _id,
  url,
  originalFilename
}`;
