'use client';

import { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';

// Global registry (shared across all instances)
const backgroundPlayers: Player[] = [];

function registerBackgroundPlayer(player: Player) {
  backgroundPlayers.push(player);
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

  useEffect(() => {
    if (!bgRef.current) return;

    const bgPlayer = new Player(bgRef.current);

    bgPlayer.play().catch(() => {});
    bgPlayer.setLoop(true);
    bgPlayer.setMuted(true);

    registerBackgroundPlayer(bgPlayer);
  }, []);

  useEffect(() => {
    if (open && lightboxRef.current) {
      const lightboxPlayer = new Player(lightboxRef.current);

      lightboxPlayer.on('play', () => {
        backgroundPlayers.forEach((p) => {
          p.play().catch(() => {});
        });
      });
    }
  }, [open]);

  const previewSrc = `${videoSrc}?background=1&autoplay=1&loop=1&muted=1`;

  return (
    <>
      {/* Card */}
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <div className="aspect-video w-full">
          <iframe
            ref={bgRef}
            src={previewSrc}
            className="w-full h-full rounded-lg border-0 pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Text overlay */}
        <div
          className="
            absolute left-2 
            bg-black/60 px-3 py-3 rounded-md text-white 
            text-base sm:text-lg md:text-xl font-bold
            transition-all duration-500

            /* Mobile: always visible */
            bottom-4 translate-y-0

            /* Desktop hover animation */
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-[80vw] h-[45vw] max-w-5xl">
            <button
              className="absolute -right-12 top-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <iframe
              ref={lightboxRef}
              title="video-player"
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
