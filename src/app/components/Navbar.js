'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ style = {}, className = '' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isProducts = pathname.startsWith('/products');
  const isContact  = pathname === '/contact';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerStyle = {
    backgroundColor: isContact && !isScrolled
      ? '#000'                     // Contact, top: dark
      : isScrolled
      ? '#ffffff'                  // any page, scrolled: white
      : isProducts
      ? '#f0f0f0'                  // Products: gray
      : 'transparent',             // others, top: transparent
    ...style,
  };

  const navItems = [
    { label: 'ABOUT US', href: '/about' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'TRAINING', href: '/training' },
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
              isScrolled || isProducts
                ? '/images/auxLogoBlack.png'
                : '/images/auxLogo.png'
            }
            alt="Auxobit logo"
            className="w-[70px] h-[71px] transition-all duration-300 ov"
          />
        </Link>

        <ul className="flex list-none ai">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block px-[57px] text-[14px] font-[350] bg-transparent rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 no-underline whitespace-nowrap"
                style={{
                  color: isScrolled || isProducts
                    ? '#000'
                    : '#fff',
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
