import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import { FooterTop } from '../components/FooterTop';
import MasonryGrid from '../components/MasonryGrid';

const images = Array.from({ length: 100 }).map((_, i) => ({
  src: `/bts/${i + 1}.jpg`,
  width: 800,
  height: 600 + (i % 6) * 120,
}));

export const metadata: Metadata = {
  title: 'Behind the Scenes | Albacora Pictures Miami',
  description:
    'Step behind the scenes with Albacora Pictures. Discover our collaborative process, scalable crews, and trusted network of industry professionals delivering high-quality video production.',
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
