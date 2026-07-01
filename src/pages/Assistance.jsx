import { useRef } from 'react';
import SEO from '../components/SEO';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import ComingSoon from '../components/ComingSoon';

const Assistance = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Assistance" description="Killis Bird support and consultancy services for UAV integration and after-sales." />
      <ComingSoon title="Assistance — Coming Soon" subtitle="We’re preparing resources for Assistance. Check back later for services and support details." />
    </div>
  );
};

export default Assistance;
