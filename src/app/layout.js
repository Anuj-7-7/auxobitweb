import './globals.css';
import './styles/loader.css';
import AppShell from './components/AppShell';

export const metadata = {
  title: 'Auxobit',
  icons: {
    icon: 'public/favicon.ico',
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
