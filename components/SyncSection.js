import React from 'react';
import SyncFeatureImage from '../public/sync_blurred.png';
import iphoneImage from '../public/iphone_cadence.png';
import ipadImage from '../public/ipad_cadence.png';
import macbookImage from '../public/macbook_cadence.png';
import Heading from './Heading';
import Subtext from './Subtext';

export default function SyncSection() {
  return (
    <div className="flex items-center justify-center relative md:h-screen h-96">
      <div className="absolute z-20 top-0 right-0">
        <Heading className="text-right mb-4">Sync</Heading>
        <Subtext className="text-2xl text-black max-w-xl leading-relaxed text-right">
          Changes you make automatically reflect across Cadence. You don't have
          to worry about syncing your team's and your devices.
        </Subtext>
      </div>
      <img
        src={SyncFeatureImage.src}
        width={1000}
        className="text-center absolute top-1/2 -translate-y-1/2 md:hidden"
        data-rellax-percentage="0.5"
        data-rellax-speed="-2"
      />
      <img
        src={iphoneImage.src}
        width={1000}
        className="text-center rellax absolute top-0 hidden md:block"
        data-rellax-percentage="0.5"
        data-rellax-speed="-2"
      />
      <img
        src={ipadImage.src}
        width={1000}
        className="text-center rellax absolute top-0 hidden md:block"
        data-rellax-percentage="0.5"
        data-rellax-speed="1.2"
      />
      <img
        src={macbookImage.src}
        width={1000}
        className="text-center rellax absolute top-0 hidden md:block"
        data-rellax-percentage="0.5"
        data-rellax-speed="-1"
      />
    </div>
  );
}
