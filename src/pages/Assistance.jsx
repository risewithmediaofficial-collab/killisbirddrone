import { useRef } from 'react';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import CornerBrackets from '../components/CornerBrackets';
import ImageFrame from '../components/common/ImageFrame';
import OrangeButton from '../components/common/OrangeButton';
import SecondaryHero from '../components/common/SecondaryHero';
import SecondarySectionIntro from '../components/common/SecondarySectionIntro';
import SecondaryCta from '../components/common/SecondaryCta';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import TuneIcon from '@mui/icons-material/Tune';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';

const services = [
  { Icon: TuneIcon, title: 'Component Customization', desc: 'Bespoke UAV components engineered to your exact specifications — from material selection to performance tuning.' },
  { Icon: EngineeringIcon, title: 'Technical Consultation', desc: 'Expert guidance from our aerospace engineers to help you design, integrate, and optimise your UAV platform.' },
  { Icon: LocalShippingIcon, title: 'Supply Chain Support', desc: 'Reliable, on-time delivery of components backed by our robust supply chain and quality assurance protocols.' },
  { Icon: SupportAgentIcon, title: 'After-Sales Service', desc: 'Comprehensive post-deployment support including maintenance, calibration, and component replacement.' },
  { Icon: SchoolIcon, title: 'Training & Knowledge Transfer', desc: 'Structured training programmes equipping your team to maximise UAV platform performance.' },
  { Icon: VerifiedIcon, title: 'Warranty & Quality Assurance', desc: 'Industry-leading warranty coverage backed by our uncompromising quality standards and certification.' },
];

const steps = [
  { num: '01', label: 'Consultation', desc: 'We understand your requirements and define the scope.' },
  { num: '02', label: 'Solution Design', desc: 'Our engineers design a tailored approach for your mission.' },
  { num: '03', label: 'Engineering', desc: 'Components are precision-built and quality-verified.' },
  { num: '04', label: 'Delivery', desc: 'On-time, quality-assured delivery to your location.' },
  { num: '05', label: 'Support', desc: 'Ongoing post-deployment assistance and service.' },
];

const serviceGroups = [
  { title: 'Customization & Consultation', watermark: 'CUSTOMIZE', image: 'https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=800&q=80', items: [services[0], services[1]] },
  { title: 'Logistics & After-Sales', watermark: 'LOGISTICS', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', items: [services[2], services[3]] },
  { title: 'Training & Quality', watermark: 'TRAINING', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', items: [services[4], services[5]] },
];

const Assistance = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Assistance" description="Killis Bird support and consultancy services for UAV integration and after-sales." />
      <SecondaryHero eyebrow="How We Support You" title="End-to-End" highlight="Assistance." description="From concept to deployment and beyond — we stand beside our partners at every stage of their journey." watermark="HELP" />

      <section data-stack-section className="bg-white py-[110px] max-sm:py-[72px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="What We Offer" title="Our Support" highlight="Services" description="Every engagement is tailored to deliver mission-ready performance, dependable integration, and long-term support." />
        </div>
      </section>

      {serviceGroups.map((group, index) => (
        <section key={group.title} data-stack-section className={`relative overflow-hidden py-[110px] max-sm:py-[72px] ${index % 2 === 0 ? 'bg-[#fff8f1]' : 'bg-white'}`}>
          <ParallaxWatermark className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${index % 2 === 0 ? 'right-0 text-[#111111]/[0.05]' : 'left-0 text-[#ff6b00]/[0.06]'}`} speed={22}>{group.watermark}</ParallaxWatermark>
          <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
            <div className={index % 2 === 1 ? 'xl:order-last' : ''}>
              <SecondarySectionIntro eyebrow={`0${index + 1} ${group.title}`} title={group.title} description="Specialist expertise, fast response, and dependable execution at every stage." className="max-w-[640px]" />
              <div className="mt-10 grid gap-5">
                {group.items.map(({ Icon, title, desc }) => (
                  <article key={title} className="book-reveal-card relative rounded-[18px] border border-[#f1dfd1] bg-white px-6 py-6 shadow-[0_18px_42px_rgba(17,21,26,0.06)]">
                    <div className="flex items-start gap-4">
                      <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] bg-[#fff0e5] text-[#ff6b00]"><Icon sx={{ fontSize: 28 }} /></span>
                      <div>
                        <h3 className="text-[21px] font-extrabold text-[#111111]">{title}</h3>
                        <p className="mt-3 text-[15px] leading-[1.78] text-[#67707d]">{desc}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8"><OrangeButton to="/contact">Get in Touch</OrangeButton></div>
            </div>
            <div className={index % 2 === 1 ? 'xl:order-first' : ''}><ImageFrame variant="diagonal" src={group.image} alt={group.title} width="760" height="560" /></div>
          </div>
        </section>
      ))}

      <section data-stack-section className="bg-white py-[110px] max-sm:py-[72px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="How It Works" title="Our" highlight="Process" description="A transparent workflow designed to move from idea to mission-ready delivery with speed and confidence." />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <article key={step.num} className="book-reveal-card relative min-h-[210px] rounded-[18px] border border-[#f1dfd1] bg-[#fff8f1] p-6 shadow-[0_16px_36px_rgba(17,21,26,0.05)]">
                <div className="text-[40px] font-extrabold leading-none text-[#ff6b00]">{step.num}</div>
                <h3 className="mt-5 text-[20px] font-extrabold text-[#111111]">{step.label}</h3>
                <p className="mt-3 text-[15px] leading-[1.78] text-[#67707d]">{step.desc}</p>
                {index < steps.length - 1 ? <span className="absolute right-[-10px] top-1/2 hidden h-[2px] w-5 bg-[#ff6b00]/35 md:block" aria-hidden="true" /> : null}
                <CornerBrackets color="#f97316" size="10px" thickness="1px" hoverShift />
              </article>
            ))}
          </div>
        </div>
      </section>

      <SecondaryCta title="Let Us Assist Your Next Mission" description="Reach out today and let our team craft a tailored support plan for your UAV programme." primaryLabel="Get in Touch" primaryTo="/contact" />
    </div>
  );
};

export default Assistance;
