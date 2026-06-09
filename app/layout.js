import './globals.css';

export const metadata = {
  title: 'Sukoon Band — Live Music for Weddings & Celebrations · Vancouver, BC',
  description:
    "Sukoon Band — Vancouver's premier live music group for Punjabi, Hindi, Sufi, Qawwali and Folk performances at weddings, receptions and cultural celebrations across British Columbia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
