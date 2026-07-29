// src/pages/OurDNA.jsx
import { useRef } from 'react';
import SEO from '../components/SEO';
import DnaHero from '../components/sections/DnaHero';
import FoundationSection from '../components/sections/FoundationSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import PeopleSection from '../components/sections/PeopleSection';
import DnaCtaSection from '../components/sections/DnaCtaSection';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const IMG = {
  dna:    'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=900&q=85&auto=format&fit=crop',
  team1:  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
  team2:  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop',
  team3:  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop',
};

const team = [
  { name: 'Co-Founder', role: 'Chief Executive Officer',   img: IMG.team1 },
  { name: 'Co-Founder', role: 'Chief Technology Officer',  img: IMG.team2 },
  { name: 'Co-Founder', role: 'Chief Operations Officer',  img: IMG.team3 },
];

const OurDNA = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="overflow-hidden bg-white">
      <SEO
        title="Our DNA"
        description="Killis Bird — Imagine, Ideate, Innovate. Discover the story, mission, values, and people behind India's premier UAV component manufacturer."
      />

      <DnaHero
        eyebrow="Our Story"
        title="Where Precision"
        highlight="Meets Purpose."
        description="Founded in 2018, Killis Bird Technologies is India's dedicated UAV component manufacturer — engineering excellence from Krishnagiri to the world."
        watermark="DNA"
      />

      <FoundationSection image={IMG.dna} />

      <VisionMissionSection />

      <PeopleSection team={team} />

      <DnaCtaSection />
    </div>
  );
};

export default OurDNA;
