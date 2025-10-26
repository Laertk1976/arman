// src/components/AnimatedMessage.jsx
import React from 'react';
import '../App.css'; // или отдельный CSS, если хочешь

export function AnimatedMessage({ text, className, animation }) {
  return (
    <div
      className={`p-4 shadow-md transition-all duration-900 transform 
                  translate-y-0 opacity-100 ${animation} ${className}`}
    >
      <h1 className="text-4xl text-center text-red-700 font-bold m-4">
        {text}
      </h1>
    </div>
  );
}
