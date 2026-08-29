import { notFound } from 'next/navigation';
import { isLocale } from '../../../lib/i18n';

const labels = {
  fr: { subtitle: 'Contact', save: 'Enregistrer le contact', back: 'Découvrir Lepefy Labs' },
  en: { subtitle: 'Contact', save: 'Save contact', back: 'Discover Lepefy Labs' },
  it: { subtitle: 'Contatto', save: 'Salva contatto', back: 'Scopri Lepefy Labs' },
} as const;

export default function CardPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const c = labels[params.locale];

  return (
    <section className="digitalWrap">
      <div className="digitalCard">
        <div className="digitalTop"><img src="/lepefy-mark.svg" alt="" /><strong>Lepefy Labs</strong></div>
        <h1>Lepefy Labs</h1>
        <div className="role">{c.subtitle}</div>
        <div className="contactList">
          <a href="tel:+393278551293">+39 327 855 1293</a>
          <a href="mailto:ciao@lepefy.it">ciao@lepefy.it</a>
          <a href="https://www.lepefy.com">www.lepefy.com</a>
          <a href="https://www.facebook.com/lepefy" target="_blank" rel="noreferrer">facebook.com/lepefy</a>
        </div>
        <div className="digitalActions">
          <a className="button buttonPrimary" href="/card.vcf" download>{c.save}</a>
          <a className="button buttonSecondary" href={`/${params.locale}`}>{c.back}</a>
        </div>
      </div>
    </section>
  );
}
