import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OrangeButton = ({ to, children, className = '', ...props }) => {
  const hasCustomTextColor = /\btext-/.test(className);
  const textColorClass = hasCustomTextColor ? '' : 'text-white';
  const classes = `inline-flex min-h-[54px] items-center gap-4 bg-[#ff6b00] px-7 font-label text-eyebrow font-bold uppercase tracking-[0.14em] ${textColorClass} no-underline shadow-[0_16px_34px_rgba(255,107,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e85f00] hover:shadow-[0_20px_42px_rgba(255,107,0,0.3)] focus-visible:-translate-y-0.5 focus-visible:bg-[#e85f00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6b00] [&_svg]:transition-transform hover:[&_svg]:translate-x-1.5 ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      <ArrowForwardIcon aria-hidden="true" sx={{ fontSize: 20 }} />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default OrangeButton;
