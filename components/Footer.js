import Image from 'next/image';
import React from 'react';
import LogoImage from '../public/icon.png';
import DownloadOnAppStoreButton from './DownloadOnAppStoreButton';
import DownloadOnGooglePlayButton from './DownloadOnGooglePlay';
import SocialLink from './SocialLink';
import TwitterSvg from '../public/twitter.svg';
import InstagramSvg from '../public/instagram.svg';
import FacebookSvg from '../public/facebook.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full mt-8 mb-32 sm:my-8">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center w-16 mb-10">
            <Image src={LogoImage} alt="Mezzo icon" height={128} width={96} />
          </div>
          <div className="flex flex-col w-full sm:w-auto sm:flex-row">
            <div className="w-full mb-1 sm:mr-2 sm:mb-0">
              <DownloadOnAppStoreButton />
            </div>
            <div className="w-full mt-1 sm:ml-2 sm:mt-0">
              <DownloadOnGooglePlayButton />
            </div>
          </div>
          <div className="flex gap-5 my-8">
            <SocialLink
              image={FacebookSvg}
              url="https://www.facebook.com/mezzochords"
            ></SocialLink>
            <SocialLink
              image={InstagramSvg}
              url="https://www.instagram.com/mezzochords/"
            ></SocialLink>
            <SocialLink
              image={TwitterSvg}
              url="https://twitter.com/MezzoSupport"
            ></SocialLink>
          </div>
          <Link href="/contact">
            <a className="text-gray-600 cursor-pointer hover:underline">
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
