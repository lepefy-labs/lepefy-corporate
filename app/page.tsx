export default function HomePage() {
  const steps = [
    ['01', 'Understand', 'Partiamo dal problema reale, dai vincoli e dal lavoro che oggi costa tempo o opportunità.'],
    ['02', 'Design', 'Disegniamo flussi, esperienza e architettura prima di scegliere la tecnologia.'],
    ['03', 'Build', 'Realizziamo prodotti digitali, piattaforme e automazioni pensati per essere usati davvero.'],
    ['04', 'Evolve', 'Misuriamo, impariamo e facciamo evolvere la soluzione senza ricominciare ogni volta da zero.'],
  ];

  const modules = [
    ['Shop', 'Catalogo, ordini, checkout e customer journey.'],
    ['Events', 'Eventi, formule, prenotazioni e operazioni sul posto.'],
    ['Card', 'Presenza digitale del punto vendita e accesso rapido ai servizi.'],
    ['Loyalty', 'Relazione, fidelizzazione e continuità con il cliente.'],
    ['Operations', 'Strumenti amministrativi per gestire il lavoro quotidiano.'],
    ['Nala', 'Assistente shopping intelligente integrato nell’esperienza cliente.'],
  ];

  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="eyebrow">Lepefy Labs</div>
            <h1>Smart solutions for <span>real needs.</span></h1>
            <p className="heroLead">
              Progettiamo prodotti digitali, piattaforme e automazioni costruite attorno a problemi concreti.
              Dalle soluzioni su misura a prodotti scalabili come Lepefy Commerce.
            </p>
            <div className="actions">
              <a className="button buttonPrimary" href="#what-we-build">Scopri cosa costruiamo</a>
              <a className="button buttonSecondary" href="/contact">Parlaci della tua esigenza</a>
            </div>
          </div>
          <div className="heroVisual" aria-hidden="true">
            <div className="orb" />
            <div className="glass glassA"><b>Understand</b><span>Real problem first</span></div>
            <div className="glass glassB"><b>Build</b><span>Product, platform, automation</span></div>
            <div className="glass glassC"><b>Evolve</b><span>Designed to grow</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="what-we-build">
        <div className="container">
          <div className="kicker">Problem → Solution</div>
          <h2>Hai un problema. Costruiamo la soluzione giusta.</h2>
          <p className="lead">Non partiamo da un catalogo di tecnologie da vendere. Partiamo da ciò che deve funzionare meglio per persone, team e attività.</p>
          <div className="grid4">
            {steps.map(([n, title, text]) => (
              <article className="card" key={title}>
                <span className="num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="container">
          <div className="productIntro">
            <div>
              <div className="kicker">Featured product</div>
              <h2>Lepefy Commerce</h2>
              <p className="lead">Una piattaforma SaaS connessa per le attività food moderne. Vendita, eventi, relazione cliente e operazioni dentro lo stesso ecosistema.</p>
            </div>
            <div className="badgeBox">
              <b>One platform. Multiple touchpoints.</b>
              <p>Il cliente vede un’esperienza coerente. Il team gestisce meno strumenti separati.</p>
            </div>
          </div>
          <div className="grid3">
            {modules.map(([title, text]) => (
              <article className="card module" key={title}>
                <span className="tag">Commerce</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="actions"><a className="button buttonPrimary" href="/commerce">Esplora Lepefy Commerce</a></div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container">
          <div className="kicker">Intelligence where it helps</div>
          <h2>AI e automazione, senza il teatro.</h2>
          <p className="lead">Usiamo intelligenza artificiale e automazione quando riducono lavoro, migliorano decisioni o rendono l’esperienza più semplice. Sono strumenti, non slogan.</p>
          <div className="grid3">
            <article className="card"><span className="num">AI</span><h3>Assistenti utili</h3><p>Esperienze come Nala aiutano il cliente a orientarsi e scegliere, senza trasformare ogni schermata in una demo di AI.</p></article>
            <article className="card"><span className="num">FLOW</span><h3>Automazioni</h3><p>Workflow e notifiche collegano processi che altrimenti richiederebbero passaggi manuali e strumenti scollegati.</p></article>
            <article className="card"><span className="num">OPS</span><h3>Software operativo</h3><p>La tecnologia deve migliorare il lavoro quotidiano, non obbligare le persone a lavorare per il software.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement">
          <div>
            <div className="kicker">Built for real operations</div>
            <h2>Dal punto di contatto al lavoro dietro le quinte.</h2>
            <p className="lead">Le soluzioni Lepefy sono pensate come sistemi completi: esperienza cliente, pagamenti, operazioni, amministrazione e automazioni devono parlare tra loro.</p>
          </div>
          <div className="statementPanel" aria-label="Esempio di ecosistema connesso">
            <div className="flow">
              <span>Brand</span><span>Store</span><span>Events</span>
              <span>Customers</span><span>Payments</span><span>Operations</span>
              <span>Card</span><span>Loyalty</span><span>Automation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionDark">
        <div className="container">
          <div className="kicker">Founder</div>
          <div className="founder">
            <div className="founderMark"><img src="/lepefy-mark.svg" alt="Lepefy Labs" /></div>
            <div>
              <h3>Robertin Boukeng</h3>
              <div className="role">Founder · Lepefy Labs</div>
              <p>Costruire tecnologia utile significa capire prima il problema, poi progettare il sistema più semplice e solido per risolverlo. Lepefy Labs nasce con questa logica.</p>
              <a href="/robertin">Apri la digital business card →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaBox">
          <div>
            <h2>Bring us a problem.</h2>
            <p>Raccontaci cosa oggi richiede troppo tempo, troppi strumenti o troppi passaggi. Potrebbe essere l’inizio della prossima soluzione Lepefy.</p>
          </div>
          <a className="button" href="/contact">Parliamone</a>
        </div>
      </section>
    </>
  );
}
