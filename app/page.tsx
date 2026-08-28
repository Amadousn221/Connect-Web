import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';

// FR à la racine (DECISION 09). Tant que le middleware i18n n'est pas en place
// (Milestone M4), on redirige `/` vers `/{defaultLocale}` de façon explicite.
export default function RootIndex() {
  redirect(`/${defaultLocale}`);
}
