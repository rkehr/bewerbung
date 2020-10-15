import React from 'react';
import { SkillMeter } from '.';

const SkillMeterGroup = ( { groupName, skillLevels, children} ) => {
    return (
        <div className="skillMeterGroup">
            <h2>{groupName}</h2>
            {children}
            {
            skillLevels.map( ({ name, percentage }, index) => {
                return <SkillMeter key={index.toString()} name={name} percentage={percentage}/>
            })
            }
        </div>
    );
}

export default SkillMeterGroup;