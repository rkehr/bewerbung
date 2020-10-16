import React from 'react';
import { eachMonthOfInterval, endOfYear, format, getDaysInMonth, startOfYear } from 'date-fns'
import { CalenderMonth } from './'

const CalenderYear = ( { year, timeLineData } ) => {
    const yearStartDate = startOfYear(new Date(year));
    const yearEndDate = endOfYear(new Date(year));
    const yearInterval = {
        start: startOfYear(new Date(year)),
        end: endOfYear(new Date(year))
    }
    let months = eachMonthOfInterval( yearInterval ).reverse();
    const calenderMonths = months.map((month, index)=>{
        const days = getDaysInMonth(month);
        const label = format( month, 'MMMM')
        return (<CalenderMonth days={ days } label={ label } timeLineData={ timeLineData } key={ index} />);
    });
    return (<div 
        className="borderedContainer borderedContainerSideHeader"
        >
        <h2>{ year }</h2>
        <div>{ calenderMonths }</div>
    </div>)
};

export default CalenderYear;