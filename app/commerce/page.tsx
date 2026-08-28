import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Lepefy Commerce' };

const modules = [
  ['Shop', 'Catalogo, prodotti, ordini e checkout dentro un’esperienza mobile-first.'],
  ['Events', 'Eventi, prenotazioni, formule, pagamenti e strumenti operativi per il team.'],
  ['Card', 'Carta digitale del punto vendita e accesso immediato ai servizi del brand.'],
  ['Loyalty', 'Fidelizzazione e continuità della relazione con il cliente.'],
  ['Operations', 'Admin e flussi pensati per il lavoro quotidiano del tenant.'],
  ['Nala', 'Assistente shopping intelligente integrato nel percorso di acquisto.'],
];

export default function CommercePage() {
  return <>
    <section className="pageHero"><div className="container"><div className="kicker">Lepefy Commerce</div><h1>The operating platform for modern food businesses.</h1><p>Un ecosistema SaaS multi-tenant che collega commercio, eventi, relazione cliente e operazioni. Un’unica base, più punti di contatto.</p><div className="actions"><a className="button buttonPrimary" href="/contact">Parla con Lepefy Labs</a></div></div></section>
    <section className="section sectionSoft"><div className="container"><div className="kicker">One connected ecosystem</div><h2>Non sei moduli parcheggiati nello stesso menu.</h2><p className="lead">Lepefy Commerce nasce per far lavorare insieme esperienza cliente e operazioni, evitando la frammentazione tra strumenti separati.</p><div className="grid3">{modules.map(([title,text])=><article className="card module" key={title}><span className="tag">Commerce</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section sectionDark"><div className="container"><div className="kicker">Built for real operations</div><h2>Vendere è solo una parte del lavoro.</h2><p className="lead">Ordini, prenotazioni, pagamenti, clienti, loyalty, notifiche e attività in negozio devono rimanere coerenti anche dietro le quinte. La piattaforma è progettata intorno a questo lavoro reale.</p><div className="grid3"><article className="card"><span className="num">CX</span><h3>Customer journey</h3><p>Esperienze semplici e coerenti da mobile, dalla scoperta all’azione.</p></article><article className="card"><span className="num">OPS</span><h3>Tenant operations</h3><p>Strumenti amministrativi che riducono passaggi manuali e ambiguità.</p></article><article className="card"><span className="num">AUTO</span><h3>Automation</h3><p>Notifiche e workflow collegano i momenti importanti senza trasformare il team in un middleware umano.</p></article></div></div></section>
    <section className="ctaSection"><div className="container ctaBox"><div><h2>Un’unica piattaforma, meno frammentazione.</h2><p>Lepefy Commerce è il prodotto verticale food di Lepefy Labs e continuerà a evolvere attorno alle esigenze operative reali dei tenant.</p></div><a className="button" href="/contact">Contattaci</a></div></section>
  </>;
}
