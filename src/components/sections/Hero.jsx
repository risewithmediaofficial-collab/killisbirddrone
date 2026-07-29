// src/components/sections/Hero.jsx
import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl
        .fromTo('.hero-h1-left', { opacity: 0, x: -35 }, { opacity: 1, x: 0, duration: 0.8 }, 0.3)
        .fromTo('.hero-h1-right', { opacity: 0, x: 35 }, { opacity: 1, x: 0, duration: 0.8 }, 0.4)
        .fromTo('.hero-btns', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0.85)
        .fromTo('.hero-badges', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.95)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.1);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[72vh] md:min-h-[76vh] lg:min-h-[80vh] bg-white overflow-hidden flex flex-col justify-between pt-[72px] border-b border-neutral-200"
      aria-label="Hero - Killis Bird"
    >
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/35" />
      </div>

      <div className="relative z-20 flex flex-col flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-12 py-6 justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 md:pt-8">
          <div className="lg:col-span-6 text-left hero-h1-left">
            <h1 className="font-heading font-bold leading-[0.98] text-[clamp(3rem,7.2vw,6.8rem)] tracking-tight">
              <span className="block text-black">Precision Engineered.</span>
            </h1>
            <div className="hero-btns flex flex-wrap items-center gap-3 mt-6">
              <Link to="/creations" className="btn-primary" aria-label="View our products">
                Creations
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </Link>
              <Link to="/our-dna" className="btn-secondary" aria-label="Who we are">
                Our DNA
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-auto pt-8 flex flex-col sm:flex-row items-end justify-between gap-6">
          <div className="hero-badges flex items-center gap-3">
            <div className="bg-white border border-neutral-200 px-4 py-2.5">
              <div className="font-heading font-bold text-black text-lg leading-none">19 May</div>
              <div className="text-neutral-500 text-[0.6rem] font-medium uppercase tracking-wider mt-1">Founded 2023</div>
            </div>
            <div className="bg-orange-500/90 backdrop-blur-sm px-4 py-2.5">
              <div className="font-heading font-bold text-white text-sm leading-none">100%</div>
              <div className="text-white/80 text-[0.55rem] font-medium uppercase tracking-wider mt-0.5">Indigenous</div>
            </div>
          </div>

          <div className="hero-h1-right text-right">
            <div className="font-heading font-bold leading-[0.98] text-[clamp(3rem,7.2vw,6.8rem)] tracking-tight">
              <span className="block text-neutral-300">Innovation Delivered.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll relative z-20 flex justify-center pb-4 pt-1">
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
          className="flex flex-col items-center gap-1 text-neutral-400 hover:text-orange-500 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-[0.5625rem] font-medium uppercase tracking-widest">Scroll</span>
          <KeyboardArrowDownIcon sx={{ fontSize: 18 }} style={{ animation: 'float 2s ease-in-out infinite' }} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
