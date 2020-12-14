import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Page, SkillMeterGroup, SkillGroupFilter } from '../components';
import { useDataStore } from '../state';
import { AnimatePresence } from 'framer-motion';

const Skills = ({ page }) => {
  const skillLevels = useDataStore((state) => state.skillLevels);

  const categories = skillLevels.reduce((acc, group) => {
    if (!acc.includes(group.category)) {
      acc.push(group.category);
    }
    return acc;
  }, []);
  const [categoryFilters, setCategoryFilters] = useState(['Alle']);

  const filteredSkillLevels = skillLevels.filter((group) => {
    if (categoryFilters && !categoryFilters.includes('Alle')) {
      return categoryFilters.includes(group.category);
    } else {
      return true;
    }
  });

  return (
    <>
      <SkillGroupFilter
        categories={categories}
        activeCategories={categoryFilters}
        setCategoryFilters={setCategoryFilters}></SkillGroupFilter>
      <Page page={page} header={true}>
        <div className='gridContainer'>
          <AnimatePresence transition={{ staggerChildren: 0.4 }}>
            <SkillMeterGroup
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

            {filteredSkillLevels.map(({ groupName, skillLevels }, index) => {
              return (
                <SkillMeterGroup
                  key={groupName + index.toString()}
                  groupName={groupName}
                  skillLevels={skillLevels}></SkillMeterGroup>
              );
            })}
          </AnimatePresence>
        </div>
      </Page>
    </>
  );
};

Skills.propTypes = {
  page: PropTypes.object,
};

export default Skills;
