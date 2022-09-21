import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import GooglePlayImage from '../public/googleplay.svg';

export default function DownloadOnGooglePlayButton() {
  return (
    <Link href="https://play.google.com/store/apps/details?id=com.cadencechords">
      <a className="flex items-center justify-center w-full h-full px-4 py-3 bg-black rounded-lg md:py-2 md:w-40">
        <Image src={GooglePlayImage} className="w-full" />
      </a>
    </Link>
  );
}
