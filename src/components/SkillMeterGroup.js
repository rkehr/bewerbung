import React from 'react';
import { SkillMeter } from '.';
import { useGlobalStore } from '../state';
import BorderedContainer from './BorderedContainer';

const SkillMeterGroup = ({ groupName, skillLevels, children }) => {
  const {
    borderColorPrimary,
    colorPrimary,
    backgroundColorBackground,
  } = useGlobalStore(state => state.theme);
  return (
    <BorderedContainer className='floatingHeader' style={borderColorPrimary}>
      <h2 style={{ ...backgroundColorBackground, ...colorPrimary }}>
        {groupName}
      </h2>
      <div style={colorPrimary}>{children}</div>
      {skillLevels.map(({ name, percentage }, index) => {
        return (
          <SkillMeter
            key={index.toString()}
            name={name}
            percentage={percentage}
          />
        );
      })}
    </BorderedContainer>
  );
};

export default SkillMeterGroup;
