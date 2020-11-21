import React from 'react';
import PropTypes from 'prop-types';

function SkillGroupFilter({ categories, setCategoryFilters }) {
  return (
    <div className='skillGroupFilter open' style={{ color: 'black' }}>
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
    </div>
  );
}

SkillGroupFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  setCategoryFilters: PropTypes.func,
};

export default SkillGroupFilter;
