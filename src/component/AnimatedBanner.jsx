// src/components/AnimatedBanner.jsx
import React from 'react';
import '../App.css';

export function AnimatedBanner({ text, animation }) {
  return (
    <div
      className={`w-full xl:h-25 sm:h-45 bg-blue-300 shadow-md 
                  transition-all duration-900 transform translate-y-0 
                  opacity-100 ${animation}`}
    >
      <h3 className="text-6xl text-center">{text}</h3>
    </div>
  );
}
