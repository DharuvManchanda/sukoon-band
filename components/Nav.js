'use client';

import { useEffect, useState } from 'react';
import { useBooking } from './BookingContext';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#genres', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const bookFromMenu = () => {
    setMenuOpen(false);
    openBooking();
  };

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <a className="brand" href="#home" aria-label="Sukoon Band home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/logo-maroon.png" alt="Sukoon Band" width={500} height={500} />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <button className="btn btn-primary" onClick={openBooking}>
            Book Now <span className="arr">→</span>
          </button>
          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-logo" src="/logo-maroon.png" alt="Sukoon Band" width={500} height={500} />
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-primary" onClick={bookFromMenu}>
          Book Your Event <span className="arr">→</span>
        </button>
      </div>
    </>
  );
}
