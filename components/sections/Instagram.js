import PhotoImg from '@/components/PhotoImg';

const POSTS = [
  { img: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=600&q=80&auto=format&fit=crop', alt: 'Performance moment' },
  { img: 'https://images.unsplash.com/photo-1646765495885-8a61595cb9cf?w=600&q=80&auto=format&fit=crop', alt: 'Vocalist performing' },
  { img: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=600&q=80&auto=format&fit=crop', alt: 'Mehndi detail' },
  { img: 'https://images.unsplash.com/photo-1653246506721-1c47487e32b9?w=600&q=80&auto=format&fit=crop', alt: 'Musician portrait' },
  { img: 'https://images.unsplash.com/photo-1633411988188-6e63354a9019?w=600&q=80&auto=format&fit=crop', alt: 'Performance close up' },
  { img: 'https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?w=600&q=80&auto=format&fit=crop', alt: 'Cultural celebration' },
  { img: 'https://images.unsplash.com/photo-1643098979608-1b22614abe88?w=600&q=80&auto=format&fit=crop', alt: 'Instrument close up' },
  { img: 'https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?w=600&q=80&auto=format&fit=crop', alt: 'Celebration detail' },
];

function IgIcon() {
  return (
    <span className="ig-ic">
      <svg viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1018.6 12 6.6 6.6 0 0012 5.4zm0 10.9A4.3 4.3 0 1116.3 12 4.3 4.3 0 0112 16.3zm6.8-11.2a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z" />
      </svg>
    </span>
  );
}

export default function Instagram() {
  return (
    <section className="section wrap" data-screen-label="Instagram">
      <div className="ig-head reveal">
        <div className="sec-head" style={{ margin: 0 }}>
          <span className="eyebrow">@sukoonband</span>
          <h2 className="h-sec">Moments from the stage</h2>
        </div>
        <a className="btn btn-ghost" href="#">
          Follow along <span className="arr">→</span>
        </a>
      </div>
      <div className="ig-grid reveal">
        {POSTS.map((p, i) => (
          <div className="ig" key={i}>
            <div className="ph" data-label="@sukoonband">
              <PhotoImg src={p.img} alt={p.alt} loading="lazy" />
            </div>
            <IgIcon />
          </div>
        ))}
      </div>
    </section>
  );
}
