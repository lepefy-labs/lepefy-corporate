import { notFound } from 'next/navigation';
import { getCopy, isLocale } from '../../../lib/i18n';

const commerceVisuals = [
  { src: '/media/commerce-shop.webp', avifSrc: '/media/commerce-shop.avif', label: 'Boutique en ligne' },
  { src: '/media/commerce-loyalty.webp', avifSrc: '/media/commerce-loyalty.avif', label: 'Fidélité & Parrainage' },
  { src: '/media/commerce-events.webp', avifSrc: '/media/commerce-events.avif', label: 'Événementiel' },
  { src: '/media/commerce-nala.webp', avifSrc: '/media/commerce-nala.avif', label: 'Nala' },
] as const;

export default function Page({params}:{params:{locale:string}}){
  if(!isLocale(params.locale)) notFound();
  const l=params.locale,c=getCopy(l).commerce;
  return <>
    <section className="pageHero"><div className="container"><div className="kicker">Lepefy Commerce</div><h1>{c.title}</h1><p>{c.lead}</p><div className="actions"><a className="button buttonPrimary" href={`/${l}/contact`}>{c.cta}</a></div></div></section>
    <section className="section sectionSoft"><div className="container"><div className="kicker">{c.ecosystemKicker}</div><h2>{c.ecosystemTitle}</h2><p className="lead">{c.ecosystemText}</p><div className="grid3">{c.modules.map(([t,x])=><article className="card module" key={t}><span className="tag">Commerce</span><h3>{t}</h3><p>{x}</p></article>)}</div>{l === 'fr' && <div className="commerceGallery" aria-label="Illustrations conceptuelles de Lepefy Commerce">{commerceVisuals.map(({src,avifSrc,label})=><figure className="commerceVisual" key={src}><picture><source srcSet={avifSrc} type="image/avif"/><img src={src} alt={`Illustration conceptuelle : ${label}`} width="640" height="640" loading="lazy"/></picture><figcaption><span>Illustration conceptuelle</span><b>{label}</b></figcaption></figure>)}</div>}</div></section>
    <section className="section sectionDark"><div className="container"><div className="kicker">{c.opsKicker}</div><h2>{c.opsTitle}</h2><p className="lead">{c.opsText}</p><div className="grid3">{c.cards.map(([n,t,x])=><article className="card" key={n}><span className="num">{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div></div></section>
    <section className="ctaSection"><div className="container ctaBox"><div><h2>{c.finalTitle}</h2><p>{c.finalText}</p></div><a className="button" href={`/${l}/contact`}>{c.finalButton}</a></div></section>
  </>;
}
