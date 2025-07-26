'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/training.css';  // Import the CSS file

export default function TrainingPage() {
  return (
    <main className="training-page-main">
      <div className="training-content">
        <h1 className="training-title">Training Coming Soon</h1>
        <p className="training-subtext">
          We’re putting the finishing touches.<br />
          In the meantime, reach out and we’ll keep you posted!
        </p>
        <Link href="/contact" className="training-button">
          Contact Us
        </Link>
      </div>
    </main>
  );
}
