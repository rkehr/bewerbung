import React from 'react';
import { useGlobalStore } from '../state';

function ThemeSwitch() {
  const toggleTheme = useGlobalStore((state) => state.toggleTheme);
  return (
    <div
      onClick={() => {
        toggleTheme();
      }}
      style={{
        width: '5rem',
        height: '5rem',
        background: 'red',
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    >
      Theme
    </div>
  );
}
export default ThemeSwitch;
