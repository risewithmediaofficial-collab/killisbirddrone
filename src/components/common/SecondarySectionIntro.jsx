import SectionLabel from './SectionLabel';
import SplitHeading from './SplitHeading';

const SecondarySectionIntro = ({ eyebrow, title, highlight, description, centered = false, className = '' }) => (
  <div className={`reveal-group ${centered ? 'mx-auto text-center' : ''} ${className}`.trim()}>
    <SectionLabel className={centered ? 'justify-center' : ''}>{eyebrow}</SectionLabel>
    <SplitHeading className={centered ? 'mx-auto' : ''} highlight={highlight}>
      {title}
    </SplitHeading>
    <span className={`my-7 block h-[3px] w-[52px] bg-[#ff6b00] ${centered ? 'mx-auto' : ''}`} aria-hidden="true" />
    {description ? (
      <p className={`text-lg leading-[1.78] text-[#67707d] max-sm:text-base ${centered ? 'mx-auto max-w-[720px]' : 'max-w-[720px]'}`.trim()}>
        {description}
      </p>
    ) : null}
  </div>
);

export default SecondarySectionIntro;
