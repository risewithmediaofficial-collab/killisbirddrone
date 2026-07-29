// src/components/sections/Hero.jsx
import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HERO_BG = 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1800&q=85&auto=format&fit=crop';

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-h1-left',
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 0.8 }, 0.3
      )
        .fromTo('.hero-h1-right',
          { opacity: 0, x: 35 },
          { opacity: 1, x: 0, duration: 0.8 }, 0.4
        )
        .fromTo('.hero-body',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }, 0.7
        )
        .fromTo('.hero-btns',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 }, 0.85
        )
        .fromTo('.hero-badges',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }, 0.95
        )
        .fromTo('.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }, 1.1
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[72vh] md:min-h-[76vh] lg:min-h-[80vh] bg-neutral-900 overflow-hidden flex flex-col justify-between pt-[72px]"
      aria-label="Hero — Killis Bird"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/80" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px'
          }}
        />
      </div>

      {/* Glow orb in center background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-orange-500 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* ─ Main Content Container ─ */}
      <div className="relative z-10 flex flex-col flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-12 py-6 justify-between">

        {/* Top Section: Left-aligned "Precision Engineered." */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 md:pt-8">
          <div className="lg:col-span-7 text-left hero-h1-left z-20">
            <h1 className="font-heading font-bold leading-[0.98] text-[clamp(2.5rem,5.2vw,4.5rem)] tracking-tight">
              <span className="block text-white">Precision</span>
              <span className="block text-orange-500">Engineered.</span>
            </h1>
            <p className="hero-body text-white/75 text-sm md:text-base leading-relaxed mt-4 max-w-md">
              Redefining unmanned aerial systems through indigenous engineering —
              designed for performance, built for reliability, trusted worldwide.
            </p>
            <div className="hero-btns flex flex-wrap items-center gap-3 mt-6">
              <Link to="/creations" className="btn-primary" aria-label="View our creations">
                Explore Creations
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </Link>
              <Link to="/our-dna" className="btn-ghost" aria-label="Learn about our DNA">
                Our DNA
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Left-aligned Badges & Right-aligned "Innovation Delivered." */}
        <div className="relative z-20 mt-auto pt-8 flex flex-col sm:flex-row items-end sm:items-end justify-between gap-6">

          {/* Left Bottom: Badges */}
          <div className="hero-badges flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2.5">
              <div className="font-heading font-bold text-white text-lg leading-none">4K+</div>
              <div className="text-white/55 text-[0.6rem] font-medium uppercase tracking-wider mt-1">Flight Hours</div>
            </div>
            <div className="bg-orange-500/90 backdrop-blur-sm px-4 py-2.5">
              <div className="font-heading font-bold text-white text-sm leading-none">100%</div>
              <div className="text-white/80 text-[0.55rem] font-medium uppercase tracking-wider mt-0.5">Indigenous</div>
            </div>
          </div>

          {/* Right Bottom: Right-aligned "Innovation Delivered." */}
          <div className="hero-h1-right text-right">
            <div className="font-heading font-bold leading-[0.98] text-[clamp(2.5rem,5.2vw,4.5rem)] tracking-tight">
              <span className="block text-white">Innovation</span>
              <span className="block text-white/40">Delivered.</span>
            </div>
          </div>
        </div>

      </div>

      {/* ─ Scroll indicator ─ */}
      <div className="hero-scroll relative z-20 flex justify-center pb-4 pt-1">
        <button
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
          className="flex flex-col items-center gap-1 text-white/35 hover:text-white/65 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-[0.5625rem] font-medium uppercase tracking-widest">Scroll</span>
          <KeyboardArrowDownIcon sx={{ fontSize: 18 }}
            style={{ animation: 'float 2s ease-in-out infinite' }}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
