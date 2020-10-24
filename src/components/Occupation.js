import React from 'react';
import { format, isToday } from 'date-fns';

import { useGlobalStore } from '../state';
import CalenderMonth from './CalenderMonth';
import { de } from 'date-fns/locale';

function Occupation({ occupation, index }) {
  const { toggleFocus, isInFocus } = useGlobalStore(state => ({
    toggleFocus: state.toggleFocus,
    isInFocus: state.occupationTimeLine[index].isInFocus,
  }));
  const { colorPrimary } = useGlobalStore(state => state.theme);
  const { name, organisation, interval, color } = occupation;
  const occupationStart = format(interval.start, 'd. MMMM y', { locale: de });
  const occupationEnd = isToday(interval.end)
    ? 'Heute'
    : format(interval.end, 'd. MMMM y', { locale: de });

  return (
    <div
      className='occupationDisplay'
      onClick={() => {
        toggleFocus(index);
      }}
      style={{
        borderLeft: `.3rem solid ${color}`,
        ...colorPrimary,
      }}>
      <div
        className='occupationDisplayBackground'
        style={{
          background: color,
          opacity: isInFocus ? 0.5 : 0.15,
        }}
      />
      <div className='occupationDisplayContent'>
        <h2>{name}</h2>
        <p>@{organisation}</p>
        <p>
          {occupationStart} bis
          <br />
          {occupationEnd}
        </p>
      </div>
    </div>
  );
}

export default Occupation;
