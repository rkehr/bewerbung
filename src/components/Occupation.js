import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, isToday } from 'date-fns';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  useAnimation,
} from 'framer-motion';
import { useDataStore, useGlobalStore, useTheme } from '../state';
import { de } from 'date-fns/locale';

function Occupation({ occupation, index }) {
  const [toggleFocus, isInFocus] = useDataStore((state) => [
    state.toggleFocus,
    state.occupationTimeLine[index].isInFocus,
  ]);
  const themedOccupation = useTheme({ color: 'primary' });

  const { name, organisation, interval, color, description } = occupation;
  const occupationStart = formatDate(interval.start);
  const occupationEnd = formatDate(interval.end);

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
    <AnimateSharedLayout type='switch'>
      <AnimatePresence>
        <motion.div
          layout
          className={conditionalClass('occupationDisplay')}
          onClick={() => {
            toggleFocus(index);
          }}
          style={themedOccupation}>
          <motion.div
            layout
            className={conditionalClass('occupationDisplayBackground')}
            style={{
              background: color,
              opacity: isInFocus ? 1 : 0.3,
            }}
          />
          <div className={conditionalClass('occupationDisplayContent')}>
            <h2>{name}</h2>
            <p className='organisation'>@{organisation}</p>
            <p>
              {occupationStart} bis <br />
              {occupationEnd}
            </p>
            <div className={conditionalClass('occupationDescription')}>
              {isInFocus && (
                <motion.p
                  layout
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 3000 }}
                  exit={{ opacity: 0, maxHeight: 0 }}>
                  {description}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

Occupation.propTypes = {
  occupation: PropTypes.object,
  index: PropTypes.number,
};

export default Occupation;

const formatDate = (date) => {
  return isToday(date) ? 'Heute' : format(date, 'd.M.y', { locale: de });
};
