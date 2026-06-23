import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import BiotechIcon from '@mui/icons-material/Biotech';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DecorativeDots from '../common/DecorativeDots';
import FloatingInfoCard from '../common/FloatingInfoCard';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  {
    id: 'foundation',
    Icon: BiotechIcon,
    title: 'The DNA of Killis Bird',
    highlight: 'Killis Bird',
    text: 'Imagination, ideation, and innovation — powering next-generation UAV components and solutions.'
  },
  {
    id: 'values',
    Icon: LightbulbIcon,
    title: 'What Drives Everything',
    highlight: 'Everything',
    text: 'Bold ideas, practical thinking, and relentless innovation drive everything we do.'
  },
  {
    id: 'purpose',
    Icon: GpsFixedIcon,
    title: 'Our Vision',
    highlight: 'Vision',
    text: 'To set the global standard for innovative and distinctive UAV components and solutions.'
  },
  {
    id: 'people',
    Icon: RocketLaunchIcon,
    title: 'Our Mission',
    highlight: 'Mission',
    text: 'To empower our partners with reliability, excellence, and forward-thinking aerospace solutions.'
  }
];

const DnaHero = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from('.dna-hero-word', { y: 54, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.13 });
      gsap.from('.dna-hero-reveal', { y: 24, opacity: 0, duration: 0.75, ease: 'power3.out', stagger: 0.11, delay: 0.35 });
      gsap.from('.dna-hero-drone', { x: 80, opacity: 0, duration: 1.05, ease: 'power3.out', delay: 0.25 });
      gsap.from('.dna-hero-late', { y: 24, scale: 0.96, opacity: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1, delay: 0.55 });
    }, root);

    return () => ctx.revert();
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-white py-6 max-sm:py-4"
      aria-labelledby="dna-hero-title"
    >
      <div className="mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] items-center gap-6 px-[clamp(20px,5vw,80px)] max-lg:grid-cols-1">
        <div className="relative z-[2] py-3 pl-5 max-sm:pl-4">
          <h1 id="dna-hero-title" className="font-heading text-[clamp(34px,4vw,58px)] font-normal leading-[0.98] tracking-[-0.055em] text-[#111111] max-sm:text-[clamp(30px,11vw,44px)]" aria-label="Imagine. Ideate. Innovate.">
            <span className="dna-hero-word block">Imagine.</span>
            <span className="dna-hero-word block">Ideate.</span>
            <span className="dna-hero-word block text-[#ff6b00]">Innovate.</span>
          </h1>
          <p className="dna-hero-reveal mt-3 font-serif text-[clamp(15px,1.2vw,18px)] italic text-[#11151a] max-sm:text-[15px]">“Where Precision Meets Innovation”</p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-[#f1dfd1] bg-[radial-gradient(circle_at_72%_20%,#fff_0_18%,transparent_19%),linear-gradient(135deg,#fff8f1,#fff1e6)] shadow-[0_18px_44px_rgba(17,21,26,0.06)] max-lg:min-h-[320px] max-sm:min-h-[260px]" aria-label="Killis Bird UAV technology visual">
          <DecorativeDots className="absolute left-[16%] top-[48%] opacity-65 max-sm:hidden" />
          <svg className="dna-hero-late absolute bottom-2 left-[-1%] h-[135px] w-[108%] opacity-45 max-sm:hidden [&_path]:fill-none [&_path]:stroke-[#ff6b00]/25 [&_path]:stroke-[1.1]" viewBox="0 0 760 260" aria-hidden="true">
            <path d="M0 210 C110 150 160 196 240 126 C302 74 342 160 410 119 C486 72 542 158 604 129 C672 96 706 143 760 116" />
            <path d="M0 246 C116 184 176 226 254 159 C318 104 356 191 428 148 C498 107 559 194 625 160 C687 128 724 173 760 150" />
            {Array.from({ length: 12 }).map((_, index) => (
              <path key={index} d={`M${index * 68} 260 L${300 + index * 38} 88`} />
            ))}
          </svg>
          <img
            className="dna-hero-drone absolute left-1/2 top-[56%] z-[2] w-full max-w-[min(560px,84%)] -translate-x-1/2 -translate-y-1/2 rotate-[4deg] drop-shadow-[0_22px_32px_rgba(17,21,26,0.16)] max-lg:max-w-[min(500px,86%)] max-sm:max-w-[88%]"
            src="/assests/DRONE1-removebg-preview.png"
            alt="Killis Bird precision UAV"
            width="900"
            height="560"
            loading="eager"
            decoding="async"
          />
          <FloatingInfoCard
            className="dna-hero-late absolute right-[7%] top-[10%] z-[3] scale-[0.78] max-sm:right-1 max-sm:top-1 max-sm:scale-[0.68] max-sm:origin-top-right"
            icon={GpsFixedIcon}
            eyebrow="Precision"
            title="In Every Detail"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
        <div className="dna-hero-late relative z-[5] mt-5 grid grid-cols-4 rounded-t-[16px] border border-[#f1dfd1] border-b-2 border-b-[#ff6b00] bg-white/95 shadow-[0_18px_42px_rgba(17,21,26,0.07)] after:absolute after:bottom-[-8px] after:left-1/2 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-[#ff6b00] after:bg-white max-xl:grid-cols-2 max-sm:grid-cols-1">
          {navItems.map(({ id, Icon, title, highlight, text }, index) => (
            <button
              key={id}
              type="button"
              className={`group border-r border-[#f1dfd1] bg-transparent p-3.5 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff8f1] focus-visible:-translate-y-1 focus-visible:bg-[#fff8f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ff6b00] max-sm:border-b max-sm:border-r-0 max-sm:p-4 ${index === 1 ? 'max-xl:border-r-0' : ''} ${index < 2 ? 'max-xl:border-b' : ''} ${index === 3 ? 'border-r-0 max-sm:border-b-0' : ''}`}
              onClick={() => scrollTo(id)}
            >
              <Icon aria-hidden="true" sx={{ fontSize: 22 }} className="mb-2 text-[#ff6b00] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
              <span className="mb-2 block h-0.5 w-6 bg-[#ff6b00]" aria-hidden="true" />
              <strong className="block text-[14px] leading-[1.18] text-[#111111]">
                {title.replace(highlight, '')}
                <em className="not-italic text-[#ff6b00]">{highlight}</em>
              </strong>
            </button>
          ))}
        </div>
        <p className="flex items-center justify-center gap-2 py-3 text-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#11151a] max-sm:flex-wrap max-sm:text-[10px]">
          <TravelExploreIcon aria-hidden="true" sx={{ fontSize: 16 }} className="text-[#ff6b00]" />
          <span className="text-[#ff6b00]">Built in India.</span> Trusted Worldwide.
        </p>
      </div>
    </section>
  );
};

export default DnaHero;

