// src/components/sections/PeopleSection.jsx
import React from 'react';
import SectionLabel from '../common/SectionLabel';
import SmartImage from '../SmartImage';

const PeopleSection = ({ team }) => {
  return (
    <section id="people" className="bg-white py-[64px] max-sm:py-[44px] overflow-hidden" aria-labelledby="people-title">
      <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
        
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 max-sm:mb-7">
          <div className="reveal-group">
            <SectionLabel>Our People</SectionLabel>
            <h2 id="people-title" className="mt-2 text-[clamp(26px,3.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111111]">
              The Minds <span className="text-[#ff6b00]">Behind the Mission</span>
            </h2>
          </div>
        </div>

        {/* 3-Column Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[440px] max-sm:min-h-[380px] items-stretch">
          {team.map((member, idx) => (
            <article
              key={member.name}
              className="relative overflow-hidden rounded-[24px] border border-[#f1dfd1] bg-white transition-all duration-500 shadow-[0_12px_36px_rgba(17,21,26,0.03)] hover:shadow-[0_20px_48px_rgba(17,21,26,0.06)] hover:-translate-y-1.5 group aspect-[4/5] md:aspect-auto"
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <SmartImage
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>

              {/* Founder content info (always visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 max-sm:p-5 flex flex-col justify-end h-1/2 pointer-events-none">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#ff6b00] mb-1">
                  Founder 0{idx + 1}
                </span>
                <h3 className="text-[clamp(18px,2.5vw,28px)] font-extrabold leading-tight text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-white/70 max-sm:text-xs">
                  {member.role || 'Co-Founder & Director'}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PeopleSection;
