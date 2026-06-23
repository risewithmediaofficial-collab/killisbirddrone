import SectionLabel from './SectionLabel';
import SplitHeading from './SplitHeading';

const SecondarySectionIntro = ({ eyebrow, title, highlight, description, centered = false, className = '' }) => (
  <div className={`reveal-group ${centered ? 'mx-auto text-center' : ''} ${className}`.trim()}>
    <SectionLabel className={centered ? 'justify-center' : ''}>{eyebrow}</SectionLabel>
    <SplitHeading className={centered ? 'mx-auto' : ''} highlight={highlight}>
      {title}
    </SplitHeading>
  </div>
);

export default SecondarySectionIntro;
