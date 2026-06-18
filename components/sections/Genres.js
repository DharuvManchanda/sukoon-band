import PhotoImg from '@/components/PhotoImg';

const PACKAGES = [
  {
    idx: '01',
    name: 'Raw Qawwali',
    tag: 'Pure. Soulful. Spiritual.',
    includes: ['Traditional Qawwali', 'Harmonium, Tabla & Dholak', 'Spiritual Poetry'],
    perfect: 'Mehfil-e-Sama, Private Gatherings',
    img: '/sufi.jpg',
    alt: 'Qawwali ensemble with harmonium and tabla',
    pos: 'center 35%',
    delay: '',
  },
  {
    idx: '02',
    name: 'Sufi Qawwali + Bollywood',
    tag: 'Soul meets Stardom.',
    includes: ['Sufi Qawwali Favorites', 'Unplugged Bollywood Hits', 'Audience Interaction'],
    perfect: 'Weddings, Receptions, Celebrations',
    img: '/weddings.jpg',
    alt: 'Live wedding performance with the crowd',
    delay: 'd1',
  },
  {
    idx: '03',
    name: 'Sukoon Flight',
    tag: 'From Sufi to Bhangra.',
    includes: ['Bollywood Mashups', 'High-Energy Dance Anthems', 'Dhol & Audience Hype'],
    perfect: 'Club Nights, Grand Baraat',
    img: '/punjabi.jpg',
    alt: 'High-energy bhangra performance on stage',
    pos: 'center 35%',
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
      <div className="genres">
        {PACKAGES.map((p) => (
          <article className={`genre reveal${p.delay ? ' ' + p.delay : ''}`} tabIndex={0} key={p.name}>
            <div className="ph" data-label={p.name}>
              <PhotoImg src={p.img} alt={p.alt} loading="lazy" style={p.pos ? { objectPosition: p.pos } : undefined} />
            </div>
            <div className="g-body">
              <div className="g-idx">{p.idx} — Package</div>
              <h3>{p.name}</h3>
              <p className="g-tag">{p.tag}</p>
              <ul className="g-incl">
                {p.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="g-for">
                <b>Perfect for</b> {p.perfect}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
