import React from 'react';
import { useGlobalStore } from '../state';

function ThemeSwitch() {
  const { setTheme, localAccent } = useGlobalStore(state => ({
    setTheme: state.setTheme,
    localAccent: state.localAccent,
  }));
  const { colorBackgroundDark, backgroundColorAccent, name } = useGlobalStore(
    state => state.theme
  );
  return (
    <div
      onClick={() => setTheme(i => i + 1, localAccent)}
      style={{
        padding: '0.5rem',
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
