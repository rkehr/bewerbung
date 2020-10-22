import { endOfMonth, isSameMonth, startOfMonth, format } from 'date-fns';
import { de } from 'date-fns/locale';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';
import { intervalIntersection } from '../functions/';
import { useGlobalStore } from '../state';

const CalenderMonth = ({ date, days }) => {
  const monthInterval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };

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
    <div className='calenderMonth' style={{ width: monthWidth }}>
      <div className='calenderMonthLabel'>
        {format(date, 'MMMM', { locale: de })}
      </div>
      {occupationsThisMonth.map(
        (
          { name, organisation, textColor, color, isInFocus, isLastMonth },
          index
        ) => {
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
              {isLastMonth && isInFocus ? name : ''}
            </motion.div>
          );
        }
      )}
    </div>
  );
};

export default CalenderMonth;
