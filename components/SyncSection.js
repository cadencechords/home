import React from 'react';
import SyncFeatureImage from '../public/sync_blurred.png';
import iphoneImage from '../public/iphone_cadence.png';
import ipadImage from '../public/ipad_cadence.png';
import macbookImage from '../public/macbook_cadence.png';
import Heading from './Heading';
import Subtext from './Subtext';
import Image from 'next/image';

export default function SyncSection() {
  return (
    <div className="relative flex flex-col items-center justify-center md:flex-row md:min-h-screen md:h-96">
      <div className="z-20 mb-8 md:absolute md:top-0 md:right-0 md:mb-0">
        <Heading className="mb-4 text-left md:text-right">Sync</Heading>
        <Subtext className="max-w-xl text-xl text-left md:text-2xl md:leading-relaxed md:text-right">
          Changes you make will automatically reflect across Cadence. You don't
          have to worry about syncing your team's and your devices.
        </Subtext>
      </div>
      <div className="md:hidden">
        <Image
          src={SyncFeatureImage.src}
          width={1537}
          height={1183}
          alt="Picture of iPhone, iPad and Macbook with Cadence logo"
        />
      </div>
      <img
        src={iphoneImage.src}
        width={1000}
        className="absolute top-0 z-10 hidden text-center rellax md:block"
        data-rellax-percentage="0.5"
        data-rellax-speed="-1"
        alt="Picture of iPhone with Cadence logo"
      />
      <img
        src={ipadImage.src}
        width={1000}
        className="absolute top-0 hidden text-center rellax md:block"
        data-rellax-percentage="0.5"
        data-rellax-speed="1.2"
        alt="Picture of iPad with Cadence logo"
      />
      <img
        src={macbookImage.src}
        width={1000}
        className="absolute top-0 hidden text-center rellax md:block"
        data-rellax-percentage="0.5"
        data-rellax-speed="-1"
        alt="Picture of Macbook with Cadence logo"
      />
    </div>
  );
}
