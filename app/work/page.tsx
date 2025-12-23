'use client';

import Breadcrumb from '../components/Breadcrumb';
import ButtonLink from '../components/ButtonLink';
import WorkGrid from '../components/WorkGrid';

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
    </>
  );
}
