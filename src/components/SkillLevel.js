import React from 'react';
import '../styles/skillMeter.scss'

const SkillLevel = ( { name, percentage } ) => {
    return (
        <div>
            <span> { name } ~{ percentage }% </span>
            <div className="skillMeterBorder">
                <div className="skillMeterFill" style={{width: percentage+"%"}}>

                </div>
            </div>
        </div>
    )
};

export default SkillLevel;