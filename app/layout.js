import './globals.css';

const siteTitle = 'Sukoon Band — Live Music for Weddings & Celebrations · Vancouver, BC';
const siteDescription =
  "Live Punjabi, Bollywood, Sufi and Qawwali music for weddings, receptions, mehndi nights, corporate events and cultural celebrations across British Columbia.";

export const metadata = {
  metadataBase: new URL('https://sukoonband.site'),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: '/logo-maroon.png',
    shortcut: '/logo-maroon.png',
    apple: '/logo-maroon.png',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'en_CA',
    siteName: 'Sukoon Band',
    images: [
      {
        url: '/hero.JPEG',
        width: 1200,
        height: 630,
        alt: 'Sukoon Band performing live on stage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/hero.JPEG'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
