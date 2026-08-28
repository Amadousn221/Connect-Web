import type { Metadata } from 'next';
import { Newsreader, Hanken_Grotesk } from 'next/font/google';
import { themeInitScript } from '@/components/layout/theme-script';
import '@/styles/globals.css';

// Polices Design Foundations §03 : Newsreader (display / titres) +
// Hanken Grotesk (corps / UI). Poids repris du <link> Google Fonts des mockups.
// Fontes variables : on ne fige pas `weight` (la plage entière est incluse),
// axe opsz de Newsreader géré automatiquement. Poids utilisés côté design :
// Newsreader 400/500/600, Hanken 300→800 — voir le <link> des maquettes.
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-hanken',
  display: 'swap',
});

// URL de base pour les liens absolus (OG, canoniques). `NEXT_PUBLIC_SITE_URL`
// peut être inlinée en chaîne vide quand la variable n'est pas définie (build
// Vercel sans env) — d'où `||` et non `??`. Repli sur l'URL de déploiement
// Vercel, puis localhost.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
  'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Connect Web — studio digital à Dakar',
    template: '%s · Connect Web',
  },
  description:
    'Sites, boutiques, plateformes, ERP et automatisation — reliés en un système qui vend plus et que vous possédez entièrement. Au standard international, ancré dans le terrain ouest-africain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO(M4) : `lang` dynamique selon la locale de l'URL (routing i18n).
    <html lang="fr" className={`${newsreader.variable} ${hanken.variable}`}>
      {/* Anti-FOUC thème : exécuté avant le premier paint, avant l'hydratation. */}
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      <body>{children}</body>
    </html>
  );
}
