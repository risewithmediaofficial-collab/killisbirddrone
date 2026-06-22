import { useRef } from 'react';
import SEO from '../components/SEO';
import FoundationSection from '../components/sections/FoundationSection';
import CoreValuesSection from '../components/sections/CoreValuesSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import PeopleSection from '../components/sections/PeopleSection';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const IMG = {
  dna: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1100&q=85',
  values: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1100&q=85',
  team1: 'https://images.unsplash.com/photo-1581092160607-ee67df30d0ec?w=900&q=82',
  team2: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=82',
  team3: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=82',
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
      <SEO title="Our DNA" description="Killis Bird — Imagine, Ideate, Innovate. Where Precision Meets Innovation." />
      <FoundationSection image={IMG.dna} />
      <CoreValuesSection image={IMG.values} />
      <VisionMissionSection />
      <PeopleSection team={team} />
    </div>
  );
};

export default OurDNA;


