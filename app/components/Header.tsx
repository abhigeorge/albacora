'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/video', label: 'Video' },
  { href: '/bts', label: 'BTS' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Close on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="flex h-20 items-center justify-between px-6 lg:px-10 pt-14">
        <Link href="/" className="flex items-center gap-2 mt-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            priority
            className="w-24 md:w-36 h-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-[var(--font-montserrat)] font-medium tracking-wider uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  transition
                  ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* CONTACT BUTTON (SVG UNCHANGED, ANIMATED) */}
          <Link
            href="/contact"
            className="
              ml-4 inline-flex items-center gap-2 rounded-sm
              border border-white px-5 py-2
              text-sm font-[var(--font-montserrat)] font-medium
              uppercase tracking-wider text-white
              transition hover:bg-white hover:text-black
              group
            "
          >
            <svg
              className="
                w-5 h-5
                transition-transform duration-300
                group-hover:translate-x-1 group-hover:scale-110
              "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                clipRule="evenodd"
              />
            </svg>
            Let&apos;s Create
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl font-[var(--font-montserrat)]"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/80 backdrop-blur-md
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="text-lg font-[var(--font-montserrat)] uppercase">
            Menu
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col items-center gap-8 mt-20 text-xl font-[var(--font-montserrat)] uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'text-white' : 'text-white/70'}
              >
                {link.label}
              </Link>
            );
          })}

          {/* MOBILE CONTACT BUTTON (SVG UNCHANGED + ANIMATED) */}
          <Link
            href="/contact"
            className="
              mt-6 inline-flex items-center gap-2
              border border-white px-6 py-3
              text-base font-medium uppercase tracking-wider
              transition hover:bg-white hover:text-black
              group
            "
          >
            <svg
              className="
                w-5 h-5
                transition-transform duration-300
                group-hover:translate-x-1 group-hover:scale-110
              "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z"
                clipRule="evenodd"
              />
            </svg>
            Let&apos;s Create
          </Link>
        </nav>
      </div>
    </header>
  );
}
