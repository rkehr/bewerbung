import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  motion,
  AnimatePresence,
  usePresence,
  AnimateSharedLayout,
} from 'framer-motion';
import { useThemeStore } from '../state';
import { FiFilter, FiX } from 'react-icons/fi';

function SkillGroupFilter({
  categories,
  activeCategories,
  setCategoryFilters,
}) {
  const [isPresent] = usePresence();
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? FiX : FiFilter;

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
    <AnimateSharedLayout>
      <AnimatePresence>
        {isPresent && (
          <>
            <motion.div
              className='skillGroupFilter'
              style={{ ...colorAccent, ...backgroundColorBackgroundDark }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}>
              <Icon
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                style={{ fontSize: '125%', display: 'block', width: '100%' }}
              />
              {isOpen &&
                ['Alle', ...categories].map((category, index) => {
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
                      tabIndex='0'
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      layout>
                      {category}
                    </div>
                  );
                })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

SkillGroupFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategories: PropTypes.arrayOf(PropTypes.string),
  setCategoryFilters: PropTypes.func,
};

export default SkillGroupFilter;
