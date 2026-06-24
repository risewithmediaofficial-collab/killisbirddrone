import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const milestones = [
  {
    eyebrow: '2018',
    text: 'The Spark',
    desc: 'Founded with a mission to revolutionise indigenous UAV component manufacturing in India.',
  },
  {
    eyebrow: '2019',
    text: 'First Prototype',
    desc: 'Developed and field-tested our first precision-engineered brushless motor series for agricultural UAVs.',
  },
  {
    eyebrow: '2020',
    text: 'Industry Recognition',
    desc: 'Awarded "Most Innovative UAV Component Startup" at the National Aerospace Innovation Summit.',
  },
  {
    eyebrow: '2021',
    text: 'Defence Partnerships',
    desc: 'Secured strategic partnerships with leading defence integrators for mission-critical UAV programmes.',
  },
  {
    eyebrow: '2022',
    text: 'Swarm Technology',
    desc: 'Successfully demonstrated swarm coordination modules across a 20-UAV formation flight trial.',
  },
  {
    eyebrow: '2023',
    text: 'Global Reach',
    desc: 'Expanded exports to 10+ countries, establishing Killis Bird as a globally trusted UAV component brand.',
  },
  {
    eyebrow: '2024',
    text: 'Next Chapter',
    desc: 'Launched next-generation avionics platform — redefining reliability, adaptability, and performance standards.',
  },
  {
    eyebrow: '2025+',
    text: 'Shape the Future',
    desc: 'Pioneering autonomous multi-domain aerial systems — the future belongs to those who dare to build it.',
  },
];

const openings = [
  { role: 'Aerospace Systems Engineer', type: 'Full Time · Bangalore', dept: 'Engineering' },
  { role: 'Embedded Software Developer', type: 'Full Time · Remote', dept: 'Avionics' },
  { role: 'UAV Test Pilot & Analyst', type: 'Contract · Hyderabad', dept: 'Operations' },
  { role: 'Supply Chain Manager', type: 'Full Time · Chennai', dept: 'Logistics' },
];

const Journey = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  const timelineScrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const isPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(null);

  /* ── Auto-scroll left → right, loop ── */
  useEffect(() => {
    const el = timelineScrollRef.current;
    if (!el) return;

    const SPEED = 0.6; // px per frame

    const tick = () => {
      if (!isPausedRef.current && el) {
        el.scrollLeft += SPEED;
        // Reset to start when reaching end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
          el.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };

    autoScrollRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(autoScrollRef.current);
  }, []);

  const handleMilestoneEnter = (i) => {
    isPausedRef.current = true;
    setActiveIndex(i);
  };

  const handleMilestoneLeave = () => {
    isPausedRef.current = false;
    setActiveIndex(null);
  };

  /* ── Manual left/right buttons ── */
  const scrollTimeline = (direction) => {
    const el = timelineScrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft + (direction === 'left' ? -340 : 340),
      behavior: 'smooth',
    });
  };

  return (
    <div ref={pageRef}>
      <SEO title="Journey" description="Killis Bird :: Imagine, IDeate, Innovate — Shape the Future With Us. Our story, milestones, and careers." />

      {/* ── MILESTONES: Auto-scrolling Timeline ── */}
      <section data-stack-section className="relative overflow-hidden bg-white">

        {/* Section header */}
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] pt-[40px] pb-[24px]">
          <ParallaxWatermark
            className="right-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,14rem)] text-[#ff6b00]/[0.06]"
            speed={20}
          >
            TIMELINE
          </ParallaxWatermark>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] py-12">

          {/* Left button */}
          <button
            onClick={() => scrollTimeline('left')}
            className="absolute left-2 top-[180px] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#f1dfd1] text-[#ff6b00] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#fff8f1] hover:scale-105 active:scale-95 transition-all duration-300 max-lg:hidden"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right button */}
          <button
            onClick={() => scrollTimeline('right')}
            className="absolute right-2 top-[180px] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#f1dfd1] text-[#ff6b00] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#fff8f1] hover:scale-105 active:scale-95 transition-all duration-300 max-lg:hidden"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={timelineScrollRef}
            className="relative overflow-x-auto scrollbar-none py-8"
            style={{ minHeight: '480px' }}
          >
            {/* Timeline track */}
            <div className="relative flex gap-20 lg:gap-32 px-12 pb-12 w-max">

              {/* Horizontal guide line */}
              <div
                className="absolute left-0 right-0 h-[2px] bg-[#f1dfd1]/80 top-[180px] -translate-y-1/2 z-0"
                aria-hidden="true"
              />

              {milestones.map((m, index) => {
                const number = index + 1 < 10 ? `0${index + 1}` : index + 1;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center min-w-[260px] lg:min-w-[320px] z-10 select-none"
                    onMouseEnter={() => handleMilestoneEnter(index)}
                    onMouseLeave={handleMilestoneLeave}
                  >
                    {/* Above line: Year + Title */}
                    <div className="absolute bottom-[calc(100%-156px)] left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-[220px] pb-4">
                      <span className="text-[#ff6b00] font-extrabold text-[13px] tracking-wider uppercase">
                        {m.eyebrow}
                      </span>
                      <h3
                        className="mt-2 text-[18px] lg:text-[20px] font-extrabold leading-snug tracking-tight transition-colors duration-200"
                        style={{ color: isActive ? '#ff6b00' : '#111111' }}
                      >
                        {m.text}
                      </h3>
                    </div>

                    {/* On line: Circle Node */}
                    <div
                      className="absolute top-[180px] -translate-y-1/2 z-20 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-white transition-all duration-250"
                      style={{
                        border: isActive ? '1.5px solid #ff6b00' : '1.5px solid rgba(241,223,209,0.8)',
                        transform: `translateY(-50%) scale(${isActive ? 1.12 : 1})`,
                        boxShadow: isActive
                          ? '0 8px 24px rgba(255,107,0,0.18)'
                          : '0 4px 16px rgba(255,107,0,0.06)',
                      }}
                      aria-hidden="true"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#ff6b00] flex items-center justify-center text-white text-[12px] font-extrabold">
                        {number}
                      </div>
                    </div>

                    {/* Below line: Info card — visible on hover */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-[280px] lg:w-[320px] bg-white border border-[#f1dfd1] p-6 z-30 origin-top transition-all duration-200"
                      style={{
                        top: '204px',
                        opacity: isActive ? 1 : 0,
                        transform: `translateX(-50%) scale(${isActive ? 1 : 0.95})`,
                        pointerEvents: isActive ? 'auto' : 'none',
                        boxShadow: '0 12px 36px rgba(17,21,26,0.09)',
                      }}
                    >
                      {/* Faded year watermark */}
                      <span
                        className="absolute right-4 bottom-2 font-heading text-[5rem] font-extrabold tracking-tight text-[#ff6b00]/[0.04] select-none pointer-events-none z-0"
                        aria-hidden="true"
                      >
                        {m.eyebrow}
                      </span>
                      <div className="relative z-10 whitespace-normal">
                        <span className="text-[#ff6b00] font-extrabold text-[11px] tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {m.eyebrow}
                        </span>
                        <h4 className="mt-2 text-[17px] font-extrabold leading-snug text-[#111111] tracking-tight">
                          {m.text}
                        </h4>
                        <p className="mt-3 text-[13px] leading-[1.65] text-[#67707d]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll indicator — animated left arrow hint at bottom */}
          <div className="flex items-center justify-center gap-2 mt-2 pb-2 select-none pointer-events-none">
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-1 h-1 rounded-full bg-[#ff6b00]"
                  style={{
                    animation: `scrollPulse 1.4s ease-in-out ${i * 0.18}s infinite`,
                    opacity: 0.5,
                  }}
                />
              ))}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              Auto scrolling · hover to pause
            </span>
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-1 h-1 rounded-full bg-[#ff6b00]"
                  style={{
                    animation: `scrollPulse 1.4s ease-in-out ${i * 0.18}s infinite`,
                    opacity: 0.5,
                  }}
                />
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section data-stack-section data-no-global-reveal className="bg-white pb-[48px] pt-[60px] max-sm:py-[40px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff6b00]">
              <span className="h-px w-10 bg-[#ff6b00]" aria-hidden="true" />
              Careers
            </div>
            <h2 className="mt-5 text-[clamp(42px,6vw,82px)] font-normal leading-[0.95] tracking-[-0.07em] text-[#111111]">
              Join the <span className="text-[#ff6b00]">Mission</span>
            </h2>
            <p className="max-w-[640px] text-[17px] leading-[1.8] text-[#67707d]">
              We are always looking for passionate engineers, innovators, and dreamers who want to shape the future of flight.
            </p>
          </div>

          <div className="mt-10 border-y border-[#f1dfd1]">
            {openings.map((opening, index) => (
              <div
                key={opening.role}
                className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between border-b border-[#f1dfd1] last:border-b-0 relative group hover:pl-3 transition-all duration-200"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-[#ff6b00] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-200 ease-out" />
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-[30px] font-extrabold leading-none text-[#ff6b00]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[22px] font-extrabold text-[#111111]" style={{ letterSpacing: '-0.02em' }}>{opening.role}</h3>
                      <span className="border border-[#f1dfd1] bg-[#fff8f1] px-3 py-0.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b00]" style={{ fontFamily: 'Inter, sans-serif' }}>{opening.dept}</span>
                    </div>
                    <p className="mt-2 flex items-center gap-2 text-[14px] text-[#67707d]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <WorkIcon sx={{ fontSize: 16, color: '#ff6b00' }} />{opening.type}
                    </p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-[#ff6b00]/30 px-6 py-3 text-[13px] font-extrabold text-[#ff6b00] transition-all duration-200 hover:border-[#ff6b00] hover:bg-[#fff8f1] hover:-translate-y-0.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline keyframe for scroll pulse dots */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
};

export default Journey;
