import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureButton({ onClick, selected, children }) {
  return (
    <motion.li className="cursor-pointer relative" onClick={onClick} animate>
      {selected && (
        <motion.div
          className="w-full absolute top-0 left-0 bottom-0 right-0 border rounded-md"
          layoutId="border"
          style={{ zIndex: -1 }}
        />
      )}
      <div className="px-3 py-1.5 tracking-wide font-medium text-blue-700 text-sm">
        {children}
      </div>
    </motion.li>
  );
}
