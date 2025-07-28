'use client';
import './globals.css';
import './styles/loader.css';
import { useEffect, useState } from 'react';
import ClientOnlyNavbar from './components/ClientOnlyNavbar';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // matches total animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {isLoading && (
          <div className="loader">
            <img src="/images/auxLogo.png" alt="Loading..." className="loader-logo" />
          </div>
        )}

        {!isLoading && (
          <>
            <ClientOnlyNavbar />
            <main className="pt-0">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
