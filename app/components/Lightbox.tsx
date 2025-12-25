'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
};

export default function Lightbox({ images, index, onClose }: Props) {
  const [current, setCurrent] = useState(index);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const lastTap = useRef(0);
  const pinchDistance = useRef<number | null>(null);

  /* ---------------- Navigation ---------------- */
  const next = () => reset(() => setCurrent((c) => (c + 1) % images.length));

  const prev = () =>
    reset(() => setCurrent((c) => (c - 1 + images.length) % images.length));

  const reset = (cb?: () => void) => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    cb?.();
  };

  /* ---------------- Keyboard ---------------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /* ---------------- Preload Next ---------------- */
  useEffect(() => {
    const img = new window.Image();
    img.src = images[(current + 1) % images.length];
  }, [current, images]);

  /* ---------------- Zoom (Wheel) ---------------- */
  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.min(4, Math.max(1, s - e.deltaY * 0.002)));
  };

  /* ---------------- Double Tap ---------------- */
  const onTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      setScale((s) => (s === 1 ? 2 : 1));
      setOffset({ x: 0, y: 0 });
    }
    lastTap.current = now;
  };

  /* ---------------- Pinch Zoom ---------------- */
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (!pinchDistance.current) {
        pinchDistance.current = distance;
        return;
      }

      const delta = distance - pinchDistance.current;
      setScale((s) => Math.min(4, Math.max(1, s + delta * 0.005)));
      pinchDistance.current = distance;
    }
  };

  const onTouchEnd = () => {
    pinchDistance.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex flex-col"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center p-4 text-white text-sm">
          <span>
            {current + 1} / {images.length}
          </span>
          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        {/* Image */}
        <div
          className="relative flex-1 overflow-hidden"
          onWheel={onWheel}
          onClick={onTap}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale, x: offset.x, y: offset.y }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <Image
              src={images[current]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-contain select-none"
              draggable={false}
            />
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 text-white text-4xl"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 text-white text-4xl"
          >
            ›
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto p-4 bg-black/80">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => reset(() => setCurrent(i))}
              className={`relative h-16 w-24 flex-shrink-0 rounded overflow-hidden
                ${i === current ? 'ring-2 ring-white' : 'opacity-70'}
              `}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
