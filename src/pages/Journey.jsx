import { useRef } from 'react';
import { Link } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import CornerBrackets from '../components/CornerBrackets';
import ImageFrame from '../components/common/ImageFrame';
import SecondaryHero from '../components/common/SecondaryHero';
import SecondarySectionIntro from '../components/common/SecondarySectionIntro';
import SecondaryCta from '../components/common/SecondaryCta';
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

const storyBands = [
  { left: milestones[0], right: milestones[1], image: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=800&q=80', watermark: 'ORIGIN' },
  { left: milestones[2], right: milestones[3], image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', watermark: 'GROWTH' },
  { left: milestones[4], right: milestones[5], image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&q=80', watermark: 'SWARM' },
  { left: milestones[6], right: milestones[7], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', watermark: 'AVIONICS' },
];

const Journey = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Journey" description="Killis Bird — Shape the Future With Us. Our story, milestones, and careers." />
      <SecondaryHero eyebrow="Our Story" title="Shape the Future" highlight="With Us." description="From a single prototype to a globally trusted name — every milestone is a testament to our relentless pursuit of excellence." watermark="2025+" />

      <section data-stack-section className="bg-white py-[110px] max-sm:py-[72px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="Milestones" title="Our" highlight="Journey" description="A timeline of ideas, breakthroughs, partnerships, and bold engineering decisions that shaped Killis Bird." />
        </div>
      </section>

      {storyBands.map((band, index) => (
        <section key={band.watermark} data-stack-section className={`relative overflow-hidden py-[110px] max-sm:py-[72px] ${index % 2 === 0 ? 'bg-[#fff8f1]' : 'bg-white'}`}>
          <ParallaxWatermark className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${index % 2 === 0 ? 'left-0 text-[#ff6b00]/[0.06]' : 'right-0 text-[#111111]/[0.05]'}`} speed={22}>{band.watermark}</ParallaxWatermark>
          <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
            <div className={index % 2 === 1 ? 'xl:order-last' : ''}>
              <div className="mt-10 grid gap-5">
                {[band.left, band.right].map((milestone) => (
                  <article key={milestone.year} className="book-reveal-card relative rounded-[18px] border border-[#f1dfd1] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(17,21,26,0.06)]">
                    <div className="text-[34px] font-extrabold leading-none text-[#ff6b00]">{milestone.year}</div>
                    <h3 className="mt-4 text-[24px] font-extrabold text-[#111111]">{milestone.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.78] text-[#67707d]">{milestone.desc}</p>
                    <CornerBrackets color="#f97316" size="10px" thickness="1px" hoverShift />
                  </article>
                ))}
              </div>
            </div>
            <div className={index % 2 === 1 ? 'xl:order-first' : ''}><ImageFrame variant="diagonal" src={band.image} alt={band.watermark} width="760" height="560" /></div>
          </div>
        </section>
      ))}

      <section data-stack-section className="bg-white py-[110px] max-sm:py-[72px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="Careers" title="Join the" highlight="Mission" description="We are always looking for passionate engineers, innovators, and dreamers who want to shape the future of flight." />
          <div className="mt-10 divide-y divide-[#f1dfd1] border-y border-[#f1dfd1]">
            {openings.map((opening, index) => (
              <div key={opening.role} className="book-reveal-card flex flex-col gap-5 py-7 md:flex-row md:items-center md:justify-between">
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

      <SecondaryCta title="Be Part of Our Next Chapter" description="Whether through partnership, collaboration, or career — there is a place for you in the Killis Bird story." primaryLabel="Partner With Us" primaryTo="/contact" secondaryLabel="careers@killisbird.com" secondaryHref="mailto:careers@killisbird.com" />
    </div>
  );
};

export default Journey;
