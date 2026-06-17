// src/components/FadeIn.jsx
// Reusable Framer Motion scroll reveal wrapper
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const from =
    direction === 'up'    ? { y: 40, x: 0 } :
    direction === 'down'  ? { y: -40, x: 0 } :
    direction === 'left'  ? { x: -40, y: 0 } :
    direction === 'right' ? { x: 40, y: 0 }  :
                            { y: 0, x: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
