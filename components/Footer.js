import Image from 'next/image';
import React from 'react';
import LogoImage from '../public/icon.png';
import DownloadOnAppStoreButton from './DownloadOnAppStoreButton';
import DownloadOnGooglePlayButton from './DownloadOnGooglePlay';

export default function Footer() {
  return (
    <div className="w-full mt-8 mb-32 sm:my-8">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center w-16 mb-10">
            <Image src={LogoImage} alt="Cadence icon" height={128} width={96} />
          </div>
          <div className="flex flex-col w-full sm:w-auto sm:flex-row">
            <div className="w-full mb-1 sm:mr-2 sm:mb-0">
              <DownloadOnAppStoreButton />
            </div>
            <div className="w-full mt-1 sm:ml-2 sm:mt-0">
              <DownloadOnGooglePlayButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
