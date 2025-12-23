'use client';

import { useState } from 'react';

interface VideoVimeoCardProps {
  /** Vimeo embed URL for preview (e.g. https://player.vimeo.com/video/123456789) */
  videoSrc: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
  /** Vimeo embed URL for lightbox (usually same as videoSrc) */
  lightboxSrc: string;
}

export default function VideoVimeoCard({
  videoSrc,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  lightboxSrc,
}: VideoVimeoCardProps) {
  const [open, setOpen] = useState(false);

  // Preview video always runs in background mode
  const previewSrc = `${videoSrc}?background=1&autoplay=1&loop=1&muted=1`;

  // Lightbox video should NOT autoplay
  const lightboxSrcClean = lightboxSrc; // no autoplay param

  return (
    <>
      {/* Card */}
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        {/* Responsive Vimeo iframe preview */}
        <div className="aspect-video w-full">
          <iframe
            src={previewSrc}
            className="w-full h-full rounded-lg border-0 pointer-events-none"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Text overlay */}
        <div className="absolute left-2 bottom-[-100px] bg-black/60 px-3 py-2 rounded-md text-white text-lg font-bold transition-all duration-500 group-hover:bottom-[20%] group-hover:translate-y-1/2">
          {title}
          {subtitle && <div className="text-sm font-normal">{subtitle}</div>}
          {subtitle2 && <div className="text-sm font-normal">{subtitle2}</div>}
          {subtitle3 && <div className="text-sm font-normal">{subtitle3}</div>}
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
              title="video-player"
              src={lightboxSrcClean}
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
