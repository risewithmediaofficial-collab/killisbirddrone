// src/components/CornerBrackets.jsx
import React from 'react';

/**
 * Reusable aerospace-themed corner brackets (L-brackets)
 * inspired by the Skyroot viewfinder design, with optional interactive hover translation.
 */
const CornerBrackets = ({ color = 'currentColor', size = '10px', thickness = '1.5px', hoverShift = true }) => {
  const transitionStyle = 'transition-all duration-300 ease-out';
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-20">
      {/* Top Left */}
      <div 
        className={`absolute top-0 left-0 ${transitionStyle} ${hoverShift ? 'group-hover:-translate-x-1.5 group-hover:-translate-y-1.5' : ''}`} 
        style={{ width: size, height: size, borderTop: `${thickness} solid ${color}`, borderLeft: `${thickness} solid ${color}` }} 
      />
      {/* Top Right */}
      <div 
        className={`absolute top-0 right-0 ${transitionStyle} ${hoverShift ? 'group-hover:translate-x-1.5 group-hover:-translate-y-1.5' : ''}`} 
        style={{ width: size, height: size, borderTop: `${thickness} solid ${color}`, borderRight: `${thickness} solid ${color}` }} 
      />
      {/* Bottom Left */}
      <div 
        className={`absolute bottom-0 left-0 ${transitionStyle} ${hoverShift ? 'group-hover:-translate-x-1.5 group-hover:translate-y-1.5' : ''}`} 
        style={{ width: size, height: size, borderBottom: `${thickness} solid ${color}`, borderLeft: `${thickness} solid ${color}` }} 
      />
      {/* Bottom Right */}
      <div 
        className={`absolute bottom-0 right-0 ${transitionStyle} ${hoverShift ? 'group-hover:translate-x-1.5 group-hover:translate-y-1.5' : ''}`} 
        style={{ width: size, height: size, borderBottom: `${thickness} solid ${color}`, borderRight: `${thickness} solid ${color}` }} 
      />
    </div>
  );
};

export default CornerBrackets;
