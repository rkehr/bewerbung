import React from 'react';
import { useGlobalStore } from '../state';

function BorderedContainer({ children, className }) {
  const theme = useGlobalStore(state => state.theme);
  return (
    <div
      className={`borderedContainer ${className}`}
      style={theme.borderColorPrimary}>
      {children}
    </div>
  );
}

export default BorderedContainer;
