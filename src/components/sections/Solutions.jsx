import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../SectionHeader';
import useParallax from '../../hooks/useParallax';
import SmartImage from '../SmartImage';

const industries = [
  { id: '01', title: 'Precision Agriculture', desc: 'Crop-mapping, irrigation-control, and yield-monitoring UAV solutions.' },
  { id: '02', title: 'Industrial Inspection', desc: 'Infrastructure, pipeline, and tower inspection with real-time telemetry.' },
  { id: '03', title: 'Defence & Surveillance', desc: 'Mission-critical surveillance and border-patrol aerial systems.', highlight: true },
  { id: '04', title: 'Research & Aerospace', desc: 'High-altitude data collection and experimental aviation platforms.' },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 10 },
  visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
};

const SolutionsImage = () => {
  const ref = useParallax(12);
  return (
    <div className="relative border border-black/[0.09] img-hover-mask" style={{ height: '500px' }}>
      <SmartImage
        ref={ref}
        src="/assests/solutions.jpg"
        alt="Killis Bird aerospace engineering drone"
        className="w-full object-cover"
        style={{ height: '120%', top: 0, position: 'absolute' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Technical coordinate overlay */}
      <span className="tech-overlay-label top-4 left-4">12.9° N · AEROSPACE STD</span>
      <span className="tech-overlay-label bottom-4 right-4 text-right">SYS · ACTIVE</span>
      {/* Thin corner lines */}
      <div className="tech-overlay-line top-0 left-0 w-[40px] h-px" />
      <div className="tech-overlay-line top-0 left-0 w-px h-[40px]" />
      <div className="tech-overlay-line bottom-0 right-0 w-[40px] h-px" />
      <div className="tech-overlay-line bottom-0 right-0 w-px h-[40px]" />

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <span className="text-[9px] font-bold text-skyroot uppercase tracking-widest block mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          AEROSPACE STANDARDS
        </span>
        <h3 className="font-heading font-bold text-white text-xl md:text-2xl leading-tight tracking-tight">
          Fly higher, farther, and faster with Killis Bird components.
        </h3>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <section data-stack-section className="bg-white relative overflow-hidden px-6 py-[72px] md:px-8 lg:py-[88px]">
      <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

        <div className="flex flex-col items-center mb-11 max-w-3xl mx-auto">
          <SectionHeader eyebrow="" title="Industries We" orangeTitle="Empower" centered />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: Numbered list */}
          <div className="lg:col-span-7">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {industries.map((ind) => (
                <motion.div
                  key={ind.id}
                  variants={itemVariants}
                  className="numbered-list-item group px-2 hover:px-4 transition-all duration-200"
                >
                  <span
                    className="shrink-0 font-bold text-skyroot leading-none mt-0.5 w-8 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
                  >
                    {ind.id}
                  </span>
                  <div className="flex-1">
                    <h4
                      className={`font-heading font-bold text-lg leading-tight mb-1 transition-colors duration-150 ${ind.highlight ? 'text-skyroot' : 'text-black group-hover:text-skyroot'}`}
                    >
                      {ind.title}
                      {ind.highlight && (
                        <span className="ml-2 text-[9px] font-bold uppercase tracking-widest text-skyroot/70 border border-skyroot/25 px-1.5 py-0.5 align-middle" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Priority
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-black/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {ind.desc}
                    </p>
                  </div>
                  <ArrowForwardIcon
                    sx={{ fontSize: 16, color: '#f97316', opacity: 0, transition: 'opacity 0.15s ease', flexShrink: 0, mt: 0.5 }}
                    className="group-hover:!opacity-100"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 flex justify-center sm:justify-start"
            >
              <Link to="/contact" className="btn-primary">
                Partner With Us <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Parallax image with technical overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <SolutionsImage />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;
