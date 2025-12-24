import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

// 🔑 Global metadata defaults
export const metadata: Metadata = {
  title: {
    default: 'Abhifind Blog',
    template: '%s | Abhifind Blog',
  },
  description:
    'A Next.js + WordPress powered blog sharing insights, tutorials, and updates.',
  openGraph: {
    title: 'Abhifind Blog',
    description:
      'A Next.js + WordPress powered blog sharing insights, tutorials, and updates.',
    url: 'https://www.abhifind.com',
    siteName: 'Abhifind Blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhifind Blog',
    description:
      'A Next.js + WordPress powered blog sharing insights, tutorials, and updates.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-black text-white min-h-screen">
        {/* ✅ Skip link for keyboard users */}
        <a
          href="#main-content"
          className="
            sr-only
            focus:not-sr-only
            focus:fixed
            focus:top-4
            focus:left-4
            z-50
            bg-white
            text-black
            px-4
            py-2
            rounded
          "
        >
          Skip to main content
        </a>

        <Header />

        {/* ✅ Main landmark */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* ✅ Toast notifications (global, once) */}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
