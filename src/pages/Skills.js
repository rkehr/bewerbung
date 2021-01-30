import React from 'react';
import PropTypes from 'prop-types';
import { SkillMeterGroup } from '../components';
import { useDataStore, useGlobalStore, useTheme } from '../state';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Skills = ({ page }) => {
  const themedHeader = useTheme({ color: 'accent', borderColor: 'accent' });

  const skillLevels = useDataStore((state) => state.skillLevels);
  const categoryFilters = useGlobalStore((state) => state.categoryFilters);

  const filteredSkillLevels = skillLevels.filter((group) => {
    if (categoryFilters && !categoryFilters.includes('Alle')) {
      return categoryFilters.includes(group.category);
    } else {
      return true;
    }
  });

  return (
    <>
      <>
        <h1 style={themedHeader}>{page.name}</h1>
        <div className='gridContainer'>
          <AnimatePresence transition={{ staggerChildren: 0.4 }}>
            <SkillMeterGroup
              key={'static group'}
              groupName='Jack of all trades, master of some...'
              skillLevels={[]}>
              <p>
                Ich lerne leidenschaftlich gerne neue Dinge!
                <br />
                Führt das gelegentlich dazu dass ich so viele verschiedene Dinge
                lerne, dass ich am ende vieles ein bisschen kann und wenig
                perfekt? Vielleicht.
              </p>
              <p>
                Allerdings hilft es mir in vielen Situationen auch dabei das
                große Ganze zu sehen und viele Konzepte die in mehreren
                Programmiersprachen und Programmen auftauchen anwenden zu können
              </p>
            </SkillMeterGroup>
            <AnimateSharedLayout>
              {filteredSkillLevels.map(({ groupName, skillLevels }, index) => {
                return (
                  <SkillMeterGroup
                    key={groupName + index.toString()}
                    groupName={groupName}
                    skillLevels={skillLevels}
                  />
                );
              })}
            </AnimateSharedLayout>
          </AnimatePresence>
        </div>
      </>
    </>
  );
};

Skills.propTypes = {
  page: PropTypes.object,
};

export default Skills;
