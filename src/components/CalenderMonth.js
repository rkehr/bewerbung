import { endOfMonth, startOfMonth } from 'date-fns';
import React from 'react';
import { intervalIntersection } from '../functions/';
import { useGlobalStore } from '../state';

const CalenderMonth = ({ date, days, label, timeLineData }) => {
  const occupationTimeLine = useGlobalStore(
    (state) => state.occupationTimeLine
  );

  const monthInterval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };

  const dayWidth = 100 / 31;
  const monthWidth = dayWidth * days;

  const occupations = occupationTimeLine
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

  return (
    <div className='calenderMonth' style={{ width: `${monthWidth}%` }}>
      {occupations.map(({ color }, index, orig) => {
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
      })}
    </div>
  );
};

export default CalenderMonth;
