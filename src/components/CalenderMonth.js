import React from 'react';

const CalenderMonth = ( { days, label, timeLine }) => {
    const monthWidth = `${(100/ 31) * days}%`;
    return (<div className="calenderMonth" style={{width: monthWidth}}>
        <p>{ label }</p>
    </div>);
}

export default CalenderMonth;