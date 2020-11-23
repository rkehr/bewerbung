import React from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../state';

function BorderedContainer({ children, className, backgroundImage }) {
  const borderColorPrimary = useThemeStore(
    (state) => state.theme.borderColorPrimary
  );
  const hasBackgroundImage = Boolean(backgroundImage);
  const transition = { duration: 0.3 };
  return (
    <div
      className={`borderedContainer 
        ${className} 
        ${hasBackgroundImage ? 'backgroundImage' : ''}`}
      style={borderColorPrimary}>
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
