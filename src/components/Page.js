import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useGlobalStore } from '../state';
import { usePresence } from 'framer-motion';

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
  const [isPresent] = usePresence();

  useEffect(() => {
    if (previousPageIndex != page.position) {
      console.log(previousPageIndex);
      console.log(page.position);
      setPageLeftToRight(previousPageIndex > page.position);
      console.log(previousPageIndex > page.position);
      setPreviousPageIndex(page.position);
    }
    return () => {
      console.log('unmounting: ' + page.position + ' - ' + page.name);
    };
  }, [isPresent]);
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
      initial={pageLeftToRight ? 'outRight' : 'outLeft'}
      animate='in'
      exit={pageLeftToRight ? 'outLeft' : 'outRight'}
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

Page.propTypes = {
  page: PropTypes.object,
  header: PropTypes.boolean,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Page;
