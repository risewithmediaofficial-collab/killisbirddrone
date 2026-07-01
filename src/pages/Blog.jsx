import { useRef } from 'react';
import SEO from '../components/SEO';
import useBookScrollEffects from '../hooks/useBookScrollEffects';
import ComingSoon from '../components/ComingSoon';

const Blog = () => {
  const pageRef = useRef(null);
  useBookScrollEffects(pageRef);

  return (
    <div ref={pageRef}>
      <SEO title="Blog" description="Killis Bird — Insights, innovation stories, and technical perspectives." />
      <ComingSoon title="Blog — Coming Soon" subtitle="We’re curating articles and perspectives. Content will appear here soon." />
    </div>
  );
};

export default Blog;
