'use client';

import VideoCard from './VideoCard';

export default function FeaturedVideoGrid() {
  return (
    <section className="bg-black py-2 lg:px-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left column: big video (70%) */}
        <div className="lg:basis-[67%]">
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a5d2ec90ad6420c3a5/main.m3u8"
            title="Sukihana “WTFO” (Music Video)"
            subtitle="Director: Hector Torres"
            subtitle2="DP / Producer: Michael Valverde"
            subtitle3="Albacora Pictures Inc."
            lightboxSrc="https://player.vimeo.com/video/1120974322"
          />
        </div>

        {/* Right column: stacked videos (30%) */}
        <div className="lg:basis-[33%] flex flex-col gap-4">
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694736c379e0b4a2d6176a09/main.m3u8"
            title="Albacora Pictures Cinematography Reel"
            subtitle="DP: Michael Valverde"
            subtitle2="Albacora Pictures Inc."
            lightboxSrc="https://player.vimeo.com/video/338531371"
          />
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a5d2ec90ad6420c397/main.m3u8"
            title="Secrets of Florida (Promo)"
            subtitle="Producer/Director: Emely Jimenez"
            subtitle2="DP: Michael Valverde"
            subtitle3="WashingtonPost / WPcreativegroup / VisitFlorida / Albacora Pictures Inc."
            lightboxSrc="https://player.vimeo.com/video/832269448"
          />
        </div>
      </div>
    </section>
  );
}
