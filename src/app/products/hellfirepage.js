'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/hellfirepage.css'; // Ensure you have the correct path to your CSS

export default function ProductsPage() {
  // controls can be shared because we stagger per‐section via a small delay
  const imgCtrl  = useAnimation();
  const textCtrl = useAnimation();
  const galCtrl  = useAnimation();

  useEffect(() => {
    // kick off all sections anims simultaneously
    imgCtrl.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    textCtrl.start({ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } });
    galCtrl.start({ opacity: 1, transition: { delay: 0.6, duration: 1 } });
  }, [imgCtrl, textCtrl, galCtrl]);

  const products = [
    {
      id: 1,
      main: '/images/Frame 1268.png',
      gallery: ['/images/hell1.png','/images/hell2.png','/images/hell3.png'],
      title: 'Swarm',
      desc: 'Minimal and practical; only carries the absolute necessities.'
    },
    
  ];

  return (
    <div>
      {products.map((p, idx) => (
        <main key={p.id} className="product-showcase">
          <div className="grid-container">
            {/* Hero image */}
            <motion.div 
              className="hero-img" 
              initial={{ x: -100, opacity: 0 }} 
              animate={imgCtrl}
            >
              <img src={p.main} alt={`Main ${p.title}`} />
            </motion.div>

            {/* Hero text */}
            <motion.div 
              className="hero-text" 
              initial={{ x: 100, opacity: 0 }} 
              animate={textCtrl}
            >
              <h1>Hellfire<span className="accent">{p.title}</span></h1>
              <p>{p.desc}</p>
              <button>Enquire</button>
            </motion.div>

            {/* Gallery row */}
            <motion.div 
              className="gallery" 
              initial={{ opacity: 0 }} 
              animate={galCtrl}
            >
              {p.gallery.map((src,i) => (
                <div className="gallery-item" key={i}>
                  <img src={src} alt={`Gallery ${i+1}`} />
                </div>
              ))}
            </motion.div>
          </div>
        </main>
      ))}
    </div>
  );
}
