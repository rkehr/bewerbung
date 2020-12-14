import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, usePresence } from 'framer-motion';
import { useThemeStore } from '../state';

function SkillGroupFilter({
  categories,
  activeCategories,
  setCategoryFilters,
}) {
  const [isPresent] = usePresence();

  const { colorAccent, backgroundColorBackgroundDark } = useThemeStore(
    (state) => {
      return {
        colorAccent: state.theme.colorPrimary,
        backgroundColorBackgroundDark:
          state.theme.backgroundColorBackgroundDark,
      };
    }
  );

  const activeCategoryStyle = {
    textDecoration: 'underline',
  };

  return (
    <AnimatePresence>
      {isPresent && (
        <motion.div
          className='skillGroupFilter open'
          style={{ ...colorAccent, ...backgroundColorBackgroundDark }}
          exit={{ opacity: 0 }}>
          {['Alle', ...categories].map((category, index) => {
            const isActiveCategory = activeCategories.includes(category);

            return (
              <div
                key={index}
                onClick={() => {
                  setCategoryFilters([category]);
                }}
                style={isActiveCategory ? activeCategoryStyle : {}}
                onKeyPress={(e) => {
                  if (e.key == 'Enter') {
                    setCategoryFilters([category]);
                  }
                }}
                role='button'
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
  activeCategories: PropTypes.arrayOf(PropTypes.string),
  setCategoryFilters: PropTypes.func,
};

export default SkillGroupFilter;
