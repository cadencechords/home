import React from 'react';
import iphone_1 from '../public/Frame 1.png';
import iphone_2 from '../public/Frame 2.png';

export default function HeroImages() {
  return (
    <div className="flex items-end w-full md:w-7/12 md:pl-8 mb-8 md:mb-0">
      <div
        className="relative pt-4 mx-auto min-w-full overflow-hidden"
        style={{ maxWidth: '630px' }}
      >
        <div className="min-w-full relative" style={{ aspectRatio: '1/1' }} />

        <img
          src={iphone_2.src}
          className="absolute top-0 right-0 rellax min-w-full"
          data-rellax-speed="-1"
          data-disable-parallax-down="md"
        />
        <img
          src={iphone_1.src}
          className="absolute top-0 right-0 rellax min-w-full pt-10 md:pt-0 md:mt-8"
          data-rellax-speed="0.6"
          data-disable-parallax-down="md"
        />
      </div>
    </div>
  );
}
