import React from 'react';
import {
  eachMonthOfInterval,
  endOfYear,
  format,
  getDaysInMonth,
  startOfYear,
} from 'date-fns';
import { CalenderMonth } from './';

const CalenderYear = ({ date, timeLineData }) => {
  const yearInterval = {
    start: startOfYear(date),
    end: endOfYear(date),
  };
  let relevantMonths = eachMonthOfInterval(yearInterval).reverse();
  const calenderMonths = relevantMonths.map((date, index) => {
    const days = getDaysInMonth(date);
    const label = format(date, 'MMMM');
    return (
      <CalenderMonth
        date={date}
        days={days}
        label={label}
        timeLineData={timeLineData}
        key={index}
      />
    );
  });
  return (
    <div className='borderedContainer borderedContainerSideHeader calenderYear'>
      <h2>{format(date, 'y')}</h2>
      <div>{calenderMonths}</div>
    </div>
  );
};

export default CalenderYear;
