import ButtonLink from './components/ButtonLink';
import { FooterTop } from './components/FooterTop';
import Hero from './components/Hero';
import TestimonialSlider from './components/Testimonials';
import VideoLftGrid from './components/VideoLeftGrid';
import VideoLeftGridSecond from './components/VideoLeftGridSecond';
import VideoRightGrid from './components/VideoRightGrid';

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
