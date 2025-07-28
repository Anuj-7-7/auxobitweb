'use client';

import { useRef } from 'react';
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
  '/videos/clip1.webm',
  '/videos/clip2.webm',
  '/videos/clip3.webm',
];
const OPTIONS = { loop: true, skipSnaps: false };

export default function HomePage() {

  return (
    <>
      <ScrollProgress/>

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
