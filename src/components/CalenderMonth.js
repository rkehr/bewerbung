import { endOfMonth, startOfMonth } from 'date-fns';
import React from 'react';
import { intervalIntersection } from '../functions/';

const CalenderMonth = ({ date, days, label, timeLineData }) => {
  const monthInterval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };

  const dayWidth = 100 / 31;
  const monthWidth = dayWidth * days;

  const occupations = timeLineData
    .map(({ name, interval, color }) => {
      return {
        name: name,
        interval: intervalIntersection([interval, monthInterval]),
        color: color,
      };
    })
    .filter(({ interval }) => {
      return Boolean(interval);
    });
  const calenderOccupations = occupations.map(({ color }, index, orig) => {
    const height = `${100 / orig.length}%`;
    return (
      <div
        style={{
          background: color,
          width: '100%',
          height: height,
        }}
        key={index}
      ></div>
    );
  });

  console.log(occupations);
  return (
    <div
      className='calenderMonth'
      style={{ width: `${monthWidth}%`, height: `.5rem` }}
    >
      {calenderOccupations}
    </div>
  );
};

export default CalenderMonth;
