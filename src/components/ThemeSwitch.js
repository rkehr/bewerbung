import React from 'react';
import { useGlobalStore } from '../state';

function ThemeSwitch() {
  const { setTheme, localAccent } = useGlobalStore(state => ({
    setTheme: state.setTheme,
    localAccent: state.localAccent,
  }));
  const {
    colorBackgroundDark,
    backgroundColorAccent,
    accent,
    name,
  } = useGlobalStore(state => state.theme);
  return (
    <div>
      <div
        onClick={() => setTheme(i => i + 1, localAccent)}
        style={backgroundColorAccent}
        className='themeSwitch'>
        <p style={{ margin: 0, ...colorBackgroundDark }}>{name}</p>
      </div>
      <div
        className='ribbon'
        style={{
          borderTopColor: accent,
          borderLeftColor: accent,
          borderRightColor: accent,
          borderBottomColor: 'rgba(0,0,0,0)',
        }}
      />
    </div>
  );
}
export default ThemeSwitch;
