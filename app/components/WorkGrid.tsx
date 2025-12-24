'use client';

import VimeoVideoCard from './VimeoVideoCard';

const videos = [
  {
    videoSrc: 'https://player.vimeo.com/video/1120985526',
    title: 'The Future is U (Commercial)',
    subtitles: [
      'Writer / Director: Sarah Kolb',
      'Gaffer: Michael Valverde',
      'Mofilm / Revalator',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/1120983727',
    title: 'Poppi Soda (Commercial)',
    subtitles: [
      'Director: Francisco Aguila',
      'DP: Isaac Mead-Long',
      'Gaffer: Michael Valverde',
      'Miami Cinema Robot',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/466863848',
    title: 'RIDICULOUS RIDES (TV Show)',
    subtitles: [
      'Director / DP: Michael Valverde',
      'Production Company: Barcroft Media',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/282125140',
    title: 'Lennox NAS (Commercial)',
    subtitles: [
      'Director / DP / Post: Michael Valverde',
      'Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/317098250',
    title: 'Lennox Annual Managers Meeting (Corporate)',
    subtitles: [
      'Director / DP / Post: Michael Valverde',
      'Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/283460827',
    title: 'Lennox Safety (Commercial)',
    subtitles: ['DP: Michael Valverde', 'Albacora Pictures Inc.'],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/1120917111',
    title: 'Who is Stand Smith (Documentary)',
    subtitles: [
      'Director: Danny Lee',
      'Gaffer: Michael Valverde',
      'Monkey Wrench Films / Uninterrupted',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/1120974322',
    title: 'Sukihana “WTFO” (Music Video)',
    subtitles: [
      'Director: Hector Torres',
      'DP / Producer: Michael Valverde',
      'Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/338531371',
    title: 'Albacora Pictures Cinematography Reel',
    subtitles: ['DP: Michael Valverde', 'Albacora Pictures Inc.'],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/832269448',
    title: 'Secrets of Florida (Promo)',
    subtitles: [
      'Producer / Director: Emely Jimenez',
      'DP: Michael Valverde',
      'WashingtonPost / WPcreativegroup / VisitFlorida / Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/411578942',
    title: 'Vera Medical Institute (Commercial)',
    subtitles: [
      'Producer / Director: Tamika Bickham',
      'DP / Post: Michael Valverde',
      'Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/681174172',
    title: 'Red Recover (Commercial)',
    subtitles: [
      'Director / DP: Carlos Cortessi',
      'Gaffer: Michael Valverde',
      'Carlos Cortessi Productions',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/469002845',
    title: 'Miramar PD Body Cam (Training Video)',
    subtitles: ['DP / Post: Michael Valverde', 'Albacora Pictures Inc.'],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/864642643',
    title: 'Hummingbird (Event Recap)',
    subtitles: ['DP / Post: Michael Valverde', 'Albacora Pictures Inc.'],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/242625851',
    title: 'Somos Gala (Event Recap)',
    subtitles: [
      'Producer: Hector Torres',
      'DP / Post: Michael Valverde',
      'Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/274774169',
    title: 'United We All Can (Documentary short)',
    subtitles: [
      'Producer: Kristin Egan',
      'Director / DP / Editor: Michael Valverde',
      'TBN / Albacora Pictures Inc.',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/175904317',
    title: 'Gulfstream Park',
    subtitles: [
      'Director: Manny Fernandez',
      'DP: Michael Valverde',
      'Oranj TV',
    ],
  },
  {
    videoSrc: 'https://player.vimeo.com/video/849618872',
    title: 'Aerial Cinematography Reel',
    subtitles: ['DP: Michael Valverde', 'Albacora Pictures Inc.'],
  },
];

export default function WorkGrid() {
  return (
    <section className="w-full bg-black text-white px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VimeoVideoCard
            key={video.videoSrc}
            videoSrc={video.videoSrc}
            title={video.title}
            subtitles={video.subtitles}
            lightboxSrc={video.videoSrc}
          />
        ))}
      </div>
    </section>
  );
}
