import { notFound } from 'next/navigation';
import { getCopy, isLocale } from '../../lib/i18n';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale).home;

  return <>
    <section className="hero"><div className="container heroGrid"><div><div className="eyebrow">{c.eyebrow}</div><h1>{c.title}</h1><p className="heroLead">{c.lead}</p><div className="actions"><a className="button buttonPrimary" href="#what-we-build">{c.primary}</a><a className="button buttonSecondary" href={`/${locale}/contact`}>{c.secondary}</a></div></div><div className="heroVisual" aria-hidden="true"><div className="orb"/><div className="glass glassA"><b>{c.steps[0][1]}</b><span>{c.steps[0][2]}</span></div><div className="glass glassB"><b>{c.steps[2][1]}</b><span>{c.steps[2][2]}</span></div><div className="glass glassC"><b>{c.steps[3][1]}</b><span>{c.steps[3][2]}</span></div></div></div></section>
    <section className="section" id="what-we-build"><div className="container"><div className="kicker">{c.problemKicker}</div><h2>{c.problemTitle}</h2><p className="lead">{c.problemLead}</p><div className="grid4">{c.steps.map(([n,title,text])=><article className="card" key={n}><span className="num">{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section sectionSoft"><div className="container"><div className="productIntro"><div><div className="kicker">{c.featured}</div><h2>{c.commerceTitle}</h2><p className="lead">{c.commerceLead}</p></div><div className="badgeBox"><b>{c.badgeTitle}</b><p>{c.badgeText}</p></div></div><div className="grid3">{c.modules.map(([title,text])=><article className="card module" key={title}><span className="tag">Commerce</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="actions"><a className="button buttonPrimary" href={`/${locale}/commerce`}>{c.commerceCta}</a></div></div></section>
    <section className="section sectionDark"><div className="container"><div className="kicker">{c.intelligenceKicker}</div><h2>{c.intelligenceTitle}</h2><p className="lead">{c.intelligenceLead}</p><div className="grid3">{c.intelligenceCards.map(([n,title,text])=><article className="card" key={n}><span className="num">{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="container statement"><div><div className="kicker">{c.opsKicker}</div><h2>{c.opsTitle}</h2><p className="lead">{c.opsLead}</p></div><div className="statementPanel" aria-label="Connected ecosystem"><div className="flow"><span>Brand</span><span>Store</span><span>Events</span><span>Customers</span><span>Payments</span><span>Operations</span><span>Card</span><span>Loyalty</span><span>Automation</span></div></div></div></section>
    <section className="ctaSection"><div className="container ctaBox"><div><h2>{c.ctaTitle}</h2><p>{c.ctaText}</p></div><a className="button" href={`/${locale}/contact`}>{c.ctaButton}</a></div></section>
  </>;
}
