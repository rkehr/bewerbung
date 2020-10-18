import React from 'react';
import { motion } from 'framer-motion';

const Page = ({ children }) => {
  const pageVariants = {
    in: {
      opacity: 1,
      x: '0vw',
    },
    outLeft: {
      opacity: 0,
      x: '-100vw',
    },
    outRight: {
      opacity: 0,
      x: '100vw',
    },
  };
  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  };
  return (
    <motion.section
      className='page'
      initial='outRight'
      animate='in'
      exit='outLeft'
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.section>
  );
};

export default Page;
