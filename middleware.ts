import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale } from './lib/i18n';

const localizedLegacyRoutes = new Set(['/solutions', '/commerce', '/about', '/contact', '/card']);
const personalLegacyRoutes = new Set(['/founder', '/robertin']);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url, 308);
  }

  if (localizedLegacyRoutes.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url, 308);
  }

  if (personalLegacyRoutes.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}/card`;
    return NextResponse.redirect(url, 308);
  }

  const firstSegment = pathname.split('/')[1];
  const locale = isLocale(firstSegment) ? firstSegment : defaultLocale;
  const headers = new Headers(request.headers);
  headers.set('x-lepefy-locale', locale);
  headers.set('x-lepefy-pathname', pathname);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)'],
};
