import React from 'react';

export default function Label({ label, children, className, ...props }) {
  return (
    <label {...props} className={`flex flex-col ${className || ''}`}>
      <span className="mb-1 font-medium text-gray-600">{label}</span>
      {children}
    </label>
  );
}
