import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useGlobalStore, useThemeStore } from '../state';
import { usePresence } from 'framer-motion';

const Page = ({ page, children }) => {
  const { setPreviousPageIndex, previousPageIndex } = useGlobalStore(
    (state) => ({
      setPreviousPageIndex: state.setPreviousPageIndex,
      previousPageIndex: state.previousPageIndex,
    })
  );

  const { colorPrimary } = useThemeStore((state) => {
    return {
      colorPrimary: state.theme.colorPrimary,
    };
  });

  const [pageDirection, setPageDirection] = useGlobalStore((state) => [
    state.pageDirection,
    state.setPageDirection,
  ]);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
    }
  }, [isPresent, safeToRemove]);

  useEffect(() => {
    if (previousPageIndex != page.position) {
      setPageDirection(previousPageIndex > page.position ? 1 : -1);
      setPreviousPageIndex(page.position);
    }
    return () => {};
  }, [
    isPresent,
    page.position,
    previousPageIndex,
    setPageDirection,
    setPreviousPageIndex,
  ]);

  const pageVariants = {
    in: {
      opacity: 1,
      x: '0',
    },
    init: (direction) => {
      const dX = direction == 0 ? '0' : direction < 0 ? '100vw' : '-100vw';
      return { opacity: 0, x: dX };
    },
    out: (direction) => {
      const dX = direction == 0 ? '0' : direction > 0 ? '100vw' : '-100vw';
      return { opacity: 0, x: dX };
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
      className={'page ' + page.class}
      initial='init'
      animate='in'
      exit='out'
      custom={pageDirection}
      variants={pageVariants}
      transition={pageTransition}
      style={colorPrimary}>
      {children}
    </motion.section>
  );
};

Page.propTypes = {
  page: PropTypes.object,
  header: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Page;
