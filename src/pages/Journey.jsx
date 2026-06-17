// src/pages/Journey.jsx
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import useGsapReveal from '../hooks/useGsapReveal';
import useParallax from '../hooks/useParallax';
import ParallaxWatermark from '../components/ParallaxWatermark';
import SectionHeader from '../components/SectionHeader';
import CornerBrackets from '../components/CornerBrackets';
import AnimatedTitle from '../components/AnimatedTitle';

const milestones = [
  { year: '2018', title: 'The Spark', desc: 'Founded with a mission to revolutionise indigenous UAV component manufacturing in India.' },
  { year: '2019', title: 'First Prototype', desc: 'Developed and field-tested our first precision-engineered brushless motor series for agricultural UAVs.' },
  { year: '2020', title: 'Industry Recognition', desc: 'Awarded "Most Innovative UAV Component Startup" at the National Aerospace Innovation Summit.' },
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

const JourneyImage = ({ src, alt }) => {
  const parallaxRef = useParallax(15);
  return (
    <div className="img-accent overflow-hidden rounded-none aspect-[4/3] bg-white relative group">
      <img
        ref={parallaxRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
        loading="lazy"
      />
      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
    </div>
  );
};

const Journey = () => {
  return (
    <>
      <SEO title="Journey" description="Killis Bird — Shape the Future With Us. Our story, milestones, and careers." />

      {/* ── Page Banner — Center Aligned (WHITE BACKGROUND) ── */}
      <section className="pt-32 pb-16 px-6 bg-white relative overflow-hidden text-center flex flex-col items-center justify-center border-b border-border">
        <ParallaxWatermark className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(8rem,18vw,22rem)] text-navy-100/30" speed={15}>
          2025+
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
          <div className="eyebrow justify-center">Our Story</div>
          <AnimatedTitle
            as="h1"
            title="Shape the Future"
            highlight="With Us."
            lineBreakBeforeHighlight
            className="mb-4"
            textClassName="font-heading font-bold text-black leading-[1.08] text-center"
            textStyle={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
            baseOpacity={0.16}
            baseRotation={1.5}
            blurStrength={9}
          />
          <p className="text-muted text-body-lg max-w-xl leading-relaxed text-center">
            From a single prototype to a globally trusted name — every milestone is a testament
            to our relentless pursuit of excellence.
          </p>
          <div className="divider-bar mt-6 mx-auto" />
        </div>
      </section>

      {/* ── Section Title ── */}
      <section data-stack-section className="pt-16 pb-2 px-6 bg-white">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <SectionHeader eyebrow="Milestones" title="Our" orangeTitle="Journey" className="!mb-0" />
        </div>
      </section>

      {/* ── Timeline: Alternating Sections ── */}
      {[
        { 
          left: milestones[0], 
          right: milestones[1], 
          img: 'https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=800&q=80',
          watermark: 'ORIGIN',
          label: '2018 – 2019', 
          reverse: false 
        },
        { 
          left: milestones[2], 
          right: milestones[3], 
          img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
          watermark: 'GROWTH',
          label: '2020 – 2021', 
          reverse: true 
        },
        { 
          left: milestones[4], 
          right: milestones[5], 
          img: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=800&q=80',
          watermark: 'SWARM',
          label: '2022 – 2023', 
          reverse: false 
        },
        { 
          left: milestones[6], 
          right: milestones[7], 
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
          watermark: 'AVIONICS',
          label: '2024 – 2025+', 
          reverse: true 
        },
      ].map(({ left, right, img, watermark, label, reverse }, ri) => (
        <section 
          key={ri} 
          data-stack-section
          className={`section relative overflow-hidden ${ri % 2 === 1 ? 'bg-navy-50' : 'bg-white'}`}
        >
          <ParallaxWatermark 
            className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${
              ri % 2 === 1 ? 'right-0 text-navy-200/20' : 'left-0 text-navy-100/30'
            }`} 
            speed={25}
          >
            {watermark}
          </ParallaxWatermark>

          <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
            <FadeIn direction={reverse ? 'right' : 'left'}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Two milestones stacked */}
                <div className={`space-y-10 ${reverse ? 'lg:order-last' : ''}`}>
                  {[left, right].map((m, i) => (
                    <div key={i} className="relative group border border-border bg-white p-6 rounded-none shadow-sm">
                      <div className="font-heading font-bold text-skyroot text-3xl leading-none mb-1.5">{m.year}</div>
                      <h3 className="font-heading font-bold text-black text-lg mb-2">{m.title}</h3>
                      <p className="text-muted text-body leading-relaxed">{m.desc}</p>
                      <CornerBrackets color="#f97316" size="10px" thickness="1.5px" hoverShift />
                    </div>
                  ))}
                </div>
                {/* Image */}
                <div className={reverse ? 'lg:order-first' : ''}>
                  <JourneyImage src={img} alt={label} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* ── Careers (WHITE BACKGROUND) ── */}
      <section data-stack-section className="py-24 px-6 bg-white border-t border-border relative overflow-hidden">
        {/* Background watermark */}
        <ParallaxWatermark className="right-0 bottom-0 translate-y-1/4 text-[clamp(8rem,16vw,20rem)] text-navy-100/30" speed={18}>
          JOIN
        </ParallaxWatermark>
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">
          <SectionHeader eyebrow="Careers" title="Join the" orangeTitle="Mission" />
          <p className="text-muted text-body-lg max-w-xl leading-relaxed mb-8">
            We are always looking for passionate engineers, innovators, and dreamers who want to shape the future of flight.
          </p>

          <div className="space-y-0 mt-8 border-t border-border">
            {openings.map((o, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-b border-border group">
                  <div className="flex items-start gap-5 flex-1">
                    <span className="font-heading font-bold text-3xl text-navy-200 group-hover:text-skyroot-light transition-colors shrink-0 select-none leading-none pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h3 className="font-heading font-bold text-black text-lg group-hover:text-skyroot transition-colors duration-300">
                          {o.role}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-skyroot bg-navy-50 px-2.5 py-0.5 rounded-none border border-navy-100">
                          {o.dept}
                        </span>
                      </div>
                      <p className="text-muted text-sm flex items-center gap-1.5">
                        <WorkIcon sx={{ fontSize: 14, color: '#f97316' }} /> {o.type}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border border-navy-200 hover:border-skyroot hover:bg-navy-50 text-skyroot font-heading font-bold px-6 py-2.5 rounded-none transition-all duration-300 text-sm"
                    >
                      Apply <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section data-stack-section className="section section-orange">
        <div className="grid-pattern text-white" />
        <FadeIn className="relative z-10 max-w-2xl mx-auto text-center">
          <AnimatedTitle
            as="h2"
            title="Be Part of Our Next Chapter"
            className="mb-5"
            textClassName="font-heading font-bold text-white leading-tight text-center"
            textStyle={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            baseOpacity={0.18}
            baseRotation={1.2}
            blurStrength={8}
          />
          <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Whether through partnership, collaboration, or career — there is a place for you in the Killis Bird story.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-white">
              Partner With Us <ArrowForwardIcon />
            </Link>
            <a href="mailto:careers@killisbird.com"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-heading font-bold px-7 py-3.5 rounded-xl transition-all duration-300 text-sm"
            >
              <EmailIcon fontSize="small" /> careers@killisbird.com
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default Journey;
