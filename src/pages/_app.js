// src/pages/_app.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader as soon as React mounts
    setLoading(false);
  }, []);

  return (
    <>
      {loading && (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          zIndex: 9999,
        }}>
          <Image
            src="/images/auxLogoBlack.png"
            alt="Loading..."
            width={96}
            height={96}
            style={{
              animation: 'bounce 1s ease-in-out infinite',
              filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))',
            }}
          />
          <style>{`
            @keyframes bounce {
              0%,100%   { transform: translateY(0); }
              50%       { transform: translateY(-20px); }
            }
          `}</style>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}
