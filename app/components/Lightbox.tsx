'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Lightbox({
  images,
  index,
  onClose,
}: {
  images: any[];
  index: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Image
        src={images[index].src}
        alt=""
        width={images[index].width}
        height={images[index].height}
        className="max-h-[90vh] w-auto rounded-lg"
      />
    </div>
  );
}
