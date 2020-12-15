import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useGlobalStore, useThemeStore } from '../state';
import { usePresence } from 'framer-motion';

const Page = ({ page, header, children }) => {
  const { setPreviousPageIndex, previousPageIndex } = useGlobalStore(
    (state) => ({
      setPreviousPageIndex: state.setPreviousPageIndex,
      previousPageIndex: state.previousPageIndex,
    })
  );

  const { colorPrimary, colorAccent, borderColorAccent } = useThemeStore(
    (state) => {
      return {
        colorPrimary: state.theme.colorPrimary,
        colorAccent: state.theme.colorAccent,
        borderColorAccent: state.theme.borderColorAccent,
      };
    }
  );

  const [pageDirection, setPageDirection] = useGlobalStore((state) => [
    state.pageDirection,
    state.setPageDirection,
  ]);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
    }
  }, [isPresent]);

  useEffect(() => {
    if (previousPageIndex != page.position) {
      setPageDirection(previousPageIndex > page.position ? 1 : -1);
      setPreviousPageIndex(page.position);
    }
    return () => {};
  }, [isPresent]);

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
      {header && (
        <h1 style={{ ...colorAccent, ...borderColorAccent }}>{page.name}</h1>
      )}
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
