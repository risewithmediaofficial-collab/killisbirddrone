import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';

const SectionHeader = ({ eyebrow, title, orangeTitle, centered = true, className = '' }) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center flex flex-col items-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`section-label-technical ${centered ? 'justify-center' : ''}`}
        >
          {eyebrow}
        </motion.div>
      )}
      <div className="overflow-hidden">
        <AnimatedTitle
          as="h2"
          title={title}
          highlight={orangeTitle}
          className="mb-0 py-1"
          textClassName="font-heading text-h2 font-bold leading-[1.1] text-black tracking-technical"
          baseOpacity={0.14}
          baseRotation={1.2}
          blurStrength={7}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
