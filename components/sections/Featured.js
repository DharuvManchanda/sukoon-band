import PhotoImg from '@/components/PhotoImg';

export default function Featured() {
  return (
    <section className="featured section" id="featured" data-screen-label="Featured artist">
      <div className="glow"></div>
      <div className="wrap featured-grid">
        <div className="featured-art reveal">
          <div className="ph f-img" data-label="Lead vocalist">
            <PhotoImg
              src="https://images.unsplash.com/photo-1646765495885-8a61595cb9cf?w=900&q=80&auto=format&fit=crop"
              alt="Lead vocalist of Sukoon performing"
            />
          </div>
          <div className="f-frame"></div>
        </div>
        <div className="featured-copy reveal d2">
          <span className="eyebrow">The Soul of Sukoon</span>
          <h2 className="h-sec">Aman Deep</h2>
          <div className="role">Lead Vocalist &amp; Founder</div>
          <blockquote>Music is not just what we do — it is who we are.</blockquote>
          <div className="sign">— Aman Deep</div>
          <div className="f-meta">
            <div>
              <b>18 yrs</b>
              <small>On stage</small>
            </div>
            <div>
              <b>5</b>
              <small>Languages sung</small>
            </div>
            <div>
              <b>∞</b>
              <small>Songs in the heart</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
