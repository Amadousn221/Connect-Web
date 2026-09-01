/** @type {import('next').NextConfig} */

// Le CMS est Sanity (DÉCISION 25). Les images du contenu sont servies par le
// CDN Sanity (cdn.sanity.io) et consommées par next/image.
// L'ancienne approche WordPress headless (WORDPRESS_IMAGE_HOSTNAME) est retirée ;
// le code `lib/wordpress/` reste présent mais dormant.

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // styled-components est une peer-dependency du Sanity Studio (v4). Ce flag
  // active le transform SWC nécessaire au SSR de styled-components.
  compiler: { styledComponents: true },

  // i18n réel (routing fr racine / en préfixé) = Milestone M4 (middleware.ts).
  // M0 pose seulement le segment [locale] et le design system.

  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },

  eslint: {
    // Le lint tourne en CI/local via `npm run lint`, pas au build (garde le
    // build de référence M0 rapide et déterministe).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
