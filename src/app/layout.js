// app/layout.js
import "./globals.css";
import ClientOnlyNavbar from "./components/ClientOnlyNavbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <ClientOnlyNavbar />

        <main className="pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
