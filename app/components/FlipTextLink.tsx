'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FlipTextLinkProps {
  href: string;
  text: string;
  className?: string;
  duration?: number;
  stagger?: number;
  showIcon?: boolean;
  newTab?: boolean; // 👈 ADD THIS
}

const DEFAULT_DURATION = 0.25;
const DEFAULT_STAGGER = 0.025;

export function FlipTextLink({
  href,
  text,
  className = '',
  duration = DEFAULT_DURATION,
  stagger = DEFAULT_STAGGER,
  showIcon = true,
  newTab = false, // 👈 DEFAULT
}: FlipTextLinkProps) {
  // 👇 External link props (only applied when newTab === true)
  const linkProps = newTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      className={`relative block overflow-hidden whitespace-nowrap font-black uppercase ${className}`}
      style={{ lineHeight: 0.75 }}
    >
      <Link
        href={href}
        {...linkProps}
        className="inline-flex items-center gap-6"
      >
        {/* TEXT */}
        <span className="relative block overflow-hidden">
          {/* Top */}
          <span className="block">
            {text.split('').map((char, i) => (
              <motion.span
                key={`top-${i}`}
                className="inline-block"
                variants={{
                  initial: { y: 0 },
                  hovered: { y: '-100%' },
                }}
                transition={{
                  duration,
                  ease: 'easeInOut',
                  delay: stagger * i,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* Bottom */}
          <span className="absolute inset-0 block">
            {text.split('').map((char, i) => (
              <motion.span
                key={`bottom-${i}`}
                className="inline-block"
                variants={{
                  initial: { y: '100%' },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration,
                  ease: 'easeInOut',
                  delay: stagger * i,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </span>

        {/* ICON */}
        {showIcon && (
          <span className="relative block overflow-hidden">
            <motion.span
              className="block"
              variants={{
                initial: { y: 0 },
                hovered: { y: '-100%' },
              }}
              transition={{ duration, ease: 'easeInOut' }}
            >
              <ArrowIcon className="text-[0.6em]" />
            </motion.span>

            <motion.span
              className="absolute inset-0 block"
              variants={{
                initial: { y: '100%' },
                hovered: { y: 0 },
              }}
              transition={{ duration, ease: 'easeInOut' }}
            >
              <ArrowIcon className="text-[0.6em]" />
            </motion.span>
          </span>
        )}
      </Link>
    </motion.div>
  );
}

/* Arrow icon */
function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      fill="currentColor"
      viewBox="0 0 16 16"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
      />
    </svg>
  );
}
