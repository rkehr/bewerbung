import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format, getDaysInMonth } from 'date-fns';
import { motion } from 'framer-motion';
import { CalenderMonth, BorderedContainer } from './';
import { getMonthsInYear } from '../functions';
import { useThemeStore } from '../state';

const CalenderYear = ({ date, index }) => {
  const [isVisible, setIsVisble] = useState(false);
  const relevantMonths = getMonthsInYear(date).reverse();

  const yearStyle = useThemeStore((s) => s.applyTheme({ color: 'primary' }));
  const transition = { type: 'spring', stiffness: 200 };

  const variants = {
    visible: (delay) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: delay * 0.5,
      },
    }),
    hidden: (delay) => ({
      rotateX: 90,
      opacity: 0,
      transition: {
        ...transition,
        delay: delay * 0.5,
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
            <h2 className='sideHeader' style={yearStyle}>
              {format(date, 'y')}
            </h2>
            <div>
              {relevantMonths.map((date, index) => {
                const numberOfDays = getDaysInMonth(date);
                return (
                  <CalenderMonth date={date} days={numberOfDays} key={index} />
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
};
export default CalenderYear;
