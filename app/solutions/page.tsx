import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Soluzioni' };

export default function SolutionsPage() {
  return <>
    <section className="pageHero"><div className="container"><div className="kicker">Tailored solutions</div><h1>La tecnologia parte dal problema, non dal catalogo.</h1><p>Analizziamo processi, frizioni e obiettivi per progettare prodotti digitali, automazioni e piattaforme che rispondono a un’esigenza concreta.</p></div></section>
    <section className="section"><div className="container"><div className="grid4">
      <article className="card"><span className="num">01</span><h3>Discovery</h3><p>Comprendiamo il lavoro reale, le persone coinvolte, i vincoli e ciò che oggi non funziona.</p></article>
      <article className="card"><span className="num">02</span><h3>Product design</h3><p>Trasformiamo il bisogno in flussi, priorità, architettura ed esperienza utente.</p></article>
      <article className="card"><span className="num">03</span><h3>Build</h3><p>Costruiamo software, integrazioni e automazioni con una base pensata per crescere.</p></article>
      <article className="card"><span className="num">04</span><h3>Evolution</h3><p>Raccogliamo segnali dal funzionamento reale e miglioriamo il prodotto senza stratificare caos.</p></article>
    </div></div></section>
    <section className="section sectionSoft"><div className="container"><div className="kicker">What we build</div><h2>Prodotti, piattaforme e automazioni.</h2><p className="lead">Non promettiamo qualsiasi cosa a chiunque. Ci concentriamo sui casi in cui software e automazione possono davvero semplificare un processo, connettere strumenti o creare una nuova esperienza digitale.</p></div></section>
    <section className="ctaSection"><div className="container ctaBox"><div><h2>Hai una necessità specifica?</h2><p>Partiamo dal problema e valutiamo insieme se ha senso costruire una soluzione dedicata.</p></div><a className="button" href="/contact">Raccontacela</a></div></section>
  </>;
}
