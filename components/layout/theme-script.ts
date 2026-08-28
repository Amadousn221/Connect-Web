// Script anti-FOUC exécuté avant le premier paint : lit `cw_theme` dans
// localStorage et pose `data-theme="dark"` sur <html> si besoin, avant que
// React n'hydrate. Même clé et même logique que le mockup
// (`Connect Web - Accueil V2.dc.html`, componentDidMount ligne 992).
// Injecté tel quel via un <script dangerouslySetInnerHTML> dans le <head>.

export const themeInitScript = `
(function () {
  try {
    if (localStorage.getItem('cw_theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();
`;
