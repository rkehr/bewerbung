import React from 'react';
import PropTypes from 'prop-types';
import { SkillMeter } from '.';
import { useThemeStore } from '../state';
import BorderedContainer from './BorderedContainer';
import { motion } from 'framer-motion';

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
    <motion.div
      transition={{ type: 'ease-in-out', staggerChildren: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0 } }}
      layoutId={groupName}
      layout>
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
    </motion.div>
  );
};

SkillMeterGroup.propTypes = {
  groupName: PropTypes.string,
  skillLevels: PropTypes.arrayOf(PropTypes.object),
  categoryFilters: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SkillMeterGroup;
