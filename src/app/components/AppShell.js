'use client';
import { useEffect, useState } from 'react';
import ClientOnlyNavbar from './ClientOnlyNavbar';

export default function AppShell({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <img src="/images/auxLogo.webp" alt="Loading..." className="loader-logo" />
        </div>
      ) : (
        <>
          <ClientOnlyNavbar />
          <main className="pt-0">{children}</main>
        </>
      )}
    </>
  );
}
