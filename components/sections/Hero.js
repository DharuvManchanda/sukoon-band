import PhotoImg from '@/components/PhotoImg';
import BookButton from '@/components/BookButton';

const MARQUEE = [
  'Weddings',
  'Receptions',
  'Mehndi Nights',
  'Sangeet',
  'Cultural Events',
  'Live Concerts',
  'Private Soirées',
];

export default function Hero() {
  return (
    <section className="hero wrap" data-screen-label="Hero">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Vancouver, BC&apos;s Premier Live Music Group</span>
          <h1 className="display">
            Live Music, Live Energy,
            <br />
            <span className="accent-word">Pure Sukoon</span>
          </h1>
          <p className="hero-lead">
            A dynamic live music group specializing in Punjabi, Hindi, Sufi, Qawwali &amp; Folk.
            Creating unforgettable experiences for weddings, receptions, and cultural celebrations
            across British Columbia.
          </p>
          <div className="hero-actions">
            <BookButton>Book Your Event</BookButton>
            <a className="btn btn-ghost" href="#gallery">
              View Performances
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <div className="stars">★★★★★</div>
              <small>Trusted at 600+ celebrations</small>
            </div>
            <div className="divider"></div>
            <div>
              <b>18 years</b>
              <small>of live performances</small>
            </div>
          </div>
        </div>

        <div className="hero-art reveal d2">
          <div className="ph main" data-label="Sukoon live on stage">
            <PhotoImg
              src="/hero.JPEG"
              alt="Sukoon Band performing live on stage"
            />
          </div>
          <div className="ph inset float" data-label="Live performance">
            <PhotoImg
              src="/hero2.AVIF"
              alt="Sukoon Band live music moment"
            />
          </div>
          <div className="badge float" style={{ opacity: 1, backgroundColor: 'rgb(248, 244, 238)' }}>
            <span className="ring">♪</span>
          </div>
        </div>
      </div>

      <div className="hero-marquee reveal">
        <div className="marquee-clip">
          <div className="marquee-track">
            {[0, 1].map((dup) =>
              MARQUEE.map((m, i) => (
                <span key={`${dup}-${i}`}>
                  {m}
                  <span></span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
