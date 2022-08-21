import React from 'react';
import SessionsFeatureImage from '../public/sessions_feature.png';
import { motion } from 'framer-motion';

export default function SessionsFeature({ direction }) {
  const { initial, exit } =
    direction === 'go'
      ? { initial: 100, exit: -100 }
      : { initial: -100, exit: 100 };

  return (
    <motion.img
      initial={{ x: initial, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: exit, opacity: 0 }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      src={SessionsFeatureImage.src}
      width={350}
      className="absolute"
    />
  );
}
