'use client';

import { useState } from 'react';

interface VideoCardProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  subtitle3?: string;
  lightboxSrc: string;
}

export default function VideoCard({
  videoSrc,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  lightboxSrc,
}: VideoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="
    relative w-full
    aspect-video
    overflow-hidden rounded-xl shadow-lg
    cursor-pointer group
  "
        onClick={() => setOpen(true)}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text overlay */}
        <div
          className="
      absolute left-2
      bg-black/60 px-3 py-2 rounded-md
      text-white text-lg font-bold
      transition-all duration-500

      bottom-4
      md:bottom-[-110px]
      md:group-hover:bottom-[20%]
      md:group-hover:translate-y-1/2
    "
        >
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
          <div className="relative w-[50vw] h-[45vw]">
            <button
              className="absolute -right-20 top-16 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <iframe
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
