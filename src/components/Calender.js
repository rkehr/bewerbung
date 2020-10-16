import React from 'react';
import { eachYearOfInterval, max, min, format } from 'date-fns'
import { CalenderYear } from './';

const Calender = ( { timeLineData }) => {
    const totalInterval = timeLineData.reduce( ( totalInterval, { interval }) => {
        return {
            start: min([totalInterval.start, interval.start]),
            end: max([totalInterval.end, interval.end])
        }
    
    }, timeLineData[0].interval)
    console.log(totalInterval);
    const relevantYears= eachYearOfInterval(totalInterval).reverse();
    const calenderYears = relevantYears.map((year, index)=>{
        const  yearLabel= format( year, 'y')
        return (<CalenderYear year={ yearLabel } key={ index} />);
    });
    return (<div className="calender">
        {calenderYears}
    </div>);
};

export default Calender;