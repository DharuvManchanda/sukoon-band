import PhotoImg from '@/components/PhotoImg';

const FEATURES = [
  'Live vocalists & musicians',
  'Custom song requests',
  'Full sound & staging',
  'Bilingual hosting',
];

export default function About() {
  return (
    <section className="section band" id="about" data-screen-label="About">
      <div className="wrap about-grid">
        <div className="about-art reveal">
          <div className="ph a-main" data-label="The musicians of Sukoon">
            <PhotoImg
              src="/about2.jpg"
              alt="Musician performing with heart and soul"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
          {/* <div className="ph a-inset" data-label="Live rhythm">
            <PhotoImg
              src="https://images.unsplash.com/photo-1570797803365-c6eb43b1f040?w=700&q=80&auto=format&fit=crop"
              alt="Hands playing percussion"
              sizes="(max-width: 1024px) 48vw, 270px"
            />
          </div> */}
        </div>
        <div className="about-copy reveal d2">
          <span className="eyebrow">About Sukoon</span>
          <h2 className="h-sec">
            Celebrating the
            <br />
            power of <em className="script">live music</em>
          </h2>
          <p className="lead">
            Sukoon Band creates authentic live experiences where every note is filled with heart and
            soul. We believe music has the power to connect people, celebrate culture, and create
            unforgettable memories.
          </p>
          <p className="muted">
            From the first dhol beat of a baraat to the last soulful note of the night, we read the
            room and play to the moment — blending tradition with a modern, polished stage presence.
          </p>
          <div className="about-features">
            {FEATURES.map((f) => (
              <span className="chip" key={f}>
                <i></i> {f}
              </span>
            ))}
          </div>
          <a className="btn btn-primary" href="#featured">
            Read Our Story <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
