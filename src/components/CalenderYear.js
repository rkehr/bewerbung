import React from 'react';
import PropTypes from 'prop-types';
import { format, getDaysInMonth } from 'date-fns';
import { CalenderMonth, BorderedContainer } from './';
import { getMonthsInYear } from '../functions';
import { useGlobalStore } from '../state';

const CalenderYear = ({ date }) => {
  const relevantMonths = getMonthsInYear(date).reverse();
  const { colorPrimary } = useGlobalStore(state => state.theme);

  return (
    <BorderedContainer className='calenderYear'>
      <h2 className='sideHeader' style={colorPrimary}>
        {format(date, 'y')}
      </h2>
      <div>
        {relevantMonths.map((date, index) => {
          const numberOfDays = getDaysInMonth(date);
          return <CalenderMonth date={date} days={numberOfDays} key={index} />;
        })}
      </div>
    </BorderedContainer>
  );
};

CalenderYear.propTypes = {
  date: PropTypes.instanceOf(Date),
};
export default CalenderYear;
