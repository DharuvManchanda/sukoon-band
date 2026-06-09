'use client';

import { useEffect } from 'react';

export default function Interactions() {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }

    // Smooth anchor scrolling with fixed-nav offset
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      e.preventDefault(); // custom scroll for real anchors, neutralize dummy "#"
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      const y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);

    return () => {
      if (io) io.disconnect();
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
