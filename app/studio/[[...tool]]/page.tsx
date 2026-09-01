import { NextStudio } from 'next-sanity/studio';

import config from '@/sanity.config';

// Le Studio est rendu statiquement (pas de données à pré-charger côté serveur) ;
// toute l'app tourne ensuite côté client.
export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
