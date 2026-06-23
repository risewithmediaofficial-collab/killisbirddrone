import { useRef } from 'react';
import SEO from '../components/SEO';
import FoundationSection from '../components/sections/FoundationSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import PeopleSection from '../components/sections/PeopleSection';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const IMG = {
  dna: '/assests/dna.jpg',
  team1: '/assests/founder1.jpg',
  team2: '/assests/founder2.jpg',
  team3: '/assests/founder3.jpg',
};

const team = [
  { name: 'Founder 01', img: IMG.team1 },
  { name: 'Founder 02', img: IMG.team2 },
  { name: 'Founder 03', img: IMG.team3 },
];

const OurDNA = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="overflow-hidden bg-white font-sans text-[#111111]">
      <SEO title="Our DNA" description="Killis Bird :: Imagine, IDeate, Innovate — Where Precision Meets Innovation." />
      <FoundationSection image={IMG.dna} />
      <VisionMissionSection />
      <PeopleSection team={team} />
    </div>
  );
};

export default OurDNA;


