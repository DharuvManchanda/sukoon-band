import { BookingProvider } from '@/components/BookingContext';
import Nav from '@/components/Nav';
import Interactions from '@/components/Interactions';
import BookingModal from '@/components/BookingModal';
import Hero from '@/components/sections/Hero';
import Metrics from '@/components/sections/Metrics';
import About from '@/components/sections/About';
import Genres from '@/components/sections/Genres';
import Featured from '@/components/sections/Featured';
import Showcase from '@/components/sections/Showcase';
import Testimonials from '@/components/sections/Testimonials';
import Instagram from '@/components/sections/Instagram';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <BookingProvider>
      <Nav />
      <main id="home">
        <Hero />
        <Metrics />
        <About />
        <Genres />
        <Featured />
        <Showcase />
        <Testimonials />
        <Instagram />
        <Cta />
      </main>
      <Footer />
      <BookingModal />
      <Interactions />
    </BookingProvider>
  );
}
