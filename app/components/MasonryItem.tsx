'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function MasonryItem({
  image,
  onClick,
  onVisible,
}: {
  image: { src: string; width: number; height: number };
  onClick: () => void;
  onVisible: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onVisible();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // preload early
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={ref}
      className={`
        mb-4 break-inside-avoid cursor-pointer
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        className="w-full h-auto rounded-lg"
        loading="lazy"
      />
    </div>
  );
}
