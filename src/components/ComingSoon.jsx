import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ title = 'Coming Soon', subtitle = "We're working on this page — check back soon." }) => (
  <div className="min-h-[60vh] flex items-center justify-center bg-white">
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center p-8 max-w-[820px]"
    >
      <motion.h1
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-[clamp(28px,6vw,56px)] font-extrabold text-[#111111] mb-4"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        className="text-lg text-[#67707d]"
      >
        {subtitle}
      </motion.p>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, delay: 0.6 }}
        className="mt-8 mx-auto h-1 w-40 bg-gradient-to-r from-[#ff6b00] via-[#ff9a4d] to-[#ff6b00] rounded-full opacity-80"
      />
    </motion.div>
  </div>
);

export default ComingSoon;
