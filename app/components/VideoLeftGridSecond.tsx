'use client';

import VideoCard from './VideoCard';

export default function VideoLeftGridSecond() {
  return (
    <section className="bg-black py-2 lg:px-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left column: big video (70%) */}
        <div className="lg:basis-[67%]">
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a52c5f6fb9f9cd3f34/main.m3u8"
            title="Aerial Cinematography Reel"
            subtitle="DP: Michael Valverde"
            subtitle2="Albacora Pictures Inc."
            lightboxSrc="https://player.vimeo.com/video/849618872"
          />
        </div>

        {/* Right column: stacked videos (30%) */}
        <div className="lg:basis-[33%] flex flex-col gap-4">
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a579e0b4a2d61776d7/main.m3u8"
            title="TCB Homelessness (Documentary)"
            subtitle="DP/Post Production: Michael Valverde"
            subtitle2="TBN FILMS / Albacora Pictures Inc"
            lightboxSrc="https://player.vimeo.com/video/830725422"
          />
          <VideoCard
            videoSrc="https://video.gumlet.io/694735072c5f6fb9f9cd26d2/69473f3ed2ec90ad6420ffb1/main.m3u8"
            title="SPITFIRE AUDIO - Scoring 'THE QUEEN'S GAMBIT - Tutorial"
            subtitle="Director / DP: Alexandra Vivas"
            subtitle2="Gaffer / 2nd Camera: Michael Valverde"
            subtitle3="Spitfire Audio"
            lightboxSrc="https://player.vimeo.com/video/832034598"
          />
        </div>
      </div>
    </section>
  );
}
