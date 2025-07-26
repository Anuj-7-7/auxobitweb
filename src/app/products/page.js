'use client';

import { useRef } from 'react';
import Image from 'next/image';
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
          <button className="view-button">View Product ➔</button>
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
          leftImages={['/images/hell1.png']}
          rightImages={['/images/hell2.png', '/images/hell3.png']}
        />

        {/* 2: Two left, One right */}
        <ProductSection
          leftImages={['/images/mystic2.png', '/images/mystic3.png']}
          rightImages={['/images/mystic1.png']}
        />

        {/* 3: One left, Two right */}
        <ProductSection
          leftImages={['/images/senti1.png']}
          rightImages={['/images/senti2.png', '/images/senti3.png']}
        />

        {/* 4: Two left, One right */}
        <ProductSection
          leftImages={['/images/echozero2.png', '/images/echozero3.png']}
          rightImages={['/images/echozero1.png']}
        />
      </main>
    </div>
  );
}
