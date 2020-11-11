import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useGlobalStore } from '../state';

function NavElement({ page }) {
  const { to, name, emoji, accentColor } = page;
  const {
    backgroundColorBackgroundDark,
    backgroundColorBackground,
    colorPrimary,
    setTheme,
  } = useGlobalStore(state => ({ ...state.theme, setTheme: state.setTheme }));
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

NavElement.propTypes = {
  page: PropTypes.object,
};

export default NavElement;
