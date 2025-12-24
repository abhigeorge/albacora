import type { Metadata } from 'next';
import ButtonLink from './components/ButtonLink';
import { FooterTop } from './components/FooterTop';
import Hero from './components/Hero';
import TestimonialSlider from './components/Testimonials';
import VideoLftGrid from './components/VideoLeftGrid';
import VideoLeftGridSecond from './components/VideoLeftGridSecond';
import VideoRightGrid from './components/VideoRightGrid';

export const metadata: Metadata = {
  title: "Miami's Best Video Production Company | Albacora Pictures Inc.",
  description:
    'Albacora Pictures Inc. delivers award-winning video production in Miami — cinematography, videography, lighting, and post-production for brands, agencies, and filmmakers.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <VideoLftGrid />
      <VideoRightGrid />
      <VideoLeftGridSecond />
      <div className="flex justify-center">
        <ButtonLink href="work" className="mt-30 mb-20">
          CHECK OUT MORE WORK
        </ButtonLink>
      </div>
      <TestimonialSlider />
      <FooterTop />
    </>
  );
}
