import React, { useState } from 'react';
import CalendarFeature from './CalendarFeature';
import Heading from './Heading';
import SessionsFeature from './SessionsFeature';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import FeatureButton from './FeatureButton';

export default function TeamFeaturesPreview() {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [direction, setDirection] = useState('go');
  function handleFeatureChange(newIndex) {
    if (newIndex > featureIndex) {
      setDirection('go');
    } else {
      setDirection('return');
    }

    setFeatureIndex(newIndex);
  }
  return (
    <div className="flex flex-wrap" style={{ height: '70vh' }}>
      <AnimatePresence>
        <div className="w-5/12 relative flex justify-center align-center pr-8">
          {featureIndex === 0 && <CalendarFeature direction={direction} />}
          {featureIndex === 1 && <SessionsFeature direction={direction} />}
        </div>
      </AnimatePresence>
      <div className="w-7/12 pl-8">
        <Heading size="md" className="mb-3">
          Keep Your Team on the Same Page
        </Heading>
        <AnimateSharedLayout>
          <div className="flex justify-start items-center mb-4">
            <ol className="flex items-center justify-center">
              <FeatureButton
                selected={featureIndex === 0}
                onClick={() => handleFeatureChange(0)}
              >
                Calendar
              </FeatureButton>
              <FeatureButton
                selected={featureIndex === 1}
                onClick={() => handleFeatureChange(1)}
              >
                Sessions
              </FeatureButton>
            </ol>
          </div>
        </AnimateSharedLayout>

        <div className="text-lg leading-relaxed">
          {descriptions[featureIndex]}
        </div>
      </div>
    </div>
  );
}

const descriptions = [
  'Schedule events like rehearsals and gigs on the team calendar.gAutomatically send out notifications to your team when the event is coming up. Bandmates can configure whether they want to receive notifications through email, text or push.',
];
