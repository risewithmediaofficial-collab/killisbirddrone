import { useRef } from 'react';
import { Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const milestones = [
  { year: '2018', title: 'The Spark', desc: 'Founded with a mission to revolutionise indigenous UAV component manufacturing in India.' },
  { year: '2019', title: 'First Prototype', desc: 'Developed and field-tested our first precision-engineered brushless motor series for agricultural UAVs.' },
  { year: '2020', title: 'Industry Recognition', desc: 'Awarded “Most Innovative UAV Component Startup” at the National Aerospace Innovation Summit.' },
  { year: '2021', title: 'Defence Partnerships', desc: 'Secured strategic partnerships with leading defence integrators for mission-critical UAV programmes.' },
  { year: '2022', title: 'Swarm Technology', desc: 'Successfully demonstrated swarm coordination modules across a 20-UAV formation flight trial.' },
  { year: '2023', title: 'Global Reach', desc: 'Expanded exports to 10+ countries, establishing Killis Bird as a globally trusted UAV component brand.' },
  { year: '2024', title: 'Next Chapter', desc: 'Launched next-generation avionics platform — redefining reliability, adaptability, and performance standards.' },
  { year: '2025+', title: 'Shape the Future', desc: 'Pioneering autonomous multi-domain aerial systems — the future belongs to those who dare to build it.' },
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

  return (
    <div ref={pageRef}>
      <SEO title="Journey" description="Killis Bird — Shape the Future With Us. Our story, milestones, and careers." />

      <section data-stack-section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8f1_0%,#ffffff_48%,#fff1e6_100%)] py-[110px] max-sm:py-[72px]">
        <ParallaxWatermark className="right-0 top-1/2 -translate-y-1/2 text-[clamp(7rem,14vw,18rem)] text-[#ff6b00]/[0.06]" speed={20}>TIMELINE</ParallaxWatermark>
        <div className="relative mx-auto w-full max-w-[1260px] px-[clamp(20px,5vw,80px)]">
          <div className="absolute bottom-16 left-1/2 top-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#ff6b00]/45 to-transparent max-lg:left-[42px] max-lg:translate-x-0" aria-hidden="true" />

          <div className="grid gap-9">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article key={milestone.year} className="book-reveal-card relative grid grid-cols-[1fr_88px_1fr] items-center gap-7 max-lg:grid-cols-[56px_1fr] max-lg:gap-5">
                  <div className={`max-lg:hidden ${isLeft ? '' : 'col-start-3'}`}>
                    <div className="group relative overflow-hidden rounded-[28px] border border-[#f1dfd1] bg-white/90 p-7 shadow-[0_22px_60px_rgba(17,21,26,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/45 hover:shadow-[0_28px_70px_rgba(255,107,0,0.13)]">
                      <span className="absolute right-[-34px] top-[-38px] text-[96px] font-extrabold leading-none text-[#ff6b00]/[0.06]">{milestone.year}</span>
                      <p className="text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b00]">{milestone.year}</p>
                      <h3 className="mt-4 text-[28px] font-extrabold leading-[1.08] text-[#111111]">{milestone.title}</h3>
                      <p className="mt-4 text-[15px] leading-[1.75] text-[#67707d]">{milestone.desc}</p>
                    </div>
                  </div>

                  <div className="relative z-10 col-start-2 row-start-1 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#ffd2ad] bg-white shadow-[0_16px_40px_rgba(255,107,0,0.18)] max-lg:col-start-1 max-lg:h-[56px] max-lg:w-[56px]">
                    <span className="absolute h-[54px] w-[54px] rounded-full bg-[#ff6b00]/10 max-lg:h-[34px] max-lg:w-[34px]" aria-hidden="true" />
                    <span className="relative flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#ff6b00] text-[13px] font-extrabold text-white max-lg:h-[24px] max-lg:w-[24px] max-lg:text-[11px]">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className={`max-lg:hidden ${isLeft ? 'col-start-3' : 'col-start-1 row-start-1'}`}>
                    <div className={`h-px bg-gradient-to-r ${isLeft ? 'from-[#ff6b00]/45 to-transparent' : 'from-transparent to-[#ff6b00]/45'}`} aria-hidden="true" />
                  </div>

                  <div className="lg:hidden">
                    <div className="relative overflow-hidden rounded-[24px] border border-[#f1dfd1] bg-white/90 p-6 shadow-[0_18px_46px_rgba(17,21,26,0.08)] backdrop-blur">
                      <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#ff6b00]">{milestone.year}</p>
                      <h3 className="mt-3 text-[24px] font-extrabold leading-[1.1] text-[#111111]">{milestone.title}</h3>
                      <p className="mt-3 text-[15px] leading-[1.7] text-[#67707d]">{milestone.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-stack-section data-no-global-reveal className="bg-white pb-[64px] pt-[80px] max-sm:py-[56px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff6b00]">
              <span className="h-px w-10 bg-[#ff6b00]" aria-hidden="true" />
              Careers
            </div>
            <h2 className="mt-5 text-[clamp(42px,6vw,82px)] font-normal leading-[0.95] tracking-[-0.07em] text-[#111111]">
              Join the <span className="text-[#ff6b00]">Mission</span>
            </h2>
            <span className="my-7 block h-[3px] w-[52px] bg-[#ff6b00]" aria-hidden="true" />
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
