import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Components Delivered', sub: 'UAV precision parts' },
  { value: '20+', label: 'Industry Partners', sub: 'Across sectors' },
  { value: '5+', label: 'Years Innovating', sub: 'Est. 2018' },
  { value: '100%', label: 'Made in India', sub: '🇮🇳 Indigenous' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cellVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 12 },
  visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const Company = () => {
  return (
    <section data-stack-section className="bg-white border-b border-black/[0.07] relative">
      <div className="max-w-content mx-auto px-6 md:px-8">

        {/* Split-screen row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-black/[0.07]">

          {/* Left — structural label block */}
          <div className="flex flex-col justify-center py-12 lg:py-16 lg:pr-16 lg:border-r lg:border-black/[0.07]">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="section-label-technical"
            >
              Performance Data
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ clipPath: 'inset(0 0 100% 0)', y: 16, opacity: 0 }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold text-black leading-[1.05] tracking-technical"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)' }}
              >
                Precision at<br />
                <span className="text-skyroot">Every Scale.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-sm leading-relaxed text-black/55 max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Indigenous engineering delivering measurable results — from component to mission-ready system.
            </motion.p>
          </div>

          {/* Right — stat matrix */}
          <motion.div
            className="stat-matrix grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={cellVariants}
                className="stat-matrix-cell p-8 lg:p-10 group cursor-default"
              >
                <div
                  className="font-heading font-bold text-black group-hover:text-skyroot transition-colors duration-200 leading-none mb-2 tracking-technical"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)' }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-black mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {s.label}
                </div>
                <div className="text-[10px] text-black/40 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Company;
