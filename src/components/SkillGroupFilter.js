import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, usePresence } from 'framer-motion';

function SkillGroupFilter({ categories, setCategoryFilters }) {
  const [isPresent] = usePresence();

  return (
    <AnimatePresence>
      {console.log(isPresent)}
      {isPresent && (
        <motion.div
          className='skillGroupFilter open'
          style={{ color: 'black' }}>
          {['Alle', ...categories].map((category, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setCategoryFilters([category]);
                }}
                onKeyPress={(e) => {
                  if (e.key == 'Enter') {
                    setCategoryFilters([category]);
                  }
                }}
                role='button'
                aria-selected={name}
                tabIndex='0'>
                {category}
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

SkillGroupFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  setCategoryFilters: PropTypes.func,
};

export default SkillGroupFilter;
