'use client';

import { useState } from 'react';
import Lightbox from './Lightbox';
import MasonryItem from './MasonryItem';

type ImageItem = {
  thumbSrc: string;
  fullSrc: string;
  width: number;
  height: number;
};

type Props = {
  images: ImageItem[];
};

const PAGE_SIZE = 20;

export default function MasonryGrid({ images }: Props) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.slice(0, visibleCount).map((img, index) => (
          <MasonryItem
            key={index}
            image={img}
            onClick={() => setLightboxIndex(index)}
            onVisible={() => {
              if (index === visibleCount - 1) {
                setVisibleCount((c) => Math.min(c + PAGE_SIZE, images.length));
              }
            }}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images.map((img) => img.fullSrc)} // ✅ high-res only
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
