import React from 'react';
import { motion } from 'framer-motion';
import { useGlobalStore } from '../state';

const Page = ({ page, children }) => {
  const { colorPrimary, colorAccent, borderColorAccent } = useGlobalStore(
    state => ({
      colorAccent: state.theme.colorAccent,
      colorPrimary: state.theme.colorPrimary,
      borderColorAccent: state.theme.borderColorAccent,
    })
  );
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
      style={colorPrimary}>
      <h1 style={{ ...colorAccent, ...borderColorAccent }}>{page.name}</h1>
      {children}
    </motion.section>
  );
};

export default Page;
