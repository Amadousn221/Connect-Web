// Pages légales — copy extraite de `Connect Web - Mentions légales.dc.html` et
// `Connect Web - Confidentialité.dc.html`.
//
// Les données que le PO doit encore fournir sont marquées ⟦…⟧ dans le texte :
// rendues visiblement « [à compléter — …] » (pas masquées comme un
// ValidationNote de preview — une page légale doit être explicitement
// incomplète, jamais silencieusement lacunaire). `{{lien}}` = emplacement du
// `link` de la section.

export type LegalBlock = { p: string } | { ul: string[] };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
  link?: { label: string; href: string };
}

export interface LegalPageContent {
  slug: string;
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lead: string;
  /** date ISO de dernière mise à jour, ou undefined = « à définir » */
  updated?: string;
  breadcrumb: string;
  sections: LegalSection[];
}

// ── Mentions légales ──────────────────────────────────────────────────────
export const mentionsLegales: LegalPageContent = {
  slug: 'mentions-legales',
  meta: {
    title: 'Mentions légales',
    description: 'Les informations légales de Connect Web, éditeur de ce site.',
  },
  eyebrow: 'Informations légales',
  title: 'Mentions légales',
  lead: 'Les informations légales de Connect Web, éditeur de ce site.',
  breadcrumb: 'Mentions légales',
  updated: '2026-08-31',
  sections: [
    {
      title: 'Éditeur du site',
      blocks: [
        {
          p: "Le présent site est édité par Connect Web, studio digital basé à Dakar, Sénégal. Nom / raison sociale : ⟦raison sociale⟧. Forme juridique : ⟦forme juridique⟧. Numéro d'immatriculation (NINEA / RCCM) : ⟦numéro NINEA / RCCM⟧. Siège : Dakar, Sénégal. Téléphone : +221 77 900 62 82 / +221 78 343 82 49. E-mail : ⟦e-mail de contact⟧.",
        },
      ],
    },
    {
      title: 'Directeur de la publication',
      blocks: [{ p: '⟦Prénom Nom⟧, en qualité de ⟦fonction⟧.' }],
    },
    {
      title: 'Hébergement',
      blocks: [{ p: "Le site est hébergé par ⟦nom de l'hébergeur⟧, ⟦adresse de l'hébergeur⟧." }],
    },
    {
      title: 'Liens hypertextes',
      blocks: [
        {
          p: "Ce site peut contenir des liens vers des sites tiers (réalisations clients, réseaux sociaux). Connect Web n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
        },
      ],
    },
    {
      title: 'Propriété intellectuelle',
      blocks: [
        {
          p: "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) est la propriété de Connect Web ou de ses clients, sauf mention contraire. Toute reproduction sans autorisation est interdite.",
        },
      ],
    },
    {
      title: 'Responsabilité',
      blocks: [
        {
          p: "Connect Web s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantie d'exhaustivité. Connect Web ne pourra être tenu responsable des dommages directs ou indirects liés à l'utilisation de ce site.",
        },
      ],
    },
    {
      title: 'Données personnelles',
      blocks: [{ p: 'Le traitement de vos données personnelles est détaillé dans notre {{lien}}.' }],
      link: { label: 'politique de confidentialité', href: '/politique-de-confidentialite' },
    },
    {
      title: 'Litiges',
      blocks: [
        {
          p: "Les présentes mentions légales sont soumises au droit sénégalais, notamment à la loi n° 2008-08 du 25 janvier 2008 sur les transactions électroniques. Tout litige relève de la compétence exclusive des juridictions de Dakar.",
        },
      ],
    },
  ],
};

// ── Politique de confidentialité ──────────────────────────────────────────
export const politiqueConfidentialite: LegalPageContent = {
  slug: 'politique-de-confidentialite',
  meta: {
    title: 'Politique de confidentialité',
    description:
      'Comment Connect Web collecte, utilise et protège vos informations lorsque vous nous contactez.',
  },
  eyebrow: 'Confidentialité',
  title: 'Politique de confidentialité',
  lead: 'Comment Connect Web collecte, utilise et protège vos informations lorsque vous nous contactez.',
  breadcrumb: 'Confidentialité',
  updated: '2026-08-31',
  sections: [
    {
      title: 'Données collectées',
      blocks: [
        {
          p: "Lorsque vous remplissez un formulaire de contact ou de devis, ou que vous vous inscrivez à notre newsletter, nous collectons les informations que vous nous transmettez volontairement : nom, e-mail, téléphone (le cas échéant), service souhaité, et le contenu de votre message.",
        },
        { p: "Nous ne collectons aucune donnée sensible (santé, opinions, origine, etc.) et ne cherchons jamais à en obtenir." },
      ],
    },
    {
      title: 'Base légale du traitement',
      blocks: [
        {
          p: "Vos données sont traitées sur la base de votre consentement (lorsque vous remplissez un formulaire ou vous inscrivez à la newsletter) et de notre intérêt légitime à répondre à votre demande.",
        },
      ],
    },
    {
      title: 'Utilisation des données',
      blocks: [
        { p: 'Vos informations nous servent à :' },
        {
          ul: [
            'répondre à vos demandes de devis ou de contact ;',
            "vous envoyer notre newsletter, si vous vous y êtes inscrit — désinscription possible à tout moment, en un clic ;",
            'améliorer nos services et notre site.',
          ],
        },
        { p: 'Nous ne vendons ni ne louons vos données à des tiers.' },
      ],
    },
    {
      title: 'Partage avec des tiers',
      blocks: [
        {
          p: "Vos données ne sont partagées qu'avec les prestataires techniques strictement nécessaires au fonctionnement du site (hébergement, envoi d'e-mails) : ⟦liste des prestataires réels — hébergeur, service d'envoi d'e-mail/newsletter⟧. Ces prestataires sont tenus aux mêmes exigences de confidentialité.",
        },
      ],
    },
    {
      title: 'Conservation',
      blocks: [
        {
          p: "Vos données sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées conformément à la réglementation en vigueur ⟦durée de conservation si fixée en interne, ex. 3 ans après le dernier contact⟧.",
        },
      ],
    },
    {
      title: 'Sécurité',
      blocks: [
        {
          p: "Nous mettons en œuvre des mesures raisonnables pour protéger vos données contre l'accès non autorisé, la perte ou la divulgation. Aucun système n'étant infaillible, nous vous encourageons à nous signaler toute utilisation suspecte de vos informations.",
        },
      ],
    },
    {
      title: 'Cookies et stockage local',
      blocks: [
        {
          p: "Ce site n'utilise pas de cookies publicitaires. Il utilise le stockage local de votre navigateur pour mémoriser votre préférence d'affichage (thème clair/sombre) et éviter de vous montrer plusieurs fois la même invitation à la newsletter au cours d'une visite. Ces informations restent sur votre appareil et ne sont jamais transmises à des tiers.",
        },
      ],
    },
    {
      title: 'Vos droits',
      blocks: [
        {
          p: "Conformément à la loi sénégalaise n° 2008-12 du 25 janvier 2008 relative à la protection des données à caractère personnel, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Vous pouvez exercer ces droits en nous contactant à ⟦e-mail de contact⟧.",
        },
        {
          p: "Vous pouvez également adresser une réclamation à la Commission de Protection des Données Personnelles (CDP), l'autorité sénégalaise compétente en la matière.",
        },
      ],
    },
    {
      title: 'Modifications de cette politique',
      blocks: [
        {
          p: "Nous pouvons mettre à jour cette politique pour refléter des changements dans nos pratiques ou pour des raisons légales. La date de dernière mise à jour figure en haut de cette page.",
        },
      ],
    },
    {
      title: 'Contact',
      blocks: [
        { p: 'Pour toute question relative à cette politique : ⟦e-mail de contact⟧ · +221 77 900 62 82 · +221 78 343 82 49.' },
      ],
    },
  ],
};
