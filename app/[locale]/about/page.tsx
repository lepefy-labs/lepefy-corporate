import { notFound } from 'next/navigation';
import { getCopy, isLocale } from '../../../lib/i18n';

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const c = getCopy(params.locale).about;
  return <>
    <section className="pageHero"><div className="container"><div className="kicker">{c.kicker}</div><h1>{c.title}</h1><p>{c.lead}</p></div></section>
    <section className="section"><div className="container"><div className="grid4">{c.principles.map(([n,t,x])=><article className="card" key={n}><span className="num">{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
  </>;
}
