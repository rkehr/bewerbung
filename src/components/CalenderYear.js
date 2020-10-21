import React from 'react';
import {
  eachMonthOfInterval,
  endOfYear,
  format,
  getDaysInMonth,
  startOfYear,
} from 'date-fns';
import { CalenderMonth } from './';

const CalenderYear = ({ date }) => {
  const yearInterval = {
    start: startOfYear(date),
    end: endOfYear(date),
  };
  let relevantMonths = eachMonthOfInterval(yearInterval).reverse();

  return (
    <div className='borderedContainer borderedContainerSideHeader calenderYear'>
      <h2>{format(date, 'y')}</h2>
      <div>
        {relevantMonths.map((date, index) => {
          const days = getDaysInMonth(date);
          const label = format(date, 'MMMM');
          return (
            <CalenderMonth date={date} days={days} label={label} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default CalenderYear;
