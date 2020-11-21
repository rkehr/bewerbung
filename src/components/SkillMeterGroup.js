import React from 'react';
import PropTypes from 'prop-types';
import { SkillMeter } from '.';
import { useThemeStore } from '../state';
import BorderedContainer from './BorderedContainer';

const SkillMeterGroup = ({ groupName, skillLevels, children }) => {
  const {
    borderColorPrimary,
    colorPrimary,
    backgroundColorBackground,
  } = useThemeStore((state) => ({
    borderColorPrimary: state.theme.borderColorPrimary,
    colorPrimary: state.theme.borderColorPrimary,
    backgroundColorBackground: state.theme.backgroundColorBackground,
  }));

  return (
    <BorderedContainer className='floatingHeader' style={borderColorPrimary}>
      <h2 style={{ ...backgroundColorBackground, ...colorPrimary }}>
        {groupName}
      </h2>

      <div style={colorPrimary}>{children}</div>
      {skillLevels.map(({ name, percentage }, index) => {
        return (
          <SkillMeter
            key={name + index.toString()}
            name={name}
            percentage={percentage}
          />
        );
      })}
    </BorderedContainer>
  );
};

SkillMeterGroup.propTypes = {
  groupName: PropTypes.string,
  skillLevels: PropTypes.arrayOf(PropTypes.object),
  categoryFilters: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SkillMeterGroup;
