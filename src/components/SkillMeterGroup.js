import React from 'react';
import PropTypes from 'prop-types';
import { SkillMeter } from '.';
import { useTheme } from '../state';
import BorderedContainer from './BorderedContainer';
import { motion } from 'framer-motion';

const SkillMeterGroup = ({ groupName, skillLevels, children }) => {
  const themedHeaderBackground = useTheme({
    backgroundColor: 'background',
  });

  return (
    <motion.div
      transition={{ type: 'ease-in-out', staggerChildren: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ transition: { duration: 0 } }}
      layoutId={groupName}
      layout>
      <BorderedContainer className='floatingHeader'>
        <h2 style={themedHeaderBackground}>{groupName}</h2>
        <div>{children}</div>
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
