import { useRef } from 'react';
import SEO from '../components/SEO';
import DnaHero from '../components/sections/DnaHero';
import FoundationSection from '../components/sections/FoundationSection';
import VisionMissionSection from '../components/sections/VisionMissionSection';
import DnaCtaSection from '../components/sections/DnaCtaSection';
import useBookScrollEffects from '../hooks/useBookScrollEffects';

const OurDNA = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef} className="overflow-hidden bg-white">
      <SEO
        title="Our DNA"
        description="Killis Bird - Imagine, Ideate, Innovate. Where Precision Meets Innovation."
      />

      <DnaHero
        title="Killis Bird :: Imagine, Ideate, Innovate"
        highlight=""
        description="Where Precision Meets Innovation"
        watermark="DNA"
      />

      <FoundationSection />

      <VisionMissionSection />

      <DnaCtaSection />
    </div>
  );
};

export default OurDNA;
