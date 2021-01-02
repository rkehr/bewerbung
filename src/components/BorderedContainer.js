import React from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../state';

function BorderedContainer({ children, className, backgroundImage }) {
  const borderStyle = useThemeStore((s) =>
    s.applyTheme({ borderColor: 'primary' })
  );
  const hasBackgroundImage = Boolean(backgroundImage);
  return (
    <div
      className={`borderedContainer 
        ${className} 
        ${hasBackgroundImage ? 'backgroundImage' : ''}`}
      style={borderStyle}>
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
