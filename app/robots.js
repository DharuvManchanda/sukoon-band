const SITE_URL = 'https://sukoonband.site';

// Allow full crawling on purpose: every non-homepage URL returns 410 Gone
// (see middleware.js). Google must be able to crawl those old URLs to see the
// 410 and drop them from the index. Disallowing them here would do the
// opposite — a blocked URL can't be re-crawled, so it lingers in the index.
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
