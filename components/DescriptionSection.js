import React from 'react';
import Heading from './Heading';
import Subtext from './Subtext';
import DescriptionOneImage from '../public/description_1.png';
import DescriptionTwoImage from '../public/description_2.png';

export default function DescriptionSection() {
  return (
    <div>
      <Heading size="md" className="text-center">
        All-in-One Platform
      </Heading>
      <div className="flex flex-wrap w-full mb-8">
        <div className="flex items-center w-full mt-8 mb-8 lg:mb-0 lg:pr-4 lg:w-1/2">
          <Subtext className="text-lg leading-loose">
            Cadence is the perfect tool for musicians of all levels, from
            amateurs to professionals. Whether you're a singer/songwriter, a
            rock band, a worship team, or any entertainer in-between, you'll
            find the platform's functionality and options will become the most
            exceptional assets in your musical arsenal.
          </Subtext>
        </div>
        <div className="flex items-center justify-center w-full lg:pl-4 lg:w-1/2">
          <img
            src={DescriptionOneImage.src}
            alt="Picture of user profile card and Cadence features"
            className="lg:max-w-lg"
            width="640px"
          />
        </div>
      </div>
      <div className="flex flex-wrap-reverse w-full">
        <div className="flex items-center justify-center w-full mt-8 lg:w-1/2 lg:pr-4 lg:mt-0">
          <img
            src={DescriptionTwoImage.src}
            alt="Picture of songs list and search bar"
            className="lg:max-w-lg"
            width="640px"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-4">
          <Subtext className="mt-8 text-lg leading-loose">
            Go ahead! Use Cadence for rehearsals or live gigs. Manage songs,
            rehearse your setlists, share chord charts and lyrics with your
            team, and more. You can easily start work on your laptop and then
            switch to your phone if inspiration hits while you're on the move.
            With Cadence, you finally have a platform designed specifically for
            you and your unique needs.
          </Subtext>
        </div>
      </div>
    </div>
  );
}
