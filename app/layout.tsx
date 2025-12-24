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
    default: "Miami's Best Video Production Company | Albacora Pictures Inc.",
    template: '%s | Albacora Pictures Inc.',
  },
  description:
    "Albacora Pictures Inc. is Miami's leading video production company specializing in cinematography, videography, lighting design, and post-production. Founded by award-winning cinematographer Michael Valverde, we deliver high-end commercial shoots, corporate videos, documentaries, and travel series with technical precision and storytelling excellence.",
  keywords: [
    'Miami video production company',
    'cinematography Miami',
    'videography services Miami',
    'corporate video production',
    'commercial video production',
    'documentary production Miami',
    'lighting design',
    'post-production Miami',
    'film production Miami',
    'Albacora Pictures',
  ],
  authors: [{ name: 'Albacora Pictures Inc.' }],
  openGraph: {
    title: "Miami's Best Video Production Company | Albacora Pictures Inc.",
    description:
      'Professional video production in Miami — cinematography, videography, lighting, and post-production by award-winning cinematographer Michael Valverde.',
    url: 'https://www.albacorapictures.com',
    siteName: 'Albacora Pictures Inc.',
    type: 'website',
    images: [
      {
        url: 'https://www.albacorapictures.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Albacora Pictures Video Production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Miami's Best Video Production Company | Albacora Pictures Inc.",
    description:
      'High-quality video production services in Miami — commercial, corporate, documentary, and travel series.',
    images: ['https://www.albacorapictures.com/twitter-image.jpg'],
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
