'use client';
import React from 'react';
import '../styles/footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between alllll">
        {/* COPYRIGHT TEXT */}
        <div className='copy'>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Auxobit Aerospace. All Rights Reserved.
        </span></div>

       <div className="flex space-x-6 soc">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/auxobitaerospace/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={25} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/auxobitaerospace?igsh=cmJua2Zhb2M2dTJn"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    aria-label="Instagram"
  >
    <FaInstagram size={25} />
  </a>
</div>

      </div>
    </footer>
  );
}
