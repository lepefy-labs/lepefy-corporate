import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lepefy.com'),
  title: {
    default: 'Lepefy Labs — Smart solutions for real needs',
    template: '%s · Lepefy Labs',
  },
  description:
    'Lepefy Labs crea prodotti digitali, piattaforme e automazioni costruite attorno a bisogni reali. Scopri Lepefy Commerce e le nostre soluzioni su misura.',
  openGraph: {
    title: 'Lepefy Labs — Smart solutions for real needs',
    description:
      'Prodotti digitali, piattaforme e automazioni costruite attorno a bisogni reali.',
    url: 'https://www.lepefy.com',
    siteName: 'Lepefy Labs',
    type: 'website',
  },
};

const nav = [
  { href: '/solutions', label: 'Soluzioni' },
  { href: '/commerce', label: 'Commerce' },
  { href: '/about', label: 'Chi siamo' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className="siteHeader">
          <div className="container navBar">
            <a className="brand" href="/" aria-label="Lepefy Labs home">
              <img src="/lepefy-mark.svg" alt="" />
              <span>Lepefy Labs</span>
            </a>
            <nav className="navLinks" aria-label="Navigazione principale">
              {nav.map((item) => (
                <a href={item.href} key={item.href}>{item.label}</a>
              ))}
              <a href="/contact" className="navCta">Parliamone</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="siteFooter">
          <div className="container footerGrid">
            <div>
              <a className="brand footerBrand" href="/">
                <img src="/lepefy-mark.svg" alt="" />
                <span>Lepefy Labs</span>
              </a>
              <p>Smart solutions for real needs.</p>
            </div>
            <div className="footerLinks">
              <a href="/solutions">Soluzioni</a>
              <a href="/commerce">Lepefy Commerce</a>
              <a href="/about">Chi siamo</a>
              <a href="/robertin">Founder</a>
              <a href="/contact">Contatti</a>
            </div>
          </div>
          <div className="container footerBottom">© {new Date().getFullYear()} Lepefy Labs</div>
        </footer>
      </body>
    </html>
  );
}
