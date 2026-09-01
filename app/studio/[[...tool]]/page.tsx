'use client';

import { NextStudio } from 'next-sanity/studio';

import config from '@/sanity.config';

// Le Studio tourne entièrement côté client. On marque explicitement la page
// `'use client'` pour que `sanity.config` — qui charge @sanity/ui /
// styled-components, lesquels appellent `React.createContext` au niveau module —
// ne soit JAMAIS évalué dans le graphe React Server Components pendant le build
// ("Collecting page data"), où cette API n'existe pas.
export default function StudioPage() {
  return <NextStudio config={config} />;
}
