import React from 'react';
import PropTypes from 'prop-types';
import { CalenderYear } from '/';
import { eachYearOfInterval } from 'date-fns';
import { intervalUnion } from '../../functions';

const Calender = ({ timeLine, occupationControls }) => {
  const occupationInterval = intervalUnion(
    timeLine.map((occupation) => occupation.interval)
  );
  const relevantYears = eachYearOfInterval(occupationInterval).reverse();

  return (
    <div className='calender'>
      {relevantYears.map((year, index) => {
        return (
          <CalenderYear
            date={year}
            key={index}
            timeLine={timeLine}
            index={index}
            occupationControls={occupationControls}
          />
        );
      })}
    </div>
  );
};

Calender.propTypes = {
  timeLine: PropTypes.arrayOf(PropTypes.object),
  occupationControls: PropTypes.object,
};

export default Calender;
