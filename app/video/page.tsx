import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import ButtonLink from '../components/ButtonLink';
import { FooterTop } from '../components/FooterTop';
import VideoGrid from '../components/VideoGrid';

export const metadata: Metadata = {
  title: 'Video Production Services | Miami Cinematography & Post-Production',
  description:
    'Albacora Pictures offers full-service video production in Miami — cinematography, lighting design, grip, sound, and post-production. A one-stop shop for standout visual content.',
};

export default function VideoPage() {
  return (
    <>
      <Breadcrumb title="Video" className="bg-black" />
      <VideoGrid />
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
