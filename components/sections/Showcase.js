import PhotoImg from '@/components/PhotoImg';

const SHOWS = [
  {
    cls: 'big',
    delay: '',
    kicker: 'The main event',
    title: 'Weddings',
    img: 'https://images.unsplash.com/photo-1722952934708-749c22eb2e58?w=1000&q=80&auto=format&fit=crop',
    alt: 'Wedding celebration',
  },
  {
    cls: 'tall',
    delay: 'd1',
    kicker: 'Intimate & joyful',
    title: 'Mehndi Nights',
    img: '/mehndi.JPEG',
    alt: 'Mehndi night celebration',
  },
  {
    cls: 'sm',
    delay: '',
    kicker: 'Elegant evenings',
    title: 'Receptions',
    img: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=700&q=80&auto=format&fit=crop',
    alt: 'Reception decor',
  },
  {
    cls: 'sm',
    delay: 'd1',
    kicker: 'Community & culture',
    title: 'Cultural Events',
    img: '/cultural.JPEG',
    alt: 'Cultural celebration',
  },
  {
    cls: 'sm',
    delay: 'd2',
    kicker: 'Full-stage shows',
    title: 'Live Concerts',
    img: '/hero2.AVIF',
    alt: 'Live concert performance',
  },
];

export default function Showcase() {
  return (
    <section className="section wrap" id="gallery" data-screen-label="Showcase">
      <div className="sec-head reveal">
        <span className="eyebrow">Performance Showcase</span>
        <h2 className="h-sec">Where Sukoon comes alive</h2>
        <p className="lead muted">
          Every celebration is different. We bring the right energy to each one.
        </p>
      </div>
      <div className="showcase-grid">
        {SHOWS.map((s, i) => (
          <article className={`show ${s.cls} reveal${s.delay ? ' ' + s.delay : ''}`} key={i}>
            <div className="ph" data-label={s.title}>
              <PhotoImg src={s.img} alt={s.alt} loading="lazy" />
            </div>
            <div className="s-body">
              <small>{s.kicker}</small>
              <h3>{s.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
