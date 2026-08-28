/** @type {import('next').NextConfig} */

// Hostinger héberge le WordPress headless : la médiathèque WP sert les images
// distantes consommées par next/image. Le hostname arrive via variable
// d'environnement (renseigné quand le PO provisionne l'instance — voir .env.example).
const wpImageHostname = process.env.WORDPRESS_IMAGE_HOSTNAME;

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // i18n réel (routing fr racine / en préfixé) = Milestone M4 (middleware.ts).
  // M0 pose seulement le segment [locale] et le design system.

  images: {
    remotePatterns: wpImageHostname
      ? [{ protocol: 'https', hostname: wpImageHostname }]
      : [],
  },

  eslint: {
    // Le lint tourne en CI/local via `npm run lint`, pas au build (garde le
    // build de référence M0 rapide et déterministe).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
