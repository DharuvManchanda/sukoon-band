import PhotoImg from '@/components/PhotoImg';

const TESTIMONIALS = [
  {
    quote:
      'Sukoon turned our wedding into something we still talk about. The Sufi set during dinner brought our families to tears — pure magic.',
    name: 'Simran & Arjun',
    meta: 'Wedding · Surrey, BC',
    img: 'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?w=160&q=80&auto=format&fit=crop',
    delay: '',
  },
  {
    quote:
      'The dhol entrance for our baraat was unreal. They read the crowd perfectly and kept the dance floor packed all night long.',
    name: 'Priya & Karan',
    meta: 'Reception · Vancouver, BC',
    img: 'https://images.unsplash.com/photo-1665960213508-48f07086d49c?w=160&q=80&auto=format&fit=crop',
    delay: 'd1',
  },
  {
    quote:
      'Professional, warm, and incredibly talented. Our cultural night felt authentic and elevated at the same time. Highly recommend.',
    name: 'Anita Sharma',
    meta: 'Mehndi Night · Abbotsford, BC',
    img: 'https://images.unsplash.com/photo-1599462616558-2b75fd26a283?w=160&q=80&auto=format&fit=crop',
    delay: 'd2',
  },
];

export default function Testimonials() {
  return (
    <section className="section band" data-screen-label="Testimonials">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Kind Words</span>
          <h2 className="h-sec">Loved by couples &amp; families</h2>
        </div>
        <div className="tst-grid">
          {TESTIMONIALS.map((t) => (
            <article className={`tst reveal${t.delay ? ' ' + t.delay : ''}`} key={t.name}>
              <div className="stars">★★★★★</div>
              <p>{t.quote}</p>
              <div className="who">
                <div className="ph av" data-label="A">
                  <PhotoImg src={t.img} alt={t.name} sizes="50px" />
                </div>
                <div>
                  <b>{t.name}</b>
                  <small>{t.meta}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
