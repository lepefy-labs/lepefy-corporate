import { notFound } from 'next/navigation';
import { getCopy, isLocale } from '../../../lib/i18n';

const contactLabels = {
  fr: 'Contacter Lepefy Labs',
  en: 'Contact Lepefy Labs',
  it: 'Contatta Lepefy Labs',
} as const;

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const c = getCopy(params.locale).contact;
  return <section className="pageHero"><div className="container"><div className="kicker">{c.kicker}</div><h1>{c.title}</h1><p>{c.lead}</p><div className="actions"><a className="button buttonPrimary" href="mailto:ciao@lepefy.it">{contactLabels[params.locale]}</a></div><div className="contactPanel"><div className="contactCard"><strong>Lepefy Labs</strong><p><a href="mailto:ciao@lepefy.it">ciao@lepefy.it</a></p></div><div className="contactCard"><strong>Web</strong><p><a href="https://www.lepefy.com">www.lepefy.com</a></p></div></div></div></section>;
}
