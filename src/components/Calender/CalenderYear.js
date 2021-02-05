import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, getDaysInMonth } from 'date-fns';
import { motion } from 'framer-motion';
import { BorderedContainer } from '../';
import { CalenderMonth } from './';
import { getMonthsInYear } from '../../functions';

const CalenderYear = ({ date, index, timeLine, occupationControls }) => {
  const [isVisible, setIsVisble] = useState(false);
  const relevantMonths = getMonthsInYear(date).reverse();

  const transition = { type: 'spring', stiffness: 100 };

  const variants = {
    visible: (delay) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: delay * 0.2,
      },
    }),
    hidden: (delay) => ({
      rotateX: 90,
      opacity: 0,
      transition: {
        ...transition,
        delay: delay * 0.2,
      },
    }),
  };
  useEffect(() => {
    setIsVisble(true);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.div
          style={{
            transformOrigin: 'center top',
          }}
          custom={index}
          initial='hidden'
          animate='visible'
          variants={variants}>
          <BorderedContainer className='calenderYear'>
            <h2 className='sideHeader'>{format(date, 'y')}</h2>
            <div>
              {relevantMonths.map((date, index) => {
                const numberOfDays = getDaysInMonth(date);
                return (
                  <CalenderMonth
                    date={date}
                    days={numberOfDays}
                    timeLine={timeLine}
                    key={index}
                    occupationControls={occupationControls}
                  />
                );
              })}
            </div>
          </BorderedContainer>
        </motion.div>
      )}
    </>
  );
};

CalenderYear.propTypes = {
  date: PropTypes.instanceOf(Date),
  index: PropTypes.number,
  timeLine: PropTypes.arrayOf(Object),
  occupationControls: PropTypes.object,
};
export default CalenderYear;
