import Image from 'next/image';
import React from 'react';
import LogoImage from '../public/icon.png';
import DownloadOnAppStoreButton from './DownloadOnAppStoreButton';

export default function Footer() {
  return (
    <div className="w-full my-8">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center w-16 mb-4">
            <Image src={LogoImage} alt="Cadence icon" height={128} width={96} />
          </div>
          <DownloadOnAppStoreButton />
        </div>
      </div>
    </div>
  );
}
