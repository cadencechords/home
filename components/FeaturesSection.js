import React, { useState } from 'react';
import Features from './Features';
import FeaturesCarousel from './FeaturesCarousel';
import Heading from './Heading';
import Subtext from './Subtext';

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState('invite');

  return (
    <div id="features">
      <div className="flex flex-wrap md:min-h-screen">
        <div className="relative items-center justify-center hidden pr-8 md:w-5/12 md:flex">
          <FeaturesCarousel selectedFeature={selectedFeature} />
        </div>

        <div className="flex flex-col justify-center w-full md:w-7/12 md:pl-8">
          <div className="mb-12">
            <Heading className="text-left md:leading-tight" size="md">
              App Features
            </Heading>
            <Subtext className="mt-4 text-xl">
              Organize, Collaborate, and Perform with Confidence
            </Subtext>
          </div>
          <div>
            <Features
              selectedFeature={selectedFeature}
              onFeatureChange={setSelectedFeature}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
