import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Robertin Boukeng — Founder',
  description: 'Digital business card di Robertin Boukeng, Founder di Lepefy Labs.',
};

export default function RobertinPage() {
  return (
    <section className="digitalWrap">
      <div className="digitalCard">
        <div className="digitalTop"><img src="/lepefy-mark.svg" alt="" /><strong>Lepefy Labs</strong></div>
        <h1>Robertin Boukeng</h1>
        <div className="role">Founder · Lepefy Labs</div>
        <div className="contactList">
          <a href="tel:+393278551293">+39 327 855 1293</a>
          <a href="mailto:robertin.smartinvestor@gmail.com">robertin.smartinvestor@gmail.com</a>
          <a href="https://www.lepefy.com">www.lepefy.com</a>
          <a href="https://www.facebook.com/lepefy" target="_blank" rel="noreferrer">facebook.com/lepefy</a>
        </div>
        <div className="digitalActions">
          <a className="button buttonPrimary" href="/robertin.vcf" download>Salva contatto</a>
          <a className="button buttonSecondary" href="/">Scopri Lepefy Labs</a>
        </div>
      </div>
    </section>
  );
}
