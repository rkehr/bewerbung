import { endOfMonth, isWithinInterval, startOfMonth, format } from 'date-fns';
import { de } from 'date-fns/locale';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';
import { intervalIntersection } from '../functions/';
import { useGlobalStore } from '../state';

const CalenderMonth = ({ date, days, label }) => {
  const { occupationTimeLine } = useGlobalStore((state) => ({
    occupationTimeLine: state.occupationTimeLine,
  }));
  const monthInterval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };

  const occupations = occupationTimeLine.map(
    ({ name, interval, color, textColor, isInFocus }) => {
      return {
        name: name,
        interval: intervalIntersection([interval, monthInterval]),
        color: color,
        textColor: textColor,
        isInFocus: isInFocus,
      };
    }
  );
  const occupationsFiltered = occupations.filter(({ interval }) => {
    return Boolean(interval);
  });

  const dayWidth = 100 / 31;
  const monthWidth = dayWidth * days;
  const height = `${100 / occupationsFiltered.length}%`;

  const hasFocusedElement = occupations.reduce((acc, occupation) => {
    return acc || occupation.isInFocus;
  }, false);
  const transition = {
    ease: 'easeOut',
    duration: 0.8,
  };

  return (
    <div className='calenderMonth' style={{ width: `${monthWidth}%` }}>
      <div className='calenderMonthLabel'>
        {format(date, 'MMMM', { locale: de })}
      </div>
      {occupations.map(
        (
          { name, organisation, textColor, color, isInFocus, interval },
          index
        ) => {
          if (interval) {
            const isLastMonth = isWithinInterval(
              occupationTimeLine[index].interval.end,
              monthInterval
            );

            const controls = useAnimation();

            useEffect(() => {
              if (hasFocusedElement) {
                controls.start(isInFocus ? 'inFocus' : 'hidden');
              } else {
                controls.start('notInFocus');
              }
            }, [isInFocus, hasFocusedElement]);

            const variants = {
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
              <motion.div
                style={{
                  fontSize: '.75rem',
                  textAlign: 'center',
                  color: textColor,
                  background: color,
                  width: '100%',
                }}
                key={index}
                initial={'notInFocus'}
                animate={controls}
                variants={variants}
                transition={transition}
              >
                {isLastMonth && isInFocus ? name : ''}
              </motion.div>
            );
          }
        }
      )}
    </div>
  );
};

export default CalenderMonth;
