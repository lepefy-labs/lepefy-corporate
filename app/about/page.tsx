import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Chi siamo' };

export default function AboutPage() {
  return <>
    <section className="pageHero"><div className="container"><div className="kicker">About Lepefy Labs</div><h1>Costruiamo tecnologia utile, pensata per il mondo reale.</h1><p>Lepefy Labs è il master brand dietro prodotti digitali e soluzioni costruite attorno a bisogni concreti. Lepefy Commerce è il primo prodotto verticale principale.</p></div></section>
    <section className="section"><div className="container"><div className="grid4">
      <article className="card"><span className="num">01</span><h3>Problem first</h3><p>La tecnologia viene scelta dopo aver capito il problema.</p></article>
      <article className="card"><span className="num">02</span><h3>Built as products</h3><p>Costruiamo sistemi che possano essere usati, mantenuti e fatti evolvere.</p></article>
      <article className="card"><span className="num">03</span><h3>Modular by design</h3><p>Preferiamo basi coerenti e componenti riusabili alla proliferazione di soluzioni isolate.</p></article>
      <article className="card"><span className="num">04</span><h3>Human in the loop</h3><p>L’automazione deve aiutare le persone, non obbligarle ad adattarsi al software.</p></article>
    </div></div></section>
    <section className="section sectionDark"><div className="container"><div className="kicker">Founder</div><div className="founder"><div className="founderMark"><img src="/lepefy-mark.svg" alt="Lepefy Labs" /></div><div><h3>Robertin Boukeng</h3><div className="role">Founder · Lepefy Labs</div><p>Lepefy Labs nasce dall’idea che un prodotto digitale debba partire da una necessità reale e diventare progressivamente più semplice, solido e utile attraverso l’uso concreto.</p><a href="/robertin">Digital business card →</a></div></div></div></section>
  </>;
}
