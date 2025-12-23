'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top'; // optional
  rel?: string; // optional
}

export default function ButtonLink({
  href,
  children,
  className,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        'inline-block rounded-full border border-white px-8 py-3 text-lg font-[var(--font-montserrat)] uppercase tracking-wider text-white transition hover:bg-white hover:text-black animate-fadeInUp animation-delay-900 animation-duration-1500',
        className
      )}
    >
      {children}
    </Link>
  );
}
