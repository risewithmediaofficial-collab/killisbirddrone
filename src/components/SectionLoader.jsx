// src/components/SectionLoader.jsx
import React from 'react';

const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-skyroot border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-heading font-bold text-skyroot tracking-wider uppercase">Loading Section...</span>
    </div>
  </div>
);

export default SectionLoader;
