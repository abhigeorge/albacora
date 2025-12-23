'use client';

import VideoCard from './VideoCard';

export default function VideoGrid() {
  const videos = [
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b04eeb122cbf1762afe67/main.m3u8',
      title: 'The Future is U (Commercial)',
      subtitle: 'Writer / Director: Sarah Kolb',
      subtitle2: 'Gaffer: Michael Valverde',
      subtitle3: 'Mofilm / Revalator ',
      lightboxSrc: 'https://player.vimeo.com/video/1120985526',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b05cbf1ad267a06363c38/main.m3u8',
      title: 'Poppi Soda (Commercial)',
      subtitle: 'Director: Francisco Aguila',
      subtitle2: 'DP: Isaac Mead-Long',
      subtitle3: 'Gaffer: Michael Valverde',
      subtitle4: 'Miami Cinema Robot',
      lightboxSrc: 'https://player.vimeo.com/video/1120983727',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b06a7b122cbf1762b185b/main.m3u8',
      title: 'RIDICULOUS RIDES (TV Show)',
      subtitle: 'Director / DP: Michael Valverde',
      subtitle2: 'Production Company: Barcroft Media',
      lightboxSrc: 'https://player.vimeo.com/video/466863848',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0713f1ad267a06364c73/main.m3u8',
      title: 'Lennox NAS (Commercial)',
      subtitle: 'Director / DP/ Post: Michael Valverde',
      subtitle2: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/282125140',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b081db122cbf1762b2a21/main.m3u8',
      title: 'Lennox Annual Managers Meeting (Corporate)',
      subtitle: 'Director / DP/ Post: Michael Valverde',
      subtitle2: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/317098250',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0925e086c47a82114c27/main.m3u8',
      title: 'Lennox Safety (Commercial)',
      subtitle: 'Director / DP/ Post: Michael Valverde',
      subtitle2: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/283460827',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a579e0b4a2d61776dc/main.m3u8',
      title: 'Who is Stand Smith (Documentary)',
      subtitle: 'Director: Danny Lee',
      subtitle2: 'Gaffer: Michael Valverde',
      subtitle3: 'Monkey Wrench Films / Uninterrupted',
      lightboxSrc: 'https://player.vimeo.com/video/1120917111',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a5d2ec90ad6420c3a5/main.m3u8',
      title: 'Sukihana “WTFO” (Music Video)',
      subtitle: 'Director: Hector Torres',
      subtitle2: 'DP / Producer: Michael Valverde',
      subtitle3: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/1120974322',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694736c379e0b4a2d6176a09/main.m3u8',
      title: 'Albacora Pictures Cinematography Reel',
      subtitle: 'DP: Michael Valverde',
      subtitle2: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/338531371',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694738a5d2ec90ad6420c397/main.m3u8',
      title: 'Secrets of Florida (Promo)',
      subtitle: 'Producer/Director: Emely Jimenez',
      subtitle2: 'DP: Michael Valverde',
      subtitle3:
        'WashingtonPost / WPcreativegroup / VisitFlorida / Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/832269448',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0c40e086c47a8211949c/main.m3u8',
      title: 'Vera Medical Institute (Commercial)',
      subtitle: 'Producer / Director: Tamika Bickham',
      subtitle2: 'DP / Post: Michael Valverde',
      subtitle3: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/411578942',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0cc5b122cbf1762b8ec9/main.m3u8',
      title: 'Red Recover Commercial',
      subtitle: 'Director / DP: Carlos Cortessi',
      subtitle2: 'Gaffer: Michael Valverde',
      subtitle3: 'Carlos Cortessi Productions',
      lightboxSrc: 'https://player.vimeo.com/video/681174172',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0d44e086c47a8211b06e/main.m3u8',
      title: 'Miramar PD Body Cam (Training Video)',
      subtitle: 'DP / Post: Michael Valverde',
      subtitle2: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/469002845',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0df6f1ad267a0636db2a/main.m3u8',
      title: 'Hummingbird (Event Recap)',
      subtitle: 'DP / Post: Michael Valverde',
      subtitle2: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/864642643',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0e66f1ad267a0636e028/main.m3u8',
      title: 'Somos Gala (Event Recap)',
      subtitle: 'Producer: Hector Torres',
      subtitle2: 'DP / Post: Michael Valverde',
      subtitle3: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/242625851',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0ecce086c47a8211ca4b/main.m3u8',
      title: 'Somos Loud (PSA)',
      subtitle: 'Producer: Hector Torres',
      subtitle2: 'DP / Post: Michael Valverde',
      subtitle3: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/242626891',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b0f35e086c47a8211d00e/main.m3u8',
      title: 'Gulfstream Park',
      subtitle: 'Director: Manny Fernandez',
      subtitle2: 'DP: Michael Valverde',
      subtitle3: 'Oranj TV',
      lightboxSrc: 'https://player.vimeo.com/video/175904317',
    },
    {
      videoSrc:
        'https://video.gumlet.io/694735072c5f6fb9f9cd26d2/694b1021f1ad267a0636f5af/main.m3u8',
      title: 'Aerial Cinematography Reel',
      subtitle: 'Director: Manny Fernandez',
      subtitle2: 'DP: Michael Valverde',
      subtitle3: 'Albacora Pictures Inc.',
      lightboxSrc: 'https://player.vimeo.com/video/849618872',
    },
  ];

  return (
    <section className="bg-black py-16 px-6 lg:px-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {videos.map((video, idx) => (
          <VideoCard key={idx} {...video} />
        ))}
      </div>
    </section>
  );
}
