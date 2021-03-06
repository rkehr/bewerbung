import { endOfMonth, isSameMonth, startOfMonth, format } from 'date-fns';
import { de } from 'date-fns/locale';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { intervalIntersection } from '../../functions/';
import { useTheme } from '../../state';
import { themes } from '../../data';

const CalenderMonth = ({ date, days, timeLine, occupationControls }) => {
  const monthInterval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };
  const occupations = timeLine.map((occupation) => ({
    ...occupation,
    intervalOverlap: intervalIntersection([occupation.interval, monthInterval]),
    isLastMonthOfOccupation: isSameMonth(occupation.interval.end, date),
  }));

  const occupationsThisMonth = occupations.filter(({ intervalOverlap }) => {
    return Boolean(intervalOverlap);
  });
  const dayWidth = 100 / 31;
  const monthWidth = `${dayWidth * days}%`;
  const height = `${100 / occupationsThisMonth.length}%`;

  const themedCalenderMonth = useTheme({
    width: monthWidth,
    borderColor: 'accent',
    backgroundColor: 'backgroundDark',
  });
  const themedOccupationLabel = useTheme({ color: 'primary' });

  const transition = {
    ease: 'easeOut',
    duration: 0.8,
  };
  const animationStates = {
    inFocus: {
      height: '100%',
    },
    unfocused: {
      height: height,
    },
    hidden: {
      height: 0,
    },
  };

  return (
    <div className='calenderMonth' style={themedCalenderMonth}>
      <div className='calenderMonthLabel'>
        <span style={{ color: themes[0].primary }}>
          {format(date, 'MMMM', { locale: de })}
        </span>
      </div>
      {occupationsThisMonth.map(
        (
          {
            name,
            organisation,
            textColor,
            color,
            isInFocus,
            isLastMonthOfOccupation,
          },
          index
        ) => {
          const controls = occupationControls[name + organisation];

          return (
            <motion.div
              className='calenderMonthOccupation'
              style={{
                color: textColor,
                background: color,
              }}
              key={index}
              initial={'notInFocus'}
              animate={controls}
              variants={animationStates}
              transition={transition}>
              <span style={themedOccupationLabel}>
                {isLastMonthOfOccupation && isInFocus ? name : ''}
              </span>
            </motion.div>
          );
        }
      )}
    </div>
  );
};

CalenderMonth.propTypes = {
  timeLine: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.instanceOf(Date),
  days: PropTypes.number,
  occupationControls: PropTypes.object,
};

export default CalenderMonth;
