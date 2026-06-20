'use client';

import { useState, useEffect, useCallback } from 'react';
import PhotoImg from '@/components/PhotoImg';

const POSTS = [
  { img: '/stage.jpg',   alt: 'Sukoon Band live on stage', ar: '3 / 4' },
  { img: '/stage2.JPG',  alt: 'Stage performance', ar: '1 / 1' },
  { img: '/stage3.jpg',  alt: 'Live music celebration', ar: '4 / 5' },
  { img: '/stage4.JPEG', alt: 'Band performing at an event', ar: '3 / 4' },
  { img: '/stage5.avif', alt: 'Sukoon Band stage moment', ar: '1 / 1' },
  { img: 'https://images.unsplash.com/photo-1633411988188-6e63354a9019?w=600&q=80&auto=format&fit=crop', alt: 'Performance close up', ar: '4 / 5' },
  { img: 'https://images.unsplash.com/photo-1643098979608-1b22614abe88?w=600&q=80&auto=format&fit=crop', alt: 'Instrument close up', ar: '3 / 4' },
];

export default function Instagram() {
  const [active, setActive] = useState(null); // index of open image, or null

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % POSTS.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + POSTS.length) % POSTS.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, next, prev]);

  return (
    <section className="section wrap" data-screen-label="Instagram">
      <div className="ig-head reveal">
        <div className="sec-head" style={{ margin: 0 }}>
          <span className="eyebrow">@sukoonband</span>
          <h2 className="h-sec">Moments from the stage</h2>
        </div>
        <a className="btn btn-ghost" href="https://www.instagram.com/sukoon__band/" target="_blank" rel="noopener noreferrer">
          Follow along <span className="arr">→</span>
        </a>
      </div>
      <div className="ig-grid reveal">
        {POSTS.map((p, i) => (
          <div
            className="ig"
            key={i}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open image: ${p.alt}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActive(i);
              }
            }}
          >
            <div className="ph" data-label="@sukoonband" style={{ aspectRatio: p.ar }}>
              <PhotoImg
                src={p.img}
                alt={p.alt}
                sizes="(max-width: 760px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox open" onClick={close} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            className="lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure className="lb-stage" onClick={(e) => e.stopPropagation()}>
            <div className="lb-frame">
              <PhotoImg src={POSTS[active].img} alt={POSTS[active].alt} sizes="92vw" priority />
            </div>
            <figcaption className="lb-caption">
              <span className="lb-count">{active + 1} / {POSTS.length}</span>
            </figcaption>
          </figure>

          <button
            className="lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
