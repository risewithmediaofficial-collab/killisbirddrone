import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import SectionHeader from '../SectionHeader';

const stats = [
  { value: '2023', label: 'Born', sub: 'Founded on 19 May 2023' },
  { value: '4', label: 'Testbeds', sub: 'Quad, Hexa, Fixed-Wing, VTOL' },
  { value: 'SPARROW', label: 'FCC', sub: 'Open firmware support' },
  { value: 'VELO', label: 'Frame', sub: 'High-speed racing frame' },
];

const features = [
  {
    title: 'Imagine',
    body: 'Visionary thinking shapes every Killis Bird creation.',
  },
  {
    title: 'Ideate',
    body: 'Rigorous engineering turns concepts into robust UAV components.',
  },
  {
    title: 'Innovate',
    body: 'Continuous innovation powers aerospace and defense possibilities.',
  },
];

const cellVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }
  }),
};

const Company = () => (
  <section
    data-stack-section
    className="bg-white divide-top divide-bottom"
    aria-labelledby="company-heading"
  >
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            variants={cellVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className={`py-10 px-6 lg:px-10 text-left ${i < 3 ? 'border-r border-neutral-200' : ''} ${i < 2 ? 'border-b border-neutral-200 lg:border-b-0' : ''} group cursor-default`}
          >
            <div
              className="font-heading font-bold text-black leading-none mb-2"
              style={{ fontSize: s.value.length > 5 ? 'clamp(1.45rem,2.5vw,2.4rem)' : 'clamp(2rem,3.5vw,3rem)' }}
              aria-label={`${s.value} - ${s.label}`}
            >
              {s.value}
            </div>
            <div className="text-[0.6875rem] font-semibold uppercase text-black mb-1"
                 style={{ fontFamily: 'var(--font-label)' }}>
              {s.label}
            </div>
            <div className="text-neutral-400 text-[0.625rem]"
                 style={{ fontFamily: 'var(--font-label)' }}>
              {s.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="container border-t border-neutral-100 py-12 lg:py-16">
      <FadeIn direction="up">
        <SectionHeader
          title="The DNA of"
          highlight="Killis Bird"
          centered
          className="mb-8"
          id="company-heading"
        />
        <p className="mx-auto max-w-3xl text-center text-neutral-600 text-base leading-relaxed">
          A quick view of the engineering markers behind Killis Bird: indigenous development, test platforms, flight-control systems, and performance-focused frames.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mt-12">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.1} direction="up">
            <div
              className={`flex flex-col gap-4 p-8 lg:p-10 ${i < 2 ? 'lg:border-r border-neutral-200' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-neutral-200' : ''}`}
            >
              <div className="icon-box font-heading font-bold" aria-hidden="true">{i + 1}</div>
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

export default Company;
