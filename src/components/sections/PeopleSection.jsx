import { useEffect, useRef, useState } from 'react';
import SectionLabel from '../common/SectionLabel';
import SmartImage from '../SmartImage';

const PeopleSection = ({ team }) => {
  const [active, setActive] = useState(0);
  const total = team.length;
  const autoplayRef = useRef(null);

  // Auto-play cycling through cards one by one
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [total]);

  const handleCardClick = (index) => {
    setActive(index);
    // Reset autoplay timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4000);
  };

  return (
    <section id="people" className="bg-white py-[64px] max-sm:py-[44px] overflow-hidden" aria-labelledby="people-title">
      <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
        
        {/* Header row */}
        <div className="flex items-end justify-between mb-10 max-sm:mb-7">
          <div className="reveal-group">
            <SectionLabel>Our People</SectionLabel>
            <h2 id="people-title" className="mt-2 text-[clamp(26px,3.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111111]">
              The Minds <span className="text-[#ff6b00]">Behind the Mission</span>
            </h2>
          </div>
        </div>

        {/* Collapsing Accordion Row */}
        <div className="flex w-full gap-4 md:gap-6 min-h-[440px] max-sm:min-h-[380px] items-stretch">
          {team.map((member, idx) => {
            const isActive = idx === active;
            return (
              <article
                key={member.name}
                onClick={() => handleCardClick(idx)}
                className={`relative overflow-hidden rounded-[24px] cursor-pointer border border-[#f1dfd1] bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.25,1)] shadow-[0_12px_36px_rgba(17,21,26,0.03)] group ${
                  isActive 
                    ? 'flex-[3.5] border-[#ff6b00]/30 shadow-[0_20px_48px_rgba(17,21,26,0.06)]' 
                    : 'flex-[1]'
                }`}
              >
                {/* Image or Placeholder slot */}
                <div className="absolute inset-0 w-full h-full">
                  <SmartImage
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`} />
                </div>

                {/* Collapsed label (vertical header text shown when collapsed) */}
                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#67707d] rotate-90 whitespace-nowrap opacity-65 max-sm:text-[9px] max-sm:tracking-[0.15em]">
                    Founder 0{idx + 1}
                  </span>
                </div>

                {/* Expanded content (fades in when active) */}
                <div className={`absolute bottom-0 left-0 right-0 p-8 max-sm:p-5 transition-all duration-700 delay-100 flex flex-col justify-end h-1/2 pointer-events-none ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#ff6b00] mb-1">
                    Founder 0{idx + 1}
                  </span>
                  <h3 className="text-[clamp(18px,2.5vw,28px)] font-extrabold leading-tight text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70 max-sm:text-xs">
                    {member.role || 'Co-Founder & Director'}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PeopleSection;
