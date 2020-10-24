import React from 'react';
import { useGlobalStore } from '../state';

function ThemeSwitch() {
  const cycleTheme = useGlobalStore(state => state.cycleTheme);
  const { colorBackgroundDark, backgroundColorAccent, name } = useGlobalStore(
    state => state.theme
  );
  return (
    <div
      onClick={() => {
        cycleTheme();
      }}
      style={{
        padding: '0.5rem',
        background: 'tomato',
        position: 'fixed',
        top: 0,
        right: '1rem',
        ...backgroundColorAccent,
      }}>
      <h3 style={{ margin: 0, ...colorBackgroundDark }}>{name} Theme</h3>
    </div>
  );
}
export default ThemeSwitch;
