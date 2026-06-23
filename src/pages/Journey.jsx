import { useRef } from 'react';
import { Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import FlowingMenu from '../components/FlowingMenu';
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

  return (
    <div ref={pageRef}>
      <SEO title="Journey" description="Killis Bird — Shape the Future With Us. Our story, milestones, and careers." />

      {/* ── MILESTONES: FlowingMenu ── */}
      <section data-stack-section className="relative overflow-hidden bg-white">
        {/* Section header */}
        <div className="relative mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)] pt-[80px] pb-[48px]">
          <ParallaxWatermark
            className="right-0 top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,14rem)] text-[#ff6b00]/[0.06]"
            speed={20}
          >
            TIMELINE
          </ParallaxWatermark>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#ff6b00]">
              
            </div>
            <h2 className="mt-5 text-[clamp(36px,5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#111111]">
               <span className="text-[#ff6b00]"></span>
            </h2>
            <p className="max-w-[560px] text-[16px] leading-[1.8] text-[#67707d]">
              From a bold idea in 2018 to a globally trusted UAV component brand — every year marks a new chapter in our pursuit of precision and innovation.
            </p>
          </div>
        </div>

        {/* FlowingMenu milestones */}
        <div style={{ height: `${milestones.length * 88}px`, minHeight: '600px', position: 'relative' }}>
          <FlowingMenu
            items={milestones}
            speed={18}
            textColor="#111111"
            bgColor="#ffffff"
            marqueeBgColor="#ff6b00"
            marqueeTextColor="#ffffff"
            borderColor="rgba(17,21,26,0.1)"
          />
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
