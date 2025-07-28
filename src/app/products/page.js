'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollProgress from '../components/ScrollProgress';
import '../styles/products.css';

function ImageGroup({ images = [], altPrefix = '', position = 'left' }) {
  if (images.length === 1) {
    return (
      <div className={`product-${position}`}>
        <Image
          src={images[0]}
          alt={`${altPrefix} single`}
          width={600}
          height={600}
        />
        <div className="product-single-button">
          <Link href="/contact" className="view-button">
            View Product ➔
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`product-${position} multi`}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`${altPrefix} image ${index + 1}`}
          width={300}
          height={300}
        />
      ))}
    </div>
  );
}

function ProductSection({
  leftImages = [],
  rightImages = [],
  reverse = false,
  altPrefix = 'Product',
}) {
  return (
    <section className={`product-section ${reverse ? 'reverse' : ''}`}>
      <ImageGroup images={leftImages} altPrefix={altPrefix} position="left" />
      <ImageGroup images={rightImages} altPrefix={altPrefix} position="right" />
    </section>
  );
}

export default function ProductsPage() {
  const containerRef = useRef(null);

  return (
    <div className="products-page-wrapper">
      <ScrollProgress />

      <main ref={containerRef} className="products-container">
        <section className="intro-section">
          <h2>Explore Our Products</h2>
          <p>Scroll down to discover our latest offerings.</p>
        </section>

        {/* 1: One left, Two right */}
        <ProductSection
          leftImages={['/images/hell1.webp']}
          rightImages={['/images/hell2.webp', '/images/hell3.webp']}
        />

        {/* 2: Two left, One right */}
        <ProductSection
          leftImages={['/images/mystic2.webp', '/images/mystic3.webp']}
          rightImages={['/images/mystic1.webp']}
        />

        {/* 3: One left, Two right */}
        <ProductSection
          leftImages={['/images/senti1.webp']}
          rightImages={['/images/senti2.webp', '/images/senti3.webp']}
        />

        {/* 4: Two left, One right */}
        <ProductSection
          leftImages={['/images/echozero2.webp', '/images/echozero3.webp']}
          rightImages={['/images/echozero1.webp']}
        />
      </main>
    </div>
  );
}
