// app/page.js
'use client';

import ScrollProgress from './components/ScrollProgress';
import HeroCarousel from './components/HeroCarousel';
import CredibilitySection from './components/CredibilitySection';
import ProductSection from './components/ProductSection';
import EnquiryForm from './components/EnquiryForm';
import EmblaCarousel from './components/EmblaCarousel';
import Footer from './components/Footer';

import './styles/style.css';
import './styles/footer.css';
import './styles/embla.css';

const SLIDES = [
  '/videos/clip1.mp4',
  '/videos/clip2.mp4',
  '/videos/clip3.mp4',
];
const OPTIONS = { loop: true, skipSnaps: false };

export default function HomePage() {
  return (
    <>
      {/* put the progress bar first, z‑index:0 */}
      <ScrollProgress />

      {/* wrap all your content in a relative container with higher z‑index */}
      <div className="home-content relative z-10">
        <HeroCarousel />
        <ProductSection />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <EnquiryForm />
        <Footer />
      </div>
    </>
  );
}
