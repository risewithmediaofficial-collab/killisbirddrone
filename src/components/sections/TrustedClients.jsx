import React from 'react';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import SectionHeader from '../SectionHeader';

const voices = [
  {
    quote: 'Killis Bird components set a new benchmark for precision and reliability. Their custom UAV brushless motors and SWARM control systems completely transformed our telemetry operations.',
    name: 'Rajiv Sharma',
    initials: 'RS',
  },
  {
    quote: 'The attention to aerostructural engineering detail is extraordinary. We have partnered with them for three consecutive custom drone fleet builds and achieved 100% mission success.',
    name: 'Priya Nair',
    initials: 'PN',
  },
  {
    quote: 'Unmatched structural integrity, lightweight carbon frames, and incredible technical support. Killis Bird is truly a world-class aerospace component partner.',
    name: 'Arjun Menon',
    initials: 'AM',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const cardVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 14 },
  visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] } },
};

const TrustedClients = () => {
  return (
    <>
      {/* Testimonials */}
      <section data-stack-section className="section bg-white relative overflow-hidden border-t border-b border-black/[0.07]">
        <div className="max-w-content mx-auto px-6 md:px-8 relative z-10">

          {/* Split header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8 mb-12 border-b border-black/[0.07] pb-10">
            <div>
              <SectionHeader eyebrow="Voices of Trust" title="Client" orangeTitle="Testimonials" centered={false} className="mb-0" />
            </div>
            <div className="hidden lg:flex justify-end items-end">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-right"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Verified Partners
                </p>
                <p className="font-heading font-bold text-3xl text-black tracking-tight mt-1">
                  3<span className="text-skyroot">+</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/[0.07]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {voices.map((v, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative border-r border-b border-black/[0.07] p-8 transition-all duration-200 hover:bg-[rgba(249,115,22,0.02)] flex flex-col"
              >
                {/* Index + stars row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-bold text-xs text-skyroot"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em' }}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <StarIcon key={si} sx={{ fontSize: 11, color: '#f97316' }} />
                    ))}
                  </div>
                </div>

                {/* Quote icon */}
                <FormatQuoteIcon sx={{ fontSize: 28, color: '#f97316', opacity: 0.22, mb: 1.5 }} />

                {/* Quote text */}
                <p className="text-black/75 text-sm leading-relaxed italic flex-grow mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{v.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-black/[0.07] pt-5 mt-auto">
                  <div className="w-9 h-9 shrink-0 bg-skyroot text-white flex items-center justify-center font-bold text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {v.initials}
                  </div>
                  <p className="font-heading font-bold text-black text-sm">{v.name}</p>
                </div>

                {/* Orange left-border reveal on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-skyroot scale-y-0 origin-bottom transition-transform duration-200 ease-out group-hover:scale-y-100" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default TrustedClients;
