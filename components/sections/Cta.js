import PhotoImg from '@/components/PhotoImg';
import BookButton from '@/components/BookButton';

export default function Cta() {
  return (
    <section className="cta" id="contact" data-screen-label="Booking CTA">
      <div className="ph">
        <PhotoImg
          src="https://images.unsplash.com/photo-1646765566496-8744ce5e7738?w=1600&q=80&auto=format&fit=crop"
          alt="Live performance moment"
          loading="lazy"
        />
      </div>
      <div className="wrap cta-inner reveal">
        <span className="eyebrow">Let&apos;s Create Something Unforgettable</span>
        <h2>Ready to create an unforgettable celebration?</h2>
        <p>
          Dates fill quickly during wedding season. Contact us today to check availability and secure
          live music for your event.
        </p>
        <div className="cta-actions">
          <BookButton className="btn btn-light">Check Availability</BookButton>
          <a className="btn btn-outline-light" href="tel:+17782429589">
            +1 (778) 242-9589
          </a>
        </div>
        <div className="cta-mini">
          <div>
            <b>24 hrs</b>
            <small>Average reply time</small>
          </div>
          <div>
            <b>All of BC</b>
            <small>&amp; beyond</small>
          </div>
          <div>
            <b>Custom</b>
            <small>Sets for your day</small>
          </div>
        </div>
      </div>
    </section>
  );
}
