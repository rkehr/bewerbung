import React from 'react';
import { format, isToday } from 'date-fns';

import { useGlobalStore } from '../state';

function Occupation({ occupation, index }) {
  const setFocus = useGlobalStore((state) => state.setFocus);
  const { name, organisation, interval, color } = occupation;
  return (
    <div
      className='occupation'
      onClick={()=>{setFocus(index)}}
      style={{
        borderLeft: `.3rem solid ${color}`,
        paddingLeft: '1rem',
        paddingTop: '.2rem',
        paddingBottom: '.2rem',
        margin: '.25rem',
      }}
    >
      <h2>{name}</h2>
      <p>@{organisation}</p>
      <p>
        {format(interval.start, 'd. MMMM y')} bis
        <br />
        {isToday(interval.end) ? 'Heute' : format(interval.end, 'd. MMMM y')}
      </p>
    </div>
  );
}

export default Occupation;
