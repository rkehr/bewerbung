import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalStore } from '../state';

function NavElement({ page }) {
  const { to, name, emoji, accentColor } = page;
  const {
    backgroundColorBackgroundDark,
    backgroundColorBackground,
    colorPrimary,
  } = useGlobalStore(state => state.theme);
  const setTheme = useGlobalStore(state => state.setTheme);
  const [background, setBackground] = useState(backgroundColorBackgroundDark);
  useEffect(() => {
    setBackground(
      location.pathname == to
        ? backgroundColorBackground
        : backgroundColorBackgroundDark
    );
  }, [location, backgroundColorBackground]);

  return (
    <NavLink
      onClick={() => {
        setTheme(i => i, accentColor);
      }}
      to={to}
      activeClassName='activeLink'
      style={{ ...background, ...colorPrimary }}>
      <div className='before' style={{ backgroundColor: accentColor }}></div>
      {emoji}
      <br />
      <span className='navText'>{name}</span>
    </NavLink>
  );
}

export default NavElement;
