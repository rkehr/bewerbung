import React from 'react';
import PropTypes from 'prop-types';
import { CalenderYear } from '/';
import { eachYearOfInterval } from 'date-fns';
import { intervalUnion } from '../functions';

const Calender = ({ children, timeLine }) => {
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
          />
        );
      })}
    </div>
  );
};

Calender.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  timeline: PropTypes.arrayOf(PropTypes.object),
};

export default Calender;
