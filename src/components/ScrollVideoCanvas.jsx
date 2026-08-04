// src/components/ScrollVideoCanvas.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useNetworkAware from '../hooks/useNetworkAware';
import './ScrollVideoCanvas.css';

gsap.registerPlugin(ScrollTrigger);

const drawImageCover = (ctx, img, width, height) => {
  const imgRatio = img.width / img.height;
  const canvasRatio = width / height;
  let drawWidth, drawHeight, drawX, drawY;

  if (imgRatio > canvasRatio) {
    drawHeight = height;
    drawWidth = height * imgRatio;
    drawX = (width - drawWidth) / 2;
    drawY = 0;
  } else {
    drawWidth = width;
    drawHeight = width / imgRatio;
    drawX = 0;
    drawY = (height - drawHeight) / 2;
  }

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
};

// ── Slow-network static fallback ──────────────────────────────────────────────
const StaticCanvasFallback = ({ containerRef }) => (
  <div
    ref={containerRef}
    className="w-full flex flex-col items-center justify-center bg-white py-20 px-6"
    aria-label="UAV Experience"
  >
    <div className="max-w-content w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 text-center lg:text-left">
        <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-3">AERODYNAMICS</span>
        <h2 className="font-heading font-bold text-black leading-tight text-3xl md:text-4xl lg:text-5xl mb-4">IMAGINATION IN FLIGHT</h2>
        <p className="text-muted text-sm md:text-base font-medium mb-6">Indigenous Aerodynamics &amp; Propulsion Systems</p>
        <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">STRUCTURE</span>
        <h3 className="font-heading font-bold text-black text-xl mb-2">CARBON COMPOSITE STRENGTH</h3>
        <p className="text-muted text-sm mb-6">Ultra-lightweight structural integrity</p>
        <span className="text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-2">AVIONICS</span>
        <h3 className="font-heading font-bold text-black text-xl mb-2">AUTONOMOUS SWARM CONTROL</h3>
        <p className="text-muted text-sm">Next generation mission management avionics</p>
      </div>
      <div className="lg:col-span-7 flex items-center justify-center">
        <div className="relative w-full max-w-[480px] aspect-square rounded-none overflow-hidden border border-border bg-navy-50 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 text-skyroot/30" fill="currentColor" aria-hidden="true">
            <circle cx="100" cy="100" r="18" />
            <rect x="88" y="60" width="24" height="6" rx="3" />
            <rect x="88" y="134" width="24" height="6" rx="3" />
            <rect x="60" y="88" width="6" height="24" rx="3" />
            <rect x="134" y="88" width="6" height="24" rx="3" />
            <circle cx="66" cy="66" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="134" cy="66" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="66" cy="134" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="134" cy="134" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span className="text-[10px] font-heading font-bold text-muted uppercase tracking-widest">Killis Bird UAV</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ScrollVideoCanvas = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imagesRef = useRef([]);
  const currentFrameIndexRef = useRef(211);

  const { isSlow } = useNetworkAware();

  useEffect(() => {
    if (isSlow) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isSlow]);

  useEffect(() => {
    if (!shouldLoad) return;

    const startLoad = () => {
      let loadedCount = 0;
      const totalFrames = 211;
      const imgs = [];

      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const numStr = String(i).padStart(4, '0');
        img.src = `/frames/frame_${numStr}.png`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            imagesRef.current = imgs;
            setLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            imagesRef.current = imgs;
            setLoaded(true);
          }
        };
        imgs.push(img);
      }
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(startLoad, { timeout: 2000 });
    } else {
      startLoad();
    }
  }, [shouldLoad]);

  const drawFrame = (index) => {
    const img = imagesRef.current[index - 1];
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    drawImageCover(ctx, img, width, height);
  };

  const resizeCanvas = () => {
    if (!canvasRef.current || !canvasContainerRef.current) return;
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    drawFrame(currentFrameIndexRef.current);
  };

  useEffect(() => {
    if (!loaded) return;

    // Trigger initial refresh and sizing
    setTimeout(() => {
      resizeCanvas();
      drawFrame(211);
      ScrollTrigger.refresh();
    }, 150);

    window.addEventListener('resize', resizeCanvas);

    const isMobile = window.innerWidth < 1024;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: isMobile ? '+=80%' : '+=105%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const frameIndex = Math.round(211 - p * 210);
            const clamped = Math.min(211, Math.max(1, frameIndex));
            currentFrameIndexRef.current = clamped;
            drawFrame(clamped);
          }
        }
      });

      tl.set(canvasContainerRef.current, { scale: 1, opacity: 1 });

      // Slide 1 Reveal
      tl.to('.slide-1', { opacity: 1, duration: 0.2 })
        .fromTo('.slide-1 span',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.1'
        )
        .fromTo('.slide-1 h2',
          { opacity: 0, scale: 0.7, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.5)' },
          '-=0.6'
        )
        .fromTo('.slide-1 p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .to(canvasContainerRef.current, { scale: 1.05, duration: 1.5, ease: 'power1.inOut' }, '-=1.2')
        .to({}, { duration: isMobile ? 0.35 : 0.55 })
        .to('.slide-1 span', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' })
        .to('.slide-1 h2', { opacity: 0, scale: 1.15, y: -30, duration: 0.7, ease: 'power2.in' }, '-=0.4')
        .to('.slide-1 p', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, '-=0.4')
        .to('.slide-1', { opacity: 0, duration: 0.15 }, '-=0.15')

      // Slide 2 Reveal
      tl.to('.slide-2', { opacity: 1, duration: 0.2 })
        .fromTo('.slide-2 span',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.1'
        )
        .fromTo('.slide-2 h2',
          { opacity: 0, scale: 0.7, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.5)' },
          '-=0.6'
        )
        .fromTo('.slide-2 p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .to(canvasContainerRef.current, { scale: 0.97, rotate: -1, duration: 1.5, ease: 'power1.inOut' }, '-=1.2')
        .to({}, { duration: isMobile ? 0.35 : 0.55 })
        .to('.slide-2 span', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' })
        .to('.slide-2 h2', { opacity: 0, scale: 1.15, y: -30, duration: 0.7, ease: 'power2.in' }, '-=0.4')
        .to('.slide-2 p', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, '-=0.4')
        .to('.slide-2', { opacity: 0, duration: 0.15 }, '-=0.15')

      // Slide 3 Reveal
      tl.to('.slide-3', { opacity: 1, duration: 0.2 })
        .fromTo('.slide-3 span',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.1'
        )
        .fromTo('.slide-3 h2',
          { opacity: 0, scale: 0.7, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'back.out(1.5)' },
          '-=0.6'
        )
        .fromTo('.slide-3 p',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .to(canvasContainerRef.current, { scale: 1.02, rotate: 0, duration: 1.5, ease: 'power1.inOut' }, '-=1.2')
        .to({}, { duration: isMobile ? 0.35 : 0.55 })
        .to('.slide-3 span', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' })
        .to('.slide-3 h2', { opacity: 0, scale: 1.15, y: -30, duration: 0.7, ease: 'power2.in' }, '-=0.4')
        .to('.slide-3 p', { opacity: 0, y: -20, duration: 0.5, ease: 'power2.in' }, '-=0.4')
        .to('.slide-3', { opacity: 0, duration: 0.15 }, '-=0.15')
        .to(canvasContainerRef.current, { scale: 0.98, opacity: 1, duration: 0.45, ease: 'power2.out' }, '-=0.15');

    }, containerRef);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ctx.revert();
    };
  }, [loaded]);

  // On slow networks: show static fallback instead of the canvas
  if (isSlow) {
    return <StaticCanvasFallback />;
  }

  if (!loaded) {
    return <StaticCanvasFallback containerRef={containerRef} />;
  }

  return (
    <div ref={containerRef} className="scroll-video-container bg-white relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="sticky-canvas-wrapper max-w-content mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-6 text-center lg:grid lg:grid-cols-12 lg:gap-12 lg:text-left">

          {/* Text Side */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center lg:col-span-5 lg:items-start">
            <div className="canvas-text-overlay w-full relative">
              <div className="overlay-slide slide-1">
                <span className="text-[10px] sm:text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-1.5 sm:mb-2">AERODYNAMICS</span>
                <h2 className="font-heading font-bold text-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">IMAGINATION IN FLIGHT</h2>
                <p className="text-muted text-xs sm:text-sm md:text-base mt-2 sm:mt-4 font-medium">Indigenous Aerodynamics &amp; Propulsion Systems</p>
              </div>
              <div className="overlay-slide slide-2">
                <span className="text-[10px] sm:text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-1.5 sm:mb-2">STRUCTURE</span>
                <h2 className="font-heading font-bold text-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">CARBON COMPOSITE STRENGTH</h2>
                <p className="text-muted text-xs sm:text-sm md:text-base mt-2 sm:mt-4 font-medium">Ultra-lightweight structural integrity</p>
              </div>
              <div className="overlay-slide slide-3">
                <span className="text-[10px] sm:text-xs font-heading font-bold text-skyroot uppercase tracking-widest block mb-1.5 sm:mb-2">AVIONICS</span>
                <h2 className="font-heading font-bold text-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">AUTONOMOUS SWARM CONTROL</h2>
                <p className="text-muted text-xs sm:text-sm md:text-base mt-2 sm:mt-4 font-medium">Next generation mission management avionics</p>
              </div>
            </div>
          </div>

          {/* Canvas/Drone Side */}
          <div className="z-10 flex w-full items-center justify-center lg:col-span-7">
            <div ref={canvasContainerRef} className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden sm:aspect-[4/3] sm:max-w-[480px] lg:max-w-[640px]">
              <canvas ref={canvasRef} className="scroll-canvas w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScrollVideoCanvas;
