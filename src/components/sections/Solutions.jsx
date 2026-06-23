// src/components/sections/Solutions.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../SectionHeader';
import useParallax from '../../hooks/useParallax';
import CornerBrackets from '../CornerBrackets';
import SmartImage from '../SmartImage';

const industries = [
  {
    id: '01',
    icon: '🌾',
    title: 'Precision Agriculture',
    highlight: false
  },
  {
    id: '02',
    icon: '🏭',
    title: 'Industrial Inspection',
    highlight: false
  },
  {
    id: '03',
    icon: '🛡️',
    title: 'Defence & Surveillance',
    highlight: true // Custom highlighted card
  },
  {
    id: '04',
    icon: '🔬',
    title: 'Research & Aerospace',
    highlight: false
  },
];

const SolutionsImage = () => {
  const ref = useParallax(15);
  return (
    <div className="relative rounded-none overflow-hidden aspect-[4/5] h-[500px] w-full shadow-lg border border-border/40 group">
      <SmartImage
        ref={ref}
        src="/assests/solutions.jpg"
        alt="Killis Bird aerospace engineering drone"
        className="w-full h-[120%] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <span className="text-[10px] font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">AEROSPACE STANDARDS</span>
        <h3 className="font-heading font-bold text-white text-xl md:text-2xl leading-tight">
          Fly higher, farther, and faster with Killis Bird components.
        </h3>
      </div>
      <CornerBrackets color="#f97316" size="14px" thickness="1.5px" hoverShift />
    </div>
  );
};

const Solutions = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.premium-solution-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-stack-section className="bg-white relative overflow-hidden px-6 py-[72px] md:px-8 lg:py-[88px]">
      <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

        {/* Centered Header Block */}
        <div className="text-center flex flex-col items-center mb-9 max-w-3xl mx-auto lg:mb-11">
          <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2"></span>
          <SectionHeader eyebrow="" title="Industries We" orangeTitle="Empower" centered />
        </div>

        {/* Content Row: 2x2 Grid + Image Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 items-center lg:gap-10">

          {/* Left Column: 2x2 Card Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className={`premium-solution-card p-5 rounded-none border transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between min-h-[150px] relative overflow-hidden group ${ind.highlight
                      ? 'bg-skyroot border-skyroot text-white shadow-lg shadow-skyroot/20'
                      : 'bg-navy-50/10 border-border/60 text-black shadow-sm hover:shadow-md hover:bg-white hover:border-skyroot/40'
                    }`}
                >
                  <CornerBrackets color={ind.highlight ? '#ffffff' : '#f97316'} size="8px" thickness="1.5px" hoverShift />

                  {/* Subtle pattern background for the highlighted card */}
                  {ind.highlight && (
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />
                  )}

                  <div className="relative z-10">
                    {/* Webflow template style number & line header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className={`font-heading font-bold text-lg leading-none ${ind.highlight ? 'text-white' : 'text-skyroot'}`}>
                          {ind.id}
                        </span>
                        <div className={`h-[1.5px] w-8 ${ind.highlight ? 'bg-white/50' : 'bg-navy-200'}`} />
                      </div>
                      <span className="text-2xl">{ind.icon}</span>
                    </div>

                    <h4 className={`font-heading font-bold text-lg mb-0 ${ind.highlight ? 'text-white' : 'text-black'}`}>
                      {ind.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex justify-center sm:justify-start">
              <Link to="/contact" className="relative group inline-flex">
                <span className="btn-primary !rounded-none !py-2.5 !px-6 relative z-10 bg-skyroot text-white font-heading font-bold transition-all duration-300">
                  Partner With Us <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                </span>
                <CornerBrackets color="#f97316" size="6px" thickness="1.5px" hoverShift />
              </Link>
            </div>
          </div>

          {/* Right Column: Single Editorial Large Parallax Image */}
          <div className="lg:col-span-5 flex justify-center">
            <SolutionsImage />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;

