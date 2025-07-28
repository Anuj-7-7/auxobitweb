// src/app/components/navbar.js
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar({ style = {}, className = '' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isProducts = pathname.startsWith('/products');
  const isAbout   = pathname === '/about';
  const isContact = pathname === '/contact';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerStyle = {
    backgroundColor: isScrolled
      ? '#ffffff'
      : isProducts
      ? '#f0f0f0'
      : (isAbout || isContact)
      ? 'transparent'
      : 'transparent',
    ...style,
  };

  const navItems = [
    { label: 'PRODUCTS', href: '/products' },
    { label: 'TRAINING', href: '/training' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isProducts ? 'navbar--products' : ''} ${className}`}
      style={headerStyle}
    >
      <nav className="max-w-[1100px] mx-auto flex items-center justify-between hd">
        <Link href="/">
          <img
            src={
              isScrolled || isProducts || isAbout || isContact
                ? '/images/auxLogoBlack.webp'
                : '/images/auxLogo.webp'
            }
            alt="Auxobit logo"
            className="w-[70px] h-[71px] transition-all duration-300 ov"
          />
        </Link>

        <ul className="flex list-none ai">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const textColor = (isScrolled || isProducts || isAbout || isContact)
              ? '#000'
              : '#fff';

            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <motion.div
                    whileTap={{ y: 2, scale: 0.98, opacity: 0.7 }}
                    className="inline-block px-[57px] py-[12px] text-[15px] font-[550] bg-transparent rounded-full transition-all duration-200 hover:bg-blue-600 hover:text-white no-underline whitespace-nowrap cursor-pointer relative select-none normal single"
                    style={{ color: textColor }}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 w-4/5 h-[2px] bg-black transform -translate-x-1/2 rounded-full" />
                    )}
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
