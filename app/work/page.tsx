import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import ButtonLink from '../components/ButtonLink';
import { FooterTop } from '../components/FooterTop';
import WorkGrid from '../components/WorkGrid';

export const metadata: Metadata = {
  title: 'Our Work | Commercial & Corporate Video Production in Miami',
  description:
    'Explore Albacora Pictures’ portfolio of commercial shoots, corporate videos, documentaries, and travel series. Professional video production with strong storytelling and technical precision.',
};

export default function WorkPage() {
  return (
    <>
      <Breadcrumb title="Work" className="bg-black" />
      <WorkGrid />
      <div className="flex justify-center">
        <ButtonLink
          href="https://vimeo.com/albacorapictures"
          target="_blank"
          rel="noopener"
          className="text-center mb-10"
        >
          MORE WORK
        </ButtonLink>
      </div>
      <FooterTop />
    </>
  );
}
