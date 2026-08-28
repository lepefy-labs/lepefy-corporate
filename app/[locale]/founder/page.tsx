import { redirect } from 'next/navigation';
import { isLocale } from '../../../lib/i18n';

export default function FounderRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${isLocale(params.locale) ? params.locale : 'fr'}/card`);
}
