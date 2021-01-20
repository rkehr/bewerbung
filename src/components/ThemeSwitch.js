import React from 'react';
import { useThemeStore } from '../state';

function ThemeSwitch() {
  const {
    setTheme,
    localAccent,
    colorBackgroundDark,
    backgroundColorAccent,
    accent,
    name,
    Icon,
  } = useThemeStore((state) => ({
    setTheme: state.setTheme,
    localAccent: state.localAccent,
    colorBackgroundDark: state.theme.colorBackgroundDark,
    backgroundColorAccent: state.theme.backgroundColorAccent,
    accent: state.theme.accent,
    name: state.theme.name,
    Icon: state.theme.Icon,
  }));

  return (
    <div
      className='themeSwitchContainer'
      onClick={() => {
        setTheme((i) => i + 1, localAccent);
      }}
      onKeyPress={(e) => {
        if (e.key == 'Enter') {
          setTheme((i) => i + 1, localAccent);
        }
      }}
      role='option'
      aria-selected={name}
      tabIndex='0'>
      <div style={backgroundColorAccent} className='themeSwitch'>
        <p style={{ margin: 0, ...colorBackgroundDark }}>
          <Icon />
        </p>
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
