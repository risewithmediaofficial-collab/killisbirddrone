// src/components/sections/Hero.jsx
import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HERO_BG = 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1800&q=85&auto=format&fit=crop';
const DRONE_PNG = '/assests/DRONE1-removebg-preview.png';

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-h1-line',
        { opacity: 0, y: 40, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.75, stagger: 0.12 }, 0.35
      )
      .fromTo('.hero-body',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65 }, 0.85
      )
      .fromTo('.hero-btns',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }, 1.0
      )
      .fromTo('.hero-drone',
        { opacity: 0, y: 40, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' }, 0.7
      )
      .fromTo('.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }, 1.3
      );

      // Drone float loop
      gsap.to('.hero-drone', {
        y: -14,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-neutral-900 overflow-hidden flex flex-col"
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
        {/* Dark gradient overlay — stronger at top for nav legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />
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

      {/* ─ Content layer ─ */}
      <div className="relative z-10 flex flex-col flex-1 pt-[72px]">
        <div
          className="flex flex-col flex-1"
          style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 clamp(24px, 5vw, 80px)' }}
        >

          {/* ─ Top: centred copy ─ */}
          <div className="flex flex-col items-center text-center pt-16 md:pt-20 lg:pt-24">



            {/* Heading */}
            <h1
              className="font-heading font-bold text-white leading-[1.0] mb-8"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.04em' }}
            >
              <span className="hero-h1-line block">Precision</span>
              <span className="hero-h1-line block text-orange-500">Engineered.</span>
              <span className="hero-h1-line block">Innovation</span>
              <span className="hero-h1-line block text-white/45">Delivered.</span>
            </h1>

            {/* Body text */}
            <p
              className="hero-body text-white/65 leading-relaxed mb-10 mx-auto"
              style={{ fontSize: 'var(--fs-body-lg)', maxWidth: '52ch' }}
            >
              Redefining unmanned aerial systems through indigenous engineering —
              designed for performance, built for reliability, trusted worldwide.
            </p>

            {/* CTAs */}
            <div className="hero-btns flex flex-wrap items-center justify-center gap-3 mb-12">
              <Link to="/creations" className="btn-primary" aria-label="View our creations">
                Explore Creations
                <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 17 }} />
              </Link>
              <Link to="/our-dna" className="btn-ghost" aria-label="Learn about our DNA">
                Our DNA
              </Link>
            </div>
          </div>

          {/* ─ Drone image ─ */}
          <div className="hero-drone flex items-end justify-center flex-1 relative">
            {/* Glow orb */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[100px] opacity-25 bg-orange-500 pointer-events-none"
              aria-hidden="true"
            />

            {/* Floating stat badges */}
            <div className="absolute left-0 bottom-24 sm:left-8 lg:left-16 bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-3 z-10">
              <div className="font-heading font-bold text-white text-xl leading-none">4K+</div>
              <div className="text-white/55 text-[0.625rem] font-medium uppercase tracking-wider mt-1">Flight Hours</div>
            </div>
            <div className="absolute right-0 bottom-40 sm:right-8 lg:right-16 bg-orange-500/90 backdrop-blur-sm px-4 py-2.5 z-10">
              <div className="font-heading font-bold text-white text-sm leading-none">100%</div>
              <div className="text-white/80 text-[0.5625rem] font-medium uppercase tracking-wider mt-0.5">Indigenous</div>
            </div>

            <img
              src={DRONE_PNG}
              alt="Killis Bird precision UAV drone"
              className="w-full max-w-lg lg:max-w-2xl h-auto object-contain drop-shadow-2xl relative z-10"
              style={{ maxHeight: '340px', objectPosition: 'bottom' }}
              loading="eager"
            />
          </div>
        </div>

        {/* ─ Scroll indicator ─ */}
        <div className="hero-scroll relative z-10 flex justify-center pb-6 pt-2">
          <button
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex flex-col items-center gap-1.5 text-white/35 hover:text-white/65 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <span className="text-[0.5625rem] font-medium uppercase tracking-widest">Scroll</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 18 }}
              style={{ animation: 'float 2s ease-in-out infinite' }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
