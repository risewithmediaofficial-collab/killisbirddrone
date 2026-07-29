// src/components/sections/Company.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const stats = [
  { value: '500+', label: 'Components Delivered', sub: 'UAV precision parts' },
  { value: '20+',  label: 'Industry Partners',    sub: 'Across sectors' },
  { value: '5+',   label: 'Years Innovating',     sub: 'Est. 2018' },
  { value: '100%', label: 'Made in India',         sub: '🇮🇳 Indigenous' },
];

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Indigenous Engineering',
    body: 'Designed and manufactured in India from raw material to assembly.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Mission-Critical Quality',
    body: 'Rigorous testing protocols meeting defence and aviation standards.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'End-to-End Support',
    body: 'Dedicated engineering collaboration from design to field deployment.',
  },
];

const cellVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }
  }),
};

const Company = () => {
  return (
    <section
      data-stack-section
      className="bg-white divide-top divide-bottom"
      aria-labelledby="company-heading"
    >
      {/* ─ Stats row ─ */}
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cellVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className={`py-10 px-6 lg:px-10 text-left ${i < 3 ? 'border-r border-neutral-200' : ''} ${i < 2 ? 'border-b border-neutral-200 lg:border-b-0' : ''} group cursor-default`}
            >
              <div
                className="font-heading font-bold text-black leading-none mb-2"
                style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', letterSpacing: '-0.04em' }}
                aria-label={`${s.value} — ${s.label}`}
              >
                {s.value}
              </div>
              <div className="text-[0.6875rem] font-semibold uppercase tracking-widest text-black mb-1"
                   style={{ fontFamily: 'var(--font-label)' }}>
                {s.label}
              </div>
              <div className="text-neutral-400 text-[0.625rem] tracking-wide"
                   style={{ fontFamily: 'var(--font-label)' }}>
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─ Feature row ─ */}
      <div className="container border-t border-neutral-100 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div
                className={`flex flex-col gap-4 p-8 lg:p-10 ${i < 2 ? 'lg:border-r border-neutral-200' : ''} ${i === 0 ? 'border-b lg:border-b-0 border-neutral-200' : ''} ${i === 1 ? 'border-b lg:border-b-0 border-neutral-200' : ''}`}
              >
                <div className="icon-box" aria-hidden="true">{f.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-black text-lg mb-2">{f.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-[36ch]">{f.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
