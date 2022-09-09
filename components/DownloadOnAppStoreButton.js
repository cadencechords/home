import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AppStoreImage from '../public/appstore.svg';

export default function DownloadOnAppStoreButton() {
  return (
    <Link href="https://apps.apple.com/us/app/cadence-chords/id1608995158">
      <a className="flex items-center justify-center w-full px-4 py-3 bg-black rounded-lg md:py-2 md:w-40">
        <Image src={AppStoreImage} className="w-full" />
      </a>
    </Link>
  );
}
