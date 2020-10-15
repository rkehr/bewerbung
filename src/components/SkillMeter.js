import React from 'react';

const SkillMeter = ( { name, percentage } ) => {
    return (
        <div>
            <span> { name }</span>
            <div className="skillMeterBorder">
                <div className="skillMeterFill" style={{width: percentage+"%"}}>

                </div>
            </div>
        </div>
    )
};

export default SkillMeter;