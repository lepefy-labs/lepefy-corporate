import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import './i18n.css';
import './commerce-visuals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lepefy.com'),
  title: { default: 'Lepefy Labs', template: '%s · Lepefy Labs' },
  description: 'Lepefy Labs builds intelligent digital products, platforms and automation around real-world needs.',
  openGraph: { title: 'Lepefy Labs', description: 'Smart digital products and solutions built around real-world needs.', url: 'https://www.lepefy.com', siteName: 'Lepefy Labs', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = headers().get('x-lepefy-locale') ?? 'fr';
  return <html lang={locale}><body>{children}</body></html>;
}
