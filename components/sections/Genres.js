const PACKAGES = [
  {
    idx: '01',
    name: 'Raw Qawwali',
    tag: 'Pure. Soulful. Spiritual.',
    includes: ['Traditional Qawwali', 'Harmonium, Tabla & Dholak', 'Spiritual Poetry'],
    perfect: 'Mehfil-e-Sama, Private Gatherings',
    delay: '',
  },
  {
    idx: '02',
    name: 'Sufi Qawwali + Bollywood',
    tag: 'Soul meets Stardom.',
    includes: ['Sufi Qawwali Favorites', 'Unplugged Bollywood Hits', 'Audience Interaction'],
    perfect: 'Weddings, Receptions, Celebrations',
    featured: true,
    delay: 'd1',
  },
  {
    idx: '03',
    name: 'Sukoon Flight',
    tag: 'From Sufi to Bhangra.',
    includes: ['Bollywood Mashups', 'High-Energy Dance Anthems', 'Dhol & Audience Hype'],
    perfect: 'Club Nights, Grand Baraat',
    delay: 'd2',
  },
];

export default function Genres() {
  return (
    <section className="section wrap" id="genres" data-screen-label="Services">
      <div className="sec-head reveal">
        <span className="eyebrow">Choose Your Experience</span>
        <h2 className="h-sec">Three packages, endless memories</h2>
        <p className="lead muted">
          From intimate mehfils to full-floor celebrations — pick the soul that fits your moment.
        </p>
      </div>
      <div className="pkgs">
        {PACKAGES.map((p) => (
          <article
            className={`pkg reveal${p.featured ? ' is-featured' : ''}${p.delay ? ' ' + p.delay : ''}`}
            tabIndex={0}
            key={p.name}
          >
            {p.featured && <span className="pkg-badge">Most Loved</span>}
            <div className="pkg-head">
              <span className="pkg-idx">{p.idx}</span>
              <span className="pkg-kicker">Package</span>
            </div>
            <h3>{p.name}</h3>
            <p className="pkg-tag">{p.tag}</p>
            <div className="pkg-incl-label">What's included</div>
            <ul className="pkg-incl">
              {p.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="pkg-for">
              <b>Perfect for</b>
              <span>{p.perfect}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
