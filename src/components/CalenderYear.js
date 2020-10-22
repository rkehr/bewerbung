import React from 'react';
import { format, getDaysInMonth } from 'date-fns';
import { CalenderMonth } from './';
import { getMonthsInYear } from '../functions';

const CalenderYear = ({ date }) => {
  let relevantMonths = getMonthsInYear(date).reverse();

  return (
    <div className='borderedContainer borderedContainerSideHeader calenderYear'>
      <h2>{format(date, 'y')}</h2>
      <div>
        {relevantMonths.map((date, index) => {
          const numberOfDays = getDaysInMonth(date);
          return (
            <CalenderMonth
              date={date}
              days={numberOfDays}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CalenderYear;
