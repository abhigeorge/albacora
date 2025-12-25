import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import { FooterTop } from '../components/FooterTop';
import MasonryGrid from '../components/MasonryGrid';

const images = Array.from({ length: 100 }).map((_, i) => ({
  thumbSrc: `/bts/thumbnails/${i + 1}.jpg`, // 👈 thumbnail
  fullSrc: `/bts/${i + 1}.jpg`, // 👈 high-res
  width: 400, // thumbnail size
  height: 300 + (i % 6) * 60,
}));

export const metadata: Metadata = {
  title: 'Behind the Scenes | Albacora Pictures Miami',
  description:
    'Step behind the scenes with Albacora Pictures. Discover our collaborative process.',
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb title="BTS" className="bg-black" />
      <main className="px-4 py-20 mb-20">
        <MasonryGrid images={images} />
      </main>
      <FooterTop />
    </>
  );
}
