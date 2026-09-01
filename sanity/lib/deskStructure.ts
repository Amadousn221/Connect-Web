import type { StructureResolver } from 'sanity/structure';

/**
 * Navigation du Studio groupée par domaine plutôt qu'en liste plate.
 * Purement du confort d'édition — n'affecte pas le contenu.
 *
 * NB : ce fichier n'est volontairement PAS nommé `sanity/structure.ts` —
 * ce chemin entrerait en collision avec le sous-module `sanity/structure`
 * du package (résolution via `baseUrl` dans tsconfig).
 */
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('blogPost').title('Articles'),
              S.documentTypeListItem('blogCategory').title('Catégories'),
              S.documentTypeListItem('blogTag').title('Tags'),
            ]),
        ),
      S.listItem()
        .title('Ressources')
        .child(
          S.list()
            .title('Ressources')
            .items([
              S.documentTypeListItem('resource').title('Ressources'),
              S.documentTypeListItem('resourceCategory').title('Thématiques'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('realisation').title('Réalisations'),
      S.documentTypeListItem('author').title('Auteur'),
    ]);
