import { endOfMonth, isSameMonth, startOfMonth, format } from 'date-fns';
import { de } from 'date-fns/locale';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { intervalIntersection } from '../functions/';
import { useGlobalStore } from '../state';
import { themes } from '../data';

const CalenderMonth = ({ date, days }) => {
  const monthInterval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };

  const {
    colorPrimary,
    borderColorAccent,
    backgroundColorBackground,
  } = useGlobalStore(state => state.theme);

  const occupations = useGlobalStore(state => state.occupationTimeLine).map(
    occupation => ({
      ...occupation,
      intervalOverlap: intervalIntersection([
        occupation.interval,
        monthInterval,
      ]),
      isLastMonth: isSameMonth(occupation.interval.end, date),
    })
  );

  const occupationsThisMonth = occupations.filter(({ intervalOverlap }) => {
    return Boolean(intervalOverlap);
  });

  const isOccupationFocused = occupations.reduce((acc, occupation) => {
    return acc || occupation.isInFocus;
  }, false);

  const dayWidth = 100 / 31;
  const monthWidth = `${dayWidth * days}%`;
  const height = `${100 / occupationsThisMonth.length}%`;

  // TODO: Move initialization of transition and animationStates up to Calender

  const transition = {
    ease: 'easeOut',
    duration: 0.8,
  };
  const animationStates = {
    inFocus: {
      height: '100%',
    },
    notInFocus: {
      height: height,
    },
    hidden: {
      height: 0,
    },
  };

  return (
    <div
      className='calenderMonth'
      style={{
        width: monthWidth,
        ...borderColorAccent,
        ...backgroundColorBackground,
      }}>
      <div className='calenderMonthLabel'>
        <span style={{ color: themes[0].primary }}>
          {format(date, 'MMMM', { locale: de })}
        </span>
      </div>
      {occupationsThisMonth.map(
        ({ name, textColor, color, isInFocus, isLastMonth }, index) => {
          // TODO: Move creation of controls up to Calender
          const controls = useAnimation();
          useEffect(() => {
            controls.start(
              isOccupationFocused
                ? isInFocus
                  ? 'inFocus'
                  : 'hidden'
                : 'notInFocus'
            );
          }, [isInFocus, isOccupationFocused]);

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
              <span style={colorPrimary}>
                {isLastMonth && isInFocus ? name : ''}
              </span>
            </motion.div>
          );
        }
      )}
    </div>
  );
};

CalenderMonth.propTypes = {
  date: PropTypes.instanceOf(Date),
  days: PropTypes.number,
};

export default CalenderMonth;
