'use client';

import VideoCard from './VideoCard';

export default function VideoRightGrid() {
  return (
    <section className="bg-black py-2 lg:px-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left column: stacked videos (33%) */}
        <div className="lg:basis-[33%] flex flex-col gap-4">
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a579e0b4a2d61776da/main.m3u8"
            title="The world-famous TALKING HEADS REEL!"
            subtitle="DP: Michael Valverde"
            subtitle2="Albacora Pictures Inc."
            lightboxSrc="https://player.vimeo.com/video/323297353"
          />
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a52c5f6fb9f9cd3f32/main.m3u8"
            title="NFLPA 2022 Collegiate Bowl (Promo)"
            subtitle="Director / Executive Producer - Cameron Gordon"
            subtitle2="DP: Michael Valverde"
            subtitle3="Albacora Pictures Inc."
            lightboxSrc="https://player.vimeo.com/video/681176422"
          />
        </div>

        {/* Right column: big feature video (67%) */}
        <div className="lg:basis-[67%]">
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a579e0b4a2d61776dc/main.m3u8"
            title="Who is Stand Smith (Documentary)"
            subtitle="Director: Danny Lee"
            subtitle2="Gaffer: Michael Valverde"
            subtitle3="Monkey Wrench Films / Uninterrupted"
            lightboxSrc="https://player.vimeo.com/video/1120917111"
          />
        </div>
      </div>
    </section>
  );
}
