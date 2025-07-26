'use client';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="w-24 h-24">
        <Image
          src="/images/auxLogoBlack.png"
          alt="Loading..."
          width={96}
          height={96}
          className="logo-spin"
        />
      </div>
    </div>
  );
}
