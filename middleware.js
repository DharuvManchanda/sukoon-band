import { NextResponse } from 'next/server';

// This site is a single page served at "/". Everything else is a legacy URL
// left over from a previous WordPress site on this domain (e.g.
// /comments/feed/, /bcd31-about-us, /wp-admin/) that Google still has indexed.
//
// Rather than denylist every old pattern, we allowlist the only real page and
// return 410 Gone for anything else. 410 tells crawlers the content is
// permanently removed, so it's dropped from the search index fastest.
const VALID_PATHS = new Set(['/']);

// Static asset & generated-metadata requests that must be served normally.
// Case-insensitive because public/ files use mixed-case extensions
// (e.g. hero.JPEG, hero2.AVIF, stage2.JPG).
const SERVE_NORMALLY = /\.(?:png|jpe?g|avif|webp|gif|svg|ico|css|js|txt|xml|json|woff2?|ttf|map)$/i;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (VALID_PATHS.has(pathname) || SERVE_NORMALLY.test(pathname)) {
    return NextResponse.next();
  }

  return new NextResponse(
    '<!doctype html><meta name="robots" content="noindex"><title>410 Gone</title>' +
      '<h1>410 — Gone</h1><p>This page no longer exists. Visit ' +
      '<a href="/">sukoonband.site</a>.</p>',
    {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
      },
    }
  );
}

export const config = {
  // Never run on Next.js internals or the API route: /_next/image and
  // /api/* have no file extension and would otherwise be treated as pages.
  matcher: ['/((?!_next/|api/).*)'],
};
