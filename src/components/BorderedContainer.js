import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalStore } from '../state';

function BorderedContainer({ children, className, backgroundImage }) {
  const theme = useGlobalStore(state => state.theme);
  const hasBackgroundImage = Boolean(backgroundImage);
  return (
    <div
      className={`borderedContainer 
        ${className} 
        ${hasBackgroundImage ? 'backgroundImage' : ''}`}
      style={theme.borderColorPrimary}>
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
