# Sukoon Band — Next.js Landing Page

A premium landing page for Sukoon Band (live music for weddings & celebrations, Vancouver BC), built as a **Next.js App Router** project. Ported from the HTML/CSS/JS design exported from Claude Design.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## What's inside

```
app/
  layout.js        # <html>/<body> shell + page metadata
  page.js          # composes all sections
  globals.css      # the design's stylesheet (fonts via Google Fonts @import)
components/
  Nav.js           # fixed nav: scroll state + mobile menu  (client)
  BookingModal.js  # booking form with validation + success state  (client)
  BookingContext.js# shares "open booking modal" across the page  (client)
  BookButton.js    # any "Book" button, wired to the modal  (client)
  Interactions.js  # scroll-reveal + smooth anchor scrolling  (client)
  PhotoImg.js      # <img> with graceful warm-gradient fallback  (client)
  sections/        # Hero, Metrics, About, Genres, Featured, Showcase,
                   # Testimonials, Instagram, Cta, Footer  (server components)
public/
  logo-maroon.png  # nav + mobile menu mark (maroon on cream)
  logo.png         # footer mark (gold on dark)
```

## Notes

- **Server vs client:** the section markup is server components; only the
  interactive pieces (nav, modal, reveals, image fallback) are marked
  `'use client'`. This keeps the shipped JS small.
- **Images:** performance photos load from Unsplash with the original
  graceful fallback (a warm gradient + caption) if a URL fails. To self-host
  them, drop files in `public/` and update the `src` values, or switch to
  `next/image` (add the Unsplash host under `images.remotePatterns` in
  `next.config.mjs`).
- **Fonts:** Playfair Display + Manrope are pulled via a Google Fonts
  `@import` in `globals.css`. For zero layout shift you can switch to
  `next/font/google` and map them to the `--serif` / `--sans` CSS variables.
- The booking form is front-end only — wire `handleSubmit` in
  `components/BookingModal.js` to your email/CRM/API endpoint to receive leads.
- The Claude Design "Tweaks" panel and logo drag-drop slot were tooling for the
  design phase and are intentionally not included in this production build.
