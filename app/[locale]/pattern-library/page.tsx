import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { JourneyTimeline } from '@/components/sections/patterns/JourneyTimeline';
import { BeforeAfter } from '@/components/sections/patterns/BeforeAfter';
import { ConnectedModules } from '@/components/sections/patterns/ConnectedModules';
import { ComparePanel } from '@/components/sections/patterns/ComparePanel';
import { BentoFeatures } from '@/components/sections/patterns/BentoFeatures';
import { BigStat } from '@/components/sections/patterns/BigStat';
import { SystemBridge } from '@/components/sections/offer/SystemBridge';
import { OfferHero } from '@/components/sections/offer/OfferHero';
import { PricingBlock } from '@/components/sections/offer/PricingBlock';
import { FeaturedCase } from '@/components/sections/offer/FeaturedCase';
import type {
  JourneyTimelineContent,
  BeforeAfterContent,
  ConnectedModulesContent,
  ComparePanelContent,
  BentoFeaturesContent,
  BigStatContent,
  OfferHeroContent,
  PricingContent,
  ProofCaseContent,
} from '@/content/offres';

// P26 Phase 1 — bibliothèque de patterns, prévisualisation isolée.
// Route de scaffolding, accessible par son URL mais JAMAIS liée depuis la
// nav ni le sitemap (pas d'entrée dans site-nav.ts). Tout le contenu
// ci-dessous est explicitement factice (« [Exemple] ») — ne sert qu'à
// vérifier visuellement chaque pattern avant que Phase 2 les compose sur
// une vraie page. Aucune donnée réelle, aucun chiffre plausible.
// (Remarque : un préfixe `_` sur le dossier de route ferait de ce dossier
// un « private folder » Next.js — exclu du routage, donc injoignable — d'où
// l'absence de préfixe ici malgré l'intention « non public ».)

const journey: JourneyTimelineContent = {
  eyebrow: 'Exemple — JourneyTimeline (P-JOURNEY)',
  title: '[Exemple] Le parcours d’achat',
  lead: '[Exemple] Contenu factice pour vérifier le pattern signature — jamais publié tel quel.',
  steps: [
    { key: 'dm', label: '[Exemple] DM', detail: '[Exemple] Commandes par message' },
    { key: 'boutique', label: '[Exemple] Boutique', detail: '[Exemple] Catalogue en ligne' },
    { key: 'paiement', label: '[Exemple] Paiement', detail: '[Exemple] Local + international' },
    { key: 'livraison', label: '[Exemple] Livraison', detail: '[Exemple] Suivi clair' },
    { key: 'retour', label: '[Exemple] Client qui revient', detail: '[Exemple] Fidélisation' },
  ],
  highlight: {
    afterStepKey: 'paiement',
    label: '[Exemple] Moment différenciant',
    body: '[Exemple] Le wedge local×international s’intègre ici, directement dans le parcours — pas en aparté.',
  },
};

const beforeAfter: BeforeAfterContent = {
  eyebrow: 'Exemple — BeforeAfter (P-BEFORE-AFTER)',
  title: '[Exemple] De la marque au site qui convainc',
  lead: '[Exemple] Contenu factice pour vérifier le pattern — jamais publié tel quel.',
  before: {
    label: '[Exemple] Avant',
    items: ['[Exemple] Point avant 1', '[Exemple] Point avant 2', '[Exemple] Point avant 3'],
  },
  after: {
    label: '[Exemple] Après',
    items: ['[Exemple] Point après 1', '[Exemple] Point après 2', '[Exemple] Point après 3'],
  },
};

const connected: ConnectedModulesContent = {
  eyebrow: 'Exemple — ConnectedModules (P-CONNECTED)',
  title: '[Exemple] Du process éclaté au système unique',
  lead: '[Exemple] Contenu factice pour vérifier le pattern — jamais publié tel quel.',
  modules: [
    { key: 'stock', label: '[Exemple] Stock' },
    { key: 'ventes', label: '[Exemple] Ventes' },
    { key: 'compta', label: '[Exemple] Comptabilité' },
    { key: 'systeme', label: '[Exemple] Système' },
  ],
  proofs: [
    { client: '[Exemple] Client A', chain: '[Exemple] Stock → ERP' },
    {
      client: '[Exemple] Client B',
      chain: '[Exemple] Ventes → Automatisation',
      result: '[Exemple] Résultat factice — démontre l’état « rempli », jamais publié tel quel',
    },
  ],
};

const compare: ComparePanelContent = {
  eyebrow: 'Exemple — ComparePanel (P-COMPARE)',
  title: '[Exemple] Un site d’ONG ≠ un site d’entreprise',
  lead: '[Exemple] Contenu factice pour vérifier le pattern — jamais publié tel quel.',
  rowLabels: ['[Exemple] Ligne 1', '[Exemple] Ligne 2', '[Exemple] Ligne 3'],
  columns: [
    { label: '[Exemple] Colonne A', rows: ['[Exemple] Valeur', true, false] },
    { label: '[Exemple] Colonne B', rows: [true, '[Exemple] Valeur', true] },
  ],
};

const bento: BentoFeaturesContent = {
  eyebrow: 'Exemple — BentoFeatures (P-BENTO)',
  title: '[Exemple] La boutique faite pour vendre',
  lead: '[Exemple] Contenu factice pour vérifier le pattern — jamais publié tel quel.',
  items: [
    { icon: 'boutiques', title: '[Exemple] Titre 1', body: '[Exemple] Description factice.', size: 'lg' },
    { icon: 'plateformes', title: '[Exemple] Titre 2', body: '[Exemple] Description factice.', size: 'sm' },
    { icon: 'odoo', title: '[Exemple] Titre 3', body: '[Exemple] Description factice.', size: 'md' },
    { icon: 'automatisation', title: '[Exemple] Titre 4', body: '[Exemple] Description factice.', size: 'sm' },
  ],
};

const bigStat: BigStatContent = {
  value: '[Exemple]',
  label: '[Exemple — chiffre factice, jamais réel]',
  caption: '[Exemple] Ne jamais publier une valeur non confirmée.',
};

const offerHero: OfferHeroContent = {
  eyebrow: '[Exemple] Offre factice',
  breadcrumb: '[Exemple] Offre factice',
  title: '[Exemple] Titre de hero factice, pour vérifier P-HERO-T.',
  subtitle: '[Exemple] Sous-titre factice — jamais publié tel quel.',
  ctas: [
    { label: '[Exemple] CTA primaire', href: '#' },
    { label: '[Exemple] CTA secondaire', href: '#' },
  ],
  features: ['[Exemple] Puce 1', '[Exemple] Puce 2', '[Exemple] Puce 3'],
};

const pricing: PricingContent = {
  eyebrow: '[Exemple] Investissement',
  title: '[Exemple] Combien ça coûte ?',
  body: '[Exemple] Corps factice pour vérifier P-PRICING.',
  cardLabel: '[Exemple] Offre factice',
  pricePlaceholder: '[À PARTIR DE]',
  scopeNote: '[Exemple] Selon périmètre — offre 100% sur-mesure',
  includes: ['[Exemple] Inclus 1', '[Exemple] Inclus 2'],
};

const proofCase: ProofCaseContent = {
  eyebrow: '[Exemple] Cas plein',
  name: '[Exemple] Client factice',
  category: '[Exemple] Secteur factice',
  context: '[Exemple] Contexte factice, pour vérifier P-PROOF-CASE.',
  problem: '[Exemple] Problème factice.',
  solution: '[Exemple] Solution factice.',
  quote: '[Exemple] « Citation factice. »',
  visualPending: true,
  visualNote: '[Exemple] Visuel factice à fournir',
};

// Jamais indexée : scaffolding dev, pas une page publique.
export const metadata: Metadata = {
  title: 'Pattern library (dev)',
  robots: { index: false, follow: false },
};

export default async function PatternLibraryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <OfferHero locale={locale} content={offerHero} />
      <JourneyTimeline {...journey} />
      <BeforeAfter content={beforeAfter} tone="ink" />
      <ConnectedModules {...connected} />
      <FeaturedCase locale={locale} content={proofCase} />
      <ComparePanel {...compare} />
      <BentoFeatures {...bento} />
      <BigStat {...bigStat} />
      <PricingBlock content={pricing} />
      <SystemBridge
        locale={locale}
        content={{
          eyebrow: '[Exemple] Une fois que ça vend',
          title: '[Exemple] On connecte le reste.',
          body: '[Exemple] Corps factice pour vérifier P-CROSSSELL.',
          link: { label: '[Exemple] Découvrir →', href: '/' },
          icon: 'odoo',
        }}
      />
    </>
  );
}
