import { useRef } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import ImageFrame from '../components/common/ImageFrame';
import OrangeButton from '../components/common/OrangeButton';
import SecondarySectionIntro from '../components/common/SecondarySectionIntro';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import TuneIcon from '@mui/icons-material/Tune';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';

const services = [
  { Icon: TuneIcon, title: 'Component Customization', desc: 'Precision-engineered parts tailored to your exact payload, environment, and performance targets.' },
  { Icon: EngineeringIcon, title: 'Technical Consultation', desc: 'Expert advisory from our aerospace engineers — from concept to operational deployment.' },
  { Icon: LocalShippingIcon, title: 'Supply Chain Support', desc: 'Reliable, quality-assured logistics designed for rapid programme delivery.' },
  { Icon: SupportAgentIcon, title: 'After-Sales Service', desc: 'Dedicated post-deployment support, field assistance, and rapid replacement protocols.' },
  { Icon: SchoolIcon, title: 'Training & Knowledge Transfer', desc: 'Structured training programmes for your technical teams — hands-on and remote.' },
  { Icon: VerifiedIcon, title: 'Warranty & Quality Assurance', desc: 'ISO-aligned quality processes and comprehensive warranty backed by rigorous testing.' },
];

const steps = [
  { num: '01', label: 'Consultation', desc: 'We understand your requirements and define the scope.' },
  { num: '02', label: 'Solution Design', desc: 'Our engineers design a tailored approach for your mission.' },
  { num: '03', label: 'Engineering', desc: 'Components are precision-built and quality-verified.' },
  { num: '04', label: 'Delivery', desc: 'On-time, quality-assured delivery to your location.' },
  { num: '05', label: 'Support', desc: 'Ongoing post-deployment assistance and service.' },
];

const serviceGroups = [
  { title: 'Customization & Consultation', watermark: 'CUSTOMIZE', image: '/assests/assistance1.jpg', items: [services[0], services[1]] },
  { title: 'Logistics & After-Sales', watermark: 'LOGISTICS', image: '/assests/assistance2.jpg', items: [services[2], services[3]] },
  { title: 'Training & Quality', watermark: 'TRAINING', image: '/assests/assistance3.jpg', items: [services[4], services[5]] },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 10 },
  visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
};

const Assistance = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Assistance" description="Killis Bird support and consultancy services for UAV integration and after-sales." />

      {serviceGroups.map((group, index) => (
        <section
          key={group.title}
          data-stack-section
          className={`relative overflow-hidden py-[64px] max-sm:py-[44px] ${index % 2 === 0 ? 'bg-[#fff8f1]' : 'bg-white'}`}
        >
          <ParallaxWatermark
            className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${index % 2 === 0 ? 'right-0 text-[#111111]/[0.04]' : 'left-0 text-[#ff6b00]/[0.05]'}`}
            speed={22}
          >
            {group.watermark}
          </ParallaxWatermark>

          <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
            <div className={index % 2 === 1 ? 'xl:order-last' : ''}>
              <SecondarySectionIntro
                eyebrow={`0${index + 1} ${group.title}`}
                title={group.title}
                description="Specialist expertise, fast response, and dependable execution at every stage."
                className="max-w-[640px]"
              />

              <motion.div
                className="mt-8"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {group.items.map(({ Icon, title, desc }) => (
                  <motion.article
                    key={title}
                    variants={itemVariants}
                    className="book-reveal-text relative flex items-start gap-5 py-6 border-b border-[#f1dfd1]/50 last:border-b-0 group transition-all duration-150 hover:pl-2"
                  >
                    <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center bg-[#fff0e5] text-[#ff6b00] border border-[#f1dfd1]/60 transition-colors duration-150 group-hover:bg-[#ff6b00] group-hover:text-white">
                      <Icon sx={{ fontSize: 22 }} />
                    </span>
                    <div>
                      <h3 className="text-[19px] font-extrabold text-[#111111]" style={{ letterSpacing: '-0.02em' }}>{title}</h3>
                      <p className="mt-1.5 text-[14px] leading-[1.78] text-[#67707d]" style={{ fontFamily: 'Inter, sans-serif' }}>{desc}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              <div className="mt-8">
                <OrangeButton to="/contact">Get in Touch</OrangeButton>
              </div>
            </div>

            <div className={index % 2 === 1 ? 'xl:order-first' : ''}>
              <ImageFrame variant="diagonal" src={group.image} alt={group.title} width="760" height="560" />
            </div>
          </div>
        </section>
      ))}

      {/* Process section */}
      <section data-stack-section className="bg-white py-[64px] max-sm:py-[44px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="How It Works" title="Our" highlight="Process" description="A transparent workflow designed to move from idea to mission-ready delivery with speed and confidence." />

          <motion.div
            className="mt-12 stat-matrix grid-cols-1 md:grid-cols-5"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {steps.map((step) => (
              <motion.article
                key={step.num}
                variants={itemVariants}
                className="stat-matrix-cell p-8 group"
              >
                <div className="process-step-num mb-4">{step.num}</div>
                <div className="h-px w-8 bg-[#f1dfd1] group-hover:w-12 group-hover:bg-skyroot transition-all duration-250 mb-4" />
                <h3 className="text-[18px] font-extrabold text-[#111111] mb-2" style={{ letterSpacing: '-0.02em' }}>{step.label}</h3>
                <p className="text-[13px] leading-[1.78] text-[#67707d]" style={{ fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Assistance;
