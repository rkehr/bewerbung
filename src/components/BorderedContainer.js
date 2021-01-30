import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../state';

function BorderedContainer({ children, className, backgroundImage }) {
  const themedBorder = useTheme({ borderColor: 'primary' });
  const hasBackgroundImage = Boolean(backgroundImage);
  return (
    <div
      className={`borderedContainer 
        ${className} 
        ${hasBackgroundImage ? 'backgroundImage' : ''}`}
      style={themedBorder}>
      {children}
    </div>
  );
}

BorderedContainer.propTypes = {
  backgroundImage: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array,
};

export default BorderedContainer;
