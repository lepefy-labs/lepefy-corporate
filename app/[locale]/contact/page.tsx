import { notFound } from 'next/navigation';
import { getCopy, isLocale } from '../../../lib/i18n';

const contactLabels = {
  fr: {
    whatsapp: 'Écrire sur WhatsApp',
    email: 'Envoyer un e-mail',
    whatsappLabel: 'WhatsApp Business',
    message: 'Bonjour Lepefy, je souhaiterais en savoir plus sur vos solutions pour mon commerce.',
  },
  en: {
    whatsapp: 'Chat on WhatsApp',
    email: 'Send an email',
    whatsappLabel: 'WhatsApp Business',
    message: 'Hello Lepefy, I would like to learn more about your solutions for my business.',
  },
  it: {
    whatsapp: 'Scrivici su WhatsApp',
    email: 'Invia un’e-mail',
    whatsappLabel: 'WhatsApp Business',
    message: 'Ciao Lepefy, vorrei saperne di più sulle vostre soluzioni per la mia attività.',
  },
} as const;

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const c = getCopy(params.locale).contact;
  const labels = contactLabels[params.locale];
  const whatsappHref = `https://wa.me/393534267269?text=${encodeURIComponent(labels.message)}`;

  return <section className="pageHero"><div className="container"><div className="kicker">{c.kicker}</div><h1>{c.title}</h1><p>{c.lead}</p><div className="actions"><a className="button buttonPrimary" href={whatsappHref} target="_blank" rel="noreferrer">{labels.whatsapp}</a><a className="button buttonSecondary" href="mailto:ciao@lepefy.it">{labels.email}</a></div><div className="contactPanel"><div className="contactCard"><strong>{labels.whatsappLabel}</strong><p><a href={whatsappHref} target="_blank" rel="noreferrer">+39 353 426 7269</a><br/><a href="mailto:ciao@lepefy.it">ciao@lepefy.it</a></p></div><div className="contactCard"><strong>Web</strong><p><a href="https://www.lepefy.com">www.lepefy.com</a></p></div></div></div></section>;
}
