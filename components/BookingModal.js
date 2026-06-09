'use client';

import { useEffect, useRef, useState } from 'react';
import { useBooking } from './BookingContext';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /[0-9]{7,}/;

export default function BookingModal() {
  const { open, closeBooking } = useBooking();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: false, phone: false, email: false });
  const nameRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      setSubmitted(false);
      setErrors({ name: false, phone: false, email: false });
      const t = setTimeout(() => nameRef.current?.focus(), 320);
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) closeBooking();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closeBooking]);

  const clearError = (field) => setErrors((p) => ({ ...p, [field]: false }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const phone = form.phone.value.replace(/[^0-9]/g, '');
    const email = form.email.value.trim();

    const next = {
      name: !name,
      phone: !phoneRe.test(phone),
      email: !emailRe.test(email),
    };
    setErrors(next);

    if (next.name || next.phone || next.email) return;
    setSubmitted(true);
  };

  return (
    <div
      className={`modal-root${open ? ' open' : ''}`}
      id="modal"
      aria-hidden={!open}
    >
      <div className="modal-bg" onClick={closeBooking}></div>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-head">
          <button className="modal-close" onClick={closeBooking} aria-label="Close">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <span className="eyebrow">Book Sukoon</span>
          <h3 id="modalTitle">Check your date</h3>
          <p>Tell us about your celebration and we&apos;ll be in touch within 24 hours.</p>
        </div>

        {!submitted && (
          <form id="bookForm" noValidate onSubmit={handleSubmit}>
            <div className="field row2">
              <div className={`field${errors.name ? ' invalid' : ''}`}>
                <label htmlFor="bname">
                  Full name <span className="req">*</span>
                </label>
                <input
                  ref={nameRef}
                  id="bname"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  onInput={() => clearError('name')}
                />
                <span className="err">Please enter your name.</span>
              </div>
              <div className={`field${errors.phone ? ' invalid' : ''}`}>
                <label htmlFor="bphone">
                  Phone <span className="req">*</span>
                </label>
                <input
                  id="bphone"
                  name="phone"
                  type="tel"
                  placeholder="(778) 000-0000"
                  autoComplete="tel"
                  onInput={() => clearError('phone')}
                />
                <span className="err">Please enter a valid phone.</span>
              </div>
            </div>

            <div className={`field${errors.email ? ' invalid' : ''}`}>
              <label htmlFor="bemail">
                Email <span className="req">*</span>
              </label>
              <input
                id="bemail"
                name="email"
                type="email"
                placeholder="you@email.com"
                autoComplete="email"
                onInput={() => clearError('email')}
              />
              <span className="err">Please enter a valid email.</span>
            </div>

            <div className="field row2">
              <div className="field">
                <label htmlFor="btype">Event type</label>
                <select id="btype" name="type" defaultValue="Wedding">
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Mehndi Night</option>
                  <option>Cultural Event</option>
                  <option>Private Celebration</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="bdate">Event date</label>
                <input id="bdate" name="date" type="date" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="bmsg">Tell us about your event</label>
              <textarea
                id="bmsg"
                name="message"
                placeholder="Venue, guest count, the vibe you're after…"
              ></textarea>
            </div>

            <button className="btn btn-primary" type="submit">
              Send Booking Request <span className="arr">→</span>
            </button>
          </form>
        )}

        {submitted && (
          <div className="modal-success show" id="modalSuccess">
            <div className="ok">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12.5l5 5L20 6.5" />
              </svg>
            </div>
            <h3>Request received!</h3>
            <p>Thank you — we&apos;ll reach out within 24 hours to check your date.</p>
          </div>
        )}
      </div>
    </div>
  );
}
