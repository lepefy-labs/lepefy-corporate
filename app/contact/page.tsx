import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contatti' };

export default function ContactPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container">
          <div className="kicker">Contact</div>
          <h1>Bring us a problem.</h1>
          <p>Raccontaci cosa oggi richiede troppo tempo, troppi strumenti o troppi passaggi. Se software e automazione possono migliorarlo, partiamo da lì.</p>
          <div className="actions">
            <a className="button buttonPrimary" href="/robertin">Contatta il Founder</a>
          </div>
        </div>
      </section>
    </>
  );
}
