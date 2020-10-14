import React from 'react';

const SkillLevel = ( { name, percentage } ) => {
    return (
        <div>
            <span> { name } </span>
            <div> { percentage } </div>
        </div>
    )
};

export default SkillLevel;