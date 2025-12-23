'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-700 bg-black">
      <div
        className="flex flex-col gap-6 px-6 py-8 text-sm text-gray-400 
                      md:flex-row md:items-center md:justify-between lg:px-10 
                      font-[var(--font-montserrat)] text-center md:text-left"
      >
        {/* Left */}
        <Link href="/" className="transition hover:text-white">
          Creativity with Purpose
        </Link>

        {/* Center */}
        <div className="flex justify-center md:justify-start items-center gap-4 md:gap-6">
          <Link href="/terms" className="transition hover:text-white">
            Terms of Service
          </Link>

          <span className="hidden md:inline text-gray-600">|</span>

          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
        </div>

        {/* Right */}
        <Link
          href="/"
          className="block text-center md:text-right transition hover:text-white"
        >
          © {year} Albacora Pictures Inc.
        </Link>
      </div>
    </footer>
  );
}
