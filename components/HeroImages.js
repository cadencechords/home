import Image from 'next/image';
import React from 'react';
import iphone_1 from '../public/Frame 1.png';
import iphone_2 from '../public/Frame 2.png';
import MobileIphoneImage from '../public/mobile_hero.png';

export default function HeroImages() {
  return (
    <div className="flex items-end w-full mt-8 mb-8 lg:w-1/2 md:pl-8 md:mb-0 lg:mt-0">
      <div className="flex items-center justify-center w-full lg:hidden lg:w-auto">
        <Image
          src={MobileIphoneImage.src}
          className="sm:max-w-md"
          width={'640px'}
          height={'800px'}
          alt="Picture of Cadence on two phones"
        />
      </div>
      <div
        className="relative hidden min-w-full pt-4 mx-auto overflow-hidden lg:block"
        style={{ maxWidth: '630px' }}
      >
        <div className="relative min-w-full" style={{ aspectRatio: '1/1' }} />
        <img
          src={iphone_2.src}
          className="absolute top-0 right-0 min-w-full rellax"
          data-rellax-speed="-1.6"
          data-disable-parallax-down="md"
          alt="Picture of Cadence usage on iPhone"
        />
        <img
          src={iphone_1.src}
          className="absolute top-0 right-0 min-w-full pt-10 rellax md:mt-8"
          data-rellax-speed="1.6"
          data-disable-parallax-down="md"
          alt="Picture of Cadence usage on iPhone"
        />
      </div>
    </div>
  );
}
