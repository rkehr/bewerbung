import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, isToday } from 'date-fns';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from 'framer-motion';

import { useDataStore, useGlobalStore, useThemeStore } from '../state';
import { de } from 'date-fns/locale';

function Occupation({ occupation, index }) {
  const { toggleFocus, isInFocus } = useDataStore((state) => ({
    toggleFocus: state.toggleFocus,
    isInFocus: state.occupationTimeLine[index].isInFocus,
  }));

  const { colorPrimary, borderColorAccent } = useThemeStore((state) => {
    return {
      colorPrimary: state.theme.colorPrimary,
      borderColorAccent: state.theme.borderColorAccent,
    };
  });

  const { name, organisation, interval, color, description } = occupation;
  const occupationStart = format(interval.start, 'd. MMMM y', { locale: de });
  const occupationEnd = isToday(interval.end)
    ? 'Heute'
    : format(interval.end, 'd. MMMM y', { locale: de });

  const newOccupationControls = useAnimation();
  const addOccupationControls = useGlobalStore(
    (state) => state.addOccupationControls
  );
  useEffect(() => {
    addOccupationControls(name + organisation, newOccupationControls);
  }, [addOccupationControls, name, organisation, newOccupationControls]);

  const occupations = useDataStore((state) => state.occupationTimeLine);
  const anyOccupationFocused = occupations.reduce((acc, occupation) => {
    return acc || occupation.isInFocus;
  }, false);

  newOccupationControls.start(
    anyOccupationFocused ? (isInFocus ? 'inFocus' : 'hidden') : 'unfocused'
  );

  const conditionalClass = (cssClass) => {
    return `${cssClass} ${isInFocus && 'isInFocus'}`;
  };
  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={conditionalClass('occupationDisplay')}
        onClick={() => {
          toggleFocus(index);
        }}
        style={{
          ...colorPrimary,
        }}>
        <motion.div
          className={conditionalClass('occupationDisplayBackground')}
          style={{
            background: color,
            opacity: isInFocus ? 1 : 0.3,
            ...borderColorAccent,
          }}
        />
        <div className={conditionalClass('occupationDisplayContent')}>
          <h2>{name}</h2>
          <p>@{organisation}</p>
          <p>
            {occupationStart} bis
            <br />
            {occupationEnd}
          </p>
          <motion.div
            layout
            className={conditionalClass('occupationDescription')}>
            <AnimatePresence>
              {isInFocus && (
                <motion.p
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}>
                  {description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
}

Occupation.propTypes = {
  occupation: PropTypes.object,
  index: PropTypes.number,
};

export default Occupation;
