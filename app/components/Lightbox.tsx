'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
};

export default function Lightbox({ images, index, onClose }: Props) {
  const [current, setCurrent] = useState(index);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const startTouch = useRef<{ x: number; y: number } | null>(null);
  const isPanning = useRef(false);

  /* ---------------- Keyboard Controls ---------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [current]);

  /* ---------------- Navigation ---------------- */
  const next = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    setCurrent((c) => (c + 1) % images.length);
  };

  const prev = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  /* ---------------- Swipe Support ---------------- */
  const onTouchStart = (e: React.TouchEvent) => {
    startTouch.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!startTouch.current) return;

    const dx = e.changedTouches[0].clientX - startTouch.current.x;

    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
    }

    startTouch.current = null;
  };

  /* ---------------- Zoom ---------------- */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(4, Math.max(1, s - e.deltaY * 0.002)));
  };

  /* ---------------- Pan ---------------- */
  const onMouseDown = () => {
    if (scale > 1) isPanning.current = true;
  };

  const onMouseUp = () => {
    isPanning.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isPanning.current) return;
    setOffset((o) => ({
      x: o.x + e.movementX,
      y: o.y + e.movementY,
    }));
  };

  /* ---------------- Preload Next Image ---------------- */
  useEffect(() => {
    const nextIndex = (current + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [current, images]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="relative w-full h-full max-w-[95vw] max-h-[95vh] overflow-hidden"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <Image
          src={images[current]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain select-none transition-transform duration-100"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            cursor: scale > 1 ? 'grab' : 'zoom-in',
          }}
          draggable={false}
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 text-white text-4xl"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 text-white text-4xl"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
