'use client';

import React from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <h2 className="brand-title">Auxobit Aerospace</h2>
          <p className="brand-tagline">Innovating Tomorrow's Skies</p>
        </div>

        <nav className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Reach Us</a></li>
          </ul>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/company/auxobitaerospace/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/auxobitaerospace"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Auxobit Aerospace. All Rights Reserved.</span>
      </div>
    </footer>
  );
}