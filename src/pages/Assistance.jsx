import { useRef } from 'react';
import SEO from '../components/SEO';
import ParallaxWatermark from '../components/ParallaxWatermark';
import CornerBrackets from '../components/CornerBrackets';
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
  { Icon: TuneIcon, title: 'Component Customization' },
  { Icon: EngineeringIcon, title: 'Technical Consultation' },
  { Icon: LocalShippingIcon, title: 'Supply Chain Support' },
  { Icon: SupportAgentIcon, title: 'After-Sales Service' },
  { Icon: SchoolIcon, title: 'Training & Knowledge Transfer' },
  { Icon: VerifiedIcon, title: 'Warranty & Quality Assurance' }
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

const Assistance = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Assistance" description="Killis Bird support and consultancy services for UAV integration and after-sales." />

      <section data-stack-section className="bg-white py-[64px] max-sm:py-[44px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="What We Offer" title="Our Support" highlight="Services" description="Every engagement is tailored to deliver mission-ready performance, dependable integration, and long-term support." />
        </div>
      </section>

      {serviceGroups.map((group, index) => (
        <section key={group.title} data-stack-section className={`relative overflow-hidden py-[64px] max-sm:py-[44px] ${index % 2 === 0 ? 'bg-[#fff8f1]' : 'bg-white'}`}>
          <ParallaxWatermark className={`top-1/2 -translate-y-1/2 text-[clamp(6rem,12vw,15rem)] ${index % 2 === 0 ? 'right-0 text-[#111111]/[0.05]' : 'left-0 text-[#ff6b00]/[0.06]'}`} speed={22}>{group.watermark}</ParallaxWatermark>
          <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] items-center gap-[clamp(44px,6vw,84px)] px-[clamp(20px,5vw,80px)] max-xl:grid-cols-1">
            <div className={index % 2 === 1 ? 'xl:order-last' : ''}>
              <SecondarySectionIntro eyebrow={`0${index + 1} ${group.title}`} title={group.title} description="Specialist expertise, fast response, and dependable execution at every stage." className="max-w-[640px]" />
              <div className="mt-10 grid gap-8">
                {group.items.map(({ Icon, title, desc }) => (
                  <article key={title} className="book-reveal-text relative flex items-start gap-4 border-b border-[#f1dfd1]/40 pb-6 last:border-b-0 last:pb-0">
                    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#fff0e5] text-[#ff6b00]"><Icon sx={{ fontSize: 26 }} /></span>
                    <div>
                      <h3 className="text-[21px] font-extrabold text-[#111111]">{title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.78] text-[#67707d]">{desc}</p>
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

      <section data-stack-section className="bg-white py-[64px] max-sm:py-[44px]">
        <div className="mx-auto w-full max-w-[1380px] px-[clamp(20px,5vw,80px)]">
          <SecondarySectionIntro eyebrow="How It Works" title="Our" highlight="Process" description="A transparent workflow designed to move from idea to mission-ready delivery with speed and confidence." />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((step) => (
              <article key={step.num} className="book-reveal-text relative">
                <div className="text-[40px] font-extrabold leading-none text-[#ff6b00]">{step.num}</div>
                <h3 className="mt-4 text-[20px] font-extrabold text-[#111111]">{step.label}</h3>
                <p className="mt-2 text-[15px] leading-[1.78] text-[#67707d]">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assistance;
