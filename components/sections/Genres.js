import PhotoImg from '@/components/PhotoImg';

const GENRES = [
  {
    idx: '01',
    name: 'Punjabi',
    desc: 'High-energy bhangra, giddha and folk anthems that fill the dance floor.',
    img: 'https://images.unsplash.com/photo-1614016088310-f83a72f4d958?w=900&q=80&auto=format&fit=crop',
    alt: 'Punjabi folk performer',
    delay: '',
  },
  {
    idx: '02',
    name: 'Hindi',
    desc: 'Timeless Bollywood classics and modern hits, reimagined live.',
    img: 'https://images.unsplash.com/photo-1646765444015-5881f0fab3e8?w=1000&q=80&auto=format&fit=crop',
    alt: 'Hindi music performer',
    delay: 'd1',
  },
  {
    idx: '03',
    name: 'Sufi',
    desc: 'Soul-stirring harmonium and devotional melodies that move the heart.',
    img: 'https://images.unsplash.com/photo-1772703815055-5d4360b336a6?w=800&q=80&auto=format&fit=crop',
    alt: 'Harmonium player performing Sufi music',
    delay: '',
  },
  {
    idx: '04',
    name: 'Qawwali',
    desc: 'Call-and-response ecstasy in the timeless devotional tradition.',
    img: 'https://images.unsplash.com/photo-1653246458437-fd78a9265711?w=800&q=80&auto=format&fit=crop',
    alt: 'Qawwali vocalist at the microphone',
    delay: 'd1',
  },
  {
    idx: '05',
    name: 'Folk',
    desc: 'Regional ballads and roots music that carry the stories of home.',
    img: 'https://images.unsplash.com/photo-1573056311194-ad24d60d969d?w=800&q=80&auto=format&fit=crop',
    alt: 'Folk musicians in traditional attire',
    delay: 'd2',
  },
];

export default function Genres() {
  return (
    <section className="section wrap" id="genres" data-screen-label="Genres">
      <div className="sec-head reveal">
        <span className="eyebrow">What We Play</span>
        <h2 className="h-sec">Five traditions, one soul</h2>
        <p className="lead muted">
          A repertoire spanning generations and languages — curated live for your celebration.
        </p>
      </div>
      <div className="genres">
        {GENRES.map((g) => (
          <article className={`genre reveal${g.delay ? ' ' + g.delay : ''}`} tabIndex={0} key={g.name}>
            <div className="ph" data-label={g.name}>
              <PhotoImg src={g.img} alt={g.alt} loading="lazy" />
            </div>
            <div className="g-body">
              <div className="g-idx">{g.idx} — Genre</div>
              <h3>{g.name}</h3>
              <p>{g.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
