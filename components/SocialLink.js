import Image from 'next/image';
import React from 'react';

export default function SocialLink({ image, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-200 rounded-full cursor-pointer focus:bg-gray-300 hover:bg-gray-300"
    >
      <Image src={image} alt="Social link icon" />
    </a>
  );
}
