'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-700 bg-black">
      <div className="flex justify-center px-6 py-8 text-sm text-gray-400 font-[var(--font-montserrat)]">
        <Link href="/" className="transition hover:text-white text-center">
          © {year} Albacora Pictures Inc.
        </Link>
      </div>
    </footer>
  );
}
