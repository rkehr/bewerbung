import React from 'react';
import { eachYearOfInterval, max, min, format } from 'date-fns';
import { CalenderYear } from './';

const Calender = ({ timeLineData }) => {
  const totalInterval = timeLineData.reduce((totalInterval, { interval }) => {
    return {
      start: min([totalInterval.start, interval.start]),
      end: max([totalInterval.end, interval.end]),
    };
  }, timeLineData[0].interval);
  const relevantYears = eachYearOfInterval(totalInterval).reverse();
  const calenderYears = relevantYears.map((year, index) => {
    const yearLabel = format(year, 'y');
    return <CalenderYear date={year} timeLineData={timeLineData} key={index} />;
  });
  return <div className='calender'>{calenderYears}</div>;
};

export default Calender;
