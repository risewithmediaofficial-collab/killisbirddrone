import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useParallax from '../../hooks/useParallax';
import AnimatedTitle from '../AnimatedTitle';
import SmartImage from '../SmartImage';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1600&q=80',
};

const HeroBackground = () => {
  const ref = useParallax(35);
  return (
    <div ref={ref} className="absolute inset-0 z-0 h-[130%] w-full">
      <SmartImage
        src={IMG.hero}
        alt="UAV drone flying over landscape"
        loading="eager"
        fetchPriority="high"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-eyebrow', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
      gsap.fromTo('.hero-body', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: 'power3.out' });
      gsap.fromTo('.hero-btns', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.9, ease: 'power3.out' });
      gsap.fromTo('.hero-float-badge', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 1.2, ease: 'power3.out' });
      gsap.fromTo('.hero-tech-overlay', { opacity: 0 }, { opacity: 1, duration: 1.2, delay: 1.4, ease: 'power2.out' });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-black pt-[76px]">
      <HeroBackground />

      {/* Structural grid overlay */}
      <div className="grid-pattern absolute inset-0 z-10 text-white/5" />

      {/* Technical horizontal divider line */}
      <div className="hero-tech-overlay absolute z-20 left-0 right-0 top-[80vh] h-px bg-white/10 pointer-events-none" />

      {/* Technical coordinate labels */}
      <span className="hero-tech-overlay tech-overlay-label z-20 top-[76px] left-6 sm:left-10 mt-4 opacity-0" style={{ color: 'rgba(249,115,22,0.45)', top: 'calc(76px + 1.5rem)' }}>
        22.6° N / 80.2° E
      </span>
      <span className="hero-tech-overlay tech-overlay-label z-20 right-6 sm:right-10 opacity-0" style={{ color: 'rgba(255,255,255,0.25)', top: 'calc(76px + 1.5rem)' }}>
        ALT · 1200M
      </span>

      {/* Top-left: Title */}
      <div className="absolute left-0 top-[76px] z-20 px-6 pt-12 sm:px-10 sm:pt-16 md:px-16 md:pt-18 lg:px-20 lg:pt-22">
        <div className="hero-eyebrow section-label-technical !text-white/50 mb-6">
        </div>
        <AnimatedTitle
          as="h1"
          segments={[
            { text: 'Precision' },
            { text: 'Engineered.', className: 'text-skyroot' },
            { break: true },
            { text: 'Innovation' },
            { text: 'Delivered.', className: 'text-white/70' }
          ]}
          className="hero-heading mb-0"
          textClassName="font-heading font-bold text-left text-white leading-[0.9]"
          textStyle={{ fontSize: 'clamp(2rem, 6.5vw, 4.5rem)', letterSpacing: '-0.04em', wordSpacing: '0.05em' }}
          baseOpacity={0.16}
          baseRotation={1.5}
          blurStrength={9}
        />
      </div>

      {/* Bottom-right: Body + Buttons */}
      <div className="absolute bottom-0 right-0 z-20 flex flex-col items-center gap-5 px-6 pb-16 text-center sm:px-10 sm:pb-20 md:items-end md:px-16 md:pb-22 md:text-right lg:px-20 lg:pb-26">
        <p className="hero-body max-w-[30rem] text-sm leading-relaxed tracking-wide text-white/70 sm:text-base md:text-body-lg" />

        <div className="hero-btns flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 md:justify-end">
          <Link to="/creations" className="btn-primary w-full justify-center sm:w-auto">
            Creations <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Link>
          <Link to="/our-dna" className="btn-secondary w-full justify-center !border-white/20 !text-white hover:!border-skyroot hover:!text-skyroot sm:w-auto">
            Our DNA
          </Link>
        </div>
      </div>

      {/* Built-in-India float badge — razor-thin border */}
      <motion.div
        className="hero-float-badge absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="border border-white/15 bg-white/[0.06] px-5 py-2.5 backdrop-blur-sm text-center">
          <p className="text-[9px] font-heading font-bold text-white/45 uppercase tracking-widest mb-0.5">
            Built in India
          </p>
          <p className="font-heading font-bold text-skyroot text-xs">
            Trusted Worldwide 🇮🇳
          </p>
        </div>
      </motion.div>

      {/* Spacer to maintain min-h-screen */}
      <div className="min-h-screen" />
    </section>
  );
};

export default Hero;
