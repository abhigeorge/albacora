'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Props = {
  image: {
    thumbSrc: string;
    width: number;
    height: number;
  };
  onClick: () => void;
  onVisible: () => void;
};

export default function MasonryItem({ image, onClick, onVisible }: Props) {
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
      { rootMargin: '200px' }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`
        mb-4 break-inside-avoid cursor-pointer
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <Image
        src={image.thumbSrc} // ✅ thumbnail only
        alt=""
        width={image.width}
        height={image.height}
        className="w-full h-auto rounded-lg"
        loading="lazy"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
    </div>
  );
}
