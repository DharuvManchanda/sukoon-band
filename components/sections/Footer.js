import BookButton from '@/components/BookButton';

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#genres', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <a className="brand" href="#home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo" src="/logo.png" alt="Sukoon Band" width={500} height={500} />
          </a>
          <p>
            Live music with heart and soul for weddings and celebrations across British Columbia.
          </p>
          <div className="foot-socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1018.6 12 6.6 6.6 0 0012 5.4zm0 10.9A4.3 4.3 0 1116.3 12 4.3 4.3 0 0112 16.3zm6.8-11.2a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M23 7.5a3 3 0 00-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 001 7.5 31 31 0 00.5 12 31 31 0 001 16.5a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1A31 31 0 0023.5 12 31 31 0 0023 7.5zM9.8 15.3V8.7l5.7 3.3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="foot-col foot-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              Location
              <br />
              <b>Vancouver, British Columbia</b>
            </li>
            <li>Serving all of BC and beyond</li>
            <li>
              Phone
              <br />
              <b>
                <a href="tel:+17782429589">+1 (778) 242-9589</a>
              </b>
            </li>
            <li>
              Email
              <br />
              <b>
                <a href="mailto:sakoonband@gmail.com">sakoonband@gmail.com</a>
              </b>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <div className="foot-cta">
            <h4>Book Sukoon</h4>
            <p>Check your date and let&apos;s make it unforgettable.</p>
            <BookButton style={{ width: '100%' }}>Book Your Event</BookButton>
          </div>
        </div>
      </div>
      <div className="foot-bar">
        <small>© 2026 Sukoon Band. All rights reserved.</small>
        <div className="links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </footer>
  );
}
