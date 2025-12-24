'use client';

import Breadcrumb from '../components/Breadcrumb';
import ButtonLink from '../components/ButtonLink';
import { FooterTop } from '../components/FooterTop';
import VideoGrid from '../components/VideoGrid';

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
