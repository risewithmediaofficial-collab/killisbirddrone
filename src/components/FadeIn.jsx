import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const isUp = direction === 'up' || direction === 'none';

  const variants = {
    hidden: {
      clipPath: isUp ? 'inset(0 0 100% 0)' : 'inset(0 0 0% 0)',
      opacity: 0,
      y: direction === 'up' ? 16 : direction === 'down' ? -16 : 0,
      x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
    },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
