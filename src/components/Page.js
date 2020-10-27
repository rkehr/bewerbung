import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGlobalStore } from '../state';

const Page = ({ page, header, children }) => {
  const {
    setPreviousPageIndex,
    previousPageIndex,
    colorPrimary,
    colorAccent,
    borderColorAccent,
  } = useGlobalStore(state => ({
    setPreviousPageIndex: state.setPreviousPageIndex,
    previousPageIndex: state.previousPageIndex,
    colorAccent: state.theme.colorAccent,
    colorPrimary: state.theme.colorPrimary,
    borderColorAccent: state.theme.borderColorAccent,
  }));

  const [pageLeftToRight, setPageLeftToRight] = useState(false);

  useEffect(() => {
    if (previousPageIndex != page.position) {
      console.log(previousPageIndex);
      console.log(page.position);
      setPageLeftToRight(previousPageIndex > page.position);
      console.log(previousPageIndex > page.position);
      setPreviousPageIndex(page.position);
    }
  }, [previousPageIndex]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
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
      initial={pageLeftToRight ? 'outLeft' : 'outRight'}
      animate='in'
      exit={pageLeftToRight ? 'outRight' : 'outLeft'}
      variants={pageVariants}
      transition={pageTransition}
      style={colorPrimary}>
      {header && (
        <h1 style={{ ...colorAccent, ...borderColorAccent }}>{page.name}</h1>
      )}
      {children}
    </motion.section>
  );
};

export default Page;
