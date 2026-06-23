import { useRef } from 'react';
import { Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const milestones = [
  {
    link: '#',
    eyebrow: '2018',
    text: 'The Spark',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80',
    desc: 'Founded with a mission to revolutionise indigenous UAV component manufacturing in India.',
  },
  {
    link: '#',
    eyebrow: '2019',
    text: 'First Prototype',
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=600&q=80',
    desc: 'Developed and field-tested our first precision-engineered brushless motor series for agricultural UAVs.',
  },
  {
    link: '#',
    eyebrow: '2020',
    text: 'Industry Recognition',
    image: 'https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=600&q=80',
    desc: 'Awarded "Most Innovative UAV Component Startup" at the National Aerospace Innovation Summit.',
  },
  {
    link: '#',
    eyebrow: '2021',
    text: 'Defence Partnerships',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80',
    desc: 'Secured strategic partnerships with leading defence integrators for mission-critical UAV programmes.',
  },
  {
    link: '#',
    eyebrow: '2022',
    text: 'Swarm Technology',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80',
    desc: 'Successfully demonstrated swarm coordination modules across a 20-UAV formation flight trial.',
  },
  {
    link: '#',
    eyebrow: '2023',
    text: 'Global Reach',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80',
    desc: 'Expanded exports to 10+ countries, establishing Killis Bird as a globally trusted UAV component brand.',
  },
  {
    link: '#',
    eyebrow: '2024',
    text: 'Next Chapter',
    image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&q=80',
    desc: 'Launched next-generation avionics platform — redefining reliability, adaptability, and performance standards.',
  },
  {
    link: '#',
    eyebrow: '2025+',
    text: 'Shape the Future',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
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
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isMouseDown.current = true;
    startX.current = e.pageX - timelineScrollRef.current.offsetLeft;
    scrollLeft.current = timelineScrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;
    e.preventDefault();
    const x = e.pageX - timelineScrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    timelineScrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollTimeline = (direction) => {
    if (timelineScrollRef.current) {
      const scrollAmount = 340; // width of one card + gap
      timelineScrollRef.current.scrollTo({
        left: timelineScrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={pageRef}>
      <SEO title="Journey" description="Killis Bird :: Imagine, IDeate, Innovate — Shape the Future With Us. Our story, milestones, and careers." />

      {/* ── MILESTONES: Horizontal Timeline ── */}
      <section data-stack-section className="relative overflow-hidden bg-white">
        {/* Section header */}
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] pt-[80px] pb-[24px]">
          <ParallaxWatermark
            className="right-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,14rem)] text-[#ff6b00]/[0.06]"
            speed={20}
          >
            TIMELINE
          </ParallaxWatermark>
          <div className="relative z-10 flex justify-between items-end gap-6 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff6b00]">
                
              </div>
              <h2 className="mt-5 text-[clamp(36px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#111111]">
                Milestones <span className="text-[#ff6b00]">That Define Us</span>
              </h2>
              <p className="max-w-[560px] text-[16px] leading-[1.8] text-[#67707d] mt-4">
                From a bold idea in 2018 to a globally trusted UAV component brand — every year marks a new chapter in our pursuit of precision and innovation.
              </p>
            </div>

            {/* Scroll animation hint */}
            <div className="flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#ff6b00] select-none pb-2">
              <span>Drag or Scroll to Explore</span>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#ff6b00]/40 text-[#ff6b00]">
                <svg className="w-4 h-4 animate-timeline-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Timeline Wrapper */}
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] py-12">
          {/* Left Scroll Button */}
          <button 
            onClick={() => scrollTimeline('left')}
            className="absolute left-2 top-[180px] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#f1dfd1] text-[#ff6b00] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#fff8f1] hover:scale-105 active:scale-95 transition-all duration-300 max-lg:hidden"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button 
            onClick={() => scrollTimeline('right')}
            className="absolute right-2 top-[180px] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#f1dfd1] text-[#ff6b00] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#fff8f1] hover:scale-105 active:scale-95 transition-all duration-300 max-lg:hidden"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <div 
            ref={timelineScrollRef}
            className="relative overflow-x-auto scrollbar-none py-8 cursor-grab active:cursor-grabbing"
            style={{ minHeight: '480px' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {/* Timeline track */}
            <div className="relative flex gap-20 lg:gap-32 px-12 pb-12 w-max">
              {/* Horizontal guide line inside track (spans full track width) */}
              <div 
                className="absolute left-0 right-0 h-[2px] bg-[#f1dfd1]/80 top-[180px] -translate-y-1/2 z-0" 
                aria-hidden="true" 
              />

              {milestones.map((m, index) => {
                const year = m.eyebrow;
                const title = m.text;
                const desc = m.desc;
                const number = index + 1 < 10 ? `0${index + 1}` : index + 1;

                return (
                  <div 
                    key={index}
                    className="relative flex flex-col items-center min-w-[260px] lg:min-w-[320px] group select-text z-10"
                  >
                    {/* Above the line: Year and Title */}
                    <div className="absolute bottom-[calc(100%-156px)] left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-[220px] pb-4">
                      <span className="text-[#ff6b00] font-extrabold text-[13px] tracking-wider uppercase">
                        {year}
                      </span>
                      <h3 className="mt-2 text-[18px] lg:text-[20px] font-extrabold leading-snug text-[#111111] tracking-tight transition-colors duration-300 group-hover:text-[#ff6b00]">
                        {title}
                      </h3>
                    </div>

                    {/* On the line: Circle Node */}
                    <div 
                      className="absolute top-[180px] -translate-y-1/2 z-20 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-white border border-[#f1dfd1]/80 shadow-[0_4px_16px_rgba(255,107,0,0.08)] group-hover:scale-110 group-hover:border-[#ff6b00] group-hover:shadow-[0_8px_24px_rgba(255,107,0,0.16)] transition-all duration-300"
                      aria-hidden="true"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#ff6b00] flex items-center justify-center text-white text-[12px] font-extrabold">
                        {number}
                      </div>
                    </div>

                    {/* Below the line: Info Card (Show only on hover) */}
                    <div 
                      className="absolute top-[204px] left-1/2 -translate-x-1/2 w-[280px] lg:w-[320px] bg-white border border-[#f1dfd1]/80 rounded-[20px] p-6 shadow-[0_16px_48px_rgba(17,21,26,0.08)] z-30 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top"
                    >
                      {/* Faded year watermark */}
                      <span 
                        className="absolute right-4 bottom-2 font-heading text-[5rem] font-extrabold tracking-tight text-[#ff6b00]/[0.03] select-none pointer-events-none z-0"
                        aria-hidden="true"
                      >
                        {year}
                      </span>

                      <div className="relative z-10 whitespace-normal">
                        <span className="text-[#ff6b00] font-extrabold text-[12px] tracking-wider uppercase">
                          {year}
                        </span>
                        <h4 className="mt-2 text-[18px] font-extrabold leading-snug text-[#111111] tracking-tight">
                          {title}
                        </h4>
                        <p className="mt-3 text-[13px] leading-[1.6] text-[#67707d]">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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

          <div className="mt-10 divide-y divide-[#f1dfd1] border-y border-[#f1dfd1]">
            {openings.map((opening, index) => (
              <div key={opening.role} className="flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-[32px] font-extrabold leading-none text-[#ff6b00]">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[24px] font-extrabold text-[#111111]">{opening.role}</h3>
                      <span className="border border-[#f1dfd1] bg-[#fff8f1] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#ff6b00]">{opening.dept}</span>
                    </div>
                    <p className="mt-3 flex items-center gap-2 text-[15px] text-[#67707d]"><WorkIcon sx={{ fontSize: 18, color: '#ff6b00' }} />{opening.type}</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center justify-center border border-[#ff6b00]/40 px-6 py-3 text-[14px] font-extrabold text-[#ff6b00] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff6b00] hover:bg-[#fff8f1]">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;
