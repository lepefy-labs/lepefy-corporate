import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founder — Lepefy Labs',
  description: 'Digital business card del Founder di Lepefy Labs.',
};

export default function FounderPage() {
  return (
    <section className="digitalWrap">
      <div className="digitalCard">
        <div className="digitalTop">
          <img src="/lepefy-mark.svg" alt="" />
          <strong>Lepefy Labs</strong>
        </div>
        <h1>Founder</h1>
        <div className="role">Robertin Boukeng · Lepefy Labs</div>
        <div className="contactList">
          <a href="tel:+393278551293">+39 327 855 1293</a>
          <a href="mailto:robertin.smartinvestor@gmail.com">robertin.smartinvestor@gmail.com</a>
          <a href="https://www.lepefy.com">www.lepefy.com</a>
          <a href="https://www.facebook.com/lepefy" target="_blank" rel="noreferrer">facebook.com/lepefy</a>
        </div>
        <div className="digitalActions">
          <a className="button buttonPrimary" href="/founder.vcf" download>Salva Lepefy Founder</a>
          <a className="button buttonSecondary" href="/">Scopri Lepefy Labs</a>
        </div>
      </div>
    </section>
  );
}
