'use client';

import { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';

// Global registry (shared across all instances)
const backgroundPlayers = new Set<Player>();

function registerBackgroundPlayer(player: Player) {
  backgroundPlayers.add(player);
}

function unregisterBackgroundPlayer(player: Player) {
  backgroundPlayers.delete(player);
}

type VimeoVideoCardProps = {
  videoSrc: string;
  title: string;
  subtitles?: string[];
  lightboxSrc: string;
};

export default function VideoVimeoCard({
  videoSrc,
  title,
  subtitles = [],
  lightboxSrc,
}: VimeoVideoCardProps) {
  const [open, setOpen] = useState(false);
  const bgRef = useRef<HTMLIFrameElement>(null);
  const lightboxRef = useRef<HTMLIFrameElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  /* ------------------------------
   * Background preview player
   * ------------------------------ */
  useEffect(() => {
    if (!bgRef.current) return;

    const bgPlayer = new Player(bgRef.current);

    bgPlayer.setMuted(true);
    bgPlayer.setLoop(true);

    // Safe autoplay (Safari-friendly)
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => bgPlayer.play().catch(() => {}));
    } else {
      setTimeout(() => bgPlayer.play().catch(() => {}), 0);
    }

    registerBackgroundPlayer(bgPlayer);

    return () => {
      unregisterBackgroundPlayer(bgPlayer);
      bgPlayer.destroy().catch(() => {});
    };
  }, []);

  /* ------------------------------
   * Lightbox behavior
   * ------------------------------ */
  useEffect(() => {
    if (!open || !lightboxRef.current) return;

    // Pause background previews when modal opens
    backgroundPlayers.forEach((p) => p.pause().catch(() => {}));

    const lightboxPlayer = new Player(lightboxRef.current);

    // Resume previews after lightbox play starts
    lightboxPlayer.on('play', () => {
      backgroundPlayers.forEach((p) => p.play().catch(() => {}));
    });

    // Focus management
    closeButtonRef.current?.focus();

    // ESC to close
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  /* Restore focus when modal closes */
  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
    }
  }, [open]);

  const previewSrc = `${videoSrc}?background=1&autoplay=1&loop=1&muted=1`;

  return (
    <>
      {/* Card */}
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-label={`Open video: ${title}`}
        className="
          relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group
          focus:outline-none focus:ring-2 focus:ring-white
          opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]
        "
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <div className="aspect-video w-full">
          <iframe
            ref={bgRef}
            src={previewSrc}
            title="" /* decorative */
            aria-hidden="true"
            tabIndex={-1}
            className="w-full h-full rounded-lg border-0 pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Text overlay */}
        <div
          className="
            absolute left-2 
            bg-black/60 px-3 py-3 rounded-md text-white 
            text-base sm:text-lg md:text-xl font-bold
            transition-all duration-500
            bottom-4 translate-y-0
            md:bottom-[-130px] md:group-hover:bottom-[20%] md:group-hover:translate-y-1/2
          "
        >
          <div>{title}</div>

          {subtitles.map((text, index) => (
            <div
              key={index}
              className="text-xs sm:text-sm md:text-base font-normal"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video player for ${title}`}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-[80vw] h-[45vw] max-w-5xl">
            <button
              ref={closeButtonRef}
              aria-label="Close video"
              className="
                absolute -right-12 top-4
                bg-white text-black rounded-full
                w-10 h-10 flex items-center justify-center
                text-2xl font-bold
                focus:outline-none focus:ring-2 focus:ring-black
              "
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <iframe
              ref={lightboxRef}
              title={`Full video: ${title}`}
              src={lightboxSrc}
              className="w-full h-full rounded-lg border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
