import React from 'react';
import { useTheme, useThemeStore } from '../state';

function ThemeSwitch() {
  const [setTheme, localAccent, accent, name, Icon] = useThemeStore(
    ({ setTheme, localAccent, theme }) => {
      return [setTheme, localAccent, theme.accent, theme.name, theme.Icon];
    }
  );

  const themedThemeSwitch = useTheme({
    color: 'backgroundDark',
    backgroundColor: 'accent',
  });

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
      <div style={themedThemeSwitch} className='themeSwitch'>
        <p style={{ margin: 0 }}>
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
