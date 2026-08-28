import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCopy, isLocale, locales, type Locale } from '../../lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const descriptions: Record<Locale, string> = {
    fr: 'Lepefy Labs conçoit des produits numériques, des plateformes et des automatisations autour de besoins réels.',
    en: 'Lepefy Labs builds digital products, platforms and automation around real-world needs.',
    it: 'Lepefy Labs progetta prodotti digitali, piattaforme e automazioni attorno a esigenze reali.',
  };
  return {
    description: descriptions[params.locale],
    alternates: {
      canonical: `/${params.locale}`,
      languages: { 'fr-FR': '/fr', 'en': '/en', 'it-IT': '/it', 'x-default': '/fr' },
    },
  };
}

function translatedPath(pathname: string, locale: Locale) {
  const parts = pathname.split('/');
  if (parts.length > 1 && isLocale(parts[1])) parts[1] = locale;
  else parts.splice(1, 0, locale);
  return parts.join('/') || `/${locale}`;
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const c = getCopy(locale);
  const pathname = headers().get('x-lepefy-pathname') ?? `/${locale}`;
  const nav = [
    { href: `/${locale}/solutions`, label: c.nav.solutions },
    { href: `/${locale}/commerce`, label: c.nav.commerce },
    { href: `/${locale}/about`, label: c.nav.about },
  ];

  return (
    <>
      <header className="siteHeader">
        <div className="container navBar">
          <a className="brand" href={`/${locale}`} aria-label="Lepefy Labs home"><img src="/lepefy-mark.svg" alt="" /><span>Lepefy Labs</span></a>
          <nav className="navLinks" aria-label="Primary navigation">
            {nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            <a href={`/${locale}/contact`} className="navCta">{c.nav.contact}</a>
          </nav>
          <div className="languageSwitcher" aria-label="Language">
            {locales.map((item) => <a key={item} href={translatedPath(pathname, item)} aria-current={item === locale ? 'page' : undefined}>{item.toUpperCase()}</a>)}
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="siteFooter">
        <div className="container footerGrid">
          <div><a className="brand footerBrand" href={`/${locale}`}><img src="/lepefy-mark.svg" alt="" /><span>Lepefy Labs</span></a><p>{c.footer.tagline}</p></div>
          <div className="footerLinks">
            <a href={`/${locale}/solutions`}>{c.footer.solutions}</a><a href={`/${locale}/commerce`}>{c.footer.commerce}</a><a href={`/${locale}/about`}>{c.footer.about}</a><a href={`/${locale}/founder`}>{c.footer.founder}</a><a href={`/${locale}/contact`}>{c.footer.contact}</a>
          </div>
        </div>
        <div className="container footerBottom">© {new Date().getFullYear()} Lepefy Labs</div>
      </footer>
    </>
  );
}
