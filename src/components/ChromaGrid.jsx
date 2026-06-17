import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SmartImage from './SmartImage';

const ChromaGrid = ({
  items,
  className = '',
  radius = 280,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return undefined;

    setX.current = gsap.quickSetter(element, '--x', 'px');
    setY.current = gsap.quickSetter(element, '--y', 'px');

    const updateCenter = () => {
      const { width, height } = element.getBoundingClientRect();
      pos.current = { x: width / 2, y: height / 2 };
      setX.current?.(pos.current.x);
      setY.current?.(pos.current.y);
    };

    updateCenter();
    window.addEventListener('resize', updateCenter);

    return () => window.removeEventListener('resize', updateCenter);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = event => {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;

    moveTo(event.clientX - rect.left, event.clientY - rect.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardMove = event => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 ${className}`.trim()}
      style={{
        '--r': `${radius}px`,
        '--x': '50%',
        '--y': '50%'
      }}
    >
      {items.map(item => (
        <article
          key={item.id ?? item.title}
          onMouseMove={handleCardMove}
          className="group relative grid min-h-[460px] w-full min-w-0 grid-rows-[220px_1fr] overflow-hidden border border-white/15 bg-slate-950 text-white shadow-[0_30px_80px_rgba(15,23,42,0.28)] transition-transform duration-500 hover:-translate-y-2"
          style={{
            '--card-border': item.borderColor || '#f97316',
            '--spotlight-color': item.spotlightColor || 'rgba(255,255,255,0.28)',
            background: item.gradient || 'linear-gradient(160deg, #0f172a, #111827 70%, #020617)'
          }}
        >
          <div
            className="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 68%)'
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: item.borderColor || '#f97316' }} />
          <div className="relative z-10 h-[220px] overflow-hidden">
            <SmartImage
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="relative z-10 flex h-full flex-col gap-3 p-6">
            {item.kicker && (
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/60">
                {item.kicker}
              </span>
            )}
            <h3 className="min-h-[3.5rem] font-heading text-xl font-bold leading-tight">{item.title}</h3>
            {item.subtitle && <p className="text-sm text-white/72">{item.subtitle}</p>}
            {item.description && <p className="min-h-[6.5rem] text-sm leading-relaxed text-white/78">{item.description}</p>}
            {item.handle && <span className="mt-auto text-xs uppercase tracking-[0.24em] text-sky-200">{item.handle}</span>}
          </div>
        </article>
      ))}
      <div
        className="pointer-events-none absolute inset-0 z-30 hidden md:block"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.84)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.84)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 18%, rgba(0,0,0,0.12) 32%, rgba(0,0,0,0.25) 48%, rgba(0,0,0,0.42) 66%, rgba(0,0,0,0.62) 84%, white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 18%, rgba(0,0,0,0.12) 32%, rgba(0,0,0,0.25) 48%, rgba(0,0,0,0.42) 66%, rgba(0,0,0,0.62) 84%, white 100%)'
        }}
      />
      <div
        ref={fadeRef}
        className="pointer-events-none absolute inset-0 z-40 hidden md:block"
        style={{
          backdropFilter: 'grayscale(1) brightness(0.84)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.84)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 16%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.72) 48%, rgba(255,255,255,0.46) 68%, rgba(255,255,255,0.18) 86%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 16%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.72) 48%, rgba(255,255,255,0.46) 68%, rgba(255,255,255,0.18) 86%, transparent 100%)',
          opacity: 1
        }}
      />
    </div>
  );
};

export default ChromaGrid;
