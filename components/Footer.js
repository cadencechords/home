import Image from 'next/image';
import React from 'react';
import LogoImage from '../public/icon.png';

export default function Footer() {
  return (
    <div className="my-8">
      <div className="flex justify-center">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-16">
            <Image src={LogoImage} alt="Cadence icon" height={128} width={96} />
          </div>
        </div>
      </div>
    </div>
  );
}
