import React from 'react';
import { format, getDaysInMonth } from 'date-fns';
import { CalenderMonth, BorderedContainer } from './';
import { getMonthsInYear } from '../functions';
import { useGlobalStore } from '../state';
import { AnimatePresence } from 'framer-motion';

const CalenderYear = ({ date }) => {
  const relevantMonths = getMonthsInYear(date).reverse();
  const { colorPrimary } = useGlobalStore(state => state.theme);

  return (
    <BorderedContainer className='calenderYear'>
      <h2 className='sideHeader' style={colorPrimary}>
        {format(date, 'y')}
      </h2>
      <div>
        {relevantMonths.map((date, index) => {
          const numberOfDays = getDaysInMonth(date);
          return <CalenderMonth date={date} days={numberOfDays} key={index} />;
        })}
      </div>
    </BorderedContainer>
  );
};
export default CalenderYear;
