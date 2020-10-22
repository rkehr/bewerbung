import React from 'react';
import { format, isToday } from 'date-fns';

import { useGlobalStore } from '../state';
import CalenderMonth from './CalenderMonth';
import { de } from 'date-fns/locale';

function Occupation({ occupation, index }) {
  const {toggleFocus, isInFocus} = useGlobalStore((state) => ({toggleFocus:state.toggleFocus, isInFocus:state.occupationTimeLine[index].isInFocus}));
  const {
    name,
    organisation,
    interval,
    color,
    calenderMonthsInView,
  } = occupation;
  return (
    <div
      className='occupationDisplay'
      onClick={() => {
        toggleFocus(index);
      }}
      style={{
        borderLeft: `.3rem solid ${color}`,
      }}
    >
      <div
        className='occupationDisplayBackground'
        style={{
          background: color,
          opacity: isInFocus ? 0.5 : 0.15,
        }}
      ></div>
      <div
        className='occupationDisplayContent'
      >
        <h2>{name}</h2>
        <p>@{organisation}</p>
        <p>
          {format(interval.start, 'd. MMMM y', { locale: de })} bis
          <br />
          {isToday(interval.end)
            ? 'Heute'
            : format(interval.end, 'd. MMMM y', { locale: de })}
        </p>
      </div>{' '}
    </div>
  );
}

export default Occupation;
