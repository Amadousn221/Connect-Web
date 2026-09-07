import type { OurRoleContent } from '../types';

// English mirror of content/fr/notreRole.ts (M4 bilingual pattern, see
// content/types.ts). Kept in lockstep with the FR copy — same keys, same
// route, no separate translation logic in the component.
export const ourRole: OurRoleContent = {
  eyebrow: 'Our role',
  title: 'Your digital presence should support your entire organisation.',
  lead: 'We design solutions that help you become more visible, sell more easily and manage your organisation more effectively.',
  axes: [
    {
      num: '01',
      title: 'Attract',
      body: 'Websites, content and acquisition designed to make your offer visible and credible.',
    },
    {
      num: '02',
      title: 'Convert',
      body: 'Online stores and digital journeys designed to make taking action easier.',
    },
    {
      num: '03',
      title: 'Manage',
      body: 'Applications, CRM, ERP and automation designed to centralise your operations.',
    },
  ],
  cta: { label: 'Explore our solutions', href: '/services' },
};
