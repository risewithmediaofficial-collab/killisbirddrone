// src/components/sections/Company.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import CornerBrackets from '../CornerBrackets';

const stats = [
  { value: '500+', label: 'Components Delivered' },
  { value: '20+', label: 'Industry Partners' },
  { value: '5+', label: 'Years Innovating' },
  { value: '100%', label: 'Made in India' },
];

const Company = () => {
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.fromTo('.premium-stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Premium Stats Grid */}
      <section ref={statsRef} data-stack-section className="bg-white border-b border-border/60 relative px-6 py-[72px] md:px-8 lg:py-[88px]">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="premium-stat-card bg-navy-50/10 border border-border/40 rounded-none p-8 hover:bg-white hover:border-skyroot hover:shadow-lg transition-all duration-300 group relative"
              >
                <CornerBrackets color="#f97316" size="8px" thickness="1.5px" hoverShift />
                {/* Webflow template style number line */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-heading font-bold text-skyroot uppercase tracking-widest leading-none"> </span>
                  <div className="h-[1px] bg-navy-200 group-hover:bg-skyroot w-8 transition-all duration-300" />
                </div>

                <div className="stat-number text-5xl font-bold font-heading text-black group-hover:text-skyroot transition-colors duration-300 mb-2">
                  {s.value}
                </div>
                <div className="text-sm font-heading font-bold text-black uppercase tracking-wider mb-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
