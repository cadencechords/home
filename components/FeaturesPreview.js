import React from 'react';
import feature1 from '../public/iphone_feature_1.png';

export default function FeaturesPreview() {
  return (
    <div className="flex flex-wrap">
      <div className="w-5/12 relative flex justify-center">
        <img
          src={feature1.src}
          className="px-12 z-40 rellax h-5/6"
          data-rellax-speed="1.2"
          data-disable-parallax-down="md"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div
            className="h-4/6 rounded-3xl bg-blue-50 w-full z-10 rellax"
            data-rellax-speed="2"
            data-disable-parallax-down="md"
          />
        </div>
      </div>
      <div className="w-7/12"></div>
    </div>
  );
}
