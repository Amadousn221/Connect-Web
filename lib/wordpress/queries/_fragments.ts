// Fragments GraphQL partagés.
//
// ⚠️ Les noms de champs ACF ci-dessous suivent la convention WPGraphQL for ACF
//    (nom ACF snake_case → camelCase). Ils sont à VÉRIFIER dans l'IDE GraphiQL
//    de l'instance une fois WordPress provisionné (le schéma généré fait foi).
//    Le script `npm run test:wordpress` signale tout écart.

export const IMAGE_FIELDS = /* GraphQL */ `
  fragment ImageFields on MediaItem {
    sourceUrl
    altText
    mediaDetails { width height }
  }
`;

export const TERM_FIELDS = /* GraphQL */ `
  fragment SectorFields on Sector {
    slug
    name
    termI18n { termLabelEn }
  }
  fragment OfferCategoryFields on OfferCategory {
    slug
    name
    termI18n { termLabelEn }
  }
`;
